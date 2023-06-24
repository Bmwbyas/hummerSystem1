import React, {Component} from 'react';
import {Avatar, Button, Col, DatePicker, Form, Input, message, Row, Upload} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {ROW_GUTTER} from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex'
import {connect} from "react-redux";
import {APP_PREFIX_PATH} from "../../../../configs/AppConfig";
import {Navigate} from "react-router-dom";

export class AboutClient extends Component {

    avatarEndpoint = 'https://www.mocky.io/v2/5cc8019d300000980a055e76'

    state = {
        dataSend: false
    }

    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    render() {

        const onFinish = values => {
            const key = 'updatable';
            message.loading({content: 'Updating...', key});

            setTimeout(() => {
                message.success({content: 'Done!', key, duration: 2});
                this.setState({dataSend: true})
            }, 1000);

        };


        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        const onUploadAavater = info => {
            const key = 'updatable';
            if (info.file.status === 'uploading') {
                message.loading({content: 'Uploading...', key, duration: 1000});
                return;
            }
            if (info.file.status === 'done') {
                this.getBase64(info.file.originFileObj, imageUrl =>
                    this.setState({
                        avatarUrl: imageUrl,
                    }),
                );
                message.success({content: 'Uploaded!', key, duration: 1.5});
            }
        };

        const onRemoveAvater = () => {
            this.setState({
                avatarUrl: ''
            })
        }
        if (this.state.dataSend || this.props.client === null) {
            return <Navigate to={`${APP_PREFIX_PATH}/main/clients/client-list`} replace/>
        }
        const {name, email, username, phone, website, address, avatarUrl} = this.props.client;


        return (
            <>
                <Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
                    <Avatar size={90} src={avatarUrl} icon={<UserOutlined/>}/>
                    <div className="ml-3 mt-md-0 mt-3">
                        <Upload onChange={onUploadAavater} showUploadList={false} action={this.avatarEndpoint}>
                            <Button type="primary">Change Avatar</Button>
                        </Upload>
                        <Button className="ml-2" onClick={onRemoveAvater}>Remove</Button>
                    </div>
                </Flex>
                <div className="mt-4">
                    <Form
                        name="basicInformation"
                        layout="vertical"
                        initialValues={
                            {
                                'name': name,
                                'email': email,
                                'username': username,
                                'phoneNumber': phone,
                                'website': website,
                                'address': address.street,
                                'city': address.city,
                            }
                        }
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={16}>
                                <Row gutter={ROW_GUTTER}>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Name"
                                            name="name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your name!',
                                                },
                                            ]}
                                        >
                                            <Input/>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Username"
                                            name="username"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your username!'
                                                },
                                            ]}
                                        >
                                            <Input/>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Email"
                                            name="email"
                                            rules={[{
                                                required: true,
                                                type: 'email',
                                                message: 'Please enter a valid email!'
                                            }]}
                                        >
                                            <Input/>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Date of Birth"
                                            name="dateOfBirth"
                                        >
                                            <DatePicker className="w-100"/>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Phone Number"
                                            name="phoneNumber"
                                        >
                                            <Input/>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Website"
                                            name="website"
                                        >
                                            <Input/>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={24}>
                                        <Form.Item
                                            label="Address"
                                            name="address"
                                        >
                                            <Input/>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="City"
                                            name="city"
                                        >
                                            <Input/>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Post code"
                                            name="postcode"
                                        >
                                            <Input/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Button type="primary" htmlType="submit">
                                    Save Change
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </>
        )
    }
}

const mapStateToProps = ({clients}) => {
    const {client} = clients;
    return {client}
}

export default connect(mapStateToProps)(AboutClient)








