import React, { useState } from "react";
import "../Navbar/Navbar.css";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import useMediaquery from "../../Hooks/useMediaquery";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowercasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={
        selectedPage === page
          ? "text-dark menu-links"
          : "text-black-50 menu-links"
      }
      href={`#${lowercasePage}`}
      onClick={() => {
        setSelectedPage(page);
      }}
    >
      {page}
    </AnchorLink>
  );
};

function Navbar({ isTopofPage, selectedPage, setSelectedPage }) {
  const isDesktop = useMediaquery("(min-width:1024px)");
  const [isMenuToggled, setMenuToggled] = useState(false);
  const navbarbackground = isTopofPage ? "" : "bg-light";

  return (
    <div>
      {isDesktop ? (
        <div className={`${navbarbackground} navbar`}>
          <div className="logo ps-3 text-secondary-emphasis">LOGO</div>
          <div className="menu-links d-flex flex-row justify-content-center gap-3 align-items-center pe-3">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      ) : (
        <div className="navbar">
          <div className="logo text-secondary-emphasis ps-3">LOGO</div>
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
