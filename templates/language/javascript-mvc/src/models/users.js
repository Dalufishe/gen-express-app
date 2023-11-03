
const usersModel = new (class UsersModel {

  #users = [
    { name: "tj", title: "the man who created Express.js", github: "https://github.com/tj" },
    { name: "Dalufishe", title: "haha! this is me", github: "https://github.com/Dalufishe" },
  ]

  getUsers() {
    return this.#users
  }

})()

export default usersModel
