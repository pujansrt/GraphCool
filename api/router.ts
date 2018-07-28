import {Customer} from "../src/v1/customer/handler";

const router1: any[] = [];
const router2: any[] = [
    {
        method: 'GET',
        path: '/',
        handler: (request: any, response: any) => {
            return process.env;
        }
    },
    {
        method: 'GET',
        path: '/date',
        handler: Customer.handler
    },
];

export const router = [...router1, ...router2];