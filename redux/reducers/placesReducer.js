import { UPDATE_LOCATION } from '../actions/placesActions';

const initialState = {
    latitude: 42.882004,
    longitude: 74.582748,
};

const placesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LOCATION:
            return {
                ...state,
                latitude: action.payload.latitude,
                longitude: action.payload.longitude,
            };
        default:
            return state;
    }
};

export default placesReducer;
