import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import PaperLayout from "components/PaperLayout/PaperLayout";
import Typography from "@material-ui/core/Typography";
import API_PATHS from "constants/apiPaths";
import Grid from "@material-ui/core/Grid";
import FacebookLogin from 'react-facebook-login';
import { useCallback } from 'react';


export default function SingIn() {
 
  const [loggined, setReg] = useState({
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: ''
  }); 

  useEffect(()=> {

    if(loggined.isLoggedIn == true) {
     
    }

  }, [loggined]);
  const onClick = useCallback(() => console.log("test"), []);
  
  const responseFacebook = useCallback((response: any) => console.log(response), []);


  return (
    <PaperLayout>
    <form onSubmit={()=> {}} autoComplete="off">
        <Grid container justifyContent='center' spacing={2}>
          <FacebookLogin
            appId="4601090489935927"
            autoLoad={true}
            fields="name,email,picture"
            onClick={onClick}
            callback={responseFacebook} />
        </Grid>
      </form>
    </PaperLayout>
  );
}