"use client";

import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { JSX, useState } from "react";
import Link from "next/link";

const navItems = ["Menu", "About", "Hiring", "Contact", "Order"];

export default function Navbar(): JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { md: "none" }, mr: 2 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
              TUTTI'S
            </Link>
          </Typography>

          <Button color="inherit" href="/order">
            Order
          </Button>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton component={Link} href={`/${item.toLowerCase()}`} onClick={handleDrawerToggle}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
