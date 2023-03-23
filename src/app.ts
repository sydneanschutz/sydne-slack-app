import { App, AppHomeOpenedEvent } from "@slack/bolt";
import dotenv from "dotenv";
import { onAppHomeOpened } from "./events/appHomeOpened";
import { onFinalizeSettingsAction } from "./actions/finalizeSettings";
import { onFinalizeSettingsSubmit } from "./views/finalizeSettingsSubmit";

dotenv.config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

(async () => {
  await app.start((process.env.PORT || 3000) as any);
  console.log("⚡️ Bolt app is running!");
})();

app.event("app_home_opened", async ({ event, client, context }) => {
  const e = event as AppHomeOpenedEvent;

  try {
    await client.views.publish(await onAppHomeOpened(e));
  } catch (error) {
    console.error(error);
  }
});

app.action("finalize_settings", async ({ ack, body, context }) => {
  await ack();

  try {
    await app.client.views.open(await onFinalizeSettingsAction(context, body));
  } catch (error) {
    console.error(error);
  }
});

app.view(
  "submit_finalize_settings",
  async ({ ack, body, view, client, logger }) => {
    await ack();

    try {
      await app.client.views.open(await onFinalizeSettingsSubmit(body, view));
    } catch (error) {
      console.error(error);
    }
  }
);
