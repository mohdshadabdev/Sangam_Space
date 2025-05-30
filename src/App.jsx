import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useAuthStore } from './stores/authStore'

// Layouts
import MainLayout from './layouts/MainLayout'
import AdminLayout from './layouts/AdminLayout'

// Pages
import HomePage from './pages/HomePage'
import EventDetailsPage from './pages/EventDetailsPage'
import LoginPage from './pages/LoginPage'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminEventCreate from './pages/admin/AdminEventCreate'
import AdminEventEdit from './pages/admin/AdminEventEdit'
import AdminEventAttendees from './pages/admin/AdminEventAttendees'
import NotFoundPage from './pages/NotFoundPage'

// Components
import ProtectedRoute from './components/auth/ProtectedRoute'
import WelcomeModal from './components/ui/WelcomeModal'

function App() {
  const location = useLocation()
  const checkSession = useAuthStore(state => state.checkSession)

  // Check session on app load
  useEffect(() => {
    checkSession()
  }, [checkSession])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <WelcomeModal />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="event/:id" element={<EventDetailsPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        {/* Admin Routes */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="event/create" element={<AdminEventCreate />} />
          <Route path="event/edit/:id" element={<AdminEventEdit />} />
          <Route path="event/attendees/:id" element={<AdminEventAttendees />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App