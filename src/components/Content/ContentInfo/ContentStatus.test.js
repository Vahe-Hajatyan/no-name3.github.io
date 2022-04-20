import React from "react";
import { create } from "react-test-renderer";
import ContentStatus from "./ContentStatus";

describe("ContentStatus Component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ContentStatus status='IT-KAMASUTRA'/>);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("IT-KAMASUTRA");
  });
  test("after creation span whit status should be displayed whit correct status", () => {
    const component = create(<ContentStatus status='IT-KAMASUTRA'/>);
    const root = component.root;
    const span = root.findByType('span')
    expect(span.length).not.toBeNull();
  });
  test("after creation input should't be displayed", () => {
    const component = create(<ContentStatus status='IT-KAMASUTRA'/>);
    const root = component.root;
    expect(() => {
      const input = root.findByType('input')
    }).toThrow();
  });
  test("after creation span should contains correct status", () => {
    const component = create(<ContentStatus status='IT-KAMASUTRA'/>);
    const root = component.root;
    const span = root.findByType('span')
    expect(span.children[0]).toBe('IT-KAMASUTRA');
  });
  test("input should be displayed in editMod instead fo span", () => {
    const component = create(<ContentStatus status='IT-KAMASUTRA'/>);
    const root = component.root;
    const span = root.findByType('span')
    span.props.onClick();
    const input = root.findByType('input')
    expect(input.props.value).toBe('IT-KAMASUTRA');
  });
  test("callback should be called", () => {
    const mockCallback = jest.fn()
    const component = create(<ContentStatus status='IT-KAMASUTRA' updateStatus={mockCallback}/>);
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});