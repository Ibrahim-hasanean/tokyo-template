export enum Role {
    Admin,
    User
}

export interface IUser {
    email: string, password: string, role: Role
}
export const permissions = {
    "dashboards.cryptocurrency": [Role.Admin, Role.User],
    "dashboards.messenger": [Role.Admin, Role.User],
    "transaction.transactionlist": [Role.Admin],
    "transaction.profile": [Role.Admin],
    "transaction.settings": [Role.Admin],
    "transaction.profileDetailes": [Role.Admin],
    "components.buttons": [Role.Admin, Role.User],
    "components.modals": [Role.Admin, Role.User],
    "components.accordions": [Role.Admin, Role.User],
    "components.tabs": [Role.Admin, Role.User],
    "components.badges": [Role.Admin, Role.User],
    "components.cards": [Role.Admin, Role.User],
    "components.avatars": [Role.Admin, Role.User],
    "components.forms": [Role.Admin, Role.User],
    "components.tooltips": [Role.Admin, Role.User],
}

export type permissionsNames = keyof typeof permissions;

export const PagesRoutes = {
    signIn: { path: "auth/sign-in" },
    dashboards: { path: "" },
    crypto: { path: "dashboards/crypto", permission: permissions["dashboards.cryptocurrency"] },
    messenger: { path: "dashboards/messenger", permission: permissions["dashboards.messenger"] },
    management: { path: "/" },
    transactions: { path: "management/transactions", permission: permissions["transaction.transactionlist"] },
    transactionsChild: { path: "management/transactions/child", permission: permissions["transaction.transactionlist"] },
    profile: { path: "", permission: permissions["transaction.profile"] },
    details: { path: "management/profile/details", permission: permissions["transaction.profileDetailes"] },
    settings: { path: "management/profile/settings", permission: permissions[""] },
    components: { path: "" },
    buttons: { path: "components/buttons", permission: permissions["components.buttons"] },
    modals: { path: "components/modals", permission: permissions["components.modals"] },
    accordions: { path: "components/accordions", permission: permissions["components.accordions"] },
    tabs: { path: "components/tabs", permission: permissions["components.tabs"] },
    badges: { path: "components/badges", permission: permissions["components.badges"] },
    tooltips: { path: "components/tooltips", permission: permissions["components.tooltips"] },
    avatars: { path: "components/avatars", permission: permissions["components.avatars"] },
    cards: { path: "components/cards", permission: permissions["components.cards"] },
    forms: { path: "components/forms", permission: permissions["components.forms"] },
}
