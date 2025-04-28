import { FlatList, View, StyleSheet, Image } from "react-native"
import Text from "../components/Text"
import theme from "../theme"
import { useState, useEffect } from "react"
import useRepositories from "../hooks/useRepositories"

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

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
  const { repositories } = useRepositories()
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []
  return (
    <FlatList
      data={repositoryNodes}
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
