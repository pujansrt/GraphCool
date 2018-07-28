export class Customer{

    public static handler(request: any, response: any) {
        response(new Date());
    }
}