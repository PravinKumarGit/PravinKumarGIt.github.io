import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import Input from "../../../components/uielements/input";
import Wrapper from "./Styles/addressField.styles";
export default function EmailField({ ...props }) {
  const [address, setAddress] = useState("");
  const handleChange = address => {
    setAddress(address);
  };

  const handleSelect = address => {
    // console.log("Success", address);
    setAddress(address);
    geocodeByAddress(address)
      .then(results => console.log("Success", results))
      .catch(error => console.error("Error", error));
  };
  return (
    <Wrapper>
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
        searchOptions={{
          componentRestrictions: {
            country: "au"
          }
        }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="address-wrapper">
            <Input
              {...getInputProps({
                title: "Type here to search for your address",
                placeHolder: "Address Search",
                suffix: [
                  <button className="Address-ManualButton noselect">
                    Manual
                  </button>
                ]
              })}
              value={address}
            />
            {(suggestions || []).length > 0 && (
              <div className="pac-container pac-logo">
                {suggestions.map((suggestion, index) => {
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion)}
                      className="pac-item"
                      key={`suggestion${index}`}
                    >
                      <span className="pac-icon pac-icon-marker"></span>
                      <span className="pac-item-query">
                        <span className="pac-matched">{(address || '').split(',')[0]}</span>
                      </span>
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </PlacesAutocomplete>
    </Wrapper>
  );
}
