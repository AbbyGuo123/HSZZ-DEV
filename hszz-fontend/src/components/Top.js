import React, {Component} from 'react'
import {Col, Row} from 'antd'
import {CrownTwoTone,LogoutOutlined}from '@ant-design/icons';
import {Link} from 'react-router-dom'
class Top extends Component {
    render() {
        return (
            <Row className="top_row">
                <Col xs={12} sm={12} md={18} lg={22} xl={22}>
                    <h1 className="top_title"><CrownTwoTone />华松塑料制品厂</h1>
                </Col>
                <Col xs={12} sm={12} md={6} lg={2} xl={2} className="top_leftcol">
                    <div className="top_style">
                        <Link to="/" className="top_link"><LogoutOutlined/> 退出</Link>
                    </div>
                </Col>
            </Row>
        )
    }
}
export default Top