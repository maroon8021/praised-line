let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const addFeed = content => ({
	type: 'ADD_FEED',
	id: content.id,
	title: content.title,
	userName: content.userName,
	date: content.date,
  text: content.text,
  comments: content.comments
})

/**
 * How to get id?
 * @param {*} content 
 */
export const addComment = (id, content) => ({
	type: 'ADD_COMMENT',
  id: content.id,
  text: content.text
})

/*
どのタイプで、何を渡すのか
*/
