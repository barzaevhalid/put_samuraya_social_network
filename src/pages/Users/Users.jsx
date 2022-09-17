import React, {useEffect} from 'react';
import * as axios from 'axios'
import {connect, useDispatch} from "react-redux";
import {follow, unFollow} from "../../redux/usersSlice";
import store from "../../redux/store";
import {NavLink} from "react-router-dom";
import s from './users.module.css'
const Users = (props) =>{
        const pagesCount = Math.ceil(props.totalsCount / props.users.length)
        const pages = []

        for (let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }
        return (
            <div>
                    <div><span onClick={() =>  props.onChange(props.currentPage - 1)}> left </span>and<span onClick={() => props.onChange(props.currentPage +1)}> right </span>
                    <div>{props.currentPage}</div></div>
                {
                    props.users.map((item) => {
                        return (
                            <div key={item.id}>
                                <div>
                                    <NavLink to={`/profile/${item.id}`}>
                                     <img className={s.avatar} src={item.photos.large || item.photos.small || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt=""/>
                                    </NavLink>
                                </div>
                                <div>
                                    {item.name}
                                </div>
                                <div>
                                    {item.status}
                                </div>
                                <div>
                                    {item.followed ? <button onClick={() => props.unfollowed(item.id)}>unFollow</button> :
                                        <button onClick={() => props.followed(item.id)}>follow</button>}
                                </div>
                                <div>
                                </div>
                                <div>
                                </div>
                            </div>
                        )
                    })
                }
                {pages.map(i => <span key={i} onClick={() => props.onChange(i)} className={`${s.page}  ${props.currentPage === i && s.active}`}> {i}</span>)}

            </div>
        );
    }



export default Users;
