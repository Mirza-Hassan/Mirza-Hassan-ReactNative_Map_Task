export const UPDATE_LOCATION = 'UPDATE_LOCATION';

export const updateLocation = (location) => ({
    type: UPDATE_LOCATION,
    payload: location,
});

// Async action using Redux Thunk
export const fetchLocation = (details) => (dispatch) => {
    // Process the details object to get the location
    const location = {
        latitude: details.geometry.location.lat,
        longitude: details.geometry.location.lng,
    };
    dispatch(updateLocation(location));
};
