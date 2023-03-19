import gql from "graphql-tag";


export const LOGIN = gql`
mutation MyMutation($phone: String = "", $password: String = "") {
    login(inputs: {password: $password, phone: $phone}) {
      accestoken
      id
    }
  }
`;

export const SIGNUP = gql`
mutation MyMutation($fname: String = "", $lname: String = "", $password: String = "", $phone: String = "") {
    signup(input: {fname: $fname, lname: $lname, password: $password, phone: $phone}) {
      success
    }
  }
`;  