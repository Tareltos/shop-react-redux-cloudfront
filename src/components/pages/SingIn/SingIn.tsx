import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { useAsyncCallback } from 'react-use-async-callback';
import PaperLayout from "components/PaperLayout/PaperLayout";
import Typography from "@material-ui/core/Typography";
import API_PATHS from "constants/apiPaths";
import Grid from "@material-ui/core/Grid";
import { useCallback } from 'react';
import Button from '@material-ui/core/Button';

export default function SingIn() {
 
  const [loggined, setReg] = useState({
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: ''
  }); 
  const dispatch = useDispatch();

  useEffect(()=> {

    if(loggined.isLoggedIn == true) {
     
    }

  }, [loggined]);
  const onClick = useCallback(() => {
    dispatch(axios.get(API_PATHS.singIn + '/github')).then(resp => console.log(resp));

  }, [dispatch]);

  return (
    <PaperLayout>
    <form onSubmit={()=> {}} autoComplete="off">
        <Grid container justifyContent='center' spacing={2}>
        <Button
            type="submit"
            variant="contained"
            color="secondary"
            onClick={onClick}
          >
            Sing in with GitHub
          </Button>
        </Grid>
      </form>
    </PaperLayout>
  );
}