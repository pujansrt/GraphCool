import { router } from "./router";
import Hapi = require("hapi");

export const hapiServer = new Hapi.Server();
hapiServer.route(router);

exports.handler = async (event: any) => {
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
    const body = { body: response.result, statusCode: response.statusCode };
    return JSON.stringify(body);
  } catch (error) {
    console.error(error);
  }
};
