import {Button, Col, DatePicker, Form, Input, InputNumber, Row} from "antd";
import axios from "axios/index";
import React from "react";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const validateMessages = {
    required: '${label} 是必填项',
    types: {
        number: '${label} 不是一个合法数字',
    },
    number: {
        range: '${label} 必须在 ${min} 到 ${max} 的区间',
    },
};

export default class AddOrder extends React.Component {
    handleAdd = (values) => {
        if(values == undefined ||values==null || values.order==undefined ||values.order==null){
            alert('订单内容为空！')
        }
        let orderVO = {
            sourceOfTourists:values.order.sourceOfTourists,
            customer:values.order.customer,
            product:values.order.product,
            count:values.order.count,
            orderDate:values.order.orderDate == null?null:values.order.orderDate.format('YYYY-MM-DD'),
            remarks:values.order.remarks,
        };
        axios.request({
            url:'api/order',
            method:'POST',
            params:orderVO
        }).then((res)=>{
            if(res.status === 200){
                alert('订单录入成功！');
            }else {
                alert('订单录入失败！');
            }

        })
    };

    handleReset = () => {
        this.formRef.current.resetFields();
    };

    render() {
        return (
            <div >
                <div>
                    <h2 style={{margin: '10px 5px', height:'60px'}}>订单录入</h2>
                </div>

                <div style={{width: 800, margin: 'auto', marginLeft: 8}}>
                    <Form {...layout} name="nest-messages" onFinish={this.handleAdd} validateMessages={validateMessages}>
                        <Form.Item
                            name={['order', 'sourceOfTourists']}
                            label="主客源"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['order', 'customer']}
                            label="客户"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name={['order', 'orderDate']}
                            label="签单日期"
                        >
                            <DatePicker/>
                        </Form.Item>
                        <Form.Item
                            name={['order', 'count']}
                            label="数量"
                            rules={[
                                {
                                    type: 'number',
                                    min: 0,
                                    max: 1000000,
                                },
                            ]}
                        >
                            <InputNumber/>
                        </Form.Item>
                        <Form.Item name={['order', 'product']} label="产品明细" rules={[
                            {
                                required: true,
                            },
                        ]}>
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item name={['order', 'remarks']} label="备注" rules={[
                            {
                                required: true,
                            },
                        ]}>
                            <Input.TextArea />
                        </Form.Item>
                        <div style={{height:'50px'}}></div>
                        <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}} >
                            <Row>
                                <Col span={24} style={{textAlign: 'right'}}>
                                    <Button type="primary" htmlType="submit">提交</Button>
                                    <Button style={{marginLeft: 8}} onClick={this.handleReset}>重置</Button>
                                </Col>
                            </Row>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    };
};