import Header from "./components/Header/Header";
import Navbar from "./components/Nav/Navbar";
import Profile from "./pages/Profile/Profile";
import Dialogs from "./pages/Dialogs/Dialogs";

import {Routes, Route} from 'react-router-dom'

import s from  "./App.module.css"
import UsersContainer from "./pages/Users/UsersContainer";

const App = () => {
    return (
        <div className={s.app_wrapper}>
           <Header />
           <Navbar />
           <Routes>
               <Route path="/profile" element={ <Profile /> } />
               <Route path="/dialogs" element={ <Dialogs /> }/>
               <Route path="/users" element={ <UsersContainer/> }/>
           </Routes>
        </div>
    );
};

export default App;
