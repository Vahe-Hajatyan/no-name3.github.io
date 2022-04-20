
let initialState = {
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
}

const massagesReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SEND-MASSAGE":
      let body = action.newAddText;
      return {
        ...state,        
        MassagesData: [...state.MassagesData, { id: 7, massages: body }]
      }
    default:
      return state;
  }
}

export const sendMassageCreator = (newAddText) => {
  return {
    type: "SEND-MASSAGE",
    newAddText: newAddText
  }
}

export default massagesReducer;