import React from "react";
import FormComponent from "../components/FormComponent";
import BannerDetails from "../components/BannerDetailsComponents";
import { Header } from "../components/HeaderComponent";
import { Link } from "react-router-dom";
import { SIGNIN_MUTATION, SIGNUP_MUTATION } from "../mutation";
import { Mutation } from "../client";

import {
  withStyles,
  InputAdornment,
  TextField,
  Button
} from "@material-ui/core";
import { Person, Email, Lock } from "@material-ui/icons";

const styles = theme => ({
  heyy: {
    flexBasis: "60%",
    backgroundColor: "#605f5f3d",
    borderRadius: "10px",
    position: "relative"
  },
  loginForm: {
    textAlign: "center",
    padding: "40px 20px 20px 20px",
    display: "flex",
    flexFlow: "nowrap column",
    alignItems: "center",
    "& > button": {
      marginTop: "18px",
      background: theme.secondary.color
    }
  },
  others: {
    marginTop: "10px",
    fontSize: "13px"
  },
  socialMedia: {
    marginTop: "10px",
    "&::before": {
      content: "or",
      display: "block",
      margin: "5px 0"
    },
    "& > i": {
      fontSize: "1.5rem",
      margin: "0 4px",
      cursor: "pointer",
      "&:hover": {
        color: theme.secondary.color
      }
    }
  }
});

@withStyles(styles)
export default class LoginContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header active="login" />
        <div class="container main-content">
          <section class="container">
            <BannerDetails />
          </section>
          <section class="container">
            <FormComponent classes={this.props.classes}>
              {(
                {
                  firstName,
                  lastName,
                  email,
                  password,
                  firstNameError,
                  lastNameError,
                  emailError,
                  passwordError,
                  type
                },
                classes,
                handleOnClick,
                handleOnChange,
                handleOnSubmit
              ) => (
                <div class={classes.heyy}>
                  <div class="authen-type">
                    <div class={type === "signin" ? "active" : ""}>
                      <h3 title={"signin"} onClick={handleOnClick}>
                        Sign-In
                      </h3>
                    </div>
                    <div class={type === "signup" ? "active" : ""}>
                      <h3 title={"signup"} onClick={handleOnClick}>
                        Sign-Up
                      </h3>
                    </div>
                  </div>
                  <Mutation
                    mutation={
                      type === "signin" ? SIGNIN_MUTATION : SIGNUP_MUTATION
                    }
                    variables={
                      type === "signin"
                        ? { email, password }
                        : { firstName, lastName, email, password }
                    }
                  >
                    {mutate => (
                      <form
                        class={classes.loginForm}
                        onSubmit={e => handleOnSubmit(e, mutate)}
                        noValidate
                        autoComplete="off"
                      >
                        {type === "signup" && (
                          <React.Fragment>
                            <TextField
                              margin="dense"
                              label="First Name"
                              value={firstName}
                              onChange={handleOnChange("firstName")}
                              error={firstNameError !== "" ? true : false}
                              helperText={firstNameError}
                              startadornment={
                                <InputAdornment position="start">
                                  <Person />
                                </InputAdornment>
                              }
                            />
                            <TextField
                              margin="dense"
                              label="Last Name"
                              value={lastName}
                              onChange={handleOnChange("lastName")}
                              error={lastNameError !== "" ? true : false}
                              helperText={lastNameError}
                              startadornment={
                                <InputAdornment position="start">
                                  <Person />
                                </InputAdornment>
                              }
                            />
                          </React.Fragment>
                        )}

                        <TextField
                          margin="dense"
                          label="Email"
                          value={email}
                          onChange={handleOnChange("email")}
                          error={emailError !== "" ? true : false}
                          helperText={emailError}
                          startadornment={
                            <InputAdornment position="start">
                              <Email />
                            </InputAdornment>
                          }
                        />

                        <TextField
                          margin="dense"
                          label="Password"
                          type="password"
                          value={password}
                          onChange={handleOnChange("password")}
                          error={passwordError !== "" ? true : false}
                          helperText={passwordError}
                          startadornment={
                            <InputAdornment position="start">
                              <Lock />
                            </InputAdornment>
                          }
                        />

                        {type === "signin" && (
                          <div class={classes.others}>
                            <Link to="/"> Forget Password?</Link>
                          </div>
                        )}

                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                        >
                          {type === "signin" ? "SignIn" : "Signup"}
                        </Button>

                        <div class={classes.socialMedia}>
                          <i class="fab fa-facebook-square" />
                          <i class="fab fa-google" />
                          <i class="fab fa-linkedin" />
                        </div>
                      </form>
                    )}
                  </Mutation>
                </div>
              )}
            </FormComponent>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
