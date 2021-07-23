import React from 'react';
import Header from "./Header";
import {logOut} from "../../redux/auth-reduser";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

const dispatchACs = {
    logOut
}

export default connect(mapStateToProps, dispatchACs)(HeaderContainer);