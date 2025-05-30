import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { UserGroupIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'

const EventCard = ({ event }) => {
  const eventDate = new Date(event.date)
  const isPast = eventDate < new Date()
  const formattedDate = format(eventDate, 'MMM dd, yyyy')
  
  // Dynamic styles based on club theme
  const clubColor = event.clubs?.color_theme || '#4F46E5' // Default to indigo if no theme
  
  return (
    <Link 
      to={`/event/${event.id}`} 
      className="event-card block h-full rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700"
    >
      {/* Event Banner */}
      <div className="relative h-40 overflow-hidden bg-gray-200 dark:bg-gray-700">
        {event.banner_url ? (
          <img 
            src={event.banner_url} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div 
            className="w-full h-full flex items-center justify-center" 
            style={{ backgroundColor: clubColor }}
          >
            <span className="text-white font-bold text-xl">{event.title}</span>
          </div>
        )}
        
        {/* Club logo */}
        {event.clubs?.logo_url && (
          <div className="absolute bottom-2 right-2 h-10 w-10 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 bg-white dark:bg-gray-800">
            <img 
              src={event.clubs.logo_url} 
              alt={event.clubs.name} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        {/* RSVP Status Badge */}
        {event.isRsvpd && !isPast && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            RSVP'd
          </div>
        )}
        
        {/* Past Event Badge */}
        {isPast && (
          <div className="absolute top-2 left-2 bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Past Event
          </div>
        )}
      </div>
      
      {/* Event Details */}
      <div className="p-4">
        <div className="flex items-center mb-2">
          <span 
            className="inline-block h-3 w-3 rounded-full mr-2"
            style={{ backgroundColor: clubColor }}
          ></span>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {event.clubs?.name || 'University Club'}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {event.title}
        </h3>
        
        <div className="space-y-2 mt-3">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <CalendarIcon className="h-4 w-4 mr-2" />
            <span>{formattedDate}</span>
            <span className="mx-1">•</span>
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <MapPinIcon className="h-4 w-4 mr-2" />
            <span className="truncate">{event.venue}</span>
          </div>
          
          {event.attendees_count !== undefined && (
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <UserGroupIcon className="h-4 w-4 mr-2" />
              <span>
                {event.attendees_count || 0} {event.attendees_count === 1 ? 'Attendee' : 'Attendees'}
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

export default EventCard