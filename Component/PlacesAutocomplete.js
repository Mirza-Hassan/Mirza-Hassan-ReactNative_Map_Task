import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { fetchLocation } from '../redux/actions/placesActions';
import { useStyles } from './PlacesAutocompleteStyles';

const PlacesAutocomplete = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <GooglePlacesAutocomplete
      placeholder="Search for places"
      minLength={2}
      autoFocus={false}
      returnKeyType={'search'}
      keyboardAppearance={'light'}
      listViewDisplayed="auto"
      fetchDetails={true}
      renderDescription={row => row.description}

      onPress={(data, details = null) => {
        dispatch(fetchLocation(details));
      }}

      query={{
        key: 'AIzaSyCpxoHwC7y-5iEZt8OD4UceyqM0TK_XU_c',
        language: 'en',
      }}

      styles={{
        textInputContainer: classes.textInputContainer,
        textInput: classes.textInput,
        predefinedPlacesDescription: classes.predefinedPlacesDescription,
      }}

      currentLocation={false}
      nearbyPlacesAPI="GooglePlacesSearch"
      GooglePlacesSearchQuery={{
        rankby: 'distance',
        type: 'cafe',
      }}

      debounce={200}
    />
  );
};

export default PlacesAutocomplete;
