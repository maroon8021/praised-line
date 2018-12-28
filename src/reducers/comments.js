const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
					id: action.id, // can be duplicated, need to fix
          text: action.text
        }
      ]
    default:
      return state
  }
}
export default comments
