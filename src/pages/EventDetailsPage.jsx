import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { format } from 'date-fns'
import { 
  CalendarIcon, 
  ClockIcon, 
  MapPinIcon, 
  UsersIcon,
  ChevronLeftIcon
} from '@heroicons/react/24/outline'
import { useEventStore } from '../stores/eventStore'
import CountdownTimer from '../components/ui/CountdownTimer'
import RsvpModal from '../components/events/RsvpModal'
import ReactMarkdown from 'react-markdown'
import toast from 'react-hot-toast'

const EventDetailsPage = () => {
  const { id } = useParams()
  const { 
    selectedEvent, 
    isLoading, 
    error, 
    fetchEventById, 
    fetchEventAttendees,
    cancelRSVP
  } = useEventStore()
  
  const [isRsvpModalOpen, setIsRsvpModalOpen] = useState(false)
  const [userRsvp, setUserRsvp] = useState(null)
  
  // Fetch event details and attendees
  useEffect(() => {
    const loadEvent = async () => {
      await fetchEventById(id)
      await fetchEventAttendees(id)
    }
    
    loadEvent()
  }, [id, fetchEventById, fetchEventAttendees])
  
  // Format date for display
  const formatEventDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return format(date, 'EEEE, MMMM d, yyyy')
  }
  
  // Handle RSVP cancellation
  const handleCancelRsvp = async () => {
    if (!userRsvp) return
    
    const confirmed = window.confirm('Are you sure you want to cancel your RSVP?')
    if (!confirmed) return
    
    const result = await cancelRSVP(userRsvp.id, id)
    if (result.success) {
      toast.success('Your RSVP has been cancelled')
      setUserRsvp(null)
    } else {
      toast.error(`Failed to cancel RSVP: ${result.error}`)
    }
  }
  
  // Loading state
  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="h-64 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
          <div className="h-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    )
  }
  
  // Error state
  if (error) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-4 text-red-700 dark:text-red-400">
          <h2 className="text-lg font-medium mb-2">Error Loading Event</h2>
          <p>{error}</p>
          <Link 
            to="/" 
            className="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            <ChevronLeftIcon className="h-4 w-4 mr-1" />
            Back to events
          </Link>
        </div>
      </div>
    )
  }
  
  // If event not found
  if (!selectedEvent) {
    return (
      <div className="max-w-3xl mx-auto text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Event Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The event you're looking for doesn't exist or has been removed.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center btn-primary"
        >
          <ChevronLeftIcon className="h-4 w-4 mr-1" />
          Back to events
        </Link>
      </div>
    )
  }
  
  // Check if event has passed
  const eventDate = new Date(`${selectedEvent.date}T${selectedEvent.time}`)
  const isPastEvent = eventDate < new Date()
  const attendees = selectedEvent.attendees || []
  
  return (
    <div className="max-w-3xl mx-auto">
      {/* Back link */}
      <Link 
        to="/" 
        className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6"
      >
        <ChevronLeftIcon className="h-4 w-4 mr-1" />
        Back to events
      </Link>
      
      {/* Event banner */}
      <div className="rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-md mb-6">
        {selectedEvent.banner_url ? (
          <img 
            src={selectedEvent.banner_url} 
            alt={selectedEvent.title}
            className="w-full h-64 object-cover"
          />
        ) : (
          <div 
            className="w-full h-64 flex items-center justify-center" 
            style={{ backgroundColor: selectedEvent.clubs?.color_theme || '#4F46E5' }}
          >
            <h2 className="text-2xl font-bold text-white px-4 text-center">
              {selectedEvent.title}
            </h2>
          </div>
        )}
      </div>
      
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        {/* Event header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          {/* Club info */}
          <div className="flex items-center mb-4">
            {selectedEvent.clubs?.logo_url ? (
              <img 
                src={selectedEvent.clubs.logo_url} 
                alt={selectedEvent.clubs.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-gray-700"
              />
            ) : (
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: selectedEvent.clubs?.color_theme || '#4F46E5' }}
              >
                <span className="text-white font-bold text-sm">
                  {selectedEvent.clubs?.name?.charAt(0) || 'C'}
                </span>
              </div>
            )}
            <span className="ml-3 text-sm font-medium text-gray-600 dark:text-gray-400">
              {selectedEvent.clubs?.name || 'University Club'}
            </span>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {selectedEvent.title}
          </h1>
          
          {/* Event meta info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="flex items-start">
              <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 mt-0.5 mr-2" />
              <div>
                <p className="text-gray-700 dark:text-gray-300">
                  {formatEventDate(selectedEvent.date)}
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <ClockIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 mt-0.5 mr-2" />
              <div>
                <p className="text-gray-700 dark:text-gray-300">
                  {selectedEvent.time}
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPinIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 mt-0.5 mr-2" />
              <div>
                <p className="text-gray-700 dark:text-gray-300">
                  {selectedEvent.venue}
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <UsersIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 mt-0.5 mr-2" />
              <div>
                <p className="text-gray-700 dark:text-gray-300">
                  {attendees.length} {attendees.length === 1 ? 'Attendee' : 'Attendees'}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Countdown timer */}
        {!isPastEvent && (
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-center">
            <CountdownTimer targetDate={eventDate} />
          </div>
        )}
        
        {/* Event description */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            About this event
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            {selectedEvent.description ? (
              <ReactMarkdown>
                {selectedEvent.description}
              </ReactMarkdown>
            ) : (
              <p className="text-gray-600 dark:text-gray-400">
                No description provided for this event.
              </p>
            )}
          </div>
        </div>
        
        {/* RSVP section */}
        <div className="p-6 bg-gray-50 dark:bg-gray-800/60">
          {isPastEvent ? (
            <div className="text-center text-gray-600 dark:text-gray-400">
              This event has already passed.
            </div>
          ) : userRsvp ? (
            <div className="text-center">
              <div className="mb-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-md p-3 inline-block">
                You're attending this event!
              </div>
              <div>
                <button
                  onClick={handleCancelRsvp}
                  className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-sm font-medium"
                >
                  Cancel my RSVP
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <button
                onClick={() => setIsRsvpModalOpen(true)}
                className="btn-primary"
              >
                RSVP to this event
              </button>
            </div>
          )}
        </div>
        
        {/* Attendees list */}
        {attendees.length > 0 && (
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Attendees
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {attendees.map((attendee) => (
                <div 
                  key={attendee.id}
                  className="flex items-center"
                >
                  <div className="h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300">
                    {attendee.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300 truncate">
                    {attendee.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* RSVP Modal */}
      <RsvpModal 
        isOpen={isRsvpModalOpen} 
        closeModal={() => setIsRsvpModalOpen(false)}
        eventId={id}
        eventTitle={selectedEvent.title}
      />
    </div>
  )
}

export default EventDetailsPage