import React from "react";

export function Card() {
    return (
     <div className="card-fluid border text-center pb-1 mt-2">
      <img className="card-img-top" src="https://picsum.photos/id/250/100/100" alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">Learn the basics</h5>
        <p className="card-text">Students will be exposed to basic camera features photography equipment, and tips to building your portfolio!</p>
        <a href="#" className="btn btn-primary">Find out more</a>
      </div>
</div>  
    )
   
}
