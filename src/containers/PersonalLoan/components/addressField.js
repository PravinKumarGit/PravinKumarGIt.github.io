import React, { useState } from "react";
import { Row, Col } from "react-grid-system";

import PlacesAutocomplete, {
  geocodeByAddress
} from "react-places-autocomplete";

import Input from "../../../components/uielements/input";
import Select from "../../../components/uielements/select/select";
import { STATE_CODE } from "../../../constants/options";
import Wrapper from "./Styles/addressField.styles";
export default function EmailField({ ...props }) {
  const [address, setAddress] = useState("");
  const [manual, toggleManual] = useState(false);
  const [unitNumber, setUnitNumber] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [suburb, setSuburb] = useState("");
  const [street, setStreet] = useState("");
  const [state, setState] = useState("");
  const [postCode, setPostCode] = useState("");
  const [gmapLibLoaded, setGmapLibLoaded] = useState(false);
  const handleChange = address => {
    setAddress(address);
    if (address.length === 0) {
      toggleManual(false);
      setStreetNumber("");
      setStreet("");
      setState("");
      setSuburb("");
      setPostCode("");
    }
  };

  const handleSelect = address => {
    setAddress(address);
    geocodeByAddress(address)
      .then(results => {
        const add = results[0];
        const streetNumberIndex = (
          add.address_components || []
        ).findIndex(item => item.types.includes("street_number"));
        const stateIndex = (add.address_components || []).findIndex(item =>
          item.types.includes("administrative_area_level_1")
        );
        const streetIndex = (add.address_components || []).findIndex(item =>
          item.types.includes("route")
        );
        const suburIndex = (add.address_components || []).findIndex(item =>
          item.types.includes("locality")
        );
        const postalCodeIndex = (add.address_components || []).findIndex(item =>
          item.types.includes("postal_code")
        );
        toggleManual(true);
        streetNumberIndex > 0 &&
          setStreetNumber(add.address_components[streetNumberIndex].short_name);
        streetIndex > 0 &&
          setStreet(add.address_components[streetIndex].short_name); //street_number
        stateIndex > 0 &&
          setState(add.address_components[stateIndex].short_name); //administrative_area_level_1
        suburIndex > 0 &&
          setSuburb(add.address_components[suburIndex].short_name); // locality
        postalCodeIndex > 0 &&
          setPostCode(add.address_components[postalCodeIndex].short_name); //postal_code
      })
      .catch(error => console.error("Error", error));
  };

  window.initMap = () => setGmapLibLoaded(true);
  const gmapScriptEl = document.createElement(`script`);
  gmapScriptEl.src = `https://maps.googleapis.com/maps/api/js?key=SECRET_EATING&libraries=places&callback=initMap`;
  document
    .querySelector(`body`)
    .insertAdjacentElement(`beforeend`, gmapScriptEl);
  return (
    <Wrapper>
      {gmapLibLoaded && (
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
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading
          }) => (
            <div className="address-wrapper">
              <Input
                {...getInputProps({
                  title: "Type here to search for your address",
                  placeHolder: "Address Search",
                  suffix: [
                    <button
                      onClick={() => toggleManual(!manual)}
                      className="Address-ManualButton noselect"
                      type="button"
                    >
                      <span>Manual</span>
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
                          <span className="pac-matched">
                            {(address || "").split(",")[0]}
                          </span>
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
      )}
      {manual && [
        <Row>
          <Col xs={12} sm={12} md={3} xl={3} lg={3}>
            <Input
              title="Unit Number"
              placeHolder="Unit Number"
              OptionalLabel
              value={unitNumber}
            />
          </Col>
          <Col xs={12} sm={12} md={3} xl={3} lg={3}>
            <Input
              title="Street Number"
              placeHolder="Street Number"
              value={streetNumber}
            />
          </Col>
          <Col xs={12} sm={12} md={6} xl={6} lg={6}>
            <Input title="Suburb" placeHolder="Suburb" value={suburb} />
          </Col>
        </Row>,
        <Row>
          <Col xs={12} sm={12} md={6} xl={6} lg={6}>
            <Input title="Street" placeHolder="Street" value={street} />
          </Col>
          <Col xs={12} sm={12} md={3} xl={3} lg={3}>
            <Select
              isPlaceHolder
              placeHolder="State"
              Title="State"
              options={STATE_CODE}
              value={state}
            />
          </Col>
          <Col xs={12} sm={12} md={3} xl={3} lg={3}>
            <Input title="Post code" placeHolder="Post code" value={postCode} />
          </Col>
        </Row>
      ]}
    </Wrapper>
  );
}
