import React, { Component } from 'react'
import "./App.css";
import Card from "./card";
import Database from "./database.json";

const data = Database.products
const title = [];
const picUrl = [];
const text = [];

/*data.forEach((element,index) => {
  title.push(element.name);
  picUrl.push(element.sprite);
  text.push(element.description)
}); */


export default class App extends Component {
  render() {
    const renderItem = data.map( (item) => {
      return <Card title={item.name} picUrl={item.sprite} 
      text={item.description}/>
    })
    return (
      <div className="container">
        {renderItem}
      </div>
    )
  }
}



