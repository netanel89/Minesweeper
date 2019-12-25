import React from "react";
import "../../setupTest";
import { Provider } from "react-redux";
import GameConfig from "./GameConfig";
import {
  MAX_HEIGHT,
  MAX_WIDTH,
  GAME_OVER,
  GAME_DONE_STATUS,
  GAME_OVER_STATUS
} from "../../common/constants";
import { INIT_GAME, SET_SUPERMAN_MODE } from "../../common/actionsTypes";
import { resetGame, setSupermanMode } from "../../actions/gameActions";
import initialState from "../../store/initialState";
import configureMockStore from "redux-mock-store";
import { mount } from "enzyme";

const mockStore = configureMockStore([]);

describe("Config bar testing", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    component = mount(
      <Provider store={store}>
        <GameConfig />
      </Provider>
    );
  });

  describe("config inputs and submit", () => {
    it(`should not allow more than ${MAX_WIDTH} width and less than 1`, () => {
      const input = component.find("#width-input").first();
      input.simulate("change", {
        target: { value: MAX_WIDTH + 1, valueAsNumber: MAX_WIDTH + 1 }
      });
      expect(input.prop("value")).toBeLessThan(MAX_WIDTH + 1);
      input.simulate("change", { target: { value: 0 } });
      expect(input.prop("value")).toBeGreaterThan(1);
    });

    it(`should not allow less than ${MAX_HEIGHT} height and less than 1`, () => {
      const input = component.find("#height-input").first();
      input.simulate("change", {
        target: { value: MAX_HEIGHT + 1, valueAsNumber: MAX_HEIGHT + 1 }
      });
      expect(input.prop("value")).toBeLessThan(MAX_HEIGHT + 1);
      input.simulate("change", { target: { value: 0 } });
      expect(input.prop("value")).toBeGreaterThan(1);
    });

    it(`should not allow more than all-board mines`, () => {
      const heightInput = component.find("#height-input").first();
      const widthInput = component.find("#width-input").first();
      const minesInput = component.find("#mines-input").first();

      const TEST_WIDTH = 50;
      const TEST_HEIGHT = 60;

      heightInput.simulate("change", {
        target: { value: TEST_HEIGHT, valueAsNumber: TEST_HEIGHT }
      });
      widthInput.simulate("change", {
        target: { value: TEST_WIDTH, valueAsNumber: TEST_WIDTH }
      });
      minesInput.simulate("change", {
        target: {
          value: TEST_WIDTH * TEST_HEIGHT + 1,
          valueAsNumber: TEST_WIDTH * TEST_HEIGHT + 1
        }
      });

      expect(minesInput.prop("value")).toBeLessThan(
        TEST_WIDTH * TEST_HEIGHT + 1
      );
    });

    it("should disapath a reset game action", () => {
      const btn = component.find("#reset-btn").first();
      const heightInput = component.find("#height-input").first();
      const widthInput = component.find("#width-input").first();
      const minesInput = component.find("#mines-input").first();

      const TEST_WIDTH = 40;
      const TEST_HEIGHT = 50;
      const TEST_MINES = 60;

      heightInput.simulate("change", {
        target: { value: TEST_HEIGHT, valueAsNumber: TEST_HEIGHT }
      });
      widthInput.simulate("change", {
        target: { value: TEST_WIDTH, valueAsNumber: TEST_WIDTH }
      });
      minesInput.simulate("change", {
        target: { value: TEST_MINES, valueAsNumber: TEST_MINES }
      });

      const config = {
        width: TEST_WIDTH,
        height: TEST_HEIGHT,
        mines: TEST_MINES,
        isSuperman: false
      };

      btn.simulate("click");
      expect(store.dispatch).toHaveBeenCalledTimes(1);
      expect(store.dispatch).toHaveBeenCalledWith({
        type: INIT_GAME,
        payload: config
      });
    });
  });

  describe("superman mode btn", () => {
    it("should disapath a superman mode action like a toggle", () => {
      const btn = component.find("#superman-switch").first();
      btn.simulate("click");

      expect(store.dispatch).toHaveBeenCalledWith({ type: SET_SUPERMAN_MODE });

      btn.simulate("click");

      expect(store.dispatch).toHaveBeenCalledTimes(2);
      expect(store.dispatch).toHaveBeenCalledWith({ type: SET_SUPERMAN_MODE });
    });

    it("should turn superman mode btn to disabled when game over", () => {
      initialState.game.status = GAME_OVER_STATUS;
      store = mockStore(initialState);
      component = mount(
        <Provider store={store}>
          <GameConfig />
        </Provider>
      );

      const btn = component.find("#superman-switch").first();
      expect(btn.getDOMNode().hasAttribute("disabled")).toBe(true);
    });

    it("should turn superman mode btn to disabled when game done", () => {
      initialState.game.status = GAME_DONE_STATUS;
      store = mockStore(initialState);
      component = mount(
        <Provider store={store}>
          <GameConfig />
        </Provider>
      );

      const btn = component.find("#superman-switch").first();
      expect(btn.getDOMNode().hasAttribute("disabled")).toBe(true);
    });
  });
});
