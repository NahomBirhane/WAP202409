import { ChangeEvent, useState } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import dayjs from 'dayjs';
// import { v4 as uuidv4 } from 'uuid';
import './App.scss';
import avatar from './images/bozai.png';


// Comment List data
const defaultList = [
  {
    // comment id
    rpid: 3,
    // user info
    user: {
      uid: '13258165',
      avatar: '',
      uname: 'Jay Zhou',
    },
    // comment content
    content: 'Nice, well done',
    // created datetime
    ctime: '10-18 08:15',
    like: 88,
  },
  {
    rpid: 2,
    user: {
      uid: '36080105',
      avatar: '',
      uname: 'Song Xu',
    },
    content: 'I search for you thousands of times, from dawn till dusk.',
    ctime: '11-13 11:29',
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: '30009257',
      avatar,
      uname: 'John',
    },
    content: 'I told my computer I needed a break... now it will not stop sending me vacation ads.',
    ctime: '10-19 09:00',
    like: 66,
  },
]
// current logged in user info
const loggedInUser = {
  // userid
  uid: '30009257',
  // profile
  avatar,
  // username
  uname: 'John',
}

// Nav Tab
const tabs = [
  { type: 'hot', text: 'Top' },
  { type: 'newest', text: 'Newest' },
]

interface Comment {
  rpid: number;
  // user info
  user: {
    uid: string;
    avatar: string;
    uname: string;
  },
  // comment content
  content: string;
  // created datetime
  ctime: string;
  like: number;
}


const App = () => {

  const [comments, setComments] = useState<Comment[]>(_.orderBy(defaultList, 'like', 'desc'));
  const [activeTab, setActiveTab] = useState('hot');
  const [content, setContent] = useState('');

  const handleTabChange = (type: string) => {
    setActiveTab(type);
    if(type === 'hot'){
      setComments(_.orderBy(comments, 'like', 'desc'));
    } else {
      setComments(_.orderBy(comments, 'ctime', 'desc'));
    }
  }
  // 10-19 09:00
  const handleSubmit = () => {
    const newComment = {
      rpid: comments.length + 1,
      user: loggedInUser,
      content,
      ctime: dayjs().format('MM-DD HH:mm'),
      like: 0,
    };
    if(activeTab === 'hot'){
      setComments(_.orderBy([newComment, ...comments], 'like', 'desc'));
    } else {
      setComments(_.orderBy([newComment, ...comments], 'ctime', 'desc'));
    }
    setContent('');
  }

  return (
    <div className="app">
      {/* Nav Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">Comments</span>
            {/* Like */}
            <span className="total-reply">{comments.length}</span>
          </li>
          <li className="nav-sort">
            {/* highlight class name： active */}
            {/* {
              tabs.map(tab => 
                <span key={tab.type} 
                      className={`nav-item ${tab.type === activeTab && 'active'}`}
                      onClick={() => setActiveTab(tab.type)}>{tab.text}</span>)
            } */}

            {
              tabs.map(tab => 
                <span key={tab.type} 
                      className={classNames('nav-item', {'active': tab.type === activeTab})}
                      onClick={() => handleTabChange(tab.type)}>{tab.text}</span>)
            }
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* comments */}
        <div className="box-normal">
          {/* current logged in user profile */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="Profile" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* comment */}
            <textarea
              className="reply-box-textarea"
              placeholder="tell something..."
              value={content}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
            />
            {/* post button */}
            <div className="reply-box-send" onClick={handleSubmit}>
              <div className="send-text">post</div>
            </div>
          </div>
        </div>
        {/* comment list */}
        <div className="reply-list">
          {/* comment item */}
          {comments.map(({ rpid, user, like, content, ctime }) => (
            <div className="reply-item" key={rpid}>
              {/* profile */}
              <div className="root-reply-avatar">
                <div className="bili-avatar">
                  <img
                    className="bili-avatar-img"
                    alt=""
                    src={avatar}
                  />
                </div>
              </div>

              <div className="content-wrap">
                {/* username */}
                <div className="user-info">
                  <div className="user-name">{user.uname}</div>
                </div>
                {/* comment content */}
                <div className="root-reply">
                  <span className="reply-content">{content}</span>
                  <div className="reply-info">
                    {/* comment created time */}
                    <span className="reply-time">{ctime}</span>
                    {/* total likes */}
                    <span className="reply-time">Like:{like}</span>
                    {user.uid === loggedInUser.uid && (
                      <span className="delete-btn">
                        Delete
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default App