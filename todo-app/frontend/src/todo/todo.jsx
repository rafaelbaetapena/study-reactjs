import React, { Component } from 'react'
//import axios from 'axios'
import Guid from '../../node_modules/guid/guid'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

//const URL = 'http://localhost:3003/api/todos'

var listRepository = [{
    _id: Guid.raw(),
    description: "Teste 123",
    __v: 0,
    createdAt: Date.now(),
    done: false
}]

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
    }

    componentDidMount(){        
        this.refresh()
    }

    refresh() {
        const list = this.state.list
        this.setState({
            ...this.state,
            description: '',
            list: listRepository
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
        listRepository.push({
            _id: Guid.raw(),
            description: description,
            __v: 0,
            createdAt: Date.now(),
            done: false 
        })
        this.refresh()

        // axios.post(URL, { description })
        //     .then(resp => this.refresh())
    }

    handleRemove(todo) {
        var index = listRepository.indexOf(todo);
        if (index > -1) {
            listRepository.splice(index, 1);
        }
        this.refresh()
        // axios.delete(`${URL}/${todo._id}`)
        //     .then(resp => this.refresh())
    }

    render(){
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm 
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange} />
                <TodoList list={this.state.list} 
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}