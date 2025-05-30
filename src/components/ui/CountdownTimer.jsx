import { useState, useEffect } from 'react'

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isExpired, setIsExpired] = useState(false)
  
  useEffect(() => {
    // Calculate time difference
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date()
      
      if (difference <= 0) {
        setIsExpired(true)
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        }
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }
    
    // Initial calculation
    setTimeLeft(calculateTimeLeft())
    
    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    
    // Clean up interval
    return () => clearInterval(timer)
  }, [targetDate])
  
  // Add leading zero
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time
  }
  
  return (
    <div className="flex flex-col items-center">
      {isExpired ? (
        <div className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 px-3 py-1 rounded-full text-sm font-medium animate-pulse">
          Event Started
        </div>
      ) : (
        <>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Event starts in:</div>
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="flex flex-col">
              <div className="bg-indigo-100 dark:bg-indigo-900 rounded-md px-2 py-1 text-lg font-bold text-indigo-800 dark:text-indigo-100">
                {formatTime(timeLeft.days)}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Days</div>
            </div>
            
            <div className="flex flex-col">
              <div className="bg-indigo-100 dark:bg-indigo-900 rounded-md px-2 py-1 text-lg font-bold text-indigo-800 dark:text-indigo-100">
                {formatTime(timeLeft.hours)}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Hours</div>
            </div>
            
            <div className="flex flex-col">
              <div className="bg-indigo-100 dark:bg-indigo-900 rounded-md px-2 py-1 text-lg font-bold text-indigo-800 dark:text-indigo-100">
                {formatTime(timeLeft.minutes)}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Min</div>
            </div>
            
            <div className="flex flex-col">
              <div className="bg-indigo-100 dark:bg-indigo-900 rounded-md px-2 py-1 text-lg font-bold text-indigo-800 dark:text-indigo-100">
                {formatTime(timeLeft.seconds)}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Sec</div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CountdownTimer