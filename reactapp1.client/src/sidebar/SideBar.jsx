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

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
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

    const sidebarWidth = isCollapsed ? '100px' : '260px';

    const menuItemStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    };

    const collapsedIconStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    };

    const iconStyle = {
        width: isCollapsed ? '40px' : '20px',
        height: isCollapsed ? '40px' : '20px',
        transition: 'all 0.3s ease',
    };

    return (
        <div
            className="sidebar-container"
            style={{
                position: 'fixed',
                height: '100vh',
                left: 0,
                top: 0,
                zIndex: 1000,
                width: sidebarWidth,
                transition: 'width 0.3s ease',
            }}
        >
            <CDBSidebar
                textColor="#fff"
                backgroundColor="#32CD32"
                className={isCollapsed ? 'collapsed' : ''}
                style={{
                    height: '100%',
                    overflowY: 'auto',
                    position: 'static',
                    transition: 'width 0.3s ease',
                }}
            >
                <CDBSidebarHeader
                    style={{
                        padding: 0,
                        margin: 0,
                        height: isCollapsed ? '100px' : 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img
                        src="/img/FixFit_logo_small.png"
                        alt="FixFit Logo"
                        style={{
                            width: isCollapsed ? '60px' : '200px',
                            height: isCollapsed ? '60px' : 'auto',
                            objectFit: 'contain',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                        }}
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    />
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/" activeClassName="activeClicked">
                            <CDBSidebarMenuItem style={{ marginBottom: '20px' }}>
                                {isCollapsed ? (
                                    <div style={collapsedIconStyle}>
                                        <img src="./icons/home.png" style={iconStyle} alt="przepisy" />
                                    </div>
                                ) : (
                                    <div style={menuItemStyle}>
                                        <img src="./icons/home.png" style={iconStyle} alt="przepisy" />
                                        Przepisy
                                    </div>
                                )}
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/przepisy" activeClassName="activeClicked">
                            <CDBSidebarMenuItem style={{ marginBottom: '20px' }}>
                                {isCollapsed ? (
                                    <div style={collapsedIconStyle}>
                                        <img src="/icons/dish.png" style={iconStyle} alt="przepisy" />
                                    </div>
                                ) : (
                                    <div style={menuItemStyle}>
                                        <img src="/icons/dish.png" style={iconStyle} alt="przepisy" />
                                        Przepisy
                                    </div>
                                )}
                            </CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink exact to="/jadlospis" activeClassName="activeClicked">
                            <CDBSidebarMenuItem style={{ marginBottom: '20px' }}>
                                {isCollapsed ? (
                                    <div style={collapsedIconStyle}>
                                        <img src="/icons/date.png" style={iconStyle} alt="jadlospis" />
                                    </div>
                                ) : (
                                    <div style={menuItemStyle}>
                                        <img src="/icons/date.png" style={iconStyle} alt="jadlospis" />
                                        Mój Jadłospis
                                    </div>
                                )}
                            </CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink exact to="/kalkulator" activeClassName="activeClicked">
                            <CDBSidebarMenuItem style={{ marginBottom: '20px' }}>
                                {isCollapsed ? (
                                    <div style={collapsedIconStyle}>
                                        <img src="/icons/calculator.png" style={iconStyle} alt="kalkulator" />
                                    </div>
                                ) : (
                                    <div style={menuItemStyle}>
                                        <img src="/icons/calculator.png" style={iconStyle} alt="kalkulator" />
                                        Kalkulator
                                    </div>
                                )}
                            </CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink exact to="/diety" activeClassName="activeClicked">
                            <CDBSidebarMenuItem style={{ marginBottom: '20px' }}>
                                {isCollapsed ? (
                                    <div style={collapsedIconStyle}>
                                        <img src="/icons/diet.png" style={iconStyle} alt="diety" />
                                    </div>
                                ) : (
                                    <div style={menuItemStyle}>
                                        <img src="/icons/diet.png" style={iconStyle} alt="diety" />
                                        Diety
                                    </div>
                                )}
                            </CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink exact to="/kontakt" activeClassName="activeClicked">
                            <CDBSidebarMenuItem style={{ marginBottom: '20px' }}>
                                {isCollapsed ? (
                                    <div style={collapsedIconStyle}>
                                        <img src="/icons/contact-information.png" style={iconStyle} alt="kontakt" />
                                    </div>
                                ) : (
                                    <div style={menuItemStyle}>
                                        <img src="/icons/contact-information.png" style={iconStyle} alt="kontakt" />
                                        Kontakt
                                    </div>
                                )}
                            </CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div style={{ padding: isCollapsed ? '10px 0' : '20px 5px' }}>
                        {!isCollapsed && 'MŁach - all rights reserved'}
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;
