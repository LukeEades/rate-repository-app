import { NativeRouter } from "react-router-native"
import { ApolloProvider } from "@apollo/client"

import Main from "./src/components/Main"
import AuthStorage from "./src/utils/authStorage"
import createApolloClient from "./src/utils/apolloClient"
import AuthStorageContext from "./src/contexts/AuthStorageContext"

const authStorage = new AuthStorage()
const client = createApolloClient(authStorage)

const App = () => {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={client}>
          <AuthStorageContext.Provider value={authStorage}>
            <Main />
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
    </>
  )
}

export default App
