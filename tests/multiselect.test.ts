import { expect, test } from "bun:test";
import { initMultiSelect } from "../src/form/multiselect.js";

function emitter() {
  const listeners = new Map<string, (event?: any) => void>();
  return {
    listeners,
    addEventListener(name: string, listener: (event?: any) => void) {
      listeners.set(name, listener);
    },
    emit(name: string, event?: any) {
      listeners.get(name)?.(event);
    },
  };
}

test("searchable multiselect filters options and keeps checked choices", () => {
  const summary = {
    textContent: "Select genres",
    focused: false,
    focus() {
      this.focused = true;
    },
  };
  const search = {
    ...emitter(),
    value: "",
    focused: false,
    focus() {
      this.focused = true;
    },
  };
  const empty = { hidden: true };
  const choices = ["Adventure", "Drama", "Mystery"].map((name) => {
    const checkbox = { checked: false, matches: () => true };
    return {
      textContent: name,
      hidden: false,
      checkbox,
      querySelector(selector: string) {
        return selector === "span" ? { textContent: name } : checkbox;
      },
    };
  });
  const document = emitter();
  const root = {
    ...emitter(),
    open: false,
    ownerDocument: document,
    querySelector(selector: string) {
      if (selector === "[data-multiselect-label]") return summary;
      if (selector === ".multi-select__search") return search;
      if (selector === ".multi-select__empty") return empty;
      return summary;
    },
    querySelectorAll: () => choices,
    contains: (target: unknown) => target === search,
  };

  initMultiSelect(root);
  root.open = true;
  root.emit("toggle");
  expect(search.focused).toBe(true);

  search.value = "mys";
  search.emit("input");
  expect(choices.map((choice) => choice.hidden)).toEqual([true, true, false]);
  expect(empty.hidden).toBe(true);

  choices[2].checkbox.checked = true;
  root.emit("change", { target: choices[2].checkbox });
  expect(summary.textContent).toBe("Mystery");

  search.value = "absent";
  search.emit("input");
  expect(empty.hidden).toBe(false);
  expect(choices[2].checkbox.checked).toBe(true);

  root.emit("keydown", { key: "Escape" });
  expect(root.open).toBe(false);
  expect(summary.focused).toBe(true);
  root.emit("toggle");
  expect(search.value).toBe("");
  expect(choices.every((choice) => !choice.hidden)).toBe(true);

  root.open = true;
  document.emit("pointerdown", { target: {} });
  expect(root.open).toBe(false);

  root.open = true;
  document.emit("focusin", { target: {} });
  expect(root.open).toBe(false);

  root.open = true;
  document.emit("pointerdown", { target: search });
  expect(root.open).toBe(true);

  initMultiSelect(root);
  expect(document.listeners.size).toBe(2);
});
