import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("1234", 10),
    isAdmin: true,
  },
  {
    name: "John",
    email: "john@gmail.com",
    password: bcrypt.hashSync("1234", 10),
  },
  {
    name: "Alice",
    email: "alice@gmail.com",
    password: bcrypt.hashSync("1234", 10),
  },
];

export default users;
