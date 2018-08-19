import React, { PureComponent } from "react";

const defaultErrorState = {
  firstNameError: "",
  lastNameError: "",
  emailError: "",
  passwordError: ""
};

const defaultState = {
  ...defaultErrorState,
  firstName: "",
  lastName: "",
  email: "",
  password: ""
};

class FormComponent extends PureComponent {
  state = {
    ...defaultState,
    type: "signin"
  };

  handleOnClick = e => {
    const type = e.target.title;
    this.setState(prevState => ({
      ...prevState,
      ...defaultState,
      type
    }));
  };

  handleOnChange = propsName => e => {
    this.setState({
      [propsName]: e.target.value
    });
  };

  async handleOnSubmit(e, mutate) {
    e.preventDefault();

    if (!this.handleValidate()) {
      // await mutate;
      console.log("submit");
    }
  }

  handleValidate = () => {
    let isError = false;
    const errors = {
      ...defaultErrorState
    };

    if (this.state.type === "signup") {
      if (this.state.firstName.length <= 0) {
        isError = true;
        errors.firstNameError = "First Name is required!";
      }
      if (this.state.lastName.length <= 0) {
        isError = true;
        errors.lastNameError = "Last Name is required!";
      }
    }

    if (this.state.email.length <= 0) {
      isError = true;
      errors.emailError = "Email is required!";
    }

    if (this.state.password.length <= 0) {
      isError = true;
      errors.passwordError = "Password is required!";
    }

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Invalid email";
    }

    this.setState(errors);

    return isError;
  };

  render = () => (
    <React.Fragment>
      {this.props.children(
        this.state,
        this.props.classes,
        this.handleOnClick.bind(this),
        this.handleOnChange.bind(this),
        this.handleOnSubmit.bind(this)
      )}
    </React.Fragment>
  );
}

export default FormComponent;
