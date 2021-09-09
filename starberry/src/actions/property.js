import {
  RETRIEVE_PROPERTY,
  RETRIEVE_PROPERTYBYID,
} from "./types";

import PropertyDataService from "../services/property.service";

export const retrieveProperty = () => async (dispatch) => {
  try {
    const res = await PropertyDataService.getAll();
    let propertyDisplayList = []
    let displayImg;
    res.data.map((payloadItem) => {
        payloadItem.Images.map((payloadImageItem, imageIndex)=>{
              if(imageIndex == 0) {
                displayImg = payloadImageItem.url;
              }
        });
            propertyDisplayList.push({
              "displayImageURL" : displayImg,
              "Title" : payloadItem.Title,
              "Price" : payloadItem.Price,
              "Bedrooms" : payloadItem.Bedrooms,
              "id" : payloadItem.id,
              "Building_Type" : payloadItem.Building_Type.toLowerCase(),
              "Property_Type" : payloadItem.Property_Type.toLowerCase()
            })
    });   
    dispatch({
      type: RETRIEVE_PROPERTY,
      payload: propertyDisplayList,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getPropertyById = (id) => async (dispatch) => {
  try {
    const res = await PropertyDataService.get(id);

    let propertyDisplayList = [];
    let negotiatorList = [];
    let negotiatorImageList = [];
    let displayImg;
    res.data.map((payloadItem) => {
        payloadItem.Images.map((payloadImageItem, imageIndex)=>{
              if(imageIndex == 0) {
                displayImg = payloadImageItem.url;
              }
        });
        negotiatorList.push(payloadItem.Negotiator);
        negotiatorImageList.push(payloadItem.Negotiator.Image);  
            propertyDisplayList.push({
              "displayImageURL" : displayImg,
              "Title"           : payloadItem.Title,
              "Price"           : payloadItem.Price,
              "Bedrooms"        : payloadItem.Bedrooms,
              "id"              : payloadItem.id,
              "Images"          : payloadItem.Images,
              "negotiatorImageList" : negotiatorImageList,
              "Negotiator"     : negotiatorList,
              "Description"    : payloadItem.Description,
              "Brochure"       : payloadItem.Brochure,
              "Floor_Plans"    : payloadItem.Floor_Plans

              
            })
    });   
    dispatch({
      type: RETRIEVE_PROPERTYBYID,
      payload: propertyDisplayList,
    });
  } catch (err) {
    console.log(err);
  }
};






