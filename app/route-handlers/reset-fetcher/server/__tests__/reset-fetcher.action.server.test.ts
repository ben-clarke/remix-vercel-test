import { route } from "@auth/__tests__/testing-route-utils";
import { action } from "../reset-fetcher.action.server";

describe("reset fetcher", () => {
  test("returns null", async () => {
    const response = await route(action, {
      request: new Request("http://localhost/reset-fetcher"),
    });

    expect(response).toBe(null);
  });
});
