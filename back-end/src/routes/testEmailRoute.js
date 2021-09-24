import { sendEmail } from '../util/sendEmail';

export const testEmailRoute = {
  path: '/api/test-email',
  method: 'post',
  handler: async (req, res) => {
    try {
      await sendEmail({
        to: 'regilearn+test@gmail.com',
        from: 'regilearn@gmail.com',
        subject: 'Does this work?',
        text: "If you're reading this... yes!",
      });
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
};
