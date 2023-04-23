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
import dropDownIcon from "./headerIcons/dropDownIcon.svg";
import { CssVariables } from "styles/cssVariables/cssVariables";
import { WalletToggle } from "app/components/common/walletToggle";
import { history } from "router/history";

const navItems = [
  { navItem: "Collection", link: "/Colletion" },
  { navItem: "Governance", link: "/Governance" },
  { navItem: "About", link: "/About" },
];

const dropDownItems = [
  {
    picure: dropDownIcon,
    collectionName: "Collection Name",
    name: "Artist",
    to: "/last-drops",
  },
  {
    picure: dropDownIcon,
    collectionName: "Collection Name",
    name: "Lufy",
    to: "/last-drops",
  },
  {
    picure: dropDownIcon,
    collectionName: "Collection Name",
    name: "Logan",
    to: "/last-drops",
  },
];

export default function Header(): ReactElement {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openBtn, setOpenBtn] = useState(false);

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
            <StyledLogo src={logoIcon} alt="" />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={openDrawerHandler}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={openDrawer} onClose={closeDraweHandler}>
              <CustomList>
                <StyledListItem onClick={closeDraweHandler}>
                  <StyledLogo src={logoIcon} alt="logoIcon.svg" />
                </StyledListItem>
                <Divider />
                {navItems.map((item) => (
                  <StyledListItem onClick={closeDraweHandler}>
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
              <Divider />
              {dropDownItems.map((item) => (
                <MenuItem
                  onClick={() => {
                    handleLastDropClick(item.to);
                  }}
                >
                  <img src={item.picure} alt={item.name} />
                  <Box ml="20px">
                    <p>{item.collectionName}</p>
                    <p>{item.name}</p>
                  </Box>
                </MenuItem>
              ))}
            </CustomMenuBtn>
            <nav>
              {navItems.map((item) => (
                <NavLink to={item.link}>{item.navItem}</NavLink>
              ))}
            </nav>
          </NavItemsWrapper>
          <WalletToggle />
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}

const StyledLogo = styled("img")`
width: 55px;
height: 76px;
`

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
    color: "#1a1717",
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
