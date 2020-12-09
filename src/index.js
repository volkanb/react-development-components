import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className='ui container comments'>
			<ApprovalCard>
				<CommentDetail
					author='Sam'
					timeAgo='Today at 4:45PM'
					content='Nice blog post!'
					avatar={faker.image.image()}
				/>
			</ApprovalCard>
			<CommentDetail
				author='Alex'
				timeAgo='Today at 2:00AM'
				content='Not a good post!'
				avatar={faker.image.image()}
			/>
			<CommentDetail
				author='Jane'
				timeAgo='Yesterday at 5:00PM'
				content='Props are great!'
				avatar={faker.image.image()}
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
