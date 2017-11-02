import Guid from '../../node_modules/guid/guid'

class Repo {
    constructor() {
        this.listRepository = [{
            _id: Guid.raw(),
            description: "Teste 1",
            __v: 0,
            createdAt: Date.now(),
            done: false
        },
        {
            _id: Guid.raw(),
            description: "teste 123",
            __v: 0,
            createdAt: Date.now(),
            done: false
        },
        //{
            //     _id: Guid.raw(),
            //     description: "Teste 3",
            //     __v: 0,
            //     createdAt: Date.now(),
            //     done: false
            // },{
            //     _id: Guid.raw(),
            //     description: "Teste 4",
            //     __v: 0,
            //     createdAt: Date.now(),
            //     done: false
            // }
        ]

    }

    get(description) {
        let pattern = new RegExp(description,"gi")
        let newList = [...this.listRepository]
        return [...newList.filter((v) => {
            return v.description.match(pattern)
        })]
    }

    add(description) {
        let newList = [...this.listRepository]

        newList.push({
            _id: Guid.raw(),
            description: description,
            __v: 0,
            createdAt: Date.now(),
            done: false
        })

        this.listRepository = [...newList]
    }

    remove(todo) {
        let newList = [...this.listRepository]

        let index = newList.indexOf(todo);
        if (index > -1) newList.splice(index, 1);

        this.listRepository = [...newList]
    }

    done(todo) {
        let newList = [...this.listRepository]

        let index = newList.indexOf(todo);
        if (index > -1)
            newList[index] = {
                ...todo,
                done: true
            }

        this.listRepository = [...newList]
    }

    pending(todo) {
        let newList = [...this.listRepository]

        let index = newList.indexOf(todo);
        if (index > -1)
            newList[index] = {
                ...todo,
                done: false
            }

        this.listRepository = [...newList]
    }
}

export default new Repo()