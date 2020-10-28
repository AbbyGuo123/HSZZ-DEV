import React from "react";
import {Button, Col, DatePicker, Form, Modal, Row, Table} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import axios from "axios";
const {RangePicker} = DatePicker;

class Order extends React.Component {
    formRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            orderList: [],
            editOrderShow: false,
        }
    }

    componentDidMount() {
        this.getOrderSearchResult();
    }

    getOrderSearchResult = (values) => {
        let orderCriteria = {};
        if (values !== undefined) {
            let hasEsrFromTo = (values.orderDateRange === undefined ||values.orderDateRange === null || values.orderDateRange.length === 0);
            orderCriteria = {
                sourceOfTourists: values.sourceOfTourists == undefined ? null : values.sourceOfTourists,
                customer:values.customer == undefined ? null : values.customer,
                startDate: hasEsrFromTo ? null : values.orderDateRange[0].format('YYYY-MM-DD'),
                endDate: hasEsrFromTo ? null : values.orderDateRange[1].format('YYYY-MM-DD')
            }
        }

        axios.request({
            url: '/api/order',
            method: 'GET',
            params: orderCriteria
        }).then((res) => {
            if (res.status === 200) {
                this.setState({
                    orderList: res.data
                });
            } else {
                console.log('get all modules failed!');
            }
        }).catch((err) => {
            console.log('err: ', err);
            // message.error('get all modules failed!')
        })
    };

    handleReset = () => {
        this.formRef.current.resetFields();
    };

    handleSearch = (values) => {
        this.formRef.current.validateFields()
            .then((values) => {
                this.getOrderSearchResult(values);
            })
            .catch((errors) => {
                alert(values);
            });
    };
    handleEdit = () => {
        this.setState({
            editOrderShow: true
        })
    };
    handleCancel = () => {
        this.setState({
            editOrderShow: false
        });
    };
    handleOk = () => {
        this.setState({
            editOrderShow: false
        });
    }


    render() {
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 4},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 20},
            },
        };
        const columns = [
            {
                title: '修改',
                dataIndex: 'operation',
                width: 80,
                render: (text, record) => (
                    <span><a href="javascript:;" onClick={() => this.handleEdit(record)}>修改</a></span>
                ),
                fixed: 'left'
            },
            {
                title: '主客源',
                dataIndex: 'sourceOfTourists',
                key: 'sourceOfTourists'
            },
            {
                title: '客户',
                dataIndex: 'customer',
                key: 'customer'
            },
            {
                title: '产品明细',
                dataIndex: 'product',
                key: 'product'
            },
            {
                title: '订单日期',
                dataIndex: 'orderDate',
                key: 'orderDate'
            },
            {
                title: '数量',
                dataIndex: 'count',
                key: 'count'
            },
            {
                title: '备注',
                dataIndex: 'remarks',
                key: 'remarks'
            }

        ];
        return (
            <div className="order">
                <div className="order-search" style={{height:'200px'}}>
                    <Form {...formItemLayout} ref={this.formRef} className="ant-advanced-search-form"
                          onFinish={this.handleSearch}>
                        <Row gutter={16}>
                            <Col className="gutter-row" span={10}>
                                <Form.Item label="主客源" name="sourceOfTourists"><input id={'sourceOfTouristsCriteria'}
                                                                                      style={{width: 255}}/>
                                </Form.Item>
                            </Col>
                            <Col className="gutter-row" span={10}>
                                <Form.Item label="客户" name="customer"><input id={'customerCriteria'}
                                                                             style={{width: 255}}/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col className="gutter-row" span={10}>
                                <Form.Item label={'订单时间'} name="orderDateRange">
                                    <RangePicker format="YYYY-MM-DD"/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} style={{textAlign: 'right'}}>
                                <Button type="primary" htmlType="submit">查询</Button>
                                <Button style={{marginLeft: 8}} onClick={this.handleReset}>重置</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div className="order-result">
                    <Table scroll={{x: 1600, y: 600}} bordered={true} dataSource={this.state.orderList}
                           columns={columns}/>
                </div>
                <div className="edit-order">
                    <Modal
                        title="修改订单信息"
                        visible={this.state.editOrderShow}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}>
                        <p>ModalText</p>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default () => {
    return <div id='orderMaintain'><Order/></div>
}