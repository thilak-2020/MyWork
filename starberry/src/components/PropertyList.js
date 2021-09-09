import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles  } from '@material-ui/styles';
import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import {
  retrieveProperty,
} from "../actions/property";
import { connect,useDispatch, useSelector  } from "react-redux";
import "core-js/stable";
import "regenerator-runtime/runtime";
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { createTheme } from '@material-ui/core/styles';
//import Select from "react-select";
import { ExitToApp, NoEncryption } from '@material-ui/icons';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import { Link } from 'react-router-dom';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import getSymbolFromCurrency from 'currency-symbol-map';
import NumberFormat from 'react-number-format';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    marginTop:20,
  },
  selectborder: {
    borderStyle:"none"
  },
formControl: {
  minWidth: 200,
  marginRight:20
},
title: {
  fontSize: 14,
},

minpriceleft: {
  marginLeft:86,
  "@media (max-width: 800px)": {
    marginLeft:0
  }
},
maxpriceleft: {
  marginLeft:86,
  "@media (max-width: 800px)": {
    marginLeft:0
  }
},
sortleft: {
  marginLeft:86,
  "@media (max-width: 800px)": {
    marginLeft:0
  }
},
resultdiv: {
  marginLeft:80,
  marginTop:15, 
  fontSize:12,
  "@media (max-width: 800px)": {
    marginLeft:0,
    fontSize:12,
  }
},
optionfontsize : {
  fontSize:12,
  color:'black'
}
});

export default function PropertyList() {
  const classes = useStyles();
  const alignment = "center";
  

  const [currentIndex, setCurrentIndex] = useState(-1);
  const propertyList = useSelector(state => state.property);
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(retrieveProperty());
   });
  
  return (
    <Container>
      <div>
        <Typography>
            <h3 id="h3" align={alignment}>
              Property for Sales
            </h3>
          </Typography>
        <div>
         <div>
            <Divider />
          </div>
          <Grid container xs={12} spacing={1}>
              <Grid item xs={3} sm={6} md={3} lg={2}  > 
                  <FormControl className={classes.formControl}>
                      <InputLabel id="demo-controlled-open-select-label" className={classes.optionfontsize}>All Bedrooms</InputLabel>
                      <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        disableUnderline style={{width:125}}>
                        <MenuItem value=""></MenuItem> 
                      </Select>
                  </FormControl>
             </Grid>
              <Grid item xs={12} sm={6} md={3} lg={2}> 
                  <FormControl className={classes.formControl}>
                  <InputLabel id="neighbourhoodId" className={classes.optionfontsize}>Any Neighbourhood</InputLabel>
                      <Select
                        labelId="neighbourhoodId"
                        id="neighbourhoodId"
                        disableUnderline
                        >
                        <MenuItem value=""></MenuItem> 
                    </Select>
                    </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={2}> 
                    <FormControl className={classes.formControl} className={classes.minpriceleft}>
                        <InputLabel id="minpriceId" className={classes.optionfontsize}>Min Price</InputLabel>
                            <Select
                              labelId="minpriceId"
                              id="minpriceId"
                              disableUnderline
                              style={{width:125}}
                              >
                              <MenuItem value=""></MenuItem> 
                          </Select>
                    </FormControl>        
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={2}> 
                 <FormControl className={classes.formControl,classes.maxpriceleft} >
                        <InputLabel id="maxpriceId" className={classes.optionfontsize}>Max Price</InputLabel>
                            <Select
                              labelId="maxpriceId"
                              id="minpriceId"
                              disableUnderline
                              style={{width:125}}
                              >
                              <MenuItem value=""></MenuItem> 
                          </Select>
                    </FormControl>  
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={2}> 
                  <FormControl className={classes.formControl,classes.sortleft}>
                            <InputLabel id="sortid" className={classes.optionfontsize}>Sort By</InputLabel>
                                <Select
                                  labelId="sortid"
                                  id="sortid"
                                  disableUnderline
                                  style={{width:125}}
                                  >
                                  <MenuItem value=""></MenuItem> 
                              </Select>
                    </FormControl>  
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={2}>
               <div className={classes.resultdiv}>
                 57 Results
                </div>  
              </Grid>
          </Grid>
          <div>
            <Divider />
          </div>
      <Grid container item spacing={1}>
        <Grid  container item xs={12}  spacing={3}>  
           {propertyList && propertyList.map((propertyItem, index) => (
              <Grid item  xs={12} sm={6} md={3} lg={4}> 
                   <Link to={'/propertyview/'+ propertyItem.id} style={{ textDecoration: 'none' }}>
                      <Card className={classes.root} style={{ border: "none", boxShadow: "none" }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt={propertyItem.Title}
                                    height="140"
                                    image={propertyItem.displayImageURL}
                                    title={propertyItem.Title}
                                  />
                                   
                                  <CardContent >
                                    <Typography gutterBottom color="textSecondary" component="p" classes={classes.title} style={{textAlign:"center",fontSize:14, fontWeight:600}} >
                                          {propertyItem.Title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"center",fontSize:11}}>
                                        {propertyItem.Bedrooms} bedroom {propertyItem.Building_Type} for {propertyItem.Property_Type}
                                    </Typography>
                                    <Typography variant="body2" component="p" style={{textAlign:"center"}}>
                                        <b><NumberFormat value={propertyItem.Price} displayType={'text'} thousandSeparator={true} /> {getSymbolFromCurrency('EUR')}</b>
                                    </Typography>
                                </CardContent>
                                   
                            </CardActionArea>
                          </Card>
                        </Link>
              </Grid> 
            ))}
          </Grid>
      </Grid>
      </div>
    </div>
    </Container>
  )
}
