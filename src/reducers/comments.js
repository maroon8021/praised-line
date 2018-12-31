import { commentId } from '../temp';

let commentNum = 0;

const comments = (state = [], action) => {
  switch (action.type) {
		case 'ADD_COMMENT':
		commentNum++
      return [
        ...state,
        {
					id: commentNum, // can be duplicated, need to fix
					text: action.text,
					feedId: action.id
        }
      ]
    default:
      return state
  }
}
export default comments
