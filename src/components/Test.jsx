import { Formik, Form } from "formik";
import { TextField } from "../forms/TextField";
import * as Yup from "yup";
import { useHistory } from "react-router";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from "axios";
import React, { useState } from "react";

const validation = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required("First Name is Required")
    .max(15, "First Name cannot be bigger than 15 characters")
    .min(3, "First Name cannot be smaller than 3 characters"),
  lastName: Yup.string()
    .required("Last Name is Required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .max(15, "Last Name cannot be bigger than 15 characters")
    .min(3, "Last Name cannot be smaller than 3 characters"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password can not be smaller than 6 characters"),
});

function SignUp({ handleStateChange, data }) {
  const history = useHistory();
  const [user, setUser] = useState([]);
  return (
    <>
      <Navbar />
      <div className="row">
        <div
          className="container mb-5 mt-5"
          style={{ backgroundColor: "#F6F6F6" }}
        >
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={validation}
            onSubmit={(values) => {
              //   const temp = [...data];
              //   temp.push(values);
              console.log(values);
              setUser(values);
              //   handleStateChange(temp);
              //   history.push("/Products");
              axios
                .post("http://localhost:3001/app/test", user)
                .then((response) => console.log(response.data));
            }}
          >
            <Form>
              <div
                className="container-fluid"
                style={{
                  width: "300px",
                  marginTop: "40px",
                }}
              >
                <h4 className="text-center">SIGN UP</h4>
                <TextField label="First Name" name="firstName" type="text" />
                <TextField label="Last Name" name="lastName" type="text" />
                <TextField label="Email" name="email" type="text" />
                <TextField label="Password" name="password" type="text" />
                <div className="text-center">
                  <button className="btn btn-primary mb-5 mt-4" type="submit">
                    Sign Up
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
