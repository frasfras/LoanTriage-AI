import React, {Component} from 'react';
// import Airtable from 'airtable';
import axios from "axios";
import Chart from "react-apexcharts";
import AskBank from './AskBank';


// var base = new Airtable({apiKey: 'keyjVpG4zXCD49VfC'}).base('apprF45aHSyfT4Xl8');


 

  var token;
  var clientid= 'f17101e7-b254-4222-92c0-a860c6c18bf7';

class LoanPost extends Component {


   constructor(props) {
     super(props);
     this.state ={
     
    options: {},
     country:[],
     token:'',
      document: '',
      name: '',
      developerName: '',
      product: '',
      answers: {
        answer1: '',
        answer2: '',
        answer3: 420,
        answer4: '',
      },
      income: 0,
      score: 0,
      debt: 0,
      email: '',
      home: 0,
      interest: 0,
      loan: 0,
      incident: 1,
      loanstatus: [],
      series:[],
      loanAdded: 'N',
      custId: '',
      isSubmitted: false
     };
     this.nameSubmit = this.nameSubmit.bind(this);
   
     this.handleInputChange = this.handleInputChange.bind(this);
     this.questionSubmit = this.questionSubmit.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
     this.answerSelected = this.answerSelected.bind(this);
     this.scoreSubmit = this.scoreSubmit.bind(this);
     this.homeSubmit = this.homeSubmit.bind(this);
     this.incomeSubmit = this.incomeSubmit.bind(this);
     this.loanSubmit = this.loanSubmit.bind(this);
     this.interestSubmit = this.interestSubmit.bind(this);
     this.debtSubmit =  this.debtSubmit.bind(this);


  }

    
    componentDidMount(){
      //  this.fetchClaims();
      // {!this.state.token ? ( this.handleSignin()) 
      //    : (console.log(this.state.token)  )   }
    }
  
    homeSubmit(event){
      event.preventDefault();
       var home = parseInt(this.refs.home.value  ,10);
      
       this.setState({home}, function(){
        console.log(this.state);
       });
  
      
     }
     scoreSubmit(event){
      event.preventDefault();
       var score =parseInt(this.refs.score.value  ,10) ;
      
       this.setState({score}, function(){
        console.log(this.state);
       });
  
      
     }

     incomeSubmit(event){
      event.preventDefault();
       var income = parseInt(this.refs.income.value  ,10);
      
       this.setState({income}, function(){
        console.log(this.state);
       });
    
      
     }

     loanSubmit(event){
      event.preventDefault();
       var loan = parseInt(this.refs.loan.value  ,10);
      
       this.setState({loan}, function(){
        console.log(this.state);
       });
    
      
     }

     interestSubmit(event){
      event.preventDefault();
       var interest = parseFloat(this.refs.interest.value );
      
       this.setState({interest}, function(){
        console.log(this.state);
       });
    
      
     }

     debtSubmit(event){
      event.preventDefault();
       var debt = parseInt(this.refs.debt.value  ,10);
      
       this.setState({debt}, function(){
        console.log(this.state);
       });
    
      
     }
  handleSignin(){

      const headers1 = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Method': 'GET, POST',
  'Access-Control-Allow-Headers': 'Content-Type',

};
      var data = JSON.stringify({"username":"consistengolf1@gmail.com","password":"Magazine1!"});

var config = {
  method: 'post',
  url: 'https://developer.expert.ai/oauth2/token',
  headers: { 
     'Authorization': 'Bearer ',
     'Content-Type': 'application/json'
  },
  data : data
};


 
   

 const result=   axios(config)
    .then(function (response) {
     
      // console.log(JSON.stringify(response.data));
     token = response.data;
     //   this.setState({token}, function(){
      console.log('got token', token);
     // });
    })
    .catch(function (error) {
      console.log(error);
    })
    token = result.data;
    this.setState(token);
  } 

 fetchClaims = async =>{
 var document = "";
  var data = JSON.stringify({"document":{"text":document}});

  var config = {
  method: 'post',
  url: 'https://nlapi.expert.ai/v2/analyze/standard/en/entities',
  headers: { 
      
    'Authorization': 'Bearer eyJraWQiOiI1RDVOdFM1UHJBajVlSlVOK1RraXVEZE15WWVMMFJQZ3RaUDJGTlhESHpzPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206Y291bnRyeSI6IlBIIiwic3ViIjoiOTdmNTA0OWYtZDBmNC00MDRmLTg5N2MtM2RkMzhjYWExODRiIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImN1c3RvbTpwZXJzb25hbGl6YXRpb25BdXRoIjoiMSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX0FVSGdRMDhDQiIsImNvZ25pdG86dXNlcm5hbWUiOiI5N2Y1MDQ5Zi1kMGY0LTQwNGYtODk3Yy0zZGQzOGNhYTE4NGIiLCJjdXN0b206Y29tcGFueSI6ImtvcnZlciIsImF1ZCI6IjVraDljMG1vY25qOTIzcWRjanNrMzc4c3ZoIiwiZXZlbnRfaWQiOiIxZWI3NTcyMC02NGE5LTQ1OWYtYWU3OC04M2NiMWY4ZDIwZWYiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTYxNDIzMTI5MSwibmFtZSI6ImZyYXMiLCJleHAiOjE2MTQzMTc2OTEsImlhdCI6MTYxNDIzMTI5MiwiZmFtaWx5X25hbWUiOiJzaWx2IiwiZW1haWwiOiJjb25zaXN0ZW5nb2xmMUBnbWFpbC5jb20iLCJjdXN0b206bWFya2V0aW5nQXV0aCI6IjEifQ.OdycqmOwZxWpLczEQYkD5S6lW9Sy56a6Xtna6YqC0OpqrBLDifdtyNNKYoqZmI9vkNkGotUCWwtAyeI3R1P3TCngNbG5jdH4XnDu_4fn8DnXSdtyDEVtX6tgf2X-6pi5OenWRVbVzUyhOj6DFWrhjxYQah4HMbvuTnYFgcHwh4CCk3cYrCKTYwPydeCjvdV6t5bcvA-x35QppoAa-gkOd7mdSPunKxGC7Ti9g8hCLEnUeAefXiN1vg0_hPDXCAQLEfpA7XYJGE-j8hwHAYEJQDxycvcKQ8ZIBl4XW-UBM985eZoX64AONQ4RjQHUTrSFfizndLukhdEVcJi_pwyqgw' , 
    'Content-Type': 'application/json'
  },
  data : data
};


 
   

 const result=   axios(config)
    .then( (response) => {
      let country = response.data;
      if(response.status == 200){
          
        
        // var i;
        // for (i = 0; i <  country.data.entities.length ; i++) {
        //   console.log(country.data.entities[i].lemma);
        //  txt  +=   "entityLemma:" + country.data.entities[i].lemma + ", ";
        // // this.setState({country:country.data.entities[i].lemma});
        //  
        const countryjx = [];
        country.data.entities.forEach(function(entities)  {
          // countryjx.push('Lemma:' + countr.lemma, 'type:' + countr.type );
          countryjx.push( entities);
        })         
       
        country = countryjx;
          console.log(country);

          this.setState({
            country
          })
      }else{

      }
      console.log(JSON.stringify(response.data));
    
     
    })
    .catch(function (error) {
      console.log(error);
    });
  
  

 }

   nameSubmit(event){
    event.preventDefault();
     var name = this.refs.name1.value;
    
     this.setState({name}, function(){
      console.log(this.state);
     });

     var Photo = this.refs.photo.value;
    
     this.setState({Photo}, function(){
      console.log(this.state);
     });
   }
   picSubmit(event){
    event.preventDefault();
    
   }
  
  answerSelected(event){
   var answers = this.state.answers;
   if (event.target.name === "answer1"){
     answers.answer1 = event.target.value;
   }else if (event.target.name === "answer2"){
     answers.answer2 = event.target.value;
   } else if (event.target.name === "answer3"){
    
     answers.answer3 = parseInt(event.target.value ,10) ;
   } else if (event.target.name === "answer4"){
    answers.answer4 = event.target.value;
  }

   this.setState({answers: answers}, function(){
      console.log(this.state);
     });
  }
 
  setSelected(event){
    var product =  this.state.answers;
    // product = event.target.value;
      this.setState({product:product});

  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
     this.setState({[name]: value}, function(){
      console.log(this.state);
     });
  }

  questionSubmit(event){
    event.preventDefault();   

    this.setState({isSubmitted: true});
    // submit airtable
    // base('car').create([
    //   {
    // "fields": {
    //   "Name": this.state.name,
    //   "Photo": this.state.Photo,
    //   "Type of damage": this.state.answers.answer1
      
    //  }
    // }
    //   ], function(err, records) {
    //     if (err) {
    //       console.error(err);
    //       return;
    //     }
    //     records.forEach(function (record) {
    //       console.log(record.getId());
    //     });
    //   });

    console.log(this.state);
  } 

  
  onSubmit(event){
  
  }
  
  loanAdd(){
    var loanAdded = 'N';
    var axios = require('axios');
    var data = JSON.stringify({"loanApplicantIds":[{"customerId":"PTYBILL1"}],"productCode":"05010DEFAULTEUR","loanRequestAmount":{"amount":12000,"currency":"EUR"},"customerContributionAmount":{"amount":2000,"currency":"EUR"},"loanStartDate":"2020-11-26","loanTerm":{"calendarPeriod":"MONTH","value":24},"repaymentFrequency":"MONTHLY","balloonPaymentAmount":{"amount":0,"currency":"EUR"},"customerInterestMargin":0,"repaymentAccount":"02020YBILL100","feeCollectionAccount":"02020YBILL100","adhocLoanEstablishmentCharges":[{"chargeDescription":"Capitalize Charge Demo","chargeAmount":{"amount":1511,"currency":"EUR"},"chargeAction":"CAPITALIZE-CHARGE-TOPUP"},{"chargeDescription":"Adhoc Charge Fee","chargeAmount":{"amount":20,"currency":"EUR"}},{"chargeDescription":"Prepaid Demo Charge","chargeAmount":{"amount":161,"currency":"EUR"},"chargeAction":"PRE-PAID-CHARGE"}],"waiveCharge":false,"disbursementScheduleRequest":[{"disbursementDate":"2020-11-26","disbursementAmount":{"amount":13000,"currency":"EUR"},"disbursementBeneficiaryId":"","disbursementBeneficiaryAccount":"02020YBILL100","disbursementType":"TRANSFER"}],"loanTaxFundingAccount":"02020YBILL100"});

    var config = {
      method: 'post',
      url: 'https://api.fusionfabric.cloud/retail-banking/loans/v1/loans/',
      headers: { 
        'Content-Type': 'application/json', 
        'X-Request-ID': '5fc03087-d265-11e7-b8c6-83e29cd24f4c', 
        'Idempotency-Key': 'xyz', 
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjNTRVUnJqTVV3Q2pVTFRVUV93QUVBQW9GemxoN1l0LU5xVXFRZGR5TGg0In0.eyJqdGkiOiIxZjQ5MzNiZi0wMDYwLTQzMWItYjUwOS1jYzE0ZmM5YjE3NDAiLCJleHAiOjE2MTc1MzM5OTQsIm5iZiI6MCwiaWF0IjoxNjE3NTMzNjk0LCJpc3MiOiJodHRwczovL2FwaS5mdXNpb25mYWJyaWMuY2xvdWQvbG9naW4vdjEiLCJhdWQiOlsicmVmZXJlbnRpYWwtdjEtMzUzZjM5MzMtYzMwNS00ODk4LTg4ZDUtY2Q2Y2QxNjdmNzQ1IiwicmV0YWlsLXBzZDItc3RldC1waXNwLTFkMy1lMTVjNTk0OS1hOTlmLTQ4NTYtYmE0NC0yNGViMDlhMjQzNTgiXSwic3ViIjoiZjE3MTAxZTctYjI1NC00MjIyLTkyYzAtYTg2MGM2YzE4YmY3IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZjE3MTAxZTctYjI1NC00MjIyLTkyYzAtYTg2MGM2YzE4YmY3IiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiOTYzMjNkMjUtM2RjNC00YjQ5LTgwNmMtZWI4N2EwMjlkNzc1IiwiYWNyIjoiMSIsInNjb3BlIjoib3BlbmlkIHJlZmVyZW50aWFsLXYxLTM1M2YzOTMzLWMzMDUtNDg5OC04OGQ1LWNkNmNkMTY3Zjc0NSByZXRhaWwtcHNkMi1zdGV0LXBpc3AtMWQzLWUxNWM1OTQ5LWE5OWYtNDg1Ni1iYTQ0LTI0ZWIwOWEyNDM1OCIsImFwcCI6ImYxNzEwMWU3LWIyNTQtNDIyMi05MmMwLWE4NjBjNmMxOGJmNyIsImludElwV2hpdGVsaXN0IjoiIiwiaXB3aGl0ZWxpc3QiOiIiLCJ0ZW5hbnQiOiJzYW5kYm94IiwidXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtZjE3MTAxZTctYjI1NC00MjIyLTkyYzAtYTg2MGM2YzE4YmY3In0.MWdtnQUedpqojaPOHna50VMCSTJQa4i_AgI6oHnbUNV6GjsEd5QllHoLvHnmsimiPmam9Kz7TkdP0TKdDpGnBQbcPcSZOwHhkglrh0BiQLLBfH0b2cvxzZJ7-mNRNVY_UONmJfjf-246XEYSMK9thamRrMOU9K2BQ8gLMYIW5_yb7XwkLWkaLTZTx67Tme0rQnDopciJsWNf-Pt7rvXEVoKNIiVLNcCwubK7db-ysz4UewmtHnba8XeoP7LcpYw3BmcFdOy7wpVgeqSstChUzFHdXOEsB9lVQqZvx5o81Wplvw3b4LQE1lkBxxoY6E-cq5BpALgM0sGe7nS4GlTPzQ', 
        'Cookie': 'TS016a938c=01dadb918d8e335230a79b001a03e06f5b82b8211aac28c835338e544e3531a14eb7743f62663c6bd19249932ae117c3db1aac2268'
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

  requirmentSubmit(){
    this.setState({isSubmitted: true});
    var interest = this.state.interest;

  var data = JSON.stringify( {
    "rows": [
    {
      "InterestRate": this.state.interest,
      "Income": this.state.income,
      "ProductType": this.state.answers.answer4,
     
      "HomeValue": this.state.home,
      "Debt": this.state.debt,
      "CreditScore": this.state.score,
      "LoanTerm": this.state.answers.answer3,
      "LoanAmount": this.state.loan,
      "Gender": "F",
      "CreditIncidents": 1
    }
    ]});
    console.log(data);
    var token = 'b7922a11-5979-4c6f-aeb9-3036f829fcf2';
    var config = {
      method: 'post',
      url: 'https://a.azure-eu-west.platform.peltarion.com/deployment/d0379a2c-eafa-4407-8a43-6bf1cc37307a/forward',
      headers: { 
          
        'Authorization': 'Bearer b7922a11-5979-4c6f-aeb9-3036f829fcf2'   , 
        'Content-Type': 'application/json'
      },
      data : data
    };

    const result=   axios(config)
    .then( (response) => {
      let loanstatus = response.data;
      
      if(response.status === 200){
          
       console.log(response.data);
       const loanj = [];
       loanstatus.rows.forEach(function(row)  {
         // countryjx.push('Lemma:' + countr.lemma, 'type:' + countr.type );
         var p = Number(row.LoanStatus.Approved) + ', ' + Number (row.LoanStatus.Rejected);
         loanj.push(  p );
       })         
      
       loanstatus = loanj;
        console.log("log:"+loanj)
          this.setState({
             loanstatus
          })
          this.setState({
           series: loanstatus
         })
      }else{

      }
      console.log(JSON.stringify(response.data));
   
    
     
    })
    .catch(function (error) {
      console.log(error);
    })
    

  }
  

    renderClaims = () => {
        
            return  this.state.loanstatus.map((item, i) => {
             return ( 
              <tr key={i}> 
                <td>{item.Approved} </td>
                <td>{item.Rejected }</td>
                  
               </tr>

               )
                
            }) ; 
            

     } 

     renderCountries = () => {
        return
     }

  render(){
      var developerName;
      var questions;
      var questions1;
      var image;
      var document;
      var chart; 
      var options;
      var custId;

     image= <div> <img alt='' src={'https://dl.airtable.com/.attachmentThumbnails/0e9de28345e8e85acabc10a1518fb517/bc9b7422'} width='30px' /> </div>
  
            
   
      if (this.state.document === '' && this.state.isSubmitted === false){
           document = <div align="center" style={{  position: 'relative', right:'-20px'}}>
           
             
               <form onSubmit ={() => this.requirmentSubmit()}> 
               <div> 
               <h3> Automated Loan application  </h3>
                 <h2  style={{ top:'25px',position: 'relative', right:'290px'}}><img alt='' src={'https://dl.airtable.com/.attachmentThumbnails/0e9de28345e8e85acabc10a1518fb517/bc9b7422'} width='30px' /> Add Details </h2>
                  <label style={{position: 'relative', right:'210px'}}>enter the loan application information </label>
                 </div>
                 <div> 
                   
              
                 </div>
                 <div className="card column" style={{  position: 'relative', right:'10px'}}>
			                  <label>  Loan amount </label><br/>
			                  <input  type="text" placeholder="amount " onChange={this.loanSubmit} ref="loan" />
                            <label>  Interest rate </label><br/>
			                  <input  type="text" placeholder=" "  onChange={this.interestSubmit} ref="interest" />
                        <label>  Debt </label><br/>
			                  <input  type="text" placeholder=" " onChange={this.debtSubmit} ref="debt" />
                        <label>  Loan Term </label><br/>
			                  <input name="answer3" type="radio" value="480" onChange={this.answerSelected} />480
                  <input name="answer3" type="radio" value="420" onChange={this.answerSelected} />420
                  <input name="answer3" type="radio" value="360" onChange={this.answerSelected} />360
                  <input name="answer3" type="radio" value="180" onChange={this.answerSelected} />180
                <br/>  
               
			            </div>
                 <div className="card column">
                  <label>  Self-employed  </label><br/>
                  <input name="answer1" type="radio" value="Y" onChange={this.answerSelected} />Yes
                  <input name="answer1" type="radio" value="N" onChange={this.answerSelected} />No
                  

                  </div>
                 <div className="card column">
                  <label>  Gender  </label><br/>
                  <input name="answer2" type="radio" value="F" onChange={this.answerSelected} />Female
                  <input name="answer2" type="radio" value="M" onChange={this.answerSelected} />Male
                  </div>

                 

                 <div className="card column">
			                  <label>  Home value</label><br/>
			                  <input  type="text" placeholder="home value " onChange={this.homeSubmit} ref="home" />
                        <label>  Income </label><br/>
			                  <input  type="text" placeholder="income " onChange={this.incomeSubmit} ref="income" />
			            </div>
                  
                  <div className="card column">
                  <label>  Product Type </label><br/>
			                  <input name="answer4" type="radio" value="Adjustable_rate" onChange={this.answerSelected} />Adjustable
                  <input name="answer4" type="radio" value="Government_insured" onChange={this.answerSelected} />Gov insured
                  <br/> <input name="answer4" type="radio" value="Fixed_rate" onChange={this.answerSelected} />Fixed rate
                  <input name="answer4" type="radio" value="Jumbo" onChange={this.answerSelected} />Jumbo
                <br/>  <br/>
                  <label>  Credit score </label><br/>
			                  <input align="left" type="text" placeholder=" " onChange={this.scoreSubmit} ref="score" />
                  </div>
              
                

                  <input className="button" type="submit" value = "Next" />
               </form>
                <div> 
                 {/*  <iframe src="https://x.formito.com/app/yCmhCWkLPyxEEdXkYJWM" align='right' width="330" height="740" frameBorder="0" 
             style={{ top:'5px',position: 'fixed',bottom:'0', right:'0',  border:'1px solid #eee'}}></iframe> */}</div>
           </div>;
           questions = ''
      } else if (this.state.name === '' && this.state.isSubmitted === true){
        questions = <h2 align="center"><img alt='' src={'https://dl.airtable.com/.attachmentThumbnails/0e9de28345e8e85acabc10a1518fb517/bc9b7422'} width='30px' />Loan Status :<br/>
       Prediction:  {this.state.loanstatus
       
      } </h2> 
        
          var  series = [0.8789,0.12108];

        let series2 = [];
        
        this.state.loanstatus.map((item, i) => {
         

           var arr = item.split(",");
           series2[series2.length] = parseFloat( arr[0]);
           series2[series2.length] = parseFloat( arr[1]);
            // series2.push ( item);
              
                
     
              
          }) ; 
          console.log( series2);

   
        let percent = series[0] * 100;

      let options = {
          legend:{show:false},
          dataLabels: {
            enabled: false,
           },
           plotOptions: {
            pie: {
              startAngle: 0,
              endAngle: 360,
              expandOnClick: true,
              offsetX: 0,
              offsetY: 0,
              customScale: 1,
              dataLabels: {
                  offset: 0,
                  minAngleToShowLabel: 10
              }, 
              donut: {
                size: '65%',
                background: 'transparent',
                labels: {
                  show: false,
                  name: {
                    show: true,
                    fontSize: '22px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                    color: undefined,
                    offsetY: -10,
                    formatter: function (val) {
                      return val
                    }
                  },
                  value: {
                    show: true,
                    fontSize: '16px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    color: undefined,
                    offsetY: 16,
                    formatter: function (val) {
                      return val
                    }
                  },
                  total: {
                    show: false,
                    showAlways: false,
                    label: 'Total',
                    fontSize: '22px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                    color: '#373d3f',
                    formatter: function (w) {
                      return w.globals.seriesTotals.reduce((a, b) => {
                        return a + b
                      }, 0)
                    }
                  }
                }
              },      
            }
          },
           title: {
            text: percent,
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize:  '14px',
              fontWeight:  'bold',
              fontFamily:  undefined,
              color:  '#263238'
            },
        },
          
        };
        {this.renderClaims()}
     developerName =<div align = "center"> 
       
        <form onSubmit ={() => this.setState({isSubmitted:true})}>  
                  
                  <br/>
                <input className="button"  type="submit" value = "reset   loan" />
            </form>
            </div>
         chart = <div className="card">

             <Chart options={this.state.options} series={series2} type="donut" width="350" />
             
               <label align="center">Loan -  {this.state.loan}</label><br/>

               <label align="right"> Term - {this.state.answers.answer3}</label>
              
       </div> 
        questions1 = <div align="center"> <form onSubmit ={() => this.setState({isSubmitted:true})}> 
        <input className="button"   type="submit" value = "Create loan" />
        </form>
        </div>    
        
      } else if (this.state.document == '' && this.state.isSubmitted === false){
            custId = <h1> </h1>
            developerName = <div>
            <h1>   customer Id </h1>
             <form onSubmit ={this.nameSubmit}>  
                 <input  type="text" placeholder="enter customer id" ref="custid" />
               
             </form>
         </div>;

            
      }else if ( this.state.isSubmitted === true){
          developerName = <div>
              <h2> Thank you  : {this.state.loanstatus} </h2>
              </div>
         
              document= <h2>loan submitted   </h2>
              questions = <h2>loan submitted  :{this.state.loanstatus} </h2> 
      }
    return(
      <div> 
              {/* < a href="https:google.com">test</a> */}
              {document}
              {custId}
             
              {/* -------------------------------------------------------- */}
            {questions}
            {chart}
            {developerName}
            {/* {questions1} */}

             

      </div>
    );
  }
}


export default LoanPost;
