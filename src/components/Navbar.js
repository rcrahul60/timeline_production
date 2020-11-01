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

    ];

    // const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);

    // const handleClick overflow: "hidden" = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);

    // const showButton = () => {
    //     if (window.innerHeight <= 960) {
    //         setButton(false);
    //     } else {
    //         setButton(true)
    //     }
    // };

    // useEffect(() => {
    //     showButton();
    // }, []);


    // window.addEventListener('resize', showButton);
    return (
        // <nav className="navbar">
        //     <div className="navbar-container">
        //         <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        //             <img src="image/logo.png" width="150px" height="50px" />
        //         </Link>
        //         <div className="menu-icon" onClick={handleClick}>
        //             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        //         </div>
        //         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        //             <li className="nav-item">
        //                 <Link to="/" className="nav-links" onClick={closeMobileMenu}>
        //                     Home
        //                 </Link>
        //             </li>
        //             {/* <li className="nav-item">
        //                 <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
        //                     Services
        //                 </Link>
        //             </li> */}
        //             <li className="nav-item">
        //                 <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
        //                     Contact
        //                 </Link>
        //             </li>
        //         </ul>
        //         {/* {button && <Button buttonStyle='btn--outline'>SignUp</Button>} */}
        //     </div>
        // </nav>
        <div className={classes.root}>
            <AppBar position="static">
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
                                    style={{ color: 'white' }}
                                    onClick={() => handleButtonClick("/")}
                                >
                                    HOME
              </Button>
                                <Button
                                    //variant="contained"
                                    style={{ color: 'white' }}
                                    onClick={() => handleButtonClick("/services")}
                                >
                                    Services
              </Button>
                                <Button
                                    //variant="contained"
                                    // color="primary"
                                    style={{ color: 'white' }}
                                    onClick={() => handleButtonClick("/contact")}
                                >
                                    Contact
              </Button>
                            </div>
                        )}
                </Toolbar>
                {/* <Tabs>
                    <IconButton edge="start" className={classes.title} color="inherit" aria-label="menu">
                        <img src="image/logo.png" width="150px" height="50px" />
                    </IconButton>
                    <Tab label="&nbsp;Home&nbsp;" />
                    <Tab label="&nbsp;Services&nbsp;" />
                    <Tab label="&nbsp;Work Process&nbsp;" />
                    <Tab label="&nbsp;Contact&nbsp;" />
                </Tabs> */}
            </AppBar>
        </div >
    );
};

export default withRouter(Navbar);