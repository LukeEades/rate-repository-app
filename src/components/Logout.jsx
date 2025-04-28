import { Pressable } from "react-native"
import useAuthStorage from "../hooks/useAuthStorage"
import { useApolloClient } from "@apollo/client"
import Text from "./Text"
import { StyleSheet } from "react-native"
import theme from "../theme"

const styles = StyleSheet.create({
  logout: {
    color: "white",
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
  },
})
const Logout = () => {
  const client = useApolloClient()
  const auth = useAuthStorage()
  const onSubmit = async () => {
    try {
      await auth.removeAccessToken()
      await client.resetStore()
    } catch (err) {
      console.log("reset error", err)
    }
  }
  return (
    <Pressable onPress={onSubmit}>
      <Text style={styles.logout}>Logout</Text>
    </Pressable>
  )
}

export default Logout
