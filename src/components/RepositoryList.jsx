import { FlatList, View, StyleSheet, Image } from "react-native"
import Text from "../components/Text"
import theme from "../theme"

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  repo: {
    backgroundColor: "white",
    padding: 10,
    gap: 10,
  },
  repoInfo: {
    flexDirection: "row",
    gap: 10,
  },
  stats: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  stat: {
    display: "flex",
    alignItems: "center",
  },
  boldText: {
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textPrimary,
  },
  lightText: {
    fontWeight: theme.fontWeights.normal,
    color: theme.colors.textSecondary,
  },
  language: {
    color: "white",
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 3,
    alignSelf: "flex-start",
  },
})

const repositories = [
  {
    id: "jaredpalmer.formik",
    fullName: "jaredpalmer/formik",
    description: "Build forms in React, without the tears",
    language: "TypeScript",
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/4060187?v=4",
  },
  {
    id: "rails.rails",
    fullName: "rails/rails",
    description: "Ruby on Rails",
    language: "Ruby",
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: "https://avatars1.githubusercontent.com/u/4223?v=4",
  },
  {
    id: "django.django",
    fullName: "django/django",
    description: "The Web framework for perfectionists with deadlines.",
    language: "Python",
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/27804?v=4",
  },
  {
    id: "reduxjs.redux",
    fullName: "reduxjs/redux",
    description: "Predictable state container for JavaScript apps",
    language: "TypeScript",
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: "https://avatars3.githubusercontent.com/u/13142323?v=4",
  },
]

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={props => {
        return <ListItem item={props.item} />
      }}
    />
  )
}

const displayCount = number => {
  if (number < 1000) {
    return number
  }
  return `${(number / 1000).toFixed(1)}k`
}

const ListItem = ({ item }) => {
  return (
    <View style={styles.repo}>
      <RepoInfo item={item} />
      <RepoStats item={item} />
    </View>
  )
}

const RepoInfo = ({ item }) => {
  const { description, language, fullName, ownerAvatarUrl } = item
  return (
    <View style={styles.repoInfo}>
      <Image
        style={theme.images.tiny}
        source={{
          uri: ownerAvatarUrl,
        }}
      ></Image>
      <View
        style={{
          gap: 5,
        }}
      >
        <Text style={styles.boldText}>{fullName}</Text>
        <Text style={styles.lightText}>{description}</Text>
        <Text style={styles.language}>{language}</Text>
      </View>
    </View>
  )
}

const RepoStats = ({ item }) => {
  const { reviewCount, ratingAverage, stargazersCount, forksCount } = item
  return (
    <View style={styles.stats}>
      <Stat label="Stars" stat={displayCount(stargazersCount)} />
      <Stat label="Forks" stat={displayCount(forksCount)} />
      <Stat label="Reviews" stat={reviewCount} />
      <Stat label="Rating" stat={ratingAverage} />
    </View>
  )
}

const Stat = ({ label, stat }) => {
  return (
    <View style={styles.stat}>
      <Text style={styles.boldText}>{stat}</Text>
      <Text style={styles.lightText}>{label}</Text>
    </View>
  )
}

export default RepositoryList
