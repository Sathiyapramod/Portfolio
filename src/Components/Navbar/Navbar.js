import React, { useState, useEffect } from "react";
import "../Navbar/Navbar.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useMediaquery from "../../Hooks/useMediaquery";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { anchorStyle } from "../Landing/Landing";

function Navbar() {
  const [isMenuToggled, setMenuToggled] = useState(false);
  const isDesktop = useMediaquery("(min-width:768px)");
  //setting state to change the values while scrolling
  const [scrollbg, setScrollbg] = useState(false);

  const ChangeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 108) setScrollbg(true);
    else setScrollbg(false);
  };
  useEffect(() => {
    ChangeBackground();
    window.addEventListener("scroll", ChangeBackground);
  }, []);

  const navbarColor = {
    backgroundColor: scrollbg ? "navy" : "#FCFBFA",
    color: scrollbg ? "white" : "black",
  };

  return (
    <div>
      {isDesktop ? (
        <div className="navbar" style={navbarColor}>
          <div className="logo">Sathiyapramod</div>
          <div className="menu-links" style={navbarColor}>
            {["HOME", "SKILLS", "PROJECTS", "CONTACT"].map((element, index) => {
              const page = element.toLowerCase();
              return (
                <a
                  href={`#${page}`}
                  style={navbarColor}
                  key={index}
                  className="menu-links-items"
                >
                  {element}
                </a>
              );
            })}
          </div>
          <div className="hire-button">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                paddingLeft: { xs: 1, sm: 3 },
                paddingRight: { xs: 1, sm: 3 },
                borderRadius: 0,
                "&:hover": {
                  backgroundColor: "grey",
                },
              }}
            >
              <a href="#contact" style={anchorStyle}>
                Hire Me !
              </a>
            </Button>
          </div>
        </div>
      ) : (
        <div className="navbar" style={navbarColor}>
          <div className="logo">Sathiyapramod</div>
          <div className="menu-toggled" style={navbarColor}>
            <Button
              variant="text"
              onClick={() => {
                setMenuToggled(!isMenuToggled);
              }}
              sx={{ color: scrollbg ? "white" : "black" }}
            >
              <MenuOpenOutlinedIcon />
            </Button>
          </div>
        </div>
      )}
      {!isDesktop && isMenuToggled && (
        <div className="toggled-menu" style={navbarColor}>
          <Box style={navbarColor}>
            <div className="corner-button">
              <Button
                variant="text"
                onClick={() => {
                  setMenuToggled(!isMenuToggled);
                }}
                sx={{ color: scrollbg ? "white" : "black" }}
              >
                <CloseOutlinedIcon />
              </Button>
            </div>
            <div className="toggled-menu-lists">
              {["HOME", "SKILLS", "PROJECTS", "CONTACT"].map(
                (element, index) => {
                  const page = element.toLowerCase();
                  return (
                    <a
                      key={index}
                      href={`#${page}`}
                      className="menu-links"
                      style={navbarColor}
                    >
                      {element}
                    </a>
                  );
                }
              )}
            </div>
          </Box>
        </div>
      )}
    </div>
  );
}

export default Navbar;
