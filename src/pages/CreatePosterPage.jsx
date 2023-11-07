import React, { useContext } from "react";
import usePostRequest from "../services/usePostRequest";
import { Formik, Form } from "formik";
import { posterSchema } from "../schemas/posterSchema";
import styles from "./CreatePosterPage.module.css";
import CustomInput from "../components/CustomInput";
import Button from "../components/Button";
import TokenManager from "../auth/TokenManager";
import AuthContext from "../auth/AuthContext";

const CreatePosterPage = () => {
  const { postData } = usePostRequest(
    "/posters",
    TokenManager.getAccessToken()
  );
  const { user } = useContext(AuthContext);

  const onSubmit = async (values, actions) => {
    try {
      await postData(values);
      actions.resetForm();
    } catch (error) {
      console.error("Error in post request", error);
    }
  };

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        imageUrl: "",
        eventDate: "",
        parentId: user.userId,
        babysitterId: 0,
      }}
      validationSchema={posterSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <Form className={styles.form}>
          <CustomInput
            label="Title"
            name="title"
            type="text"
            placeholder="Enter poster title"
          />
          <CustomInput
            label="Description"
            name="description"
            type="text"
            placeholder="Enter poster description"
          />
          <CustomInput
            label="ImageUrl"
            name="imageUrl"
            type="text"
            placeholder="Enter poster imageUrl"
          />
          <CustomInput
            label="Date"
            name="eventDate"
            type="date"
            placeholder="Enter poster date"
          />
          <Button type="submit" text="Submit" />
        </Form>
      )}
    </Formik>
  );
};

export default CreatePosterPage;
