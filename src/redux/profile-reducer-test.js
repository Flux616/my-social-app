// Пример теста

import React from 'react';
import profileReducer, {addPostActionCreator} from "./profile-reducer";

// Shared data

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    profile: null,
    status: ''
}

it ('length of posts should be incremented', () => {

    // 1. Test data
    let action = addPostActionCreator('Hello')

    // 2. Action
    let newState = profileReducer(state, action)

    // 3.Expectation
    expect(newState.posts.length).toBe(5)
});

/*
it ('after deleting length of posts should be decremented', () => {

    // 1. Test data
    let action = deletePost(1)

    // 2. Action
    let newState = profileReducer(state, action)

    // 3.Expectation
    expect(newState.posts.length).toBe(3)
});*/
