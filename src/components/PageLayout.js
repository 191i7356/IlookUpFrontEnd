import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from './SideBar';
import AppRoutes from './AppRoutes';

const PageLayout = () => {
    const [itemState, setItemState] = useState('DashBoard');
    const handleItemClick = (item) => {
        console.log(item);
        console.log(itemState);
        setItemState(item);
    };

    return (
        <Container>
            <Row>
                <Col xs="3">
                    <SideBar onselect={handleItemClick} />
                </Col>
                <Col xs="9">
                    <div className="content">
                        <AppRoutes />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default PageLayout;
