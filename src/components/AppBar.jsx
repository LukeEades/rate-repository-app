import { View, StyleSheet, Pressable, Text } from "react-native"
import Constants from "expo-constants"
import theme from "../theme"
import { Link } from "react-router-native"
import { ScrollView } from "react-native"
import { useQuery } from "@apollo/client"
import { GET_LOGGED_IN } from "../graphql/queries"
import Logout from "./Logout"

const styles = StyleSheet.create({
  appBar: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: theme.colors.textPrimary,
  },
  scollBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    gap: 10,
  },
  heading: {
    color: "white",
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
  },
})

const AppBar = () => {
  const { loading, error, data } = useQuery(GET_LOGGED_IN)
  if (error) console.log("error", error)
  if (loading) return null
  const loggedIn = data.me
  return (
    <View style={styles.appBar}>
      <ScrollView contentContainerStyle={styles.scollBar} horizontal>
        <AppBarTab to="/" text="Repositories" />
        {loggedIn ? <Logout /> : <AppBarTab to="signin" text="Sign In" />}
      </ScrollView>
    </View>
  )
}

const AppBarTab = ({ text, to }) => {
  return (
    <Pressable>
      <Link to={to}>
        <Text style={styles.heading}>{text}</Text>
      </Link>
    </Pressable>
  )
}

export default AppBar
