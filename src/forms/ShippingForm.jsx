import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { useHistory } from "react-router";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const validation = Yup.object().shape({
  address: Yup.mixed().required("Address is Required"),
  city: Yup.string().required("City is Required"),
  postalCode: Yup.number().required("Postal Code is required"),
  country: Yup.string().required("Country is required"),
});

function ShippingForm() {
  const history = useHistory();
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
              address: "",
              city: "",
              postalCode: "",
              country: "",
            }}
            validationSchema={validation}
            onSubmit={(values) => {
              console.log(values);
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
                <h4 className="text-center">SHIPPING DETAILS</h4>
                <TextField label="Address" name="address" type="text" />
                <TextField label="City" name="city" type="text" />
                <TextField label="Country" name="country" type="text" />
                <TextField label="Postal Code" name="postalCode" type="text" />
                <div className="text-center">
                  <button className="btn btn-primary mb-5 mt-4" type="submit">
                    <h5 className="fw-bold">SHIP ORDER</h5>
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

export default ShippingForm;
