/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function HeaderMenu({ layoutProps }) {
    const location = useLocation();
    const getMenuItemActive = (url) => {
        return checkIsActive(location, url) ? "menu-item-active" : "";
    }

    return <div
        id="kt_header_menu"
        className={`header-menu header-menu-mobile ${layoutProps.ktMenuClasses}`}
        {...layoutProps.headerMenuAttributes}
    >
        {/*begin::Header Nav*/}
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>
            {/*begin::1 Level*/}
            <li className={`menu-item menu-item-rel ${getMenuItemActive('/dashboard')}`}>
                <NavLink className="menu-link" to="/dashboard">
                    <span className="menu-text">Dashboard</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li>
            {/*end::1 Level*/}

            {/*Classic submenu*/}
            {/*begin::1 Level*/}
            <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/google-material')}`}>
                <NavLink className="menu-link menu-toggle" to="/google-material">
                    <span className="menu-text">users</span>
                    <i className="menu-arrow"></i>
                </NavLink>
                <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                    <ul className="menu-subnav">
                        {/*begin::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/google-material/inputs')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/google-material/inputs">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Design/PenAndRuller.svg")} />
                                </span>
                                <span className="menu-text">
                                    Admin
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
                                <ul className="menu-subnav">
                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/google-material/inputs/autocomplete')}`}>
                                        <NavLink className="menu-link" to="/google-material/inputs/autocomplete">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">profile</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/google-material/inputs/buttons')}`}>
                                        <NavLink className="menu-link" to="/google-material/inputs/buttons">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">privacy</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/google-material/inputs/checkboxes')}`}>
                                        <NavLink className="menu-link" to="/google-material/inputs/checkboxes">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Data</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                   
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                   
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                   
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                  
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                   
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                   
                                    {/*end::3 Level*/}
                                </ul>
                            </div>
                        </li>
                        {/*end::2 Level*/}

                        {/*begin::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/google-material/navigation')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/google-material/navigation">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Navigation/Arrow-from-left.svg")} />
                                </span>
                                <span className="menu-text">
                                    User 1
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
                                <ul className="menu-subnav">
                                  
                                    <li className={`menu-item ${getMenuItemActive('/google-material/navigation/links')}`}>
                                        <NavLink className="menu-link" to="/google-material/navigation/links">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">profile</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                   
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                   
                                    {/*end::3 Level*/}
                                </ul>
                            </div>
                        </li>
                        {/*end::2 Level*/}

                        {/*begin::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/google-material/surfaces')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/google-material/surfaces">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Layout/Layout-left-panel-1.svg")} />
                                </span>
                                <span className="menu-text">
                                    User 2
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
                                <ul className="menu-subnav">
                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/google-material/surfaces/app-bar')}`}>
                                        <NavLink className="menu-link" to="/google-material/surfaces/app-bar">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">profile</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                
                                   
                                    {/*end::3 Level*/}
                                </ul>
                            </div>
                        </li>
                        {/*end::2 Level*/}

                        {/*begin::2 Level*/}
                    
                              
                        {/*end::2 Level*/}

                        {/*begin::2 Level*/}
                       
                               
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                        
                        {/*end::2 Level*/}

                        {/*begin::2 Level*/}
                       
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                   
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                         
                        {/*end::2 Level*/}

                        {/*begin::2 Level*/}










                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/google-material/layout')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/google-material/layout">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Layout/Layout-top-panel-2.svg")} />
                                </span>
                                <span className="menu-text">
                                    Account
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
                                <ul className="menu-subnav">
                                    {/*begin::3 Level*/}
                                   
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                   
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/google-material/layout/grid')}`}>
                                        <NavLink className="menu-link" to="/google-material/layout/grid">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Security</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    
                                   
                                    {/*end::3 Level*/}

                                </ul>
                            </div>
                        </li>
                        {/*end::2 Level*/}
                    </ul>
                </div>
            </li>







            
            {/*end::1 Level*/}

            {/*Mega submenu*/}
            {/*begin::1 Level*/}
            <li
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/react-bootstrap')}`}
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
            >
                <NavLink className="menu-link menu-toggle" to="/react-bootstrap">
                    <span className="menu-text">Projects</span>
                    <i className="menu-arrow"></i>
                </NavLink>
                <div
                    className="menu-submenu menu-submenu-fixed menu-submenu-left"
                    style={{ width: "1000px" }}
                >
                    <div className="menu-subnav">
                        <ul className="menu-content">
                            <li className="menu-item ">
                                <h3 className="menu-heading menu-toggle">
                                    <i className="menu-bullet menu-bullet-dot"><span></span></i>
                                    <span className="menu-text">Primary Projects</span>
                                    <i className="menu-arrow"></i>
                                </h3>
                                <ul className="menu-inner">
                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/react-bootstrap/alert')}`}>
                                        <NavLink className="menu-link" to="/react-bootstrap/alert">
                                            <span className="menu-text">Project 1</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/react-bootstrap/accordion')}`}>
                                        <NavLink className="menu-link" to="/react-bootstrap/accordion">
                                            <span className="menu-text">Project 2</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/react-bootstrap/badge')}`}>
                                        <NavLink className="menu-link" to="/react-bootstrap/badge">
                                            <span className="menu-text">Project 3</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/react-bootstrap/breadcrumb')}`}>
                                        <NavLink className="menu-link" to="/react-bootstrap/breadcrumb">
                                            <span className="menu-text">Project 4</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/react-bootstrap/buttons')}`}>
                                        <NavLink className="menu-link" to="/react-bootstrap/buttons">
                                            <span className="menu-text">Project 5</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/react-bootstrap/button-group')}`}>
                                        <NavLink className="menu-link" to="/react-bootstrap/button-group">
                                            <span className="menu-text">Project 6</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                   
                                    {/*end::3 Level*/}
                                </ul>
                            </li>
                            <li className="menu-item ">
                                <ul className="menu-inner">
                                    <h3 className="menu-heading menu-toggle">
                                        <i className="menu-bullet menu-bullet-dot"><span></span></i>
                                        <span className="menu-text">Secondary Projects</span>
                                        <i className="menu-arrow"></i>
                                    </h3>
                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/react-bootstrap/carousel')}`}>
                                        <NavLink className="menu-link" to="/react-bootstrap/carousel">
                                            <span className="menu-text">Project 1</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/react-bootstrap/dropdowns')}`}>
                                        <NavLink className="menu-link" to="/react-bootstrap/dropdowns">
                                            <span className="menu-text">Project 2</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/react-bootstrap/forms')}`}>
                                        <NavLink className="menu-link" to="/react-bootstrap/forms">
                                            <span className="menu-text">Project 3</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    
                                    
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                   
                                    {/*end::3 Level*/}
                                </ul>
                            </li>



                            <li className="menu-item ">
                                <h3 className="menu-heading menu-toggle">
                                    <i className="menu-bullet menu-bullet-dot"><span></span></i>
                                    <span className="menu-text">Upcoming Projects</span>
                                    <i className="menu-arrow"></i>
                                </h3>
                                <ul className="menu-inner">
                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/react-bootstrap/list-group')}`}>
                                        <NavLink className="menu-link" to="/react-bootstrap/list-group">
                                            <span className="menu-text">Project 1</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/react-bootstrap/modal')}`}>
                                        <NavLink className="menu-link" to="/react-bootstrap/modal">
                                            <span className="menu-text">Project 2</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                   
                                    {/*end::3 Level*/}

                                 
                                    {/*end::3 Level*/}
                                </ul>
                            </li>
                            <li className="menu-item ">
                                <h3 className="menu-heading menu-toggle">
                                    <i className="menu-bullet menu-bullet-dot"><span></span></i>
                                    <span className="menu-text">Past Projects</span>
                                    <i className="menu-arrow"></i>
                                </h3>
                                <ul className="menu-inner">
                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/react-bootstrap/progress')}`}>
                                        <NavLink className="menu-link" to="/react-bootstrap/progress">
                                            <span className="menu-text">Project 1</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/react-bootstrap/spinners')}`}>
                                        <NavLink className="menu-link" to="/react-bootstrap/spinners">
                                            <span className="menu-text">Project 2</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/react-bootstrap/table')}`}>
                                        <NavLink className="menu-link" to="/react-bootstrap/table">
                                            <span className="menu-text">Project 3</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/react-bootstrap/tabs')}`}>
                                        <NavLink className="menu-link" to="/react-bootstrap/tabs">
                                            <span className="menu-text">Project 4</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                   
                                    {/*end::3 Level*/}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>

            {/*Classic submenu*/}
            {/*begin::1 Level*/}
            <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/custom')}`}>
                <NavLink className="menu-link menu-toggle" to="/custom">
                    <span className="menu-text">Report</span>
                    <i className="menu-arrow"></i>
                </NavLink>
                <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                    <ul className="menu-subnav">
                        {/*begin::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/e-commerce')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/e-commerce">
                                <span className="menu-text">
                                    Demo 1
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
                                <ul className="menu-subnav">
                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/e-commerce/customers')}`}>
                                        <NavLink className="menu-link" to="/e-commerce/customers">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Customers</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/e-commerce/products')}`}>
                                        <NavLink className="menu-link" to="/e-commerce/products">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Products</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}
                                </ul>
                            </div>
                        </li>
                        {/*end::2 Level*/}

                        {/*begin::2 Level*/}
                        <li className={`menu-item ${getMenuItemActive('/builder')}`}>
                            <NavLink className="menu-link" to="/builder">
                                <span className="menu-text">Demo 2</span>
                            </NavLink>
                        </li>
                        {/*end::3 Level*/}

                        {/*begin::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/error')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/error">
                                <span className="menu-text">
                                    Error Pages
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
                                <ul className="menu-subnav">
                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/error/error-v1')}`}>
                                        <NavLink className="menu-link" to="/error/error-v1">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Error 1</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/error/error-v2')}`}>
                                        <NavLink className="menu-link" to="/error/error-v2">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Error 2</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/error/error-v3')}`}>
                                        <NavLink className="menu-link" to="/error/error-v3">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Error 3</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/error/error-v4')}`}>
                                        <NavLink className="menu-link" to="/error/error-v4">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Error 4</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/error/error-v5')}`}>
                                        <NavLink className="menu-link" to="/error/error-v5">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Error 5</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/error/error-v6')}`}>
                                        <NavLink className="menu-link" to="/error/error-v6">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Error 6</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}
                                </ul>
                            </div>
                        </li>
                        {/*end::2 Level*/}

                    </ul>
                </div>
            </li>
            {/*end::1 Level*/}
        </ul>
        {/*end::Header Nav*/}
    </div>;
}
