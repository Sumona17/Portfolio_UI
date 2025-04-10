import { LogoutOutlined, MenuOutlined, UserOutlined, DownOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Menu, Tooltip, Typography } from "antd";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  LogoContainer,
  NavContainer,
  NavLinks,
  HeaderRight,
  LoginIconButton,
  MenuIconButton,
  UserProfileContainer,
  UserInfo,
  UserName,
  UserRole
} from "../../styles/components/Header";

const { Title } = Typography;

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Optionally add authentication logic here
        navigate('/');
    };
    const location = useLocation();
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    
    const isActive = (path) => {
        return location.pathname === path ? "active" : "";
    };

    const toggleMobileMenu = () => {
        setMobileMenuVisible(!mobileMenuVisible);
    };

    // Product dropdown menu
    const productMenu = (
        <Menu>
            <Menu.Item key="/product/commercial-property">
                <Link to="/product/commercial-property">Commercial Property</Link>
            </Menu.Item>
        </Menu>
    );

    // Programs dropdown menu
    const programsMenu = (
        <Menu>
            <Menu.Item key="/programs/vacant-building">
                <Link to="/programs/vacant-building">Vacant Building</Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <HeaderContainer>
            {/* Left Side - Logo */}
            <LogoContainer>
                <img src="/exa.png" alt="Logo" width={150} height={40} />
            </LogoContainer>
            
            {/* Navigation Links */}
            <NavContainer>
                <NavLinks mobileVisible={mobileMenuVisible}>
                    <Dropdown overlay={productMenu} placement="bottomCenter">
                        <Link to="/product" className={isActive("/product")}>
                            Product <DownOutlined style={{ fontSize: '12px' }} />
                        </Link>
                    </Dropdown>
                    <Dropdown overlay={programsMenu} placement="bottomCenter">
                        <Link to="/programs" className={isActive("/programs")}>
                            Programs <DownOutlined style={{ fontSize: '12px' }} />
                        </Link>
                    </Dropdown>
                </NavLinks>
            </NavContainer> 

            {/* Right Side - User Profile and Logout */}
            <HeaderRight>
                <UserProfileContainer>
                    <Avatar 
                        src="/path-to-user-image.png" 
                        size={40}
                        alt="User Profile" 
                    />
                    <UserInfo>
                        <UserName>Hello John Doe</UserName>
                        <UserRole>(E&S Actuary)</UserRole>
                    </UserInfo>
                </UserProfileContainer>
                
                <Tooltip title="Logout" placement="bottom">
                    <LoginIconButton 
                        type="link" 
                        icon={<LogoutOutlined />} 
                        onClick={handleLogout}
                    />
                </Tooltip>
                
                {/* Mobile Menu Button */}
                <MenuIconButton 
                    icon={<MenuOutlined />} 
                    onClick={toggleMobileMenu}
                />
            </HeaderRight>
        </HeaderContainer>
    );
};

export default Header;