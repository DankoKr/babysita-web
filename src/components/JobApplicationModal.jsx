import Modal from "./Modal";
import Button from "./Button";
import CustomInput from "./CustomInput";
import { Formik, Form } from "formik";
import { jobApplicationSchema } from "../schemas/jobApplicationSchema";
import { useContext, useRef } from "react";
import styles from "./JobApplicationModal.module.css";
import AuthContext from "../auth/AuthContext";

const JobApplicationModal = ({ poster, onSubmit, isOpen, onClose }) => {
  const formikRef = useRef(); // create a ref for Formik to reset the form
  const { user } = useContext(AuthContext);

  const handleModalClose = () => {
    if (formikRef.current) {
      formikRef.current.resetForm();
    }
    onClose();
  };

  return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={handleModalClose}>
      <Formik
        innerRef={formikRef} // pass the ref to Formik
        initialValues={{
          description: "",
          //Those values are not expected from the form
          status: "Pending",
          babysitterId: user.userId,
          posterId: poster.id,
          parentId: poster.parentId,
        }}
        validationSchema={jobApplicationSchema}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
      >
        {() => (
          <Form className={styles.form}>
            <CustomInput
              label="Description"
              name="description"
              type="text"
              placeholder="Enter poster description"
            />
            <Button type="submit" text="Submit" />
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default JobApplicationModal;
