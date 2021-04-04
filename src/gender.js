import React, {Component} from 'react';

var Algorithmia = require("algorithmia");

class Gender extends Component {

    componentDidMount(){
         this.check();
    }
check(){
  

    var input = "https://cors-anywhere.herokuapp.com/https://upload.wikimedia.org/wikipedia/commons/c/cc/NASA_Astronaut_Group_18.jpg";
    Algorithmia.client("simre25Jtm68GEU5opecKEVu8ob1")
      .algo("deeplearning/GenderClassification/2.0.0?timeout=300") // timeout is optional
      .pipe(input)
      .then(function(response) {
      
        console.log(response.get());
      });
 }    


  render() {
   

    return (
        <div>
        <h2>Visitor management </h2>
        <iframe src="https://x.formito.com/app/PX85bx5Mxe24tkW2zTjT"  align="center" width="480" height="840" frameBorder="0"
         style={{border:'1px solid #eee'}}></iframe>
        </div>
    )
  }
}

export default Gender;