import { useState, useEffect } from 'react'
import EventGrid from '../components/events/EventGrid'

const HomePage = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Campus Events
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
          Discover and RSVP to the latest events from your favorite campus clubs.
        </p>
      </div>
      
      <EventGrid />
    </div>
  )
}

export default HomePage