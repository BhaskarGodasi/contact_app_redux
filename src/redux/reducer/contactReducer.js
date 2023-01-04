const initialState = [
    // {
    //     id:0,
    //     name:"Raman",
    //     number:9143156327,
    //     email:"raman@gmail.com"
    // },
    // {
    //     id:1,
    //     name:"lakshmi",
    //     number:8958462224,
    //     email:"lakshmishobha@gmail.com",
    // }
];

const contactReducer = (state =initialState,action)=>{
    switch(action.type){
        case "ADD_CONTACT":
            state = [...state ,action.payload];
            return state;
        case "UPDATE_CONTACT":
            const updateState = state.map(contact=> contact.id===action.payload.id ? action.payload:contact);
            state = updateState; 
            return state;
        case "DELECT_CONTACT":
            const delectState = state.filter(contact=> contact.id !== action.payload && contact);
            state = delectState;
            return state;
        default:
            return state;
    }
};
export default contactReducer;