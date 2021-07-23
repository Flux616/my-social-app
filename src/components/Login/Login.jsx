import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {logIn} from "../../redux/auth-reduser";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const LoginForm = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'email'} component={Input} validate={required}/>
            </div>
            <div>
                <Field type='password' name={'password'} placeholder={'password'} component={Input}
                       validate={required}/>
            </div>
            <div>
                <Field type="checkbox" component={Input} name={'rememberMe'}/> Remember me!
            </div>
            <div>
                <button>Login</button>
            </div>
            <div>
                {error}
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = formData => {
        props.logIn(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {logIn})(Login);