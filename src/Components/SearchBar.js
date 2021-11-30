import React from 'react';


const SearchBar = (props)=>{
    const BarStyle={width:"20rem", background:"#F2F1F9", border:"none" , padding:"0.5rem"};
    return (
      
      <div>
          <input 
          value={props.input}
          placeholder={"search news"}
          onChange={text=>props.onChange(text.target.value)} 
          style={BarStyle}
          />
      </div>
    );
}


export default SearchBar;