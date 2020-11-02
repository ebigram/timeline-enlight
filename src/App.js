import React, { Component } from "react";
import "./styles.css";
import { Chrono } from "react-chrono";
//import data from "./data"
import { getData } from "./data"

//const parsedUrl = new URL(window.location.href);
//console.log("token received: " + parsedUrl.searchParams.get("token"));

var sample =[{
  "title": "1997-07-29",
  "contentTitle": "Land of the Loops",
  "contentText": "Multi-Family Garage Sale (Bargain-Bin Mix)",
  "media": {
    "name": "placeholder",
    "type": "IMAGE",
    "source": {
      "url": "https://i.scdn.co/image/ab67616d00001e02cc977df38fbb06e60062d5c5"
    }
  }
}]
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {data:sample}
  }
  /*
  componentDidMount() {
    ;
    getData(f);
    console.log("react: " + this.state.data)
  }*/

  render() {
    console.log("props: " + JSON.stringify(this.props.data))
    return (
      <div className="App">
        <div style={{ width: "500px", height: "950px", marginLeft: "200px" }}>
          <Chrono
            // @ts-ignore
            items={this.props.data.json} slideShow={true} slideShowDuration={4500} cardHeight={300} mode="VERTICAL" theme={{ primary: "navy", secondary: "gray".fontsize(72) }} />
        </div>
      </div>
    );
  }
}
