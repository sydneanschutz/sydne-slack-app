import { AppHomeOpenedEvent, App, View, HomeView } from "@slack/bolt";
import { ViewsPublishResponse } from "@slack/web-api/dist/response/ViewsPublishResponse";

export async function onAppHomeOpened(event: AppHomeOpenedEvent): Promise<any> {
  const view: any = {
    type: "home",
    callback_id: "home_view",
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "Linksquares Slack notification settings",
          emoji: true,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Manage Slack notifications for Finalize events such as agreement transitions, pen holder changes, ect.",
        },
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: " Finalize Settings",
              emoji: true,
            },
            value: "finalize_settings",
            action_id: "finalize_settings",
          },
        ],
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Manage Slack notifications for Analyze events such as agreement creation",
        },
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Analyze Settings",
              emoji: true,
            },
            value: "analyze_settings",
            action_id: "analyze_settings",
          },
        ],
      },
    ],
  };

  return {
    ok: true,
    user_id: event.user,
    view: view,
  };
}
