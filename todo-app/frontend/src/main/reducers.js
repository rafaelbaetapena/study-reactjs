import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'pagar fatura',
            done: true
        }, {
            _id: 2,
            description: 'reunião',
            done: false
        }, {
            _id: 3,
            description: 'consulta',
            done: false
        }]
    })
})

export default rootReducer