import { useContext, useEffect } from "react";
import useGetUserJobApplicationsRequest from "../services/useGetUserJobApplicationsRequest";
import TokenManager from "../auth/TokenManager";
import AuthContext from "../auth/AuthContext";
import usePatchJobApplicationRequest from "../services/usePatchJobApplicationRequest";
import JobApplicationsList from "../components/JobApplicationList";
import styles from "./PostersPage.module.css";
import useDeleteRequest from "../services/useDeleteRequest";

const JobApplicationPage = () => {
  const { user } = useContext(AuthContext);
  const token = TokenManager.getAccessToken();
  const [jobApplicationData, fetchJobApplications] =
    useGetUserJobApplicationsRequest(user.role, token);
  const patchData = usePatchJobApplicationRequest("/jobApplications", token);
  const deleteJobApplication = useDeleteRequest(
    "/jobApplications",
    TokenManager.getAccessToken()
  );

  const handleAccept = async (jobApplication) => {
    await patchData(jobApplication.id, "Approved");
    fetchJobApplications(user.userId);
  };

  const handleReject = async (jobApplication) => {
    await deleteJobApplication(jobApplication.id);
    fetchJobApplications(user.userId);
  };

  const handleChat = (jobApplication) => {
    console.log("Chat with " + jobApplication.babysitterId);
  };

  useEffect(() => {
    fetchJobApplications(user.userId);
  }, []);

  if (jobApplicationData.size === 0)
    return <p className={styles.loadingMessage}>No data...</p>;

  return (
    <div>
      <JobApplicationsList
        jobApplications={[...jobApplicationData.values()]}
        onAccept={handleAccept}
        onReject={handleReject}
        onChat={handleChat}
      />
    </div>
  );
};

export default JobApplicationPage;
