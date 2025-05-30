import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { useEventStore } from '../../stores/eventStore'
import { 
  PencilIcon, 
  TrashIcon, 
  UsersIcon,
  PlusIcon
} from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'

const AdminDashboard = () => {
  const { 
    events, 
    isLoading, 
    error, 
    fetchEvents,
    deleteEvent
  } = useEventStore()
  
  const [isDeleting, setIsDeleting] = useState(false)
  
  // Fetch events on component mount
  useEffect(() => {
    fetchEvents()
  }, [fetchEvents])
  
  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return format(date, 'MMM dd, yyyy')
  }
  
  // Handle event deletion
  const handleDeleteEvent = async (id, title) => {
    const confirmed = window.confirm(`Are you sure you want to delete "${title}"? This action cannot be undone.`)
    
    if (confirmed) {
      setIsDeleting(true)
      try {
        const result = await deleteEvent(id)
        
        if (result.success) {
          toast.success('Event deleted successfully')
        } else {
          toast.error(`Failed to delete event: ${result.error}`)
        }
      } catch (err) {
        toast.error('An unexpected error occurred')
      } finally {
        setIsDeleting(false)
      }
    }
  }
  
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Events Dashboard</h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Manage all your club events from one place
          </p>
        </div>
        <Link
          to="/admin/event/create"
          className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PlusIcon className="h-4 w-4 mr-2" />
          Create New Event
        </Link>
      </div>
      
      {/* Error message */}
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-md p-4 mb-6">
          <p className="text-sm text-red-700 dark:text-red-400">
            Error: {error}
          </p>
        </div>
      )}
      
      {/* Loading state */}
      {isLoading ? (
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          <div className="animate-pulse">
            <div className="h-10 bg-gray-200 dark:bg-gray-700"></div>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 border-t border-gray-200 dark:border-gray-700 flex items-center px-4 py-3">
                <div className="w-1/4 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="w-1/4 h-4 bg-gray-200 dark:bg-gray-700 rounded mx-2"></div>
                <div className="w-1/4 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* No events */}
          {events.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 text-center">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No events found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Get started by creating your first event
              </p>
              <Link
                to="/admin/event/create"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <PlusIcon className="h-4 w-4 mr-2" />
                Create New Event
              </Link>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
              {/* Table header */}
              <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                <div className="md:col-span-4">Event</div>
                <div className="md:col-span-2">Date</div>
                <div className="md:col-span-2">Time</div>
                <div className="md:col-span-2">Venue</div>
                <div className="md:col-span-2 text-right">Actions</div>
              </div>
              
              {/* Table rows */}
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {events.map((event) => (
                  <div key={event.id} className="block md:grid md:grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-750">
                    {/* Event title and club */}
                    <div className="md:col-span-4">
                      <div className="font-medium text-gray-900 dark:text-white">
                        {event.title}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {event.clubs?.name || 'University Club'}
                      </div>
                    </div>
                    
                    {/* Date */}
                    <div className="md:col-span-2 mt-2 md:mt-0">
                      <div className="md:hidden text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                        Date
                      </div>
                      <div className="text-sm text-gray-900 dark:text-gray-200">
                        {formatDate(event.date)}
                      </div>
                    </div>
                    
                    {/* Time */}
                    <div className="md:col-span-2 mt-2 md:mt-0">
                      <div className="md:hidden text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                        Time
                      </div>
                      <div className="text-sm text-gray-900 dark:text-gray-200">
                        {event.time}
                      </div>
                    </div>
                    
                    {/* Venue */}
                    <div className="md:col-span-2 mt-2 md:mt-0">
                      <div className="md:hidden text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                        Venue
                      </div>
                      <div className="text-sm text-gray-900 dark:text-gray-200 truncate">
                        {event.venue}
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="md:col-span-2 mt-4 md:mt-0 flex md:justify-end">
                      <Link
                        to={`/admin/event/attendees/${event.id}`}
                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 mr-4"
                        title="View Attendees"
                      >
                        <UsersIcon className="h-5 w-5" />
                      </Link>
                      <Link
                        to={`/admin/event/edit/${event.id}`}
                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 mr-4"
                        title="Edit Event"
                      >
                        <PencilIcon className="h-5 w-5" />
                      </Link>
                      <button
                        onClick={() => handleDeleteEvent(event.id, event.title)}
                        disabled={isDeleting}
                        className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300 disabled:opacity-50"
                        title="Delete Event"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default AdminDashboard