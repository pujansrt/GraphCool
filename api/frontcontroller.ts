import {router} from "./router";

const Hapi = require('hapi');
export const hapiServer = new Hapi.Server();
hapiServer.connection();
hapiServer.route(router);

exports.handler = (event: any, context: any, callback: any) => {

    // map lambda event to hapi request
    const options = {
        method: event.httpMethod,
        url: event.path,
        payload: event.body,
        headers: event.headers,
        validate: false
    };

    hapiServer.inject(options, (response: any) => {
        callback(null, {
            statusCode: response.statusCode,
            body: response.result
        });
    });

};
