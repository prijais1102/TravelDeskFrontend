import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./RequestForm.module.css";
 
function RequestForm() {
  const initialValues = {
    employeeId: "",
    employeeName: "",
    projectName: "",
    departmentName: "",
    reasonForTravelling: "",
    bookingType: "",
    flightType: "",
    foodType: "",
    mealType: "",
  };
 
  const validationSchema = Yup.object().shape({
    employeeId: Yup.string().required("Required"),
    employeeName: Yup.string().required("Required"),
    projectName: Yup.string().required("Required"),
    departmentName: Yup.string().required("Required"),
    reasonForTravelling: Yup.string().required("Required"),
    bookingType: Yup.string().required("Required"),
    // flightType: Yup.string().required("Required"),
    // foodType: Yup.string().required("Required"),
    // mealType: Yup.string().required("Required"),
  });
 
  const handleSubmit = (values) => {
    console.log(values);
  };
 
  return (
    <div className={`${styles.formContainer}`}>
      <h1>Request for Travel</h1>
      <hr />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values }) => (
          <Form>
            <label>
              <p className={`${styles.inputName}`}>Employee ID :</p>
              <Field type="text" name="employeeId" />
              <ErrorMessage
                name="employeeId"
                component="div"
                className="invalid-feedback"
              />
            </label>
 
            <label>
              <p className={`${styles.inputName}`}>Employee Name :</p>
              <Field type="text" name="employeeName" />
              <ErrorMessage
                name="employeeName"
                component="div"
                className="invalid-feedback"
              />
            </label>
 
            <label>
              <p className={`${styles.inputName}`}>Project Name :</p>
              <Field type="text" name="projectName" />
              <ErrorMessage
                name="projectName"
                component="div"
                className="invalid-feedback"
              />
            </label>
 
            <label>
              <p className={`${styles.inputName}`}>Department Name :</p>
              <Field type="text" name="departmentName" />
              <ErrorMessage
                name="departmentName"
                component="div"
                className="invalid-feedback"
              />
            </label>
 
            <label>
              <p className={`${styles.inputName}`}> Reason for Travelling :</p>
              <Field type="text" name="reasonForTravelling" />
              <ErrorMessage
                name="reasonForTravelling"
                component="div"
                className="invalid-feedback"
              />
            </label>
 
            <label>
              <p className={`${styles.inputName}`}>Type of Booking :</p>
              <Field as="select" name="bookingType">
                <option value="">Select here..</option>
                <option value="ticket only">Air Ticket Only</option>
                <option value="hotel only">Hotel Only</option>
                <option value="air ticket + hotel both">
                  Air Ticket + Hotel Both
                </option>
              </Field>
              <ErrorMessage
                name="bookingType"
                component="div"
                className="invalid-feedback"
              />
            </label>
 
            {values.bookingType === "ticket only" && (
              <>
                <label htmlFor="">
                  <h4>Select Flight Type</h4>
                  <Field as="select" name="flightType">
                    <option value="">Select here..</option>
                    <option value="domestic flight">Domestic Flight</option>
                    <option value="international flight">
                      International Flight
                    </option>
                  </Field>
                  <ErrorMessage
                    name="flightType"
                    component="div"
                    className="invalid-feedback"
                  />
                </label>
              </>
            )}
 
            {values.flightType === "domestic flight" && (
              <>
                <label>Aadhar Card</label>
                <Field type="file" name="aadharCard" />
                <ErrorMessage
                  name="aadharCard"
                  component="div"
                  className="invalid-feedback"
                />
                <label htmlFor="">Date</label>
                <Field type="date" name="flightDate" />
                <ErrorMessage
                  name="flightDate"
                  component="div"
                  className="invalid-feedback"
                />
              </>
            )}
 
            {values.flightType === "international flight" && (
              <>
                <label htmlFor="">Passport No.</label>
                <Field type="number" name="passportNo" />
                <ErrorMessage
                  name="passportNo"
                  component="div"
                  className="invalid-feedback"
                />
                <label>Upload PassPort</label>
                <Field type="file" name="passportFile" />
                <ErrorMessage
                  name="passportFile"
                  component="div"
                  className="invalid-feedback"
                />
                <label>Upload Visa</label>
                <Field type="file" name="visaFile" />
                <ErrorMessage
                  name="visaFile"
                  component="div"
                  className="invalid-feedback"
                />
                <label htmlFor="">Date</label>
                <Field type="date" name="flightDate" />
                <ErrorMessage
                  name="flightDate"
                  component="div"
                  className="invalid-feedback"
                />
                <label>Aadhar Card</label>
                <Field type="file" name="aadharCard" />
                <ErrorMessage
                  name="aadharCard"
                  component="div"
                  className="invalid-feedback"
                />
              </>
            )}
 
            {values.bookingType === "hotel only" && (
              <>
                <label htmlFor="">Date</label>
                <Field type="date" name="hotelDate" />
                <ErrorMessage
                  name="hotelDate"
                  component="div"
                  className="invalid-feedback"
                />
                <label>Number of Days</label>
                <Field type="number" name="numberOfDays" />
                <ErrorMessage
                  name="numberOfDays"
                  component="div"
                  className="invalid-feedback"
                />
                <label htmlFor="">
                  Meal Required
                  <Field as="select" name="foodType">
                    <option value="">Select here..</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="both">both</option>
                  </Field>
                  <ErrorMessage
                    name="foodType"
                    component="div"
                    className="invalid-feedback"
                  />
                </label>
 
                <label htmlFor="">
                  Meal Preferences
                  <Field as="select" name="mealType">
                    <option value="">Select here..</option>
                    <option value="Lunch">Veg</option>
                    <option value="Dinner">Non-Veg</option>
                  </Field>
                  <ErrorMessage
                    name="mealType"
                    component="div"
                    className="invalid-feedback"
                  />
                </label>
              </>
            )}
 
            {values.bookingType === "air ticket + hotel both" && (
              <>
                <label htmlFor="">
                  <label htmlFor="">Date</label>
                  <Field type="date" name="flightDate" />
                  <ErrorMessage
                    name="flightDate"
                    component="div"
                    className="invalid-feedback"
                  />
                  <label>Number of Days</label>
                  <Field type="number" name="numberOfDays" />
                  <ErrorMessage
                    name="numberOfDays"
                    component="div"
                    className="invalid-feedback"
                  />
                  <label></label>
                  <h4>Select Flight Type</h4>
                  <Field as="select" name="flightType">
                    <option value="">Select here..</option>
                    <option value="domestic flight">Domestic Flight</option>
                    <option value="international flight">
                      International Flight
                    </option>
                  </Field>
                  <ErrorMessage
                    name="flightType"
                    component="div"
                    className="invalid-feedback"
                  />
                </label>
                <label htmlFor="">
                  Meal Required
                  <Field as="select" name="foodType">
                    <option value="">Select here..</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="both">both</option>
                  </Field>
                  <ErrorMessage
                    name="foodType"
                    component="div"
                    className="invalid-feedback"
                  />
                </label>
 
                <label htmlFor="">
                  Meal Preferences
                  <Field as="select" name="mealType">
                    <option value="">Select here..</option>
                    <option value="Lunch">Veg</option>
                    <option value="Dinner">Non-Veg</option>
                  </Field>
                  <ErrorMessage
                    name="mealType"
                    component="div"
                    className="invalid-feedback"
                  />
                </label>
              </>
            )}
 
            <br />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
 
export default RequestForm;
 