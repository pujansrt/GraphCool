const {ApolloServer} = require("apollo-server-lambda");
const _ = require('lodash');
const _allTypeDefs = require("./typedefs/all.typedef");
const _postResolvers = require("./resolvers/post.resolver");
const _studentResolvers = require("./resolvers/student.resolver");

const mongoose = require('mongoose');
mongoose.connect('mongodb://root:password@ds157584.mlab.com:57584/srsdelicious');
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err: any) => {
    console.error(`Error: ${err.message}`);
});

const server = new ApolloServer({
    typeDefs: _allTypeDefs,
    resolvers: _.merge(_postResolvers, _studentResolvers),
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
