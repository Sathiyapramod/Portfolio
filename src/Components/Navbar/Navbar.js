import React, { useState } from "react";
import "../Navbar/Navbar.css";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import useMediaquery from "../../Hooks/useMediaquery";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar({ isTopofPage, selectedPage, setSelectedPage }) {
  const [isMenuToggled, setMenuToggled] = useState(false);
  const isDesktop = useMediaquery("(min-width:768px)");
  return (
    <div>
      {isDesktop ? (
        <div className={`navbar`}>
          <div className="logo ps-3">Sathiyapramod</div>
          <div className="menu-links d-flex flex-row justify-content-center gap-2 align-items-center pe-5"></div>
        </div>
      ) : (
        <div className="navbar">
          <div className="logo text-secondary-emphasis ps-3">S</div>
          <div className="menu-toggled">
            <Button
              variant="text"
              onClick={() => {
                setMenuToggled(!isMenuToggled);
              }}
              sx={{ color: "black" }}
            >
              <MenuOpenOutlinedIcon />
            </Button>
          </div>
        </div>
      )}
      {!isDesktop && isMenuToggled && (
        <div className="toggled-menu">
          <Box>
            <div className="corner-button">
              <Button
                variant="text"
                onClick={() => {
                  setMenuToggled(!isMenuToggled);
                }}
                sx={{ color: "black" }}
              >
                <CloseOutlinedIcon />
              </Button>
            </div>
            <div className="toggled-menu-lists">
              {["HOME", "SKILLS", "PROJECT", "REFERENCES", "CONTACT"].map(
                (element, index) => {
                  const page = element.toLowerCase();
                  return (
                    <div key={index} className="menu-links">
                      <AnchorLink
                        className={
                          selectedPage === page
                            ? "text-dark menu-links"
                            : "text-black-50 menu-links"
                        }
                        onClick={() => {
                          setSelectedPage(page);
                        }}
                      >
                        {element}
                      </AnchorLink>
                    </div>
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
