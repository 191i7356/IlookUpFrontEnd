import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SideBar = ({ onselect }) => {
    const sidebarItems = ['DashBoard', 'Cameras', 'Sites', 'Customers', 'Orders'];

    return (
        <Nav className="flex-column">
            {sidebarItems.map((item, index) => (
                <Nav.Item key={index}>
                    <Link
                        to={`/${item.toLowerCase()}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        onClick={() => onselect(item)}
                    >
                        <Nav.Link as="span" style={{ cursor: 'pointer' }}>
                            {item}
                        </Nav.Link>
                    </Link>
                </Nav.Item>
            ))}
        </Nav>
    );
};

export default SideBar;
