import React, { useState, useEffect } from "react";
import { Row, Col } from "react-grid-system";

import PlacesAutocomplete, {
  geocodeByAddress
} from "react-places-autocomplete";

import Input from "../../../components/uielements/input";
import Select from "../../../components/uielements/select/select";
import { STATE_CODE } from "../../../constants/options";
import Wrapper from "./Styles/addressField.styles";
import CONFIG from "../../../constants/config";
export default function EmailField({ ...props }) {
  const {
    values: { unitNumber, streetNumber, suburb, street, state, postCode },
    errors,
    touched,
    handleChange,
    handleBlur,
    // isValid,
    // setFieldTouched,
    setFieldValue
    // setSubmitting,
    // setErrors,
    // validateForm
  } = props;
  const [address, setAddress] = useState("");
  const [manual, toggleManual] = useState(false);
  // const [unitNumber, setUnitNumber] = useState("");
  // const [streetNumber, setStreetNumber] = useState("");
  // const [suburb, setSuburb] = useState("");
  // const [street, setStreet] = useState("");
  // const [state, setState] = useState("");
  // const [postCode, setPostCode] = useState("");
  const [gmapLibLoaded, setGmapLibLoaded] = useState(false);
  const handleChangeLocal = address => {
    setAddress(address);
    if (address.length === 0) {
      toggleManual(false);
      setFieldValue("streetNumber", "");
      setFieldValue("street", "");
      setFieldValue("state", "");
      setFieldValue("suburb", "");
      setFieldValue("suburb", "");
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
          setFieldValue(
            "streetNumber",
            add.address_components[streetNumberIndex].short_name
          );
        streetIndex > 0 &&
          setFieldValue(
            "street",
            add.address_components[streetIndex].short_name
          );
        stateIndex > 0 &&
          setFieldValue("state", add.address_components[stateIndex].short_name);
        suburIndex > 0 &&
          setFieldValue(
            "suburb",
            add.address_components[suburIndex].short_name
          );
        postalCodeIndex > 0 &&
          setFieldValue(
            "suburb",
            add.address_components[postalCodeIndex].short_name
          );
      })
      .catch(error => console.error("Error", error));
  };
  useEffect(() => {
    window.initMap = () => setGmapLibLoaded(true);
    const gmapScriptEl = document.createElement(`script`);
    gmapScriptEl.src = `https://maps.googleapis.com/maps/api/js?key=${CONFIG.GOOGLE_API_KEY}&libraries=places&callback=initMap`;
    document
      .querySelector(`body`)
      .insertAdjacentElement(`beforeend`, gmapScriptEl);
  }, []);

  return (
    <Wrapper>
      {gmapLibLoaded && (
        <PlacesAutocomplete
          value={address}
          onChange={handleChangeLocal}
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
                  placeholder: "Address Search",
                  suffix: [
                    <button
                      onClick={() => toggleManual(!manual)}
                      className="Address-ManualButton noselect"
                      type="button"
                      key="toggleManual"
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
              placeholder="Unit Number"
              OptionalLabel
              onChange={handleChange}
              onBlur={handleBlur}
              value={unitNumber}
              name="unitNumber"
              errorMessage={touched.unitNumber ? errors.unitNumber : ""}
            />
          </Col>
          <Col xs={12} sm={12} md={3} xl={3} lg={3}>
            <Input
              title="Street Number"
              placeholder="Street Number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={streetNumber}
              name="streetNumber"
              errorMessage={touched.streetNumber ? errors.streetNumber : ""}
            />
          </Col>
          <Col xs={12} sm={12} md={6} xl={6} lg={6}>
            <Input
              title="Suburb"
              placeholder="Suburb"
              onChange={handleChange}
              onBlur={handleBlur}
              value={suburb}
              name="suburb"
              errorMessage={touched.suburb ? errors.suburb : ""}
            />
          </Col>
        </Row>,
        <Row>
          <Col xs={12} sm={12} md={6} xl={6} lg={6}>
            <Input
              title="Street"
              placeholder="Street"
              onChange={handleChange}
              onBlur={handleBlur}
              value={street}
              name="street"
              errorMessage={touched.street ? errors.street : ""}
            />
          </Col>
          <Col xs={12} sm={12} md={3} xl={3} lg={3}>
            <Select
              isPlaceHolder
              placeholder="State"
              Title="State"
              options={STATE_CODE}
              onChange={handleChange}
              onBlur={handleBlur}
              value={state}
              name="state"
              errorMessage={touched.state ? errors.state : ""}
            />
          </Col>
          <Col xs={12} sm={12} md={3} xl={3} lg={3}>
            <Input
              title="Post code"
              placeholder="Post code"
              onChange={handleChange}
              onBlur={handleBlur}
              value={postCode}
              name="postCode"
              type="number"
              errorMessage={touched.postCode ? errors.postCode : ""}
            />
          </Col>
        </Row>
      ]}
    </Wrapper>
  );
}
