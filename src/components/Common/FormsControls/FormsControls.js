import React from 'react'
import classes from './FormsControls.module.css'

const FormControler = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;

    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;

    return <FormControler {...props}><textarea {...input} {...restProps}/></FormControler>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;

    return <FormControler {...props}><input {...input} {...restProps}/></FormControler>
}
