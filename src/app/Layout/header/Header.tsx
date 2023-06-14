import React, { ReactElement, useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  Toolbar,
  styled,
  containerClasses,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import logoIcon from "./headerIcons/logoIcon.svg";
import { CssVariables } from "styles/cssVariables/cssVariables";
import { WalletToggle } from "app/components/common/walletToggle";
import { history } from "router/history";
import { WORKSHOPS } from "config";
import { AppPages } from "app/types";

const navItems = [
  { navItem: "Gallery", link: "/treasury-gallery" },
  // { navItem: "Governance", link: "/Governance" },
  // { navItem: "About", link: "/About" },
];

export default function Header(): ReactElement {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openBtn, setOpenBtn] = useState(false);
  const workshops = WORKSHOPS;
  const lastDropsItems = Object.keys(workshops).map((key) => {
    const item = workshops[key];
    return {
      picure: item.creatorInfo.image,
      collectionName: item.info.name,
      name: item.creatorInfo.name,
      to: `${AppPages.Workshops}/${key}`,
    };
  });

  const openDrawerHandler = (e) => {
    setOpenDrawer(true);
  };

  const closeDraweHandler = () => {
    setOpenDrawer(false);
  };

  const openBtnHadler = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenBtn(true);
  };

  const closeBtnHandler = () => {
    setAnchorEl(null);
    setOpenBtn(false);
  };
  const handleLastDropClick = (to: string) => {
    setAnchorEl(null);
    setOpenBtn(false);
    history.push(to);
  };

  return (
    <StyledAppBar elevation={0}>
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="/">
              <StyledLogo src={logoIcon} alt="" />
            </Link>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <CustomIconBtn onClick={openDrawerHandler}>
              <MenuIcon />
            </CustomIconBtn>
            <Drawer anchor="left" open={openDrawer} onClose={closeDraweHandler}>
              <CustomList>
                <StyledListItem onClick={closeDraweHandler}>
                  <Link to="/">
                    <StyledLogo src={logoIcon} alt="" />
                  </Link>
                </StyledListItem>
                <StyledDivider />
                {navItems.map((item, index) => (
                  <StyledListItem key={index} onClick={closeDraweHandler}>
                    <StyledLink to={item.link}>{item.navItem}</StyledLink>
                  </StyledListItem>
                ))}
              </CustomList>
            </Drawer>
          </Box>
          <NavItemsWrapper sx={{ display: { xs: "none", md: "flex" } }}>
            <CustomBtn onClick={openBtnHadler}>Last drops</CustomBtn>
            <CustomMenuBtn
              anchorEl={anchorEl}
              open={openBtn}
              onClose={closeBtnHandler}
            >
              <MenuItem onClick={closeBtnHandler}>Last drops</MenuItem>
              <StyledDivider />
              {lastDropsItems.map((item, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    handleLastDropClick(item.to);
                  }}
                >
                  <StyledMenuIcon src={item.picure} alt={item.name} />
                  <Box ml="20px">
                    <p>{item.collectionName}</p>
                    <p>{item.name}</p>
                  </Box>
                </MenuItem>
              ))}
            </CustomMenuBtn>
            <nav>
              {navItems.map((item, index) => (
                <NavLink key={index} to={item.link}>
                  {item.navItem}
                </NavLink>
              ))}
            </nav>
          </NavItemsWrapper>
          <WalletToggle />
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}

const StyledMenuIcon = styled("img")`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  object-fit: cover;
`;

const StyledLogo = styled("img")`
  width: auto;
  height: 65px;
`;

const StyledAppBar = styled(AppBar)`
  background-color: ${CssVariables.mainBackgroundColor};
  ${containerClasses.root} {
    background-color: ${CssVariables.mainBackgroundColor};
  }
  padding: 12px 0;
`;

const StyledLink = styled(Link)`
  color: ${CssVariables.white};
  a {
    color: ${CssVariables.white};
  }
`;

const StyledListItem = styled(ListItem)`
  color: ${CssVariables.white};
`;

const NavItemsWrapper = styled("div")({
  marginLeft: "auto",
  display: "flex",
  alignItems: "center",
  a: {
    textDecoration: "none",
    fontSize: "16px",
    fontWieght: "600",
    color: CssVariables.white,
    marginRight: "40px",
  },
});

const CustomList = styled(List)({
  padding: "35px",
  li: { padding: "8px" },
  "li a": {
    textDecoration: "none",
    color: CssVariables.white,
  },
});

const CustomBtn = styled("button")({
  border: "none",
  marginRight: "40px",
  backgroundColor: "transparent",
  fontSize: "16px",
  fontWieght: "600",
  color: CssVariables.white,
  cursor: "pointer",
});

const CustomMenuBtn = styled(Menu)({
  "& .MuiList-root": { width: "442px", height: "308px", padding: "20px" },
  "li p:nth-of-type(1)": {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "-11px",
  },
  "li > p:nth-of-type(2)": { fontSize: "12px", fontWeight: "400" },
});

const CustomIconBtn = styled(IconButton)({
  color: "white",
});

const StyledDivider = styled(Divider)`
  background-color: ${CssVariables.white};
  background: ${CssVariables.white};
`;
