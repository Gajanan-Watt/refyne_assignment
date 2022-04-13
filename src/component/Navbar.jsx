import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import "./navbar.css";
export const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav_child1">
          <img src="https://i.ibb.co/Kx63xQG/icons8-linkedin-2-48.png" alt="" />

          <TextField
            id="input-with-icon-textfield"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </div>
        <div className="nav_child2">
          <div>
            <HomeIcon />
            <span>Home</span>
          </div>
          <div>
            <PeopleOutlineOutlinedIcon />
            <span>Network</span>
          </div>
          <div>
            <ChatBubbleOutlineOutlinedIcon />
            <span>Messaging</span>
          </div>
          <div>
            <NotificationsOutlinedIcon />
            <span>Notifications</span>
          </div>
          <div>
            <WorkOutlineOutlinedIcon />
            <span>Jobs</span>
          </div>
          <div>
            <WidgetsOutlinedIcon />
            <span>Work</span>
          </div>
        </div>
        <div className="nav_child3">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
