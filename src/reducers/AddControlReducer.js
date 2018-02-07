const initialState = {
    displayAddControlModal: false,
    isSaving: false
};

export default (state = initialState, action) => {
    if (action.type === 'ADD_CONTROL_MODAL') {
        state = Object.assign({}, state, {
            displayAddControlModal: action.display
        });
    } else if (action.type === 'SAVE_CONTROL') {
        state = Object.assign({}, state, {
            isSaving: true
        });
    }


    return state;
}
