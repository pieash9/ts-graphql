import { useQuery } from "@apollo/client";
import { GET_ROCKETS } from "./graphql/queries";

const App = () => {
  const { data, loading, error } = useQuery(GET_ROCKETS);
  if (error) return <p>Error</p>;
  if (loading) return <p>loading...</p>;
  console.log(data);
  return (
    <div>
      {data?.rockets?.map((rocket) => (
        <div
          style={{
            border: "1px solid gray",
            borderRadius: "5px",
            marginBottom: "10px",
            padding: "8px",
          }}
          key={rocket?.description}
        >
          <p>{rocket?.description}</p>
          <p>{rocket?.country}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
