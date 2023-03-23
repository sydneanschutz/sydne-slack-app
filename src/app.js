// Require the Bolt package (github.com/slackapi/bolt)
import {App} from "@slack/bolt";
import dotenv from "dotenv";
import {onAppHomeOpened} from "./events/appHomeOpened";
import {onFinalizeSettingsAction} from "./actions/finalizeSettings";

dotenv.config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// All the room in the world for your code

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();

console.log('here')

app.event('app_home_opened', async ({ event, client, context }) => {
  try {
    /* view.publish is the method that your app uses to push a view to the Home tab */
    const result = await client.views.publish(onAppHomeOpened(event));
  }
  catch (error) {
    console.error(error);
  }
});

// Listen for a button invocation with action_id `button_abc` (assume it's inside of a modal)
// You must set up a Request URL under Interactive Components on your app configuration page
app.action('finalize_settings', async ({ ack, body, context }) => {
  // Acknowledge the command request
  ack();

  try {
    const result = await app.client.views.open(onFinalizeSettingsAction(context, body));
    console.log(result);
  }
  catch (error) {
    console.error(error);
  }
});

