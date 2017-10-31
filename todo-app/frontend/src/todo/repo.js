import Guid from '../../node_modules/guid/guid'

class Repo {
    constructor(){
        this.listRepository = [{
            _id: Guid.raw(),
            description: "Teste 1",
            __v: 0,
            createdAt: Date.now(),
            done: false
        },{
            _id: Guid.raw(),
            description: "Teste 2",
            __v: 0,
            createdAt: Date.now(),
            done: false
        },{
            _id: Guid.raw(),
            description: "Teste 3",
            __v: 0,
            createdAt: Date.now(),
            done: false
        },{
            _id: Guid.raw(),
            description: "Teste 4",
            __v: 0,
            createdAt: Date.now(),
            done: false
        }]

    }

    get(description) {
        console.log(description)
        return this.listRepository
    }

    add(description){
        this.listRepository.push({
            _id: Guid.raw(),
            description: description,
            __v: 0,
            createdAt: Date.now(),
            done: false 
        })
    }

    remove(todo){
        let index = this.listRepository.indexOf(todo);
        if (index > -1) {
            this.listRepository.splice(index, 1);
        }
    }

    done(todo){
        let index = this.listRepository.indexOf(todo);
        if (index > -1) {
            this.listRepository[index] = {
                ...todo,
                done: true
            };
        }
    }

    pending(todo){
        let index = this.listRepository.indexOf(todo);
        if (index > -1) {
            this.listRepository[index] = {
                ...todo,
                done: false
            };
        }
    }
}

export default new Repo()