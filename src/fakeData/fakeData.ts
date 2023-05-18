import { Role } from "src/models/common";

export const users = [
    { email: "admin@admin.com", password: "123456", role: Role.Admin },
    { email: "user@user.com", password: "123456", role: Role.User }
]

export function signIn(email: string, password: string) {
    let user = users.find(x => x.email === email);
    return user?.password === password ? user : undefined;
}