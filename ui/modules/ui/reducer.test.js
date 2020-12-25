import * as faker from "faker";

import * as actions from "./actions";
import reducer from "./reducer";

describe("ui reducer", () => {
  it("handles initial state correctly", () => {
    expect(reducer(undefined, { type: "@@INIT" })).toEqual({
      flashMessage: null,
    });
  });

  it("handles SET_FLASH_MESSAGE correctly", () => {
    const flashMessage = { type: "success", message: faker.lorem.sentence() };
    const action = {
      type: actions.SET_FLASH_MESSAGE,
      payload: { flashMessage },
    };

    expect(reducer({}, action)).toEqual({ flashMessage });
  });
});
