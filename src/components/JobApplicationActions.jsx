import { useContext } from "react";
import Button from "./Button";
import AuthContext from "../auth/AuthContext";

const JobApplicationActions = ({
  jobApplication,
  onAccept,
  onReject,
  onChat,
}) => {
  const { user } = useContext(AuthContext);
  const buttons = [];

  if (jobApplication.status !== "Approved" && user.role === "parent") {
    buttons.push(
      { text: "Accept", onClick: () => onAccept(jobApplication) },
      { text: "Reject", onClick: () => onReject(jobApplication) }
    );
  }

  buttons.push({ text: "Chat", onClick: () => onChat(jobApplication) });

  return (
    <div>
      {buttons.map((button, index) => (
        <Button key={index} onClick={button.onClick} text={button.text} />
      ))}
    </div>
  );
};

export default JobApplicationActions;
