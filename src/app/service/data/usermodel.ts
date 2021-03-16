export class UserProfile{
    userid: number;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    phone: string;
    country: string;
    state: string;
    address: string;
    pincode: number;
    passcode: string;
    verified: string;

    public constructor(init?: Partial<UserProfile>) {
        Object.assign(this, init);
    }
}