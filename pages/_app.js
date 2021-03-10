import '../styles/globals.css'
import { ApolloClient, ApolloProvider } from '@apollo/client'
import { cache } from '../cache'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache,
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
