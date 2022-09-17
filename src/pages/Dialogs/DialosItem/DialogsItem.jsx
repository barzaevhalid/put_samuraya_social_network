import React from 'react';
import {NavLink} from "react-router-dom";

const DialogsItem = ({name, id}) => {

    return (
        <div>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    );
};

export default DialogsItem;
