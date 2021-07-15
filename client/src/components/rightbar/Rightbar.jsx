import './rightbar.css';

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/people/p3.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jess</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/people/p3.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jess</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/people/p3.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jess</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/people/p3.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jess</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/people/p3.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jess</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/people/p3.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jess</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/people/p3.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jess</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
