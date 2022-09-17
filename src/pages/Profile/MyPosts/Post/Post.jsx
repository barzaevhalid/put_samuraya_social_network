import React from 'react';
import s from './post.module.css'
const Post = ({id, message, likesCount}) => {
    return (
        <div className={s.item} id={id}>
            <img src="https://kuban24.tv/wp-content/uploads/2019/04/377980.jpg" alt=""/>
            {message}
            <div>
              <span>likes {likesCount}</span>
            </div>
        </div>
    );
};

export default Post;
