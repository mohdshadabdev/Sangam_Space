import { useState, useEffect } from 'react'
import EventCard from './EventCard'
import { useEventStore } from '../../stores/eventStore'
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'

const EventGrid = () => {
  const { 
    filteredEvents, 
    clubs, 
    activeFilter, 
    searchQuery,
    isLoading,
    error,
    fetchEvents,
    fetchClubs,
    setFilter,
    setSearchQuery
  } = useEventStore()

  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  
  // Fetch events and clubs on component mount
  useEffect(() => {
    fetchEvents()
    fetchClubs()
  }, [fetchEvents, fetchClubs])
  
  // Handle filter change
  const handleFilterChange = (filterId) => {
    setFilter(filterId)
  }
  
  // Handle search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }
  
  // Toggle filters on mobile
  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen)
  }
  
  return (
    <div className="space-y-6">
      {/* Search and filter controls */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Search input */}
          <div className="relative flex-grow max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-gray-100 sm:text-sm transition duration-150"
            />
          </div>
          
          {/* Mobile filter toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleFilters}
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2" />
              Filters
              {activeFilter !== 'all' && (
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100">
                  1
                </span>
              )}
            </button>
          </div>
          
          {/* Desktop filters */}
          <div className="hidden md:flex md:items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                activeFilter === 'all'
                  ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              All Clubs
            </button>
            
            {clubs.map(club => (
              <button
                key={club.id}
                onClick={() => handleFilterChange(club.id.toString())}
                className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${
                  activeFilter === club.id.toString()
                    ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                style={
                  activeFilter === club.id.toString() && club.color_theme
                    ? {
                        backgroundColor: `${club.color_theme}20`, // Adding transparency
                        color: club.color_theme
                      }
                    : {}
                }
              >
                {club.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Mobile filters (collapsible) */}
        {isFiltersOpen && (
          <div className="mt-4 md:hidden flex flex-wrap gap-2">
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                activeFilter === 'all'
                  ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              All Clubs
            </button>
            
            {clubs.map(club => (
              <button
                key={club.id}
                onClick={() => handleFilterChange(club.id.toString())}
                className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                  activeFilter === club.id.toString()
                    ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                style={
                  activeFilter === club.id.toString() && club.color_theme
                    ? {
                        backgroundColor: `${club.color_theme}20`, // Adding transparency
                        color: club.color_theme
                      }
                    : {}
                }
              >
                {club.name}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Error state */}
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-4 text-red-700 dark:text-red-400">
          <p>Error loading events: {error}</p>
        </div>
      )}
      
      {/* Loading state */}
      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow animate-pulse"
            >
              <div className="h-40 bg-gray-300 dark:bg-gray-700" />
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-full" />
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3" />
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* No events found */}
      {!isLoading && filteredEvents.length === 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 text-center">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">No events found</h3>
          <p className="text-gray-600 dark:text-gray-400">
            {searchQuery
              ? `No events match your search for "${searchQuery}"`
              : activeFilter !== 'all'
              ? "No events found for the selected club"
              : "There are no upcoming events"}
          </p>
        </div>
      )}
      
      {/* Events grid */}
      {!isLoading && filteredEvents.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  )
}

export default EventGrid