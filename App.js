import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import PlacesAutocomplete from './Component/PlacesAutocomplete';

const App = () => {
    return (
        <Provider store={store}>
            <PlacesAutocomplete />
        </Provider>
    );
};

export default App;
