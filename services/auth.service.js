import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();


broker.createService({
  name: "auth",
  actions: {
    async auth(ctx) {
      const { email, password } = ctx.params;

      if(email==='admin@gmail.com' && password==='aboba12345'){
        return {
            status: 200,
            message: 'successful',

        }
      }
      else{
        return {
            status: 400,
            message: 'Authentication failed',

        }
      }

    },
  },
});

export default broker;
