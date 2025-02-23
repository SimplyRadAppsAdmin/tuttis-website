"use client";

import { JSX, useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Optional: Highlight active page

const navItems = ["Menu", "About", "Hiring", "Contact", "Order"];

export default function Navbar(): JSX.Element | null {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname(); // Optional: Get current route

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid SSR mismatches

  return (
    <>
      {/* Address, Phone, and Email Bar */}
      <Box
        sx={{
          backgroundColor: "#F2E1D4",
          padding: "5px 0",
          textAlign: "center",
          fontSize: "14px",
          fontWeight: "500",
          fontFamily: "'Lora', serif",
          color: "#000",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          "@media (max-width: 768px)": {
            display: "none", // Hide address bar on mobile
          },
        }}
      >
        <Box sx={{ borderBottom: "1px solid black", display: "inline" }}>
          235 Cabarrus Ave. E, Concord, NC 28025
        </Box>
        <span>|</span>
        <Box sx={{ borderBottom: "1px solid black", display: "inline" }}>
          704.786.9992
        </Box>
        <span>|</span>
        <Box sx={{ borderBottom: "1px solid black", display: "inline" }}>
          <Link
            href="mailto:tuttismarket@gmail.com"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            tuttismarket@gmail.com
          </Link>
        </Box>
      </Box>

      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#F2E1D4", // Matches global background
          color: "#000",
          boxShadow: "none",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Box
          sx={{
            width: "100%",
            borderBottom: "2px dotted black", // Proper dotted line
            marginTop: "8px", // Moves it closer
            marginBottom: "-10px"
          }}
        />
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
              TUTTI'S
            </Link>
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                href={`/${item.toLowerCase()}`}
                color="inherit"
                sx={{
                  fontWeight:
                    pathname === `/${item.toLowerCase()}` ? "bold" : "normal",
                  borderBottom:
                    pathname === `/${item.toLowerCase()}`
                      ? "2px solid black"
                      : "none",
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" }, mr: 2 }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                component={Link}
                href={`/${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
