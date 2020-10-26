import React from 'react';
import {Button, Form, Table, DatePicker, Row, Col,Modal} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import axios from "axios";
const {RangePicker} = DatePicker;

class Order extends React.Component {
    formRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            orderList: [],
            editOrderShow:false,
        }
    }
    getAllOrders = () => {
        axios.request({
            url: '/api/order/list',
            method: 'GET'
        }).then((res) => {
            if (res.status === 200) {
                this.setState({
                    orderList: res.data
                });
                alert(res.data);
            } else {
                console.log('get all modules failed!');
            }
        }).catch((err) => {
            console.log('err: ', err);
            // message.error('get all modules failed!')
        })
    };

    handleReset = () => {
        this.getAllOrders();
        // this.formRef.current.resetFields();
    };

    handleSearch = (values) => {
        // const dataSource = [
        //     {
        //         sourceOfTourists: '巧克力',
        //         customer: '海文',
        //         product: '072/157-30ml 蒙砂瓶（含印）',
        //         orderDate: '2020/03/19',
        //         count: '1200',
        //         remarks: '加急处理'
        //     },
        //     {
        //         sourceOfTourists: '巧克力',
        //         customer: '吴叔',
        //         product: '072-50ml 光瓶（含印）+外罩黑色喷哑+泵头黑色',
        //         orderDate: '2020/5/24',
        //         count: '12096',
        //         remarks: '丝印版面待确认'
        //     }
        // ];


        this.formRef.current.validateFields()
            .then((values) => {
                this.getAllOrders();
            })
            .catch((errors) => {
                alert(values);
            });
    };
    handleEdit = () => {
        this.setState({
            editOrderShow:true
        })
    };
    handleCancel = ()=>{
        this.setState({
            editOrderShow:false
        });
    };
    handleOk = ()=>{
        this.setState({
            editOrderShow:false
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
            <div className="order" >
                <div className="order-search">
                <Form {...formItemLayout} ref={this.formRef} className="ant-advanced-search-form"
                      onFinish={this.handleSearch}>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={10}>
                            <Form.Item label="主客源" name="sourceOfTourists"><input id={'sourceOfTouristsCriteria'}
                                                                                  style={{width: 255}}/>
                            </Form.Item>
                        </Col>
                        <Col className="gutter-row" span={10}>
                            <Form.Item label="客户" name="customer"><input id={'customerCriteria'} style={{width: 255}}/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={10}>
                            <Form.Item label="产品" name="product"><input id={'productCriteria'} style={{width: 255}}/>
                            </Form.Item>
                        </Col>
                        <Col className="gutter-row" span={10}>
                            <Form.Item label="备注" name="remarks"><input id={'remarkCriteria'} style={{width: 255}}/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col className="gutter-row" span={10}>
                            <Form.Item label={'订单时间'}>
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
                    <Table scroll={{x: 1600, y: 600}} bordered={true} dataSource={this.state.orderList} columns={columns}/>
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