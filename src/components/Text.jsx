import { Text as NativeText, StyleSheet } from "react-native"
import theme from "../theme"

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
  },
})

const Text = ({ style, ...props }) => {
  const textStyle = [styles.text, style]
  return <NativeText style={textStyle} {...props} />
}

export default Text
