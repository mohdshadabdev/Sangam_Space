import { create } from 'zustand'
import { supabase } from '../lib/supabase'

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isAdmin: false,
  isLoading: false,
  error: null,

  setUser: (user) => {
    set({ 
      user, 
      isAuthenticated: !!user,
      // Check if user is an admin (you might want to check a specific claim or role)
      isAdmin: !!user
    })
  },

  clearUser: () => {
    set({ 
      user: null, 
      isAuthenticated: false,
      isAdmin: false 
    })
  },

  signIn: async (email, password) => {
    set({ isLoading: true, error: null })
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) throw error

      set({ 
        user: data.user, 
        isAuthenticated: true,
        isAdmin: !!data.user,
        isLoading: false 
      })
      
      return { success: true }
    } catch (error) {
      set({ 
        error: error.message, 
        isLoading: false 
      })
      return { success: false, error: error.message }
    }
  },

  signOut: async () => {
    set({ isLoading: true })
    try {
      await supabase.auth.signOut()
      set({ 
        user: null, 
        isAuthenticated: false,
        isAdmin: false,
        isLoading: false 
      })
      return { success: true }
    } catch (error) {
      set({ 
        error: error.message, 
        isLoading: false 
      })
      return { success: false, error: error.message }
    }
  },

  checkSession: async () => {
    try {
      const { data } = await supabase.auth.getSession()
      if (data.session?.user) {
        set({ 
          user: data.session.user, 
          isAuthenticated: true,
          isAdmin: !!data.session.user
        })
      }
    } catch (error) {
      console.error('Error checking session:', error)
    }
  }
}))