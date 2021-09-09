import {
  RETRIEVE_PROPERTY,
  RETRIEVE_PROPERTYBYID
 } from "../actions/types";

const initialState = [];

function  PropertyReducer(property = initialState, action) {
  const { type, payload } = action;

  switch (type) {  
    case RETRIEVE_PROPERTY:
      return payload;
    case RETRIEVE_PROPERTYBYID :
      return payload;
    default:
      return property;
  }
};

export default PropertyReducer;