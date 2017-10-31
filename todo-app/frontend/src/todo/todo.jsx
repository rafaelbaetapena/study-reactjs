import React, { Component } from 'react'
//import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import Repo from './repo'

//const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = { 
            description: '', 
            list: [],
        }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)   
        this.handleRemove = this.handleRemove.bind(this) 
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)    
    }

    componentDidMount(){        
        this.refresh()
    }

    refresh() {
         const list = Repo.get()
        this.setState({
            ...this.state,
            description: '',
            list: list
        })
        // axios.get(`${URL}?sort=-createdAt`)
        //     .then(resp => this.setState({
        //         ...this.state,
        //         description: '',
        //         list: resp.data
        //     }))
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description    
        Repo.add(description)
        this.refresh()

        // axios.post(URL, { description })
        //     .then(resp => this.refresh())
    }

    handleRemove(todo) {
        Repo.remove(todo)
        this.refresh()
        // axios.delete(`${URL}/${todo._id}`)
        //     .then(resp => this.refresh())
    }

    handleMarkAsDone(todo){
        Repo.done(todo)    
        this.refresh()

        // axios.put(`${URL}/${todo._id}`, {
        //     ...todo, done: true
        // })
        // .then(resp => this.refresh())
    }

    handleMarkAsPending(todo){
        Repo.pending(todo)
        this.refresh()
        // axios.put(`${URL}/${todo._id}`, {
        //     ...todo, done: false
        // })
        // .then(resp => this.refresh())
    }

    render(){
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm 
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange} />
                <TodoList 
                    list={this.state.list} 
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }
}