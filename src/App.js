import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reduser";
import Preloader from "./components/Common/Preloader";
import {WithSuspense} from "./components/hoc/WithSuspense";

//Lazy test

const DialogsContainer = React.lazy( () => import ("./components/Dialogs/DialogsContainer"));


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {return <Preloader />}

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar store={this.props.store}/>
                    <div className='app-wrapper-content'>
                        <Route path='/profile/:id?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={WithSuspense(DialogsContainer)}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);