import adminRoutes from "../modules/admin/routes";
import publicRoutes from "../modules/public/routes";

export default [
  {
    path: '/account',
    exact: true,
    component: Account
  },
];
