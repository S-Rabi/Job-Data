import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
            alt=""
          />
        </MDBCol>
        <MDBCol col="4" md="6" className="d-flex flex-column align-items-center justify-content-center">
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="formControlLg"
            type="email"
            size="lg"
            contrast
          />
          <MDBBtn className="mb-4 w-100" size="lg">
            Get sign in link
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
export default LoginPage;
