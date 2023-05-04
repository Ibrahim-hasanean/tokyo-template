import { Role, Routes } from "src/models/common";



export const permissions = {
    [Role.Admin]: [...Object.values(Routes)],
    [Role.User]: [Routes.management, Routes.transactions, Routes.profile, Routes.details, Routes.settings]
}