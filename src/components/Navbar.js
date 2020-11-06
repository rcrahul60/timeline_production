import React from 'react'
//import { Link } from 'react-router-dom'
import Button from "@material-ui/core/Button";
import './Navbar.css';
import { AppBar, Hidden, IconButton, Toolbar } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withRouter } from "react-router-dom";




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // overflow: 'hidden'
        // display: 'block'
        // backgroundColor: '#fff'

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        [theme.breakpoints.down("xs")]: {
            flexGrow: 1
        },

    },
    headerOptions: {
        display: "flex",
        flex: 1,
        justifyContent: "flex-end"
    },
    appBar: {
        backgroundColor: '#f0f0f0'
    }
}));


const Navbar = props => {
    //console.log(props);
    const { history } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = pageURL => {
        console.log()
        history.push(pageURL);
        setAnchorEl(null);
    }

    const handleButtonClick = pageURL => {
        history.push(pageURL);
    };
    const menuItems = [
        {
            menuTitle: "Home",
            pageURL: "/"
        },
        {
            menuTitle: "Services",
            pageURL: "/services"
        },
        {
            menuTitle: "Contact",
            pageURL: "/contact"
        },
        {
            menuTitle: "How we work",
            pageURL: "/work"
        },
    ];
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography className={classes.title} onClick={() => handleButtonClick("/")} >
                        <img src="image/logo.png" width="150px" height="50px" />
                    </Typography>
                    {isMobile ? (
                        <>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                onClick={handleMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                open={open}
                                onClose={() => setAnchorEl(null)}
                            >
                                {menuItems.map(menuItem => {
                                    const { menuTitle, pageURL } = menuItem;
                                    return (
                                        <MenuItem onClick={() => handleMenuClick(pageURL)}>
                                            {menuTitle}
                                        </MenuItem>
                                    );
                                })}
                            </Menu>
                        </>
                    ) : (
                            <div className={classes.headerOptions}>
                                <Button
                                    // variant="contained"
                                    //color="primary"
                                    style={{ color: 'black' }}
                                    onClick={() => handleButtonClick("/")}
                                >
                                    HOME
              </Button>
                                <Button
                                    //variant="contained"
                                    style={{ color: 'black' }}
                                    onClick={() => handleButtonClick("/services")}
                                >
                                    Services
              </Button>
                                <Button
                                    //variant="contained"
                                    style={{ color: 'black' }}
                                    onClick={() => handleButtonClick("/work")}
                                >
                                    How we work
              </Button>
                                <Button
                                    //variant="contained"
                                    // color="primary"
                                    style={{ color: 'black' }}
                                    onClick={() => handleButtonClick("/contact")}
                                >
                                    Contact
              </Button>
                            </div>
                        )}
                </Toolbar>
            </AppBar>
        </div >
    );
};

export default withRouter(Navbar);