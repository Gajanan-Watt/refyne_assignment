import "./post.css";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

export const Post = ({ name, profile, post_img, bio, time }) => {
  return (
    <>
      <div className="post">
        <div className="post_nav">
          <div className="post_nav_c1">
            <img src={profile} alt="" />
            <div>
              <h3>{name}</h3>
              <p>abcd</p>
            </div>
          </div>
          <MoreHorizOutlinedIcon />
        </div>
        <p>{bio}</p>
        <img src={post_img} className="post_img" alt="" />
        <div className="post_foo">
          <div>
            <FavoriteOutlinedIcon /> <span>32</span>
          </div>
          <div>
            <ChatBubbleOutlineOutlinedIcon /> <span>12</span>
          </div>
          <div>
            <ShareOutlinedIcon /> <span>Share</span>
          </div>
        </div>
      </div>
      <div className="post_mid">
        <br />
      </div>
    </>
  );
};
