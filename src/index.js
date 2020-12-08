import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
	return (
		<div className='ui container comments'>
			<CommentDetail
				author='Sam'
				timeAgo='Today at 4:45PM'
				commentText='Nice blog post!'
				imgSrc={faker.image.image()}
			/>
			<CommentDetail
				author='Alex'
				timeAgo='Today at 2:00AM'
				commentText='Not a good post!'
				imgSrc={faker.image.image()}
			/>
			<CommentDetail
				author='Jane'
				timeAgo='Yesterday at 5:00PM'
				commentText='Props are great!'
				imgSrc={faker.image.image()}
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
