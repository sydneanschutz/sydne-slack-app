# Linksquares Slack App using ⚡️ Bolt for JavaScript

## Overview

This is a Slack app built with the [Bolt for JavaScript framework][https://api.slack.com/start/building/bolt-js#create] that showcases
responding to events and interactive buttons.

## Running locally

### Setup environment variables

Ensure you have node js installed https://nodejs.org/en/download
Run `npm i`
Ensure you have a test app creating according to https://api.slack.com/start/building/bolt-js#create
Copy `.env.template` to your own `.env`
Set your apps `SLACK_BOT_TOKEN` and `SLACK_APP_TOKEN`

### Start server

```zsh
npm run dev
```

Run ngrok to expose your local server publicly

Ensure your app has the following setting set at https://api.slack.com/apps

Interactivity & Shortcuts
- Interactivity toggled on
- Request URL set to https://<<ngrok_url>>/slack/events

Event Subscriptions
- Enable events toggled on
- Request URL set to https://<<ngrok_url>>/slack/events
- Subscribe to bot events
  - app_home_opened

OAuth & Permissions
- Bot Token Scopes
  - add `chat:write`

### 4. Test

```zsh
npm test
```
