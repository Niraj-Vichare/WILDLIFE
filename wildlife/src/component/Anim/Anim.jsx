import React from "react";
import '../Anim/Anim.css'
function Anim(props) {
  return (
    <div className="anim-div" style={{background:props.bgcolor}}>
      <div className="name">
        <h1>{props.name}(<span><u>{props.scientific_name}</u></span>)</h1>
      </div>
      <div className="kingdom">
        <span>{props.kingdom}</span><br />
        <span>{props.most_distinctive_feature}</span>
      </div>
      <div className="physical">
        <h2>COLOR<span>{props.color}</span><br /></h2>
        <h2>Diet<span>{props.diet}</span><br /></h2>
        <h2>Height<span>{props.height}</span> </h2><br />
        <h2>Weight<span>{props.weight}</span></h2><br />
        <h2>Top Speed<span>{props.top_speed}</span></h2><br />
      </div>
      <div  className="behavior">
        <h2>PREY<span>{props.prey}</span></h2> 
        <h2>LIFESPAN<span>{props.lifespan}</span></h2> 
        <h2>GROUP BEHAVIOR<span>{props.group_behavior}</span></h2> 
        <h2>HABITAT<span>{props.habitat}</span></h2> 
        <h2>NAME OF YOUNG<span>{props.name_of_young}</span></h2> 
        <h2>ORIGIN<span>{props.origin}</span></h2>
        <h2>TYPE<span >{props.type}</span></h2>

      </div>
      <div className="name">
        <span>{props.locations}</span>
      </div>
    </div>
  );
}

export default Anim;
