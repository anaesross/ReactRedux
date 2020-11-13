import { actionsTypes } from '../constants/frutas'


const INITIAL_STATE = {
    frutas: [
        { id:1, nome:'Uva', quantidade:20},
        { id:2, nome:'Maça', quantidade:5}
    ]
};

const reducers = (state, action) =>{ //reducers tem o state e a ação
    switch (action.type ){
        case actionsTypes.ADICIONAR_FRUTA:
            return { frutas: [...state.frutas, {...action.payload} ]}; // array de objetos , pegando o que ja tinha no e inserindo no valor no objeto
        case actionsTypes.REMOVER_FRUTA:
            return { frutas: state.frutas.filter(x => x.id !== action.payload.id)}; // retornar um novo objeto onde na posição id da fruta remove o que buscou
        default:
            return state;
    }
} 

export { reducers }


    /*if(action.type == 'ADICIONAR_FRUTA'){
        //..
    } else if (action.type == 'REMOVER_FRUTA') {
        //..
    }*/