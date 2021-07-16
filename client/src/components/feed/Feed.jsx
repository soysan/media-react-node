import './feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Feed({username}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/post/profile/" + username)
        : await axios.get("/post/timeline/60f037eef61919a9e4a34862");
      setPosts(res.data);
    }
    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map(p => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  )
}
