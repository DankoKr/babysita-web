import { useContext, useEffect } from "react";
import useGetUserJobApplicationsRequest from "../services/useGetUserJobApplicationsRequest";
import TokenManager from "../auth/TokenManager";
import AuthContext from "../auth/AuthContext";
import usePatchJobApplicationRequest from "../services/usePatchJobApplicationRequest";
import JobApplicationsList from "../components/JobApplicationList";
import styles from "./PostersPage.module.css";
import useDeleteRequest from "../services/useDeleteRequest";
import useAssignBabysitterReguest from "../services/useAssignBabysitterReguest";
import usePatchRequest from "../services/usePatchJobApplicationRequest";
import { useNavigate } from "react-router-dom";

const JobApplicationPage = () => {
  const { user } = useContext(AuthContext);
  const token = TokenManager.getAccessToken();
  const [jobApplicationData, fetchJobApplications] =
    useGetUserJobApplicationsRequest(user.role, token);
  const patchData = usePatchJobApplicationRequest("/jobApplications", token);
  const assignBabysitter = useAssignBabysitterReguest(token);
  const deleteJobApplication = useDeleteRequest("/jobApplications", token);
  const updateBabysitterPoints = usePatchRequest("/babysitters", token);
  const navigate = useNavigate();

  const handleAccept = async (jobApplication) => {
    await assignBabysitter(
      jobApplication.posterId,
      jobApplication.babysitterId
    );
    await patchData(jobApplication.id, "Approved");
    await updateBabysitterPoints(jobApplication.babysitterId);
    fetchJobApplications(user.userId);
  };

  const handleReject = async (jobApplication) => {
    await deleteJobApplication(jobApplication.id);
    fetchJobApplications(user.userId);
  };

  const handleView = async (jobApplication) => {
    if (user.role === "parent") {
      navigate(`/view-user/${jobApplication.babysitterId}`);
    } else {
      navigate(`/view-poster/${jobApplication.posterId}`);
    }
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
        onView={handleView}
      />
    </div>
  );
};

export default JobApplicationPage;
