import contentReducer, { addPostCreator } from "./contentReducer";

test("length fo posts should be incremented", () => {
  let action = addPostCreator("aloooo");

  let state = {
    Posts: [
      { id: 1, massages: "Hi, how are you", lake: 15 },
      { id: 2, massages: "It's my first post", lake: 20 },
    ],
  };
  let newState = contentReducer(state, action);

  expect(newState.Posts.length).toBe(3);
});
