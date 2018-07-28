import {Customer} from "../src/v1/customer/handler";

export const router = [
    {
        method: 'GET',
        path: '/',
        handler: (request: any, response: any) => {
            response(process.env);
        }
    },
    {
        method: 'GET',
        path: '/date',
        handler: Customer.handler
    }];