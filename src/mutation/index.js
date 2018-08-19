import { ql } from "../client";

export const SIGNIN_MUTATION = ql`
  mutation LoginMutation($email: String!, $password: String!) {
    loginMutation(email: $email, password: $password) {
      id
      token
    }
  }
`;

export const SIGNUP_MUTATION = ql`
  mutation SignupMutation($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    signupMutation(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      id
      token
    }
  }
`;
