
import s from './profileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div><img src="https://cdn.nur.kz/images/1120x630/1f4cf0327a6aa542.jpeg" alt=""/></div>
            <div className={s.descBlock}>ava + desc</div>
        </div>
    );
};

export default ProfileInfo;
