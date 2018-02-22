// ----------------------
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import config from 'kit/config'
import { getServerURL } from 'kit/lib/env'
import { setContext } from 'apollo-link-context'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { split } from 'apollo-link'
import { GRAPHCOOL_PROJECT_ID } from '../../src/constants/graphcoolConfig'

/* ReactQL */

// ----------------------

// Creates a new browser client
export function browserClient () {
  // If we have an internal GraphQL server, we need to append it with a
  // call to `getServerURL()` to add the correct host (in dev + production)
  const uri = config.graphQLServer
    ? `${getServerURL()}${config.graphQLEndpoint}` : config.graphQLEndpoint

  const httpLink = createHttpLink({
    uri: uri
  })

// Create a WebSocket link:
  const wsLink = new WebSocketLink({
    uri: `wss://subscriptions.graph.cool/v1/` + GRAPHCOOL_PROJECT_ID,
    options: {
      reconnect: true
    }
  })

  const authLink = setContext((_, {headers}) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('ReactQLAdmin')
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null
      }
    }
  })

  const link = split(
    // split based on operation type
    ({query}) => {
      const {kind, operation} = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    wsLink,
    authLink.concat(httpLink)
  )

  return new ApolloClient({
    link: link,
    cache: new InMemoryCache(window.__APOLLO_STATE__)
  })
}

// Creates a new server client
export function serverClient () {
  // If we have an internal GraphQL server, we need to append it with a
  // call to `getServerURL()` to add the correct host (in dev + production)
  const uri = config.graphQLServer
    ? `${getServerURL()}${config.graphQLEndpoint}` : config.graphQLEndpoint

  const httpLink = createHttpLink({
    uri: uri
  })

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  })
}
