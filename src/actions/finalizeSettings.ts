import { BlockAction, Context } from "@slack/bolt";
import { client, MarkdownOption } from "../client";

export async function onFinalizeSettingsAction(
  context: Context,
  body: BlockAction
): Promise<any> {
  const data: any = client.messaging.getUserFinalizeSettings(body.user.id);

  let specificToMeOptions: MarkdownOption[] = [
    {
      text: {
        type: "mrkdwn",
        text: "*Agreement owner*",
      },
      description: {
        type: "mrkdwn",
        text: "If you’re added as an agreement owner, you will receive an email to notify you.",
      },
      value: "agreement_owner_assigned",
    },
    {
      text: {
        type: "mrkdwn",
        text: "*Pen*",
      },
      description: {
        type: "mrkdwn",
        text: "If you’re handed the pen, you will receive an email to notify you.",
      },
      value: "pen_assigned",
    },
    {
      text: {
        type: "mrkdwn",
        text: "*Added as a collaborator*",
      },
      description: {
        type: "mrkdwn",
        text: "If you’re added as a collaborator, you will receive an email to notify you.",
      },
      value: "collaborator_added",
    },
    {
      text: {
        type: "mrkdwn",
        text: "*Task Deleted*",
      },
      description: {
        type: "mrkdwn",
        text: "If a task your assigned to is deleted, you will receive a notification.",
      },
      value: "delete_task",
    },
  ];

  let specificToMeInitialOptions = specificToMeOptions.filter(
    (o) => data[o.value] === true
  );

  let agreementStatusUpdateOptions: MarkdownOption[] = [
    {
      text: {
        type: "mrkdwn",
        text: "Request pending",
      },
      value: "request_assigned",
    },
    {
      text: {
        type: "mrkdwn",
        text: "Internal review",
      },
      value: "internal_review",
    },
    {
      text: {
        type: "mrkdwn",
        text: "Counterparty review",
      },
      value: "counterparty_review",
    },
    {
      text: {
        type: "mrkdwn",
        text: "Draft Uploaded",
      },
      value: "draft_uploaded",
    },
    {
      text: {
        type: "mrkdwn",
        text: "Ready for Signature",
      },
      value: "ready_for_signature",
    },
    {
      text: {
        type: "mrkdwn",
        text: "Done",
      },
      value: "done",
    },
    {
      text: {
        type: "mrkdwn",
        text: "Paused",
      },
      value: "paused",
    },
  ];

  let agreementStatusUpdateInitialOptions = agreementStatusUpdateOptions.filter(
    (o) => data[o.value] === true
  );

  const blocks = [
    {
      type: "divider",
    },
    {
      type: "header",
      text: {
        type: "plain_text",
        text: "Settings Specific to me",
        emoji: true,
      },
    },
    {
      type: "input",
      optional: true,
      label: {
        type: "plain_text",
        text: "Settings Specific to me",
      },
      element: {
        type: "checkboxes",
        initial_options: specificToMeInitialOptions,
        options: specificToMeOptions,
        action_id: "specific_to_me_settings",
      },
    },
    {
      type: "divider",
    },
    {
      type: "input",
      optional: true,
      label: {
        type: "plain_text",
        text: "Agreement status updates",
      },
      element: {
        type: "checkboxes",
        initial_options: agreementStatusUpdateInitialOptions,
        options: agreementStatusUpdateOptions,
        action_id: "agreement_status_update_settings",
      },
    },
  ];

  return {
    token: context.botToken,
    trigger_id: body.trigger_id,
    view: {
      type: "modal",
      callback_id: "submit_finalize_settings",
      title: {
        type: "plain_text",
        text: "Finalize Notifications",
      },
      blocks: blocks,
      submit: {
        type: "plain_text",
        text: "Submit",
      },
    },
  };
}
