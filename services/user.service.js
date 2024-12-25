import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

const users = [];

 function generateIds() {
  return Math.floor(Math.random() * 1000 + 1);
}

broker.createService({
  name: "user",
  actions: {
    async createUser(ctx) {
      const { username, email } = ctx.params;
      const newUser = { id: generateIds(), email, username };
      users.push(newUser);
      return newUser;
    },

    async getUsers(ctx) {
      return users;
    },
  },
});

export default broker;
