import React from "react";
import css from "./Posts.module.css";
import Post from "./Post/Post";
import {Field, Form, Formik} from "formik";

export default function Posts(props) {

    let postElement = props.stateProfilePage.postData.map(post => <Post key={post.id}
                                                                        id={post.id}
                                                                        post={post.post}
                                                                        likes={post.likes}/>)

    return <div className={css.Posts}>
        {postElement}
        <Formik
            initialValues={{newPost: "entered text"}}
            onSubmit={(values, {setSubmitting}) => {
                props.pushPost(values.newPost)
                values.newPost = ""
                setSubmitting(false);
            }}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="textarea" name="newPost"/>
                    <button type="submit" disabled={isSubmitting}>
                        Post push
                    </button>
                </Form>
            )}
        </Formik>

    </div>
}
