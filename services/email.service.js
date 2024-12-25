import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();



broker.createService({
  name: "email",
  actions: {
    async sendEmail(ctx) {
      const { recepient, subject, content } = ctx.params;
      console.log(`Sending email to ${recepient} with content ${content}`)
      console.log('here is the content of the email: ', content)
      return `Email sent to ${recepient} successfully...`;
    },
  },
});

export default broker;
