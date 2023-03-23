export function onAppHomeOpened(event) {
    return {
        /* the user that opened your app's app home */
        user_id: event.user,
        /* the view object that appears in the app home*/
        view: {
            type: 'home',
            callback_id: 'home_view',
            blocks: [
                {
                    type: "section",
                    text: {
                        type: "mrkdwn",
                        text: "*Manage your Linksquares Slack notification settings*"
                    }
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
                },
                {
                    type: "actions",
                    elements: [
                        {
                            type: "button",
                            text: {
                                type: "plain_text",
                                text: "Save",
                                emoji: true
                            },
                            value: "save_settings",
                            action_id: "save_settings"
                        },
                        {
                            type: "button",
                            text: {
                                type: "plain_text",
                                text: "Cancel",
                                emoji: true
                            }
                        }
                    ]
                },
                {
                    type: "divider"
                },
                {
                    type: "actions",
                    elements: [
                        {
                            type: "button",
                            text: {
                                type: "plain_text",
                                text: " Finalize Settings ",
                                emoji: true
                            },
                            value: "finalize_settings",
                            action_id: "finalize_settings"
                        }
                    ]
                },
                {
                    type: "actions",
                    elements: [
                        {
                            type: "button",
                            text: {
                                type: "plain_text",
                                text: "Analyze Settings",
                                emoji: true
                            },
                            value: "analyze_settings",
                            action_id: "analyze_settings"
                        }
                    ]
                }
            ]
        }
    }
}