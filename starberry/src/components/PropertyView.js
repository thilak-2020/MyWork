import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import { makeStyles  } from '@material-ui/styles';
import getSymbolFromCurrency from 'currency-symbol-map';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import GoogleMapReact from 'google-map-react';
import { useDispatch, useSelector  } from "react-redux";
import {
  getPropertyById
} from "../actions/property";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import { Hidden } from '@material-ui/core';
import NumberFormat from 'react-number-format';
import { stripHtml } from "string-strip-html";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    marginTop:20,
    "@media (max-width: 765px)": {
      maxWidth:'100%',
    }
  },
  homeIcon : {
      width: '0.5em',
      height: '0.5em',
      fontSize: '1.5rem'
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  facts : {
    fontWeight:600,
    fontSize:14
  },
  paddingTop : {
    paddingTop:10
  },
  amount: {
    fontWeight:600
  },
  contactus : {
    textDecoration: 'underline',
    color:'#d68b00',
    fontSize:12,
    fontWeight:600
  },
  btnagent : {
    backgroundColor: "black",
    color: "white"
  },
  factsvalue : {
    fontSize:12,
    paddingLeft:20
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  shareimg: {
    paddingRight:5
  },
  bordernone :{
    border:"none",
    padding:6
  },
  paddingdetail: {
     paddingLeft:20
  },
  tablepaddingbottom : {
    padding:6
  },
  avatarimagetop : {
    marginTop: 15
  },
  dividertoppadding : {
    paddingTop:25
  }
 });

export default function ProPertyView(props) {
  const classes = useStyles();
  const propertyList = useSelector(state => state.property);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchPropertyById() {
      let propertyId = await props.match.params.id;
      await dispatch(getPropertyById(propertyId));
    }
    fetchPropertyById()
  })
  return (
    <Container>
      <div>
      {propertyList && propertyList.map((propertyItem, index) => (
        <Grid container xs={12} spacing={1} >
          <Grid item xs={12} sm={12} md={12} lg={6} >
            <div  className={classes.root}>
                  <Grid > 
                      <img src={propertyItem.displayImageURL} className={classes.root} />
                  </Grid>
                  <Grid> 
                  <ImageList className={classes.imageList} cols={2.5}>
                        {propertyItem.Images && propertyItem.Images.map((item) => (
                          <ImageListItem key={item.url}>
                            <img src={item.url} alt={propertyItem.title} />
                            <ImageListItemBar
                              title={propertyItem.title}
                              classes={{
                                root: classes.titleBar,
                              }}
                            />
                          </ImageListItem>
                        ))}
                      </ImageList>
                  </Grid>
               </div>
            </Grid>
           
          <Grid item xs={12} sm={12} md={12} lg={6} className={classes.paddingdetail} >
              <Grid container justify="flex-end" alignItems="flex-end" className={classes.dividertoppadding}>
                 <span className={classes.shareimg}><ShareIcon  style={{fontSize:'1.00rem' }}/>  <FavoriteBorderIcon style={{fontSize:'1.00rem' }}/></span>
              </Grid>
              <Grid className={classes.dividertoppadding}>
                  <Divider/>
              </Grid>
              <Grid item className={classes.paddingTop}>
              <span className={classes.amount}> {getSymbolFromCurrency('EUR')}  <NumberFormat value={propertyItem.Price} displayType={'text'} thousandSeparator={true} /> </span>  <span style={{fontSize:10}}> {propertyItem.Bedrooms} bed | 58 sm </span>
              </Grid>
              <Grid item className={classes.paddingTop} style={{fontSize:12}}>
                  1 bed apartment for sale in Fontvielle
              </Grid>
              <Grid item >
                  <div className={classes.paddingTop}>
                  <span className={classes.contactus}><HomeIcon className={classes.homeIcon}/> Please contact us </span>
                  </div>
                </Grid>
                <Grid item className={classes.paddingTop}>
                    <Button variant="contained" color="black" fullWidth className={classes.btnagent}>
                      CONTACT AGENT
                    </Button>
                </Grid>
                <Grid  item className={classes.paddingTop}>
                  FACTS & FEATURES
              </Grid>
              <Grid  item className={classes.paddingTop}>
                  <Divider/>
              </Grid>

              <TableContainer className={classes.bordernone}>
                <Table aria-label="simple table" style={{width:"80%"}}>
                  <TableBody>
                  <TableRow key="Neighbourhood" className={classes.bordernone, classes.tablepaddingbottom}>
                      <TableCell component="th" scope="row" className={classes.bordernone}>
                      <span className={classes.facts}>Neighbourhood   :</span>
                      </TableCell>
                      <TableCell align="left" className={classes.bordernone}> <span className={classes.factsvalue}>Fontvielle</span></TableCell>
                  </TableRow>
                  <TableRow key="Price per sqm" className={classes.bordernone}>
                      <TableCell component="th" scope="row" className={classes.bordernone} >
                          <span className={classes.facts}>Price per sqm   :</span>
                      </TableCell>
                      <TableCell align="left" className={classes.bordernone}><span className={classes.factsvalue}>37,391</span></TableCell>
                  </TableRow>
                  <TableRow key="Brochure">
                    <TableCell component="th" scope="row" className={classes.bordernone}>
                        <span className={classes.facts}><span className={classes.facts}>Brochure        : </span></span>
                    </TableCell>
                    <TableCell align="left" className={classes.bordernone}> {propertyItem.Brochure && propertyItem.Brochure.map((brochureItem) => ( 
                          <span className={classes.factsvalue}><a href = {brochureItem.url} target = "_blank" style={{color:'black'}}>Download Brochure</a>
                          </span>
                   ))}
                   </TableCell>
                </TableRow>
                <TableRow key="Floor Plan">
                    <TableCell component="th" scope="row" className={classes.bordernone}>
                    <span className={classes.facts}>Floor Plan      : </span>
                    </TableCell>
                    <TableCell align="left" className={classes.bordernone}>
                    {propertyItem.Floor_Plans && propertyItem.Floor_Plans.map((floorItem) => ( 
                      <span className={classes.factsvalue}><a href = {floorItem.url} target = "_blank"  style={{color:'black'}}>View Floor Plan</a>
                      </span> 
                    ))}
                   </TableCell>
                </TableRow>      
                </TableBody>
              </Table>
            </TableContainer>
              <Grid item style={{fontSize:13}}className={classes.paddingTop}>
                   { propertyItem.Description}
              </Grid>
              <Grid item>
              {propertyItem.Negotiator && propertyItem.Negotiator.map((negotiatorItem) => (
                <List className={classes.root}>
                  <ListItem alignItems="flex-start">
                  {propertyItem.negotiatorImageList && propertyItem.negotiatorImageList.map((negotiatorImgItem) => ( 
                      <ListItemAvatar>
                        <Avatar alt={negotiatorItem.Name} src={negotiatorImgItem.url} className={classes.avatarimagetop} />
                      </ListItemAvatar>
                     ))}
                    <ListItemText
                      primary={negotiatorItem.Name}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="black">
                            {negotiatorItem.Designation}
                            <br/>  {negotiatorItem.Phone} |  {negotiatorItem.Email}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
              </List>
               ))}
              </Grid>
        </Grid>
        </Grid>
         ))}
        </div>
     </Container> 
  )
}
