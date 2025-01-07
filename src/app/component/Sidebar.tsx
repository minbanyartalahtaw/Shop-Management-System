import React, { useState, useEffect } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  ThemeProvider,
  createTheme,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Receipt as InvoiceIcon,
  People as CustomerIcon,
  ShoppingCart as OrderIcon,
  Settings as SettingIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import SourceIcon from "@mui/icons-material/Source";
import { useRouter } from "next/navigation";

// Create a theme with a single primary color
const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3", // You can change this to any color you prefer
    },
  },
});

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose, onOpen }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    {
      text: "ဘောက်ချာမှတ်ရန်",
      icon: <InvoiceIcon />,
      path: "/office/invoice/add-invoice",
    },
    { text: "စရင်းများ", icon: <DashboardIcon />, path: "/office/dashboard" },
    { text: "အော်ဒါ", icon: <OrderIcon />, path: "/office/order" },
    { text: "ဝယ်သူများ", icon: <CustomerIcon />, path: "/office/customer" },
    {
      text: "ဘောက်ချာများ",
      icon: <SourceIcon />,
      path: "/office/invoice/",
    },
    { text: "Settings", icon: <SettingIcon />, path: "/office/setting" },
  ];

  const sidebarContent = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        color: "#333",
      }}>
      <Box
        sx={{
          p: 2,
          borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
        }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column">
          <Box
            sx={{
              backgroundColor: "#f5f5f5",
              padding: "8px 16px",
              borderRadius: "8px",
              width: "100%",
              border: "1px solid rgba(0, 0, 0, 0.06)",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.02)",
              transition: "all 0.2s ease",
              "&:hover": {
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.04)",
                transform: "translateY(-1px)",
              },
            }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "monospace",
                color: "#333",
                fontSize: "1.1rem",
                textAlign: "center",
              }}>
              {currentTime.toLocaleTimeString()}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "monospace",
                color: "#666",
                textAlign: "center",
                fontSize: "0.8rem",
              }}>
              {currentTime.toLocaleDateString()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <List sx={{ flexGrow: 1, pt: 2 }}>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            onClick={() => {
              router.push(item.path);
              if (isMobile || isTablet) {
                onClose();
              }
            }}
            sx={{
              mb: 1,
              mx: 1,
              borderRadius: "8px",
              transition: "all 0.2s ease",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(102, 155, 188, 0.08)",
                transform: "translateX(4px)",
              },
            }}>
            <ListItemIcon
              sx={{
                color: "#2196f3",
                minWidth: "40px",
              }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                "& .MuiListItemText-primary": {
                  fontSize: "0.9rem",
                  fontWeight: 500,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem
          onClick={() => {
            router.push("/login");
          }}
          sx={{
            m: 1,
            borderRadius: "8px",
            transition: "all 0.2s ease",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "rgba(255, 99, 99, 0.08)",
              transform: "translateX(4px)",
            },
          }}>
          <ListItemIcon sx={{ color: "#ff6363", minWidth: "40px" }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            sx={{
              "& .MuiListItemText-primary": {
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "#ff6363",
              },
            }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={onOpen}
        edge="start"
        sx={{
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: theme.zIndex.drawer + 2,
          display: open ? "none" : "flex",
          backgroundColor: "white",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          "&:hover": {
            backgroundColor: "white",
            transform: "scale(1.05)",
          },
        }}>
        <MenuIcon sx={{ color: "#669bbc" }} />
      </IconButton>
      <Drawer
        variant={isTablet ? "temporary" : "permanent"}
        open={open}
        onClose={onClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "white",
            borderRight: "1px solid rgba(0, 0, 0, 0.08)",
            boxShadow: "2px 0 8px rgba(0,0,0,0.02)",
          },
        }}>
        {sidebarContent}
      </Drawer>
    </ThemeProvider>
  );
};

export default Sidebar;
