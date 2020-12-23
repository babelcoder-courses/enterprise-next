import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Button,
} from "@material-ui/core";
import {
  Menu,
  ChevronRight,
  ChevronLeft,
  Fastfood,
  Apple,
  Audiotrack,
  FlightTakeoff,
  House,
  Add,
} from "@material-ui/icons";
import { useRouter } from "next/router";
import RouterLink from "next/link";

import FlashMessage from "./FlashMessage";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const paths = [
  {
    name: "Food",
    icon: Fastfood,
    category: "food",
  },
  {
    name: "IT",
    icon: Apple,
    category: "it",
  },
  {
    name: "Music",
    icon: Audiotrack,
    category: "music",
  },
  {
    name: "Travel",
    icon: FlightTakeoff,
    category: "travel",
  },
  {
    name: "Relax",
    icon: House,
    category: "relax",
  },
];

export default function Layout({ children }) {
  const classes = useStyles();
  const router = useRouter();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigateToCategory = (category) => () => {
    router.push(`/articles?category=${category}`);
  };

  const navigateToNewArticle = () => router.push("/articles/new");

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <Menu />
          </IconButton>
          <RouterLink href="/articles" color="textSecondary" passHref>
            <Button variant="text" color="inherit">
              Articles
            </Button>
          </RouterLink>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {paths.map(({ name, icon: Icon, category }) => {
            return (
              <ListItem
                button
                key={category}
                selected={router.query.category === category}
                onClick={navigateToCategory(category)}
              >
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            );
          })}
          <ListItem button onClick={navigateToNewArticle}>
            <ListItemIcon>
              <Add color="primary" />
            </ListItemIcon>
            <ListItemText primary="Create Article" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container maxWidth="md">{children}</Container>
        <FlashMessage />
      </main>
    </div>
  );
}
