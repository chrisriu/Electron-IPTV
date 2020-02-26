export class User {
    id: number;
    username: String;
    password: String;
    auth: Number;
    status: Boolean;
    exp_date?: String;
    is_trial: Boolean;
    active_cons: Number;
    created_date: String;
    max_connections: Number;
    token?: string;
}