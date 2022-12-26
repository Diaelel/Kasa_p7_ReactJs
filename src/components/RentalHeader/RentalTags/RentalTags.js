import "./RentalTags.css";
import { Component } from "react";

export default class RentalTags extends Component {
 render() {
  return (
   <ul className='tags'>
    {this.props.tags.map((tag, index) => {
        return <li className='tag' key={index}>{tag}</li>;
        })}
   </ul>
  )
 }
}