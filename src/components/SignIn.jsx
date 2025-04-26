import { Pressable, View, TextInput } from "react-native"
import Text from "./Text"
import theme from "../theme"
import { useFormik } from "formik"
import * as yup from "yup"

const styles = {
  container: {
    backgroundColor: "white",
    padding: 10,
  },
  input: {
    padding: 10,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: theme.colors.textSecondary,
    borderRadius: 5,
  },
  form: {
    gap: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    color: "white",
    padding: 10,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    borderRadius: 5,
    textAlign: "center",
  },
}

const SignIn = () => {
  const onSubmit = values => {
    console.log(values)
  }
  return (
    <View style={styles.container}>
      <SignInForm onSubmit={onSubmit} />
    </View>
  )
}

const initialValues = {
  username: "",
  password: "",
}

const validationSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  password: yup.string().required("password is required"),
})

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    onSubmit,
    validationSchema,
    initialValues,
  })
  return (
    <View style={styles.form}>
      <TextInput
        style={{
          ...styles.input,
          borderColor:
            formik.touched.username && formik.errors.username
              ? theme.colors.error
              : styles.input.borderColor,
        }}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
        onBlur={formik.handleBlur("username")}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: theme.colors.error }}>
          {formik.errors.username}
        </Text>
      )}
      <TextInput
        style={{
          ...styles.input,
          borderColor:
            formik.touched.password && formik.errors.password
              ? theme.colors.error
              : styles.input.borderColor,
        }}
        placeholder="Password"
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: theme.colors.error }}>
          {formik.errors.password}
        </Text>
      )}
      <Pressable onPress={formik.handleSubmit}>
        <Text style={styles.button}>Sign in</Text>
      </Pressable>
    </View>
  )
}
export default SignIn
