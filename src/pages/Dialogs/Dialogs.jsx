import React, {useState} from 'react';
import DialogsItem from "./DialosItem/DialogsItem";
import Message from "./Message/Message";
import s from './dialogs.module.css'
import {useSelector, useDispatch, connect} from 'react-redux'
import {dialogAdd} from "../../redux/dialogsSlice";




const Dialogs = ({dialogs, dialogsItem}) => {
    const dialogsElements = dialogsItem.map(d =>  <DialogsItem name={d.name} id={d.id}/>)
    const messagesElements = dialogs.map(m => <Message message={m.message}/>)
    const [text, setText] = useState('')

    const dispatch = useDispatch();

    const dialogsAdd = () => {
        dispatch(dialogAdd(text))
    }
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <textarea value={text} onChange={(e) => setText(e.target.value) }/>
                    <button onClick={dialogsAdd}>addText</button>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default connect(
    (store) => ({
        dialogs: store.dialogsSlice.dialogs,
        dialogsItem: store.dialogsSlice.dialogsItem,
    })
)(Dialogs)
