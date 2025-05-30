import { Link } from 'react-router-dom'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-black dark:bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                SangamSpace
              </span>
            </Link>
            <p className="text-gray-400 max-w-md">
              Built for tech clubs to help you find what matters.
            </p>
          </div>
          
          {/* Right side */}
          <div className="space-y-4 md:text-right">
            <div className="space-y-2">
              <a 
                href="mailto:mohdshadabdev@gmail.com"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                mohdshadabdev@gmail.com
              </a>
            </div>
            <div>
              <a 
                href="https://linkedin.com/in/mohdshadabdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} SangamSpace – Made with{' '}
            <span className="text-red-500">❤️</span> by Mohd Shadab
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/" className="text-gray-400 hover:text-white text-sm">
              Home
            </Link>
            <Link to="/events" className="text-gray-400 hover:text-white text-sm">
              Events
            </Link>
            <Link to="/about" className="text-gray-400 hover:text-white text-sm">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer