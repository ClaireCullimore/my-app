// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard';

// function getButtonText() {
//   return 'Click on Me!';
// }
// Create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
            author="Sam"
            timeAgo="Today at 17:00"
            text="Nice Blog"
            avatar={'https://source.unsplash.com/random'}
          />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 14:00"
          text="I like the subject"
          avatar={'https://source.unsplash.com/random'}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Joe"
          timeAgo="Yesterday at 11:00"
          text="Super Cool"
          avatar={'https://source.unsplash.com/random'}
        />
      </ApprovalCard>
    </div>
  );
};



// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
  );
