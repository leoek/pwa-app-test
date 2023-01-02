const initialState = {
    count: 1
}

const rootReducer = (state = initialState, action) => {
    if (action?.type === "COUNT_INCREMENT"){
        return {
            count: state.count + 1
        }
    }
    return state;
}

export default rootReducer;