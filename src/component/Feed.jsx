import "./feed.css";
import SendIcon from "@mui/icons-material/Send";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import { useEffect, useState } from "react";
import { Post } from "./Post";

export const Feed = () => {
  const [data, setData] = useState([]);
  const [loadMore, setLoadMore] = useState(true);

  useEffect(() => {
    getData();
    // setLoadMore(false);
  }, [loadMore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      getData();
    }
  }

  const getData = () => {
    setTimeout(() => {
      fetch(
        "https://api.unsplash.com/photos?page=2&&client_id=4b93d1ba487be4e97a48a5872cfa8809e43a1c00a958f3d2da777e25f5aab6a2"
      )
        .then((res) => res.json())
        .then((res) => setData((prev) => [...prev, ...res]))
        .catch((err) => console.log(err));
    }, 1000);
  };

  return (
    <>
      <div className="feed">
        <div className="f_c1">
          <input
            type="text"
            placeholder="Write here. Add images and videos to create impact"
            name=""
            id=""
          />
          <div className="f_c1_c1">
            <div className="f_c1_c1_c1">
              <div>
                <FeedOutlinedIcon />
                <span>Article</span>
              </div>
              <div>
                <CameraAltOutlinedIcon />
                <span>Camera</span>
              </div>
              <div>
                <VideocamOutlinedIcon />
                <span>Video</span>
              </div>
            </div>
            <div className="sendIcon">
              <SendIcon />
            </div>
          </div>
        </div>
        <div className="f_c3">
          <br />
          <br />
        </div>
        {/* Main logic lies here */}
        <div className="f_c2">
          {data.map((el) => {
            return (
              <Post
                name={el.user.name}
                profile={el.user.profile_image.medium}
                post_img={el.urls.regular}
                bio={el.user.bio}
                time={el.created_at}
              />
            );
          })}

          {/* <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post /> */}
        </div>
      </div>
    </>
  );
};
