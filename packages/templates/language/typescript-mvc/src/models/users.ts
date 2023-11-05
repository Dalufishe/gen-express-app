interface User {
  name: string;
  title: string;
  github: string;
}

const usersModel = new (class UsersModel {
  protected users: User[] = [
    {
      name: "tj",
      title: "the man who created Express.js",
      github: "https://github.com/tj",
    },
    {
      name: "Dalufishe",
      title: "haha! this is me",
      github: "https://github.com/Dalufishe",
    },
  ];

  getUsers() {
    return this.users;
  }
})();

export default usersModel;
