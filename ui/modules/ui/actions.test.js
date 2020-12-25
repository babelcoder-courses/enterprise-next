import * as actions from "./actions";

describe("ui actions", () => {
  it("handles clearFlashMessage correctly", () => {
    expect(actions.clearFlashMessage()).toEqual({
      type: actions.CLEAR_FLASH_MESSAGE,
    });
  });
});
