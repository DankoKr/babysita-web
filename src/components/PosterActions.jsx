import { useState } from "react";
import Button from "../components/Button";
import JobApplicationModal from "../components/JobApplicationModal";
import { useNavigate } from "react-router-dom";
import usePostRequest from "../services/usePostRequest";
import TokenManager from "../auth/TokenManager";

const PosterActions = ({ poster, isEditable, isBabysitter }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { postData } = usePostRequest(
    "/jobApplications",
    TokenManager.getAccessToken()
  );
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/edit-poster/${poster.id}`);
  };

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  const handleModalSubmit = async (values) => {
    try {
      await postData(values);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error in post request", error);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isEditable && <Button text="Edit" onClick={handleEditClick} />}
      {isBabysitter && (
        <>
          <Button text="Apply" onClick={handleApplyClick} />
          <JobApplicationModal
            poster={poster}
            isOpen={isModalOpen}
            onClose={handleModalClose}
            onSubmit={handleModalSubmit}
          />
        </>
      )}
    </>
  );
};

export default PosterActions;
