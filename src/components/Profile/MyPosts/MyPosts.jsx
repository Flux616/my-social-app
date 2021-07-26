import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const MyPosts = (props) => {

    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <NewPostForm onSubmit={props.addPost} props={props}/>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

const maxLength30 = maxLengthCreator(30);

const MyPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newPostBody' placeholder='Write your post here!' validate={[required, maxLength30]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
}

let NewPostForm = reduxForm({form: 'newPostForm'})(MyPostForm)

export default MyPosts;