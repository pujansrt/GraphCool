import { router } from "./router";
import Hapi = require("hapi");

export const hapiServer = new Hapi.Server();
hapiServer.route(router);

exports.handler = async (event: any, context: any) => {
  // map lambda event to hapi request
  const options = {
    method: event.httpMethod,
    url: event.path,
    payload: event.body,
    headers: event.headers,
    validate: false
  };

  try {
    const response = await hapiServer.inject(options);
    return { body: response.result, statusCode: response.statusCode };
  } catch (error) {
    console.error(error);
  }
};
