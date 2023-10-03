import { useQuery } from "@apollo/client";
import { GET_ROCKETS } from "./graphql/queries";

const App = () => {
  const { data, loading, error } = useQuery(GET_ROCKETS);
  if (error) return <p>Error</p>;
  if (loading) return <p>loading...</p>;
  console.log(data);
  return <div></div>;
};

export default App;
