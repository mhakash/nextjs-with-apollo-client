import { InMemoryCache } from '@apollo/client'
import { isDarkMode } from './lib'

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isDarkMode: {
          read() {
            return isDarkMode()
          },
        },
      },
    },
  },
})
