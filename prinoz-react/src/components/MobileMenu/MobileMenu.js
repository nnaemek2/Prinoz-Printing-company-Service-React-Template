import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { NavLink } from "react-router-dom";
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '#',
        submenu: [
            {
                id: 11,
                title: 'Home 01',
                link: '/home'
            },
            {
                id: 12,
                title: 'Home 02',
                link: '/home-2'
            },
            {
                id: 13,
                title: 'Home 03',
                link: '/home-3'
            }
        ]
    },
    {
        id: 2,
        title: 'About Us',
        link: '/about',
    },
    {
        id: 3,
        title: 'Services',
        link: '#',
        submenu: [
            {
                id: 31,
                title: 'Services',
                link: '/service',
            },
            {
                id: 32,
                title: 'Service Details',
                link: '/service-details/Sticker-printing'
            }
        ]
    },
    {
        id: 4,
        title: 'Services',
        link: '#',
        submenu: [
            {
                id: 41,
                title: 'Services',
                link: '/service',
            },
            {
                id: 42,
                title: 'Service Details',
                link: '/service-details/Sticker-printing'
            }
        ]
    },
    {
        id: 5,
        title: 'Pages',
        link: '#',
        submenu: [
            {
                id: 51,
                title: 'Projects',
                link: '/project',
            },
            {
                id: 52,
                title: 'Project Details',
                link: '/project-details/3d-Genareted-Cate'
            },
            {
                id: 53,
                title: '404 Page',
                link: '/404'
            }
        ]
    },

    {
        id: 6,
        title: 'Shop',
        link: '#',
        submenu: [
            {
                id: 61,
                title: 'Shop Page',
                link: '/shop',
            },
            {
                id: 62,
                title: 'Shop Details',
                link: '/shop-details/Calendar-printing-design'
            },
            {
                id: 63,
                title: 'Shop Cart',
                link: '/shop-cart'
            },
            {
                id: 64,
                title: 'Checkout',
                link: '/checkout'
            }
        ]
    },

    {
        id: 7,
        title: 'Blog',
        link: '#',
        submenu: [
            {
                id: 71,
                title: 'Blog',
                link: '/news',
            },
            {
                id: 72,
                title: 'Blog Details',
                link: '/blog-single/How-To-Teach-Kids-Ramadan-Isn’t-About-Food',
            },
           
        ]
    },
  
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }


]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <NavLink onClick={ClickHandler} className="active"
                                                                    to={submenu.link}>{submenu.title}</NavLink>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <NavLink className="active"
                                        to={item.link}>{item.title}</NavLink>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu mobail-menu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;