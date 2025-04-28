import { gql } from "@apollo/client"

const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          ownerName
          name
          fullName
          ratingAverage
          reviewCount
          stargazersCount
          forksCount
          url
          ownerAvatarUrl
          description
          language
        }
      }
    }
  }
`

const GET_LOGGED_IN = gql`
  query Me {
    me {
      id
      username
    }
  }
`

export { GET_REPOSITORIES, GET_LOGGED_IN }
