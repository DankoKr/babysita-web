import useGetRequest from "../services/useGetRequest";

const PosterPage = () => {
  const posterData = useGetRequest();

  if (posterData.size === 0) return <p>Loading...</p>;

  return (
    <div className="posterContainer">
      {/* Convert to array */}
      {[...posterData.values()].map((poster, index) => (
        <div className="posterData" key={index}>
          <h2>Poster Information</h2>
          <p><strong>Title:</strong> {poster.title}</p>
          <p><strong>Description:</strong> {poster.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PosterPage;

