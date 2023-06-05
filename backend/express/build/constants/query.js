"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USER_QUERY_BY_ID = exports.INSERT_SELLERS = exports.INSERT_CUSTOMERS = void 0;
var USER_QUERY_BY_ID = "\nquery MyQuery($email: String = \"\", $phone: String = \"\") {\n    users(where: {_or:[{email:{_eq: $email }}, {phone: {_eq: $phone}}]}) {\n      id\n      email\n      phone\n      password\n      role{\n        name\n      }\n    }\n  }\n";
exports.USER_QUERY_BY_ID = USER_QUERY_BY_ID;
var INSERT_CUSTOMERS = "\nmutation MyMutation($first_name: String = \"\", $last_name: String = \"\", $password: String = \"\", $phone: String = \"\") {\n  insert_customers(objects: {first_name: $first_name, last_name: $last_name, password: $password, phone: $phone}) {\n    affected_rows\n    returning {\n      id\n    }\n  }\n}\n";
exports.INSERT_CUSTOMERS = INSERT_CUSTOMERS;
var INSERT_SELLERS = "\nmutation MyMutation($first_name: String = \"\", $last_name: String = \"\", $password: String = \"\", $phone: String = \"\", $role_id: uuid = \"\", $id: uuid = \"\") {\n  insert_users(objects: {first_name: $first_name, last_name: $last_name, password: $password, phone: $phone, role_id: $role_id, id: $id}) {\n    returning {\n      id\n    }\n  }\n}\n";
exports.INSERT_SELLERS = INSERT_SELLERS;