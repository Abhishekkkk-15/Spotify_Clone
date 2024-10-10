export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //Remove this after words
    token:"BQBiFU0gjKIsZPiOW0-eVSsjTYSkubV4ThoabSeiUI3UdFCcDfo3XuX8JaHMfjidAEIYiVd36D4RXswi8dmRFOlHL7-Qlxxbm_wNRCzJXVf2eQnFz13gplogs4bXF75w-Qnwm6B2vfdN6UQcGik-e3vIKAPARR1CtnGfki8ERDAv23u--gSzxzhbCUzh_Jbk4NwHnEHdDm51FQSMSvy-ECjQ"
}

const reducer = (state, action) => {
    console.log(action)

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,               //it means take the initalState and just change the user by dispatch 
                user: action.user
            };
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            }
        default:
            return state
    }

}

export default reducer