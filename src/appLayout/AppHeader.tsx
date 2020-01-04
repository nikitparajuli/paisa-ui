import React from 'react';
import { Row, Col } from 'antd';

import { Logo } from './';

type AppHeaderProps = {};

export const AppHeader: React.FC<AppHeaderProps> = () => {
    return (
        <Row gutter={24} className="app-header">
            <Col span={4} style={{paddingTop: 10}}>
                <Logo />
            </Col>
        </Row>
    );
}