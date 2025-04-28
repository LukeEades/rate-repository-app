import { GET_REPOSITORIES } from "../graphql/queries"
import { useQuery } from "@apollo/client"

const useRepositories = () => {
  const { loading, data, refetch } = useQuery(GET_REPOSITORIES)

  return {
    repositories: data ? data.repositories : undefined,
    loading,
    refetch,
  }
}

export default useRepositories
