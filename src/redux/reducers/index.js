const initialState = {
  favouriteCompany: { content: [] },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favouriteCompany: {
          ...state.favouriteCompany,
          content: state.favouriteCompany.content.concat(action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
