{
  // type guards

  //in guard
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and I am ${user.role}`);
    } else {
      console.log(`My name is ${user.name} and I am member`);
    }
  };
  const normaluser: NormalUser = { name: "Member" };
  const adminuser: AdminUser = { name: "Admin", role: "admin" };
  getUser(normaluser);
  getUser(adminuser);
}
