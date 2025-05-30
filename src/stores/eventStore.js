import { create } from 'zustand'
import { supabase } from '../lib/supabase'
import { format } from 'date-fns'

export const useEventStore = create((set, get) => ({
  events: [],
  filteredEvents: [],
  clubs: [],
  selectedEvent: null,
  activeFilter: 'all',
  searchQuery: '',
  isLoading: false,
  error: null,

  // Fetch all events
  fetchEvents: async () => {
    set({ isLoading: true, error: null })
    try {
      const { data, error } = await supabase
        .from('events')
        .select(`
          *,
          clubs:club_id (
            id, 
            name, 
            logo_url, 
            color_theme
          )
        `)
        .order('date', { ascending: true })
      
      if (error) throw error
      
      // Process events (calculate if past, etc.)
      const processedEvents = data.map(event => ({
        ...event,
        isPast: new Date(event.date) < new Date()
      }))
      
      set({ 
        events: processedEvents,
        filteredEvents: processedEvents,
        isLoading: false 
      })
      
      return { success: true, data: processedEvents }
    } catch (error) {
      set({ error: error.message, isLoading: false })
      return { success: false, error: error.message }
    }
  },
  
  // Fetch single event by ID
  fetchEventById: async (id) => {
    set({ isLoading: true, error: null, selectedEvent: null })
    try {
      const { data, error } = await supabase
        .from('events')
        .select(`
          *,
          clubs:club_id (
            id, 
            name, 
            logo_url, 
            color_theme, 
            description
          )
        `)
        .eq('id', id)
        .single()
      
      if (error) throw error
      
      set({ 
        selectedEvent: {
          ...data,
          isPast: new Date(data.date) < new Date()
        }, 
        isLoading: false 
      })
      
      return { success: true, data }
    } catch (error) {
      set({ error: error.message, isLoading: false })
      return { success: false, error: error.message }
    }
  },
  
  // Fetch attendees for an event
  fetchEventAttendees: async (eventId) => {
    set({ isLoading: true, error: null })
    try {
      const { data, error } = await supabase
        .from('rsvps')
        .select('*')
        .eq('event_id', eventId)
        .order('created_at', { ascending: false })
      
      if (error) throw error
      
      // Update the selected event with attendees
      set(state => ({ 
        selectedEvent: state.selectedEvent ? {
          ...state.selectedEvent,
          attendees: data
        } : null,
        isLoading: false 
      }))
      
      return { success: true, data }
    } catch (error) {
      set({ error: error.message, isLoading: false })
      return { success: false, error: error.message }
    }
  },
  
  // Fetch all clubs
  fetchClubs: async () => {
    set({ isLoading: true, error: null })
    try {
      const { data, error } = await supabase
        .from('clubs')
        .select('*')
        .order('name')
      
      if (error) throw error
      
      set({ clubs: data, isLoading: false })
      return { success: true, data }
    } catch (error) {
      set({ error: error.message, isLoading: false })
      return { success: false, error: error.message }
    }
  },
  
  // Create a new event (admin only)
  createEvent: async (eventData) => {
    set({ isLoading: true, error: null })
    try {
      // Format date for database
      const formattedDate = format(new Date(eventData.date), 'yyyy-MM-dd')
      
      const { data, error } = await supabase
        .from('events')
        .insert([{ 
          ...eventData,
          date: formattedDate
        }])
        .select()
      
      if (error) throw error
      
      set(state => ({ 
        events: [...state.events, data[0]],
        isLoading: false 
      }))
      
      return { success: true, data: data[0] }
    } catch (error) {
      set({ error: error.message, isLoading: false })
      return { success: false, error: error.message }
    }
  },
  
  // Update an existing event (admin only)
  updateEvent: async (id, eventData) => {
    set({ isLoading: true, error: null })
    try {
      // Format date for database if it exists in eventData
      const formattedData = { ...eventData }
      if (formattedData.date) {
        formattedData.date = format(new Date(formattedData.date), 'yyyy-MM-dd')
      }
      
      const { data, error } = await supabase
        .from('events')
        .update(formattedData)
        .eq('id', id)
        .select()
      
      if (error) throw error
      
      // Update events list and selected event if it's the current one
      set(state => {
        const updatedEvents = state.events.map(event => 
          event.id === id ? { ...event, ...data[0] } : event
        )
        
        return { 
          events: updatedEvents,
          filteredEvents: get().applyFilters(updatedEvents),
          selectedEvent: state.selectedEvent?.id === id ? 
            { ...state.selectedEvent, ...data[0] } : 
            state.selectedEvent,
          isLoading: false 
        }
      })
      
      return { success: true, data: data[0] }
    } catch (error) {
      set({ error: error.message, isLoading: false })
      return { success: false, error: error.message }
    }
  },
  
  // Delete an event (admin only)
  deleteEvent: async (id) => {
    set({ isLoading: true, error: null })
    try {
      const { error } = await supabase
        .from('events')
        .delete()
        .eq('id', id)
      
      if (error) throw error
      
      // Remove from events list
      set(state => {
        const updatedEvents = state.events.filter(event => event.id !== id)
        return { 
          events: updatedEvents,
          filteredEvents: get().applyFilters(updatedEvents),
          selectedEvent: state.selectedEvent?.id === id ? null : state.selectedEvent,
          isLoading: false 
        }
      })
      
      return { success: true }
    } catch (error) {
      set({ error: error.message, isLoading: false })
      return { success: false, error: error.message }
    }
  },
  
  // RSVP to an event
  createRSVP: async (eventId, attendeeData) => {
    set({ isLoading: true, error: null })
    try {
      const { data, error } = await supabase
        .from('rsvps')
        .insert([{ 
          event_id: eventId,
          ...attendeeData,
          created_at: new Date()
        }])
        .select()
      
      if (error) throw error
      
      // Update attendee count for the event
      set(state => {
        // If selected event is the one being RSVP'd to, update its attendees
        if (state.selectedEvent?.id === eventId) {
          const updatedAttendees = state.selectedEvent.attendees || []
          return {
            selectedEvent: {
              ...state.selectedEvent,
              attendees: [data[0], ...updatedAttendees]
            },
            isLoading: false
          }
        }
        return { isLoading: false }
      })
      
      return { success: true, data: data[0] }
    } catch (error) {
      set({ error: error.message, isLoading: false })
      return { success: false, error: error.message }
    }
  },
  
  // Cancel an RSVP
  cancelRSVP: async (rsvpId, eventId) => {
    set({ isLoading: true, error: null })
    try {
      const { error } = await supabase
        .from('rsvps')
        .delete()
        .eq('id', rsvpId)
      
      if (error) throw error
      
      // Update attendees list for the selected event if needed
      set(state => {
        if (state.selectedEvent?.id === eventId && state.selectedEvent.attendees) {
          return {
            selectedEvent: {
              ...state.selectedEvent,
              attendees: state.selectedEvent.attendees.filter(a => a.id !== rsvpId)
            },
            isLoading: false
          }
        }
        return { isLoading: false }
      })
      
      return { success: true }
    } catch (error) {
      set({ error: error.message, isLoading: false })
      return { success: false, error: error.message }
    }
  },
  
  // Filter events by club, search query, etc.
  setFilter: (filter) => {
    set({ activeFilter: filter })
    const events = get().events
    set({ filteredEvents: get().applyFilters(events) })
  },
  
  setSearchQuery: (query) => {
    set({ searchQuery: query })
    const events = get().events
    set({ filteredEvents: get().applyFilters(events) })
  },
  
  applyFilters: (events) => {
    const { activeFilter, searchQuery } = get()
    
    return events.filter(event => {
      // Filter by club if activeFilter is not 'all'
      const matchesClub = activeFilter === 'all' || 
        (event.clubs && event.clubs.id.toString() === activeFilter)
      
      // Filter by search query
      const matchesSearch = !searchQuery || 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (event.clubs && event.clubs.name.toLowerCase().includes(searchQuery.toLowerCase()))
      
      return matchesClub && matchesSearch
    })
  }
}))