const manageRoutes = [
  {
    path: "audit",
    async lazy() {
      const { Audit } = await import("@/pages/manage/audit");
      return { Component: Audit };
    },
  },
  {
    path: "businessList",
    async lazy() {
      const { BusinessList } = await import("@/pages/manage/business");
      return { Component: BusinessList };
    },
  },
  {
    path: "userList",
    async lazy() {
      const { UserList } = await import("@/pages/manage/user");
      return { Component: UserList };
    },
  },
];

export default manageRoutes;
