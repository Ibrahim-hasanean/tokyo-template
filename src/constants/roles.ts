import { Role, PagesRoutes } from "src/models/common";



export const Roles = {
    [Role.Admin]: [...Object.values(PagesRoutes)],
    [Role.User]: [PagesRoutes.management, PagesRoutes.transactions, PagesRoutes.profile, PagesRoutes.details, PagesRoutes.settings]
}