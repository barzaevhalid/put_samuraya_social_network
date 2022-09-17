import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {follow, unFollow, setUsers, setPage, isFetch} from "../../redux/usersSlice";
import * as axios from "axios";
import Preloader from "../../common/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.isFetch(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(data => this.props.addUsers(data.data)).then(this.props.isFetch(false))
    }
    onChangePage = (i) => {
        this.props.setCurrentPage(i)
        this.props.isFetch(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${i}&count=${this.props.pageSize}`)
            .then(data => this.props.addUsers(data.data))
            .then(() => this.props.isFetch(false))
    }
    render() {
        console.log(this.props.isFetching, 'fetching is')
        return <>
            {this.props.isFetching ? <Preloader/> :
                <Users
                    totalsCount={this.props.totalsCount}
                    onChange={this.onChangePage}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    followed={this.props.followed}
                    unfollowed={this.props.unfollowed}
                />
            }
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersSlice.users,
        error: state.usersSlice.error,
        totalsCount: state.usersSlice.totalsCount,
        currentPage: state.usersSlice.currentPage,
        pageSize: state.usersSlice.pageSize,
        isFetching: state.usersSlice.isFetching,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        followed: (userId) => {
            dispatch(follow({userId: userId}))
        },
        unfollowed: (userId) => {
            dispatch(unFollow({userId: userId}))
        },
        addUsers: (users) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (page) => {
            dispatch(setPage(page))
        },
        isFetch: (fetch) => {

            dispatch(isFetch(fetch))
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);
