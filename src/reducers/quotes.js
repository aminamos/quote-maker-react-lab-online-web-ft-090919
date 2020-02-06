export default (state = [], action) => {
  let index;

  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      index = state.findIndex(quote => quote.id === action.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    case "UPVOTE_QUOTE":
      index = state.findIndex(quote => quote.id === action.id);
      let quote = state[index]
      console.log(quote)
      // quote.votes += 1
      return [...state,]
    case "DOWNVOTE_QUOTE":
      return 'hi'
    default:
      return state;
  }
}
