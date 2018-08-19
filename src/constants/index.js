import { createHttpLink } from "apollo-link-http";

export const httpLink = createHttpLink({
  uri: "http://localhost:8080"
});
