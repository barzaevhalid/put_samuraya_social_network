import React, {useState} from 'react';

import s from './myPosts.module.css'
import Post from "./Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {addPost} from "../../../redux/profileSlice";

const MyPosts = () => {
    const [post, setPost] = useState('')
    // const mePostsData = [
    //     {id: 1, message: "hello1", likesCount: 1,},
    //     {id: 2, message: "hello2", likesCount: 2,},
    //     {id: 3, message: "hello3", likesCount: 3,},
    //     {id: 4, message: "hello4", likesCount: 4,},
    // ]
    const {posts} = useSelector(state => state.profileSlice);
    const dispatch = useDispatch();

    const addPosts = () => {
        dispatch(addPost(post))
    }

    return (
        <div className={s.postsBlock}>
           <h2> my posts</h2>
           <div> <textarea value={post} onChange={(e) => setPost(e.target.value)}></textarea></div>
            <button onClick={addPosts}>add post</button>
            <div className={s.posts}>
                {posts.map(item => {
                    return(
                        <Post key={item.id} id={item.id} message={item.message} likesCount={item.likesCount}/>
                    )
                })}
            </div>
        </div>
    );
};

export default MyPosts;
