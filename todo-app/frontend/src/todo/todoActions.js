import Repo from './repo'
import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    const list = Repo.get()    
    return {
        type: 'TODO_SEARCHED',
        payload: list
    }
    // const request = axios.get(`${URL}?sort=-createdAt`)
    // return {
    //     type: 'TODO_SEARCHED',
    //     payload: request
    // }
}

export const add = (description) => {

    return dispatch => {
        new Promise ((resolve, reject) => resolve(Repo.add(description)))
            .then(resp => dispatch({ type: 'TODO_ADDED', payload: description }))
            .then(resp => dispatch(search()))
    }
    
    // return dispatch => {
    //     axios.post(URL, { description })
    //         .then(resp => dispatch({ type: 'TODO_ADDED', payload: resp.data }))
    //         .then(resp => dispatch(search()))
    // }
}

export const markAsDone = (todo) => {

    return dispatch => {
        new Promise ((resolve, reject) => resolve(Repo.done(todo)))
            .then(resp => dispatch({ type: 'TODO_MARKED_AS_DONE', payload: {...todo, done: true} }))
            .then(resp => dispatch(search()))
    }

    // return dispatch => {
    //     axios.put(`${URL}/${todo._id}`, { ...todo, done: true})
    //         .then(resp => dispatch({type: 'TODO_MARKED_AS_DONE', payload: resp.data}))
    //         .then(resp => dispatch(search()))
    // }
}

export const markAsPending = (todo) => {
    
        return dispatch => {
            new Promise ((resolve, reject) => resolve(Repo.pending(todo)))
                .then(resp => dispatch(search()))
        }
    
        // return dispatch => {
        //     axios.put(`${URL}/${todo._id}`, { ...todo, done: false})
        //         .then(resp => dispatch(search()))
        // }
    }