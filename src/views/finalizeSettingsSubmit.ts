import { ViewOutput, ViewSubmitAction } from "@slack/bolt";

export async function onFinalizeSettingsSubmit(
  body: ViewSubmitAction,
  view: ViewOutput
): Promise<any> {
  const slackUserId: string = body.user.id;
  // console.log("Hello Sydne");
  // console.log(JSON.stringify(view, null, 2));
  // Transform view["state"]["values"] into a json POST body to send to the messaging service with a LS jwt
}
