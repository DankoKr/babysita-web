const JobApplication = ({ jobApplication }) => {
  return (
    <div>
      {jobApplication ? (
        <div>
          <h2>Job application Information</h2>
          <p>
            <strong>Status:</strong> {jobApplication.status}
          </p>
          <p>
            <strong>Description:</strong> {jobApplication.description}
          </p>
        </div>
      ) : (
        <p>No job application data available.</p>
      )}
    </div>
  );
};

export default JobApplication;
