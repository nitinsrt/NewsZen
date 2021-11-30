import React from "react";
import "../App.css";


const Cards=(props)=>{
  
    return (
        <>
        {
          props.List.map((data,index)=>{
              if(data){
                  return(
                    <div key={data.id} className="one_card" onClick={props.func}>
                        <h1>{data.sectionName}</h1>
                    <p>{data.webTitle}</p>
                   </div>
                  )
              }
              return null;
          })
        }
        </>
    );
}

export default Cards;