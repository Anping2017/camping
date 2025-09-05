import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  siderCollapsed: boolean
  setSiderCollapsed: (collapsed: boolean) => void
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
  userPreferences: {
    tablePageSize: number
    language: string
  }
  setUserPreferences: (preferences: Partial<AppState['userPreferences']>) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      siderCollapsed: false,
      setSiderCollapsed: (collapsed) => set({ siderCollapsed: collapsed }),
      theme: 'light',
      setTheme: (theme) => set({ theme }),
      userPreferences: {
        tablePageSize: 10,
        language: 'zh-CN'
      },
      setUserPreferences: (preferences) =>
        set((state) => ({
          userPreferences: { ...state.userPreferences, ...preferences }
        }))
    }),
    {
      name: 'app-storage'
    }
  )
)
