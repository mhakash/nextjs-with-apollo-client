import { gql } from '@apollo/client'

export const TEST_QUERY = gql`
  {
    character(id: 1) {
      name
      gender
    }
  }
`
export const THEME_QUERY = gql`
  query getDarkMode {
    isDarkMode @client
  }
`
