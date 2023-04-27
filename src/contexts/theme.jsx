import { createContext, useContext, useMemo, useState } from 'react'

export const ThemeContext = createContext({
  themeMode: 'dark',
  isDarkTheme: true,
  toggleTheme: () => {},
})

export function ThemeProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const themeMode = useMemo(() => (isDarkTheme ? 'dark' : 'light'), [isDarkTheme])
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme)

  return <ThemeContext.Provider value={{ isDarkTheme, themeMode, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useThemeSetting = () => useContext(ThemeContext)
