import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";

import { httpLink } from "./constants";

/* EXPORT
  1. client                 - handle apollo client
  2. clientProvider         - handle react-apollo provider
  3. ql                     - handle graphql tag = gql

*/
export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export { ApolloProvider as ClientProvider, Mutation } from "react-apollo";
export { gql as ql } from "apollo-boost";
