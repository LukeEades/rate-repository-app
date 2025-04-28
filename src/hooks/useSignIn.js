import { useMutation, gql, useApolloClient } from "@apollo/client"
import useAuthStorage from "./useAuthStorage"

const SIGN_IN = gql`
  mutation SignIn($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN)
  const authStorage = useAuthStorage()
  const client = useApolloClient()

  const signIn = async ({ username, password }) => {
    const response = await mutate({
      variables: {
        username,
        password,
      },
    })
    await authStorage.setAccessToken(response.data.authenticate.accessToken)
    await client.resetStore()
    return response.data.authenticate.accessToken
  }

  return [signIn, result]
}

export default useSignIn
