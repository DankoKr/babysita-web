import { useContext } from "react";
import Button from "./Button";
import AuthContext from "../auth/AuthContext";

const JobApplicationActions = ({
  jobApplication,
  onAccept,
  onReject,
  onView,
}) => {
  const { user } = useContext(AuthContext);
  const buttons = [];

  if (jobApplication.status !== "Approved" && user.role === "parent") {
    buttons.push(
      { text: "Accept", onClick: () => onAccept(jobApplication) },
      { text: "Reject", onClick: () => onReject(jobApplication) }
    );
  }

  buttons.push({
    text: user.role === "parent" ? "Babysitter" : "Poster",
    onClick: () => onView(jobApplication),
  });

  return (
    <div>
      {buttons.map((button, index) => (
        <Button key={index} onClick={button.onClick} text={button.text} />
      ))}
    </div>
  );
};

export default JobApplicationActions;
