import React, {Component} from 'react';
import {useEffect, useState} from 'react';
import axios from "axios";

// import Home from './components/Home2';
 var  user= "litvil77@gmail.com";
 var pass = "L!WUr@WLY96fge3";
 



  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // if(firebase.apps.length){
  //  firebase.initializeApp(firebaseConfig);
  // }else{
  // 	firebase.app();
  // }

class Authen extends Component {
 
	constructor(props) {
     super(props);
     this.state ={
     	err: '',
      token: '',
      isLogin: false,
     };


    }
}
export default Authen;