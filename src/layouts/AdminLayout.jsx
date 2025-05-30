import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { 
  UserCircleIcon, 
  CalendarIcon, 
  UsersIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
  PlusIcon
} from '@heroicons/react/24/outline'
import { useAuthStore } from '../stores/authStore'

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { user, signOut } = useAuthStore()
  const navigate = useNavigate()
  const location = useLocation()
  
  // Handle logout
  const handleLogout = async () => {
    await signOut()
    navigate('/')
  }
  
  // Check if menu item is active
  const isActive = (path) => {
    return location.pathname === path
  }
  
  // Toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-30">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md bg-white dark:bg-gray-800 shadow text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {isSidebarOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-20 w-64 bg-white dark:bg-gray-800 shadow-md transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } transition-transform duration-200 ease-in-out lg:static lg:translate-x-0`}
      >
        {/* Sidebar header */}
        <div className="h-16 flex items-center justify-center border-b border-gray-200 dark:border-gray-700">
          <Link to="/" className="flex items-center text-xl font-bold text-indigo-600 dark:text-indigo-400">
            <CalendarIcon className="h-8 w-8 mr-2" />
            <span>UniMeet Admin</span>
          </Link>
        </div>
        
        {/* User info */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300">
              <UserCircleIcon className="h-6 w-6" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {user?.email || 'Admin User'}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Club Administrator
              </p>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="p-4 space-y-1">
          <Link
            to="/admin"
            className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
              isActive('/admin')
                ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200'
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            <CalendarIcon className="mr-3 h-5 w-5" />
            Events Dashboard
          </Link>
          
          <Link
            to="/admin/event/create"
            className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
              isActive('/admin/event/create')
                ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200'
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            <PlusIcon className="mr-3 h-5 w-5" />
            Create New Event
          </Link>
          
          <hr className="my-2 border-gray-200 dark:border-gray-700" />
          
          {/* Logout button */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 rounded-md"
          >
            <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5" />
            Logout
          </button>
        </nav>
      </aside>
      
      {/* Sidebar overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-10 bg-gray-900 bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      
      {/* Main content */}
      <div className="lg:pl-64">
        <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout