import './profile.css';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`/users?username=happy`);
      setUser(res.data);
    }
    fetchPosts();
  }, []);
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg"
                src={`${PF}post/post3.jpg`}
                alt=""
              />
              <img className="profileUserImg"
                src={`${PF}people/p7.jpg`}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="happy" />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  )
}
