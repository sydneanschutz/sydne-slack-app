export function onFinalizeSettingsAction(context, body) {
    return {
        token: context.botToken,
        // Pass a valid trigger_id within 3 seconds of receiving it
        trigger_id: body.trigger_id,
        // View payload
        view: {
            type: 'modal',
            // View identifier
            callback_id: 'view_1',
            title: {
                type: 'plain_text',
                text: 'Finalize Notifications'
            },
            blocks: [
                {
                    type: "divider"
                },
                {
                    type: "section",
                    text: {
                        type: "mrkdwn",
                        text: "*Settings Specific to me*\n When the following actions occur, you will receive a notification."
                    }
                },
                {
                    type: "input",
                    label: {
                        type: "plain_text",
                        text: " "
                    },
                    element: {
                        type: "checkboxes",
                        initial_options: [
                            {
                                text: {
                                    type: "mrkdwn",
                                    text: "*Agreement owner*"
                                },
                                description: {
                                    type: "mrkdwn",
                                    text: "If you’re added as an agreement owner, you will receive an email to notify you."
                                },
                                value: "value-0"
                            },
                            {
                                text: {
                                    type: "mrkdwn",
                                    text: "*Pen*"
                                },
                                description: {
                                    type: "mrkdwn",
                                    text: "If you’re handed the pen, you will receive an email to notify you."
                                },
                                value: "value-1"
                            },
                            {
                                text: {
                                    type: "mrkdwn",
                                    text: "*Added as a collaborator*"
                                },
                                description: {
                                    type: "mrkdwn",
                                    text: "If you’re added as a collaborator, you will receive an email to notify you."
                                },
                                value: "value-2"
                            }
                        ],
                        options: [
                            {
                                text: {
                                    type: "mrkdwn",
                                    text: "*Agreement owner*"
                                },
                                description: {
                                    type: "mrkdwn",
                                    text: "If you’re added as an agreement owner, you will receive an email to notify you."
                                },
                                value: "value-0"
                            },
                            {
                                text: {
                                    type: "mrkdwn",
                                    text: "*Pen*"
                                },
                                description: {
                                    type: "mrkdwn",
                                    text: "If you’re handed the pen, you will receive an email to notify you."
                                },
                                value: "value-1"
                            },
                            {
                                text: {
                                    type: "mrkdwn",
                                    text: "*Added as a collaborator*"
                                },
                                description: {
                                    type: "mrkdwn",
                                    text: "If you’re added as a collaborator, you will receive an email to notify you."
                                },
                                value: "value-2"
                            }
                        ],
                        action_id: "actionId-0"
                    }
                },
                {
                    type: "divider"
                },
                {
                    type: "section",
                    text: {
                        type: "mrkdwn",
                        text: "*Agreement status updates*\n You will receive a notification for the following status updates on agreements you are a collaborator, agreement owner, or approver on."
                    }
                },
                {
                    type: "input",
                    label: {
                        type: "plain_text",
                        text: " "
                    },
                    element: {
                        type: "checkboxes",
                        options: [
                            {
                                text: {
                                    type: "mrkdwn",
                                    text: "Request pending"
                                },
                                value: "value-0"
                            },
                            {
                                text: {
                                    type: "mrkdwn",
                                    text: "Internal review"
                                },
                                value: "value-1"
                            },
                            {
                                text: {
                                    type: "mrkdwn",
                                    text: "Counterparty review"
                                },
                                value: "value-2"
                            }
                        ],
                        action_id: "actionId-1"
                    }
                }
            ],
            submit: {
                type: 'plain_text',
                text: 'Submit'
            }
        }
    }
}