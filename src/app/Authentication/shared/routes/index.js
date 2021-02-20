export const authRoutes = [
  {
    path: "/auth",
    component: () => import("../../AuthenticationPage"),
    children: [
      {
        path: "login",
        component: () => import("../components/login")
      },
      {
        path: "register",
        component: () => import("../components/register")
      }
    ]
  }
];
