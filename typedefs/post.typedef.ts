const {gql} = require("apollo-server-lambda");

const postTypeDefs = gql`
  type Post {
    description: String!
    id: ID! @isUnique
    imageUrl: String!
  }
  type Query {
    posts: [Post]
  }
`;


module.exports = postTypeDefs;
