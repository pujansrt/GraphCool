const {ApolloServer} = require("apollo-server-lambda");
const _ = require('lodash');
const _postTypeDefs = require("./typedefs/post.typedef");
const _postResolvers = require("./resolvers/post.resolver");

const server = new ApolloServer({
    typeDefs: _postTypeDefs,
    resolvers: _.merge(_postResolvers),
    // context: ({event, context}) => ({
    //     headers: event.headers,
    //     functionName: context.functionName,
    //     event,
    //     context
    // })
});

exports.graphql = server.createHandler({
    cors: {
        origin: "*",
        credentials: true
    }
});
