import React, {Component} from 'react';
// import Airtable from 'airtable';
import axios from "axios";

const config = require('./config.js');

var clientid= 'f17101e7-b254-4222-92c0-a860c6c18bf7';
var clientsecret= '7c9ac800-f7f5-4000-beea-f95f0d57c4a0';
var token;

class AskBank extends Component {


   constructor(props) {
     super(props);
     this.state ={
        token: '',

     };

    }

     componentDidMount(){
        //  this.fetchClaims();
        {!this.state.token ? ( this.fetchToken()) 
           : (console.log(this.state.token)  )   }
      }
    
      homeSubmit(event){
        event.preventDefault();
         var home = parseInt(this.refs.home.value  ,10);
        
         this.setState({home}, function(){
          console.log(this.state);
         });
    
        
       }
       loanSubmit(event){

         var axios = require('axios');
         var data = JSON.stringify({"loanApplicantIds":
           [{"customerId":"PTYBILL1"}],"productCode":"05010DEFAULTEUR","loanRequestAmount":{"amount":15000,"currency":"EUR"},"customerContributionAmount":{"amount":2000,"currency":"EUR"},"loanStartDate":"2020-11-26","loanTerm":{"calendarPeriod":"MONTH","value":24},"repaymentFrequency":"MONTHLY","balloonPaymentAmount":{"amount":0,"currency":"EUR"},"customerInterestMargin":0,"repaymentAccount":"02020YBILL100","feeCollectionAccount":"02020YBILL100","adhocLoanEstablishmentCharges":[{"chargeDescription":"Capitalize Charge Demo","chargeAmount":{"amount":1511,"currency":"EUR"},"chargeAction":"CAPITALIZE-CHARGE-TOPUP"},{"chargeDescription":"Adhoc Charge Fee","chargeAmount":{"amount":20,"currency":"EUR"}},{"chargeDescription":"Prepaid Demo Charge","chargeAmount":{"amount":161,"currency":"EUR"},"chargeAction":"PRE-PAID-CHARGE"}],"waiveCharge":false,"disbursementScheduleRequest":[{"disbursementDate":"2020-11-26","disbursementAmount":{"amount":13000,"currency":"EUR"},"disbursementBeneficiaryId":"","disbursementBeneficiaryAccount":"02020YBILL100","disbursementType":"TRANSFER"}],"loanTaxFundingAccount":"02020YBILL100"});
         
         var config = {
           method: 'post',
           url: 'https://api.fusionfabric.cloud/retail-banking/loans/v1/loans/',
           headers: { 
             'Content-Type': 'application/json', 
             'X-Request-ID': '5fc03087-d265-11e7-b8c6-83e29cd24f4c', 
             'Idempotency-Key': 'xyz', 
             'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjNTRVUnJqTVV3Q2pVTFRVUV93QUVBQW9GemxoN1l0LU5xVXFRZGR5TGg0In0.eyJqdGkiOiJjMzMyNzM5Zi1hYTQzLTRhODgtYTdiNS1iNTAzMGY3NGQ4ZDMiLCJleHAiOjE2MTc1MDY2MjAsIm5iZiI6MCwiaWF0IjoxNjE3NTA2MzIwLCJpc3MiOiJodHRwczovL2FwaS5mdXNpb25mYWJyaWMuY2xvdWQvbG9naW4vdjEiLCJhdWQiOlsicmVmZXJlbnRpYWwtdjEtMzUzZjM5MzMtYzMwNS00ODk4LTg4ZDUtY2Q2Y2QxNjdmNzQ1IiwicmV0YWlsLXBzZDItc3RldC1waXNwLTFkMy1lMTVjNTk0OS1hOTlmLTQ4NTYtYmE0NC0yNGViMDlhMjQzNTgiXSwic3ViIjoiZjE3MTAxZTctYjI1NC00MjIyLTkyYzAtYTg2MGM2YzE4YmY3IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZjE3MTAxZTctYjI1NC00MjIyLTkyYzAtYTg2MGM2YzE4YmY3IiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiZDBhMGRhNWEtMGIzNi00ZGJjLTkzOGItMjFlNGNjZTQ4M2MwIiwiYWNyIjoiMSIsInNjb3BlIjoib3BlbmlkIHJlZmVyZW50aWFsLXYxLTM1M2YzOTMzLWMzMDUtNDg5OC04OGQ1LWNkNmNkMTY3Zjc0NSByZXRhaWwtcHNkMi1zdGV0LXBpc3AtMWQzLWUxNWM1OTQ5LWE5OWYtNDg1Ni1iYTQ0LTI0ZWIwOWEyNDM1OCIsImFwcCI6ImYxNzEwMWU3LWIyNTQtNDIyMi05MmMwLWE4NjBjNmMxOGJmNyIsImlwd2hpdGVsaXN0IjoiIiwiaW50SXBXaGl0ZWxpc3QiOiIiLCJ0ZW5hbnQiOiJzYW5kYm94IiwidXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtZjE3MTAxZTctYjI1NC00MjIyLTkyYzAtYTg2MGM2YzE4YmY3In0.iCWpZEXp0f4OSdjcdADlrqf5Q_fS8V_viJkpQjfKS_BlnfbOIGehH9EV-7aTwZNwAdVWdQbuwDOW_sMvZamyuKFwApXmfcNN0uTHvL4J0hsH-Q46CWRbO5aNmkr9nqLYg3ilLnvs2goM1vUy-dVPGZiDruyUR1sRoRvJlRPA6gHO5csYVozNogQoalUzDdQ-gotA15hmYG7WODFWKcCqs3Lcyg1YVVx4QpHcptEZf1yHGabV5UXE7Zh3e5kkU5xHonRgej_bm4w-CBCVJVlg6djh2wT9GKIYgAeNCyI1c07Se9c67F4yKDNdG9Wq86WibBSXsh7zeW8XxL_B6VNAgw', 
             'Cookie': 'TS016a938c=01dadb918d90fa4593f5f7d527fd5fae4b87d1d73542cf42395600f337b2438499e10e296659947934f370edab064c8e1802d61089'
           },
           data : data
         };
         
         axios(config)
         .then(function (response) {
           console.log(JSON.stringify(response.data));
         })
         .catch(function (error) {
           console.log(error);
         });
         

       }

       fetchToken(){
         var axios = require('axios');
               //var data = JSON.stringify({"type":"application","appId":"7978556551744239746e68304446736275397231546262426a58313230575653","appSecret":"654f6b36765736324152334c4f6a454a45565a5a565f4668396445735f3450314b3945756561304662344e77766268376b3966335273666c6b68455f63525856"});
              var data =JSON.stringify({grant_type: "client_credentials" ,"client_id":clientid, "client_secret":clientsecret,  scope: "openid" });

               const grant = {
                  grant_type: 'client_credentials',
                  scope: "openid"
                }

               var config = {
               method: 'post',
               url: 'https://api.fusionfabric.cloud/login/v1/sandbox/oidc/token',
               headers: { 
                  'Content-Type': 'application/json'
               },
               data : data
               };

          const result =     axios(config)
               .then(function (response) {

                  token = response.data;
                  
                   console.log('got token', token);

               console.log(JSON.stringify(response.data));
               })
               .catch(function (error) {
               console.log(error);
               });
               token = result.data;
               this.setState(token);
       
       }
       handleSignin(){
         
        var data = "";
        var url = 'https://api.fusionfabric.cloud/login/v1/sandbox/oidc/token';

        var config = {
            method: 'post',
            url: 'https://developer.expert.ai/oauth2/token',
            headers: { 
               'Authorization': 'Bearer ',
               'Content-Type': 'application/json'
            },
            data : data
          };

       }

       render(){
         var document;
         var questions;
         
         return(
            <div> 
                   
                    {document}
                  <h2>   </h2>  {this.state.token}
                   
                    {/* -------------------------------------------------------- */}
               
                
      
                   
      
            </div>
          );
       }
    }

    export default AskBank;