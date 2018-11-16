let idCount = 0;
let commentId = 0;
export const tempFeedData = content => ({
	id: idCount++,
	title: 'Sample Feed',
	userName: 'Sample User',
	date: '2018/11/11',
	text: 'This is sample data for text. This can be explaination for what you did as good things',
	comments: [
		{
			id: String(commentId++),
			icon: 'hoge',
			text: 'This seems fine and good! Nice work!!'
		}
	]
})
