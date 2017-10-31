const INITIAL_STATE = {
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
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED': 
            return { ...state, description: action.payload }
        default:
            return state
    }
}