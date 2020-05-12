import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: "https://petgram-server.mimudev.now.sh/cateegories",
});

const client = new ApolloClient({
  cache,
  link,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("app")
);
