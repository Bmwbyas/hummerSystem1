import React, {Component} from 'react'
import {Button, Card, message, Table, Tooltip} from 'antd';
import {DeleteOutlined, EyeOutlined} from '@ant-design/icons';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import {connect} from "react-redux";
import {fetchClients, getClients, setClient} from "../../../../store/slices/clientsSlice";
import {NavLink} from "react-router-dom";
import {APP_PREFIX_PATH} from "../../../../configs/AppConfig";
import userData from "../../../../assets/data/user-list.data.json";

class UserList extends Component {

    state = {
        userProfileVisible: false,
        selectedUser: null
    }

    componentDidMount() {
        // this.props.getClients()
        const key = 'updatable';
        message.loading({content: 'Updating...', key});
        setTimeout(() => {
            this.props.fetchClients(userData)
            message.success({content: 'Done!', key, duration: 2});
        }, 1000);
    }

    showClient(id) {
        this.props.setClient(id)

    }

    deleteUser = userId => {
        this.setState({
            users: this.state.users.filter(item => item.id !== userId),
        })
        message.success({content: `Deleted user ${userId}`, duration: 2});
    }

    showUserProfile = userInfo => {
        this.setState({
            userProfileVisible: true,
            selectedUser: userInfo
        });
    };

    closeUserProfile = () => {
        this.setState({
            userProfileVisible: false,
            selectedUser: null
        });
    }

    render() {
        const {userProfileVisible, selectedUser} = this.state;
        const tableColumns = [
            {
                title: 'User',
                dataIndex: 'name',
                render: (_, record) => (
                    <NavLink onClick={() => this.showClient(record.id)}
                             to={`${APP_PREFIX_PATH}/main/clients/about-client`} className="d-flex cursor-pointer">
                        <AvatarStatus src={record.img} name={record.name} subTitle={record.email}/>
                    </NavLink>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.name.toLowerCase();
                        b = b.name.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
            },
            {
                title: 'Phone',
                dataIndex: 'phone',
                sorter: {
                    compare: (a, b) => a.phone.length - b.phone.length,
                },
            },
            {
                title: 'Website',
                dataIndex: 'website',
                sorter: {
                    compare: (a, b) => a.phone.length - b.phone.length,
                },
            },
            {
                title: '',
                dataIndex: 'actions',
                render: (_, elm) => (
                    <div className="text-right d-flex justify-content-end">
                        <Tooltip title="View">
                            <Button type="primary" className="mr-2" icon={<EyeOutlined/>} onClick={() => {
                                this.showUserProfile(elm)
                            }} size="small"/>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Button danger icon={<DeleteOutlined/>} onClick={() => {
                                this.deleteUser(elm.id)
                            }} size="small"/>
                        </Tooltip>
                    </div>
                )
            }
        ];
        return (
            <Card bodyStyle={{'padding': '0px'}}>
                <div className="table-responsive">
                    <Table columns={tableColumns} dataSource={this.props.clientList} rowKey='id'/>
                </div>
                <UserView data={selectedUser} visible={userProfileVisible} close={() => {
                    this.closeUserProfile()
                }}/>
            </Card>
        )
    }
}

const mapStateToProps = ({clients}) => {
    const {clientList} = clients;
    return {clientList}
}

const mapDispatchToProps = {
    getClients,
    setClient,
    fetchClients
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)

