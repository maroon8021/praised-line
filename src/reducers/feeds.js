const feeds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FEED':
      return [
        ...state,
        {
					id: action.id, //can be fixed to string
					title: action.title,
					userName: action.userName,
					date: action.date,
          text: action.text
        }
      ]
    default:
      return state
  }
}
export default feeds
