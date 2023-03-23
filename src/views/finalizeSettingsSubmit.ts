import { ViewOutput, ViewSubmitAction } from "@slack/bolt";

export async function onFinalizeSettingsSubmit(
  body: ViewSubmitAction,
  view: ViewOutput
): Promise<any> {
  console.log("Hello Sydne");
  console.log(JSON.stringify(view["state"]["values"]));
  // Transform view["state"]["values"] into a json POST body to send to the messaging service
}
