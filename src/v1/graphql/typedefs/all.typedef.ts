
const { gql } = require("apollo-server-lambda");

const allTypeDefs = gql`
  type Post {
    description: String!
    id: ID! @isUnique
    imageUrl: String!
  }

  type Student {
    name: String
    email: String
    phone: String
    gender: String
    dob: String
    address: String
    courses: [String]
    created: String
  }

  type Query {
    posts: [Post]
    students(pageSize: Int = 10, pageNumber: Int = 1): [Student]
  }

`;

module.exports = allTypeDefs;
