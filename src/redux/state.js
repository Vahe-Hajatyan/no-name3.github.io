import massagesReducer from "./massagesReducer";
import contentReducer from "./contentReducer";

let store = {
  _state: {
    contentPage: {
      Posts: [
        { id: 1, massages: "Hi, how are you", lake: 15 },
        { id: 2, massages: "It's my first post", lake: 20 },
      ],
      newPostText: "",
    },
    massagesPage: {
      DialogsData: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" },
      ],
      MassagesData: [
        { id: 1, massages: "Hi, How are you" },
        { id: 2, massages: "hi" },
        { id: 3, massages: "hello" },
        { id: 4, massages: "What's your name" },
        { id: 5, massages: "hey" },
        { id: 6, massages: "yo" },
      ],
      newMassageBody: "",
    },
  },

  _callSubscriber() {
    console.log("samurai changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.contentPage = contentReducer(this._state.contentPage, action);
    this._state.massagesPage = massagesReducer(this._state.massagesPage, action)
    
    this._callSubscriber(this._state);

  },
};

export default store;