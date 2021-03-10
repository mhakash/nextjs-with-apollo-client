import { isDarkMode } from './lib'

export const mutation = () => {
  const current = isDarkMode()
  isDarkMode(current === 'dark' ? 'light' : 'dark')
}
