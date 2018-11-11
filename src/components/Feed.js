import React from 'react'

const Feed = ({ contents }) => {

	return (
		<div className="card article">
			<div className="card-content">
				<div className="media">
					<div className="media-center">
						<img src="http://www.radfaces.com/images/avatars/daria-morgendorffer.jpg" className="author-image" alt="Placeholder image" />
					</div>
					<div className="media-content has-text-centered">
						<p className="title article-title">{contents.title}</p>
						<p className="subtitle is-6 article-subtitle">
							<a href="#">@{contents.userName}</a> {contents.date}
            </p>
					</div>
				</div>
				<div className="content article-body">
					<p>{contents.text}</p>
					<h3 className="has-text-centered">hoge</h3>
				</div>
			</div>
		</div>
	)
}

export default Feed
