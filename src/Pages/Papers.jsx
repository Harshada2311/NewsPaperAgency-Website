import React from "react";
import JSON from "../Model/Papers.json";
import PaperList from "../Pages/PaperList";
import '../CSS/paperList.css'

class Papers extends React.Component{
    constructor(){
        super();
        this.state ={
            title: "Our Newspaper",
            papers: JSON
        }
    }
    render(){
        return(
            <div className="papers">
                <h1>{this.state.title}</h1>
                <PaperList paperList = {this.state.papers} />
            </div>

        )
    }

}
export default Papers;