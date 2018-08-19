import React from "react";
import { Link } from "react-router-dom";
import { SIGNIN_MUTATION, SIGNUP_MUTATION } from "../mutation";
import { Mutation } from "../client";
import { formHoc } from "../container/hoc/formHoc";

const LoginComponent = ({
  firstName,
  lastName,
  email,
  password,
  type,
  handleOnClick,
  handleOnChange,
  handleOnSubmit,
  formRef
}) => (
  <div className="login-container z-depth-6">
    <div className="authen-type">
      <div className="active">
        <h3 title={"signin"} onClick={handleOnClick}>
          Sign-In
        </h3>
      </div>
      <div>
        <h3 title={"signup"} onClick={handleOnClick}>
          Sign-Up
        </h3>
      </div>
    </div>
    <Mutation
      mutation={type === "signin" ? SIGNIN_MUTATION : SIGNUP_MUTATION}
      variables={
        type === "signin"
          ? { email, password }
          : { firstName, lastName, email, password }
      }
    >
      {mutate => (
        <form
          className="login-form"
          onSubmit={e => handleOnSubmit(e, mutate)}
          autoComplete="off"
          ref={formRef}
        >
          {type === "signup" && <React.Fragment />}

          {type === "signin" && (
            <div className="others">
              <ul>
                <li>
                  <Link to="/"> Forget Password?</Link>
                </li>
              </ul>
            </div>
          )}
          <button type="submit" className="btn waves-effect waves-light ">
            {type === "signin" ? "SignIn" : "Signup"}
          </button>
          <div className="social-media">
            <i className="fab fa-facebook-square" />
            <i className="fab fa-google" />
            <i className="fab fa-linkedin" />
          </div>
        </form>
      )}
    </Mutation>
  </div>
);

export default formHoc({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  type: "Signin"
})(LoginComponent);
