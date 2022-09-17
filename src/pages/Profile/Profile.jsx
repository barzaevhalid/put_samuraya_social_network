import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {connect} from "react-redux";
import s from "./profile.module.css"

const Profile = (props) => {
    return (
        <div className="content">
            <h1>{props.page}</h1>
           <ProfileInfo />
            <MyPosts />
        </div>
    );
};

export default connect((state) => {
    return{ page: state.usersSlice.currentPage}
})(Profile);
