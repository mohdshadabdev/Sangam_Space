import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useEventStore } from '../../stores/eventStore'
import toast from 'react-hot-toast'

const AdminEventEdit = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { 
    selectedEvent,
    clubs, 
    fetchClubs,
    fetchEventById,
    updateEvent,
    isLoading 
  } = useEventStore()
  
  const [formError, setFormError] = useState(null)
  
  // Form initialization
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm()
  
  // Fetch event data and clubs on component mount
  useEffect(() => {
    const loadData = async () => {
      await fetchEventById(id)
      await fetchClubs()
    }
    
    loadData()
  }, [id, fetchEventById, fetchClubs])
  
  // Set form default values when event data is loaded
  useEffect(() => {
    if (selectedEvent) {
      reset({
        title: selectedEvent.title,
        description: selectedEvent.description,
        date: selectedEvent.date,
        time: selectedEvent.time,
        venue: selectedEvent.venue,
        club_id: selectedEvent.club_id,
        banner_url: selectedEvent.banner_url
      })
    }
  }, [selectedEvent, reset])
  
  // Handle form submission
  const onSubmit = async (data) => {
    setFormError(null)
    
    try {
      const result = await updateEvent(id, {
        title: data.title,
        description: data.description,
        date: data.date,
        time: data.time,
        venue: data.venue,
        club_id: data.club_id,
        banner_url: data.banner_url
      })
      
      if (result.success) {
        toast.success('Event updated successfully')
        navigate('/admin')
      } else {
        setFormError(result.error || 'Failed to update event')
      }
    } catch (error) {
      setFormError('An unexpected error occurred')
    }
  }
  
  // Loading state
  if (isLoading && !selectedEvent) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-6"></div>
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <div className="space-y-6">
            {[...Array(5)].map((_, i) => (
              <div key={i}>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-2"></div>
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div>
      <div className="md:flex md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Edit Event</h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Update event details
          </p>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
          {/* Error message */}
          {formError && (
            <div className="mb-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-md p-4">
              <p className="text-sm text-red-700 dark:text-red-400">
                {formError}
              </p>
            </div>
          )}
          
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Event Title *
              </label>
              <input
                type="text"
                id="title"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Hack the Future"
                {...register('title', { required: 'Event title is required' })}
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.title.message}</p>
              )}
            </div>
            
            {/* Club */}
            <div>
              <label htmlFor="club_id" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Hosting Club *
              </label>
              <select
                id="club_id"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                {...register('club_id', { required: 'Hosting club is required' })}
              >
                <option value="">Select a club</option>
                {clubs.map(club => (
                  <option key={club.id} value={club.id}>
                    {club.name}
                  </option>
                ))}
              </select>
              {errors.club_id && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.club_id.message}</p>
              )}
            </div>
            
            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  {...register('date', { required: 'Event date is required' })}
                />
                {errors.date && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.date.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Time *
                </label>
                <input
                  type="time"
                  id="time"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  {...register('time', { required: 'Event time is required' })}
                />
                {errors.time && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.time.message}</p>
                )}
              </div>
            </div>
            
            {/* Venue */}
            <div>
              <label htmlFor="venue" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Venue *
              </label>
              <input
                type="text"
                id="venue"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="United Auditorium"
                {...register('venue', { required: 'Event venue is required' })}
              />
              {errors.venue && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.venue.message}</p>
              )}
            </div>
            
            {/* Banner URL */}
            <div>
              <label htmlFor="banner_url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Banner Image URL
              </label>
              <input
                type="url"
                id="banner_url"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="https://example.com/image.jpg"
                {...register('banner_url')}
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Optional. Enter a URL to an image for your event banner.
              </p>
            </div>
            
            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Description
              </label>
              <textarea
                id="description"
                rows={6}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Describe your event. Markdown is supported."
                {...register('description')}
              ></textarea>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Optional. Markdown formatting is supported.
              </p>
            </div>
            
            {/* Submit buttons */}
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={() => navigate('/admin')}
                className="inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {isLoading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminEventEdit