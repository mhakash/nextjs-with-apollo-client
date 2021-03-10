import React from 'react'
import { useQuery } from '@apollo/client'
import { mutation } from '../mutation'
import { TEST_QUERY, THEME_QUERY } from '../query'

const Test = () => {
  const { loading, data } = useQuery(TEST_QUERY)
  const theme = useQuery(THEME_QUERY)
  const themeData = theme?.data

  return (
    <div className="container">
      <button onClick={mutation}>change theme</button>
      <pre>{themeData && JSON.stringify(themeData)}</pre>
      <h2>Rick and morty API 🚀</h2>
      <code>
        {loading ? 'Loading...' : ''}
        {data ? JSON.stringify(data) : ''}
      </code>

      <style jsx>{`
        .container {
          width: 100%;
          height: 100vh;
          background-color: ${themeData.isDarkMode === 'dark'
            ? '#000'
            : '#fff'};
          color: ${themeData.isDarkMode === 'dark' ? '#fff' : '#000'};
        }
      `}</style>
    </div>
  )
}

export default Test
