import styles from "./JobApplicationsList.module.css";
import JobApplication from "../components/JobApplication";
import JobApplicationActions from "./JobApplicationActions";

const JobApplicationsList = ({
  jobApplications,
  onAccept,
  onReject,
  onView,
  onChat,
}) => {
  return (
    <div>
      {jobApplications.map((jobApplication) => (
        <div key={jobApplication.id} className={styles.jobApplicationContainer}>
          <JobApplication jobApplication={jobApplication} />
          <JobApplicationActions
            jobApplication={jobApplication}
            onAccept={onAccept}
            onReject={onReject}
            onView={onView}
            onChat={onChat}
          />
        </div>
      ))}
    </div>
  );
};

export default JobApplicationsList;
