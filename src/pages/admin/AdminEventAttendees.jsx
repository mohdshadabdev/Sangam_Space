import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { format } from 'date-fns'
import { 
  ArrowDownTrayIcon, 
  ChevronLeftIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'
import { useEventStore } from '../../stores/eventStore'

const AdminEventAttendees = () => {
  const { id } = useParams()
  const { 
    selectedEvent, 
    isLoading, 
    error, 
    fetchEventById, 
    fetchEventAttendees 
  } = useEventStore()
  
  // Fetch event details and attendees
  useEffect(() => {
    const loadData = async () => {
      await fetchEventById(id)
      await fetchEventAttendees(id)
    }
    
    loadData()
  }, [id, fetchEventById, fetchEventAttendees])
  
  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return format(date, 'MMM dd, yyyy')
  }
  
  // Handle CSV export
  const exportToCsv = () => {
    if (!selectedEvent || !selectedEvent.attendees) return
    
    const attendees = selectedEvent.attendees
    const headers = ['Name', 'Email', 'RSVP Date']
    
    // Create CSV content
    const csvContent = [
      headers.join(','),
      ...attendees.map(attendee => [
        `"${attendee.name}"`,
        `"${attendee.email}"`,
        `"${format(new Date(attendee.created_at), 'yyyy-MM-dd HH:mm')}"`
      ].join(','))
    ].join('\n')
    
    // Create and download the file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.setAttribute('href', url)
    link.setAttribute('download', `attendees-${selectedEvent.title.replace(/\s+/g, '-').toLowerCase()}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  
  // Loading state
  if (isLoading && !selectedEvent) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-6"></div>
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <div className="space-y-6">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          </div>
        </div>
      </div>
    )
  }
  
  // Error state
  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-4 text-red-700 dark:text-red-400">
        <h2 className="text-lg font-medium mb-2">Error Loading Attendees</h2>
        <p>{error}</p>
        <Link 
          to="/admin" 
          className="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          <ChevronLeftIcon className="h-4 w-4 mr-1" />
          Back to dashboard
        </Link>
      </div>
    )
  }
  
  // If event not found
  if (!selectedEvent) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Event Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The event you're looking for doesn't exist or has been removed.
        </p>
        <Link 
          to="/admin" 
          className="inline-flex items-center btn-primary"
        >
          <ChevronLeftIcon className="h-4 w-4 mr-1" />
          Back to dashboard
        </Link>
      </div>
    )
  }
  
  const attendees = selectedEvent.attendees || []
  
  return (
    <div>
      <div className="md:flex md:items-center md:justify-between mb-6">
        <div>
          <Link 
            to="/admin" 
            className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-2"
          >
            <ChevronLeftIcon className="h-4 w-4 mr-1" />
            Back to dashboard
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Event Attendees</h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Manage attendees for <span className="font-medium">{selectedEvent.title}</span>
          </p>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center">
          <button
            onClick={exportToCsv}
            disabled={!attendees.length}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
            Export to CSV
          </button>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        {/* Event details */}
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="block text-gray-500 dark:text-gray-400">Date</span>
              <span className="block font-medium text-gray-900 dark:text-white">
                {formatDate(selectedEvent.date)}
              </span>
            </div>
            <div>
              <span className="block text-gray-500 dark:text-gray-400">Time</span>
              <span className="block font-medium text-gray-900 dark:text-white">
                {selectedEvent.time}
              </span>
            </div>
            <div>
              <span className="block text-gray-500 dark:text-gray-400">Venue</span>
              <span className="block font-medium text-gray-900 dark:text-white">
                {selectedEvent.venue}
              </span>
            </div>
          </div>
        </div>
        
        {/* Attendees list */}
        {attendees.length === 0 ? (
          <div className="p-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">No attendees have RSVP'd to this event yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    RSVP Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {attendees.map((attendee) => (
                  <tr key={attendee.id} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {attendee.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      <a 
                        href={`mailto:${attendee.email}`}
                        className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300"
                      >
                        <EnvelopeIcon className="h-4 w-4 mr-1" />
                        {attendee.email}
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {format(new Date(attendee.created_at), 'MMM dd, yyyy HH:mm')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminEventAttendees