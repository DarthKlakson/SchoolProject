import React, { useState, useEffect } from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; 

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
    useEffect(() => {
        const handleResize = () => {
         
            if (window.innerWidth < 768) {
                setIsCollapsed(true);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); 

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setIsCollapsed]);

    
    const renderMenuItem = (icon, text, path) => {
        return (
            <NavLink exact to={path} activeClassName="activeClicked">
                <CDBSidebarMenuItem className="sidebar-menu-item">
                    {isCollapsed ? (
                        <div className="collapsed-icon-container">
                            <img src={icon} className="menu-icon collapsed" alt={text} />
                        </div>
                    ) : (
                        <div className="menu-item-container">
                            <img src={icon} className="menu-icon" alt={text} />
                            {text}
                        </div>
                    )}
                </CDBSidebarMenuItem>
            </NavLink>
        );
    };

    return (
        <div className={`sidebar-container ${isCollapsed ? 'collapsed' : ''}`}>
            <CDBSidebar
                textColor="#fff"
                backgroundColor="#32CD32"
                className={isCollapsed ? 'collapsed' : ''}
            >
                <CDBSidebarHeader className="sidebar-header">
                    <img
                        src="/img/FixFit_logo_small.png"
                        alt="FixFit Logo"
                        className={`logo ${isCollapsed ? 'collapsed' : ''}`}
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    />
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        {renderMenuItem("./icons/home.png", "Strona Główna", "/")}
                        {renderMenuItem("/icons/dish.png", "Przepisy", "/przepisy")}
                        {renderMenuItem("/icons/date.png", "Mój Jadłospis", "/jadlospis")}
                        {renderMenuItem("/icons/calculator.png", "Kalkulator", "/kalkulator")}
                        {renderMenuItem("/icons/diet.png", "Diety", "/diety")}
                        {renderMenuItem("/icons/contact-information.png", "Kontakt", "/kontakt")}
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter className="sidebar-footer">
                    <div className={`footer-content ${isCollapsed ? 'collapsed' : ''}`}>
                        {!isCollapsed && 'MŁach - all rights reserved'}
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;