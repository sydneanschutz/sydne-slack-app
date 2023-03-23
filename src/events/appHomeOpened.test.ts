import { describe, it, expect } from "vitest";
import { onAppHomeOpened } from "./appHomeOpened";
import { AppHomeOpenedEvent } from "@slack/bolt";

describe("app home opened view", function () {
  it("returns this view", function () {
    const event: AppHomeOpenedEvent = {
      type: "app_home_opened",
      user: "123",
      channel: "456",
      event_ts: "test",
    };

    expect(onAppHomeOpened(event)).toBeDefined();
  });
});
