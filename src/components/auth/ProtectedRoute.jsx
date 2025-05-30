import { Navigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '../../stores/authStore'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isAdmin } = useAuthStore()
  const location = useLocation()
  
  // Check if user is authenticated and is admin
  if (!isAuthenticated || !isAdmin) {
    // Redirect to login page but save the current location they were trying to access
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  
  return children
}

export default ProtectedRoute