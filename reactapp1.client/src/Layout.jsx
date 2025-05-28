import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar/SideBar'; 
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setIsCollapsed(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sidebarWidth = isCollapsed ? '80px' : '260px';

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <div
                style={{
                    flexGrow: 1,
                    padding: '20px',
                    marginLeft: sidebarWidth,
                    transition: 'margin-left 0.3s ease', 
                    width: `calc(100% - ${sidebarWidth})` 
                }}
            >
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;