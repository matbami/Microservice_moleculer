// import { ServiceBroker } from "moleculer";

// const broker = new ServiceBroker()
// broker.createService({
//     name: 'greeter',
//     actions:{
//         sayHello(ctx){
//             return `Hello ${ctx.params.name}`
//         }
//     }
// })

// async  function StartApp() {
//     await broker.start();
//     const res = await broker.call('greeter.sayHello',{name: 'Ayo'})
//     console.log(res)
//     broker.stop()
// }

// StartApp( )

import UserService from "./services/user.service.js";
import EmailService from "./services/email.service.js";
import AuthService from "./services/auth.service.js";

async function startApp() {
  await Promise.all([
    UserService.start(),
    EmailService.start(),
    AuthService.start(),
  ]);
  try {
    //simulate user creation
    const newUser = await UserService.call("user.createUser", {
      username: "Ayo",
      email: "admin@gmail.com",
    });
    console.log("new user created: ", newUser);

    const users = await UserService.call("user.getUsers");

    //simulate  send email
    const sendEmail = await EmailService.call("email.sendEmail", {
      recepient: newUser.email,
      subject: "This is a test email",
      content: "2025 is gonna be very very good",
    });

    console.log(sendEmail);
    console.log("All users: ", users);

    //simulateAuth

    const auth = await AuthService.call("auth.auth", {
      email: newUser.email,
      password: "aboba12345",
    });
    console.log(auth);
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    await Promise.all([
      UserService.stop(),
      AuthService.stop(),
      EmailService.stop(),
    ]);
  }
}

startApp();
