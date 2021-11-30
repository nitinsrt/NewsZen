
import React,{useState,useEffect, useCallback} from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import Cards from "./Components/Cards";
import Iframe from "react-iframe";

const  App=()=> {
  const [newsData,setnewsData]=useState([]);
  const [input,setInput]=useState('');
  const [searchResults,setsearchResults]=useState([]);

  const fetchData =useCallback(async()=>{
    try{
      let response = await fetch("https://content.guardianapis.com/search?api-key=a518d57c-543c-46c2-a3db-19a5a9cafcb8");
      let data=[];
      data=await response.json();
      if(response){
        setnewsData(data.response.results);
      }
    }catch(e){
      alert(e.message);
    }
  },[])

  useEffect(()=>{
    fetchData();
    setsearchResults(newsData);
  },[fetchData]);

  const updateInputs=(input)=>{
     let filtered=newsData.filter(news=>{
       return news.sectionName.includes(input);
     });
      setsearchResults(filtered);
      setInput(input);
  }

  const func=(url,id)=>{
    return(
        <div>
         <Iframe url={url} width="450px" height="450px" display="inline" position="relative"/>
       </div>
    )
}

  return (
    <div className="main">
        <div className="search">
        <SearchBar input={input} onChange={updateInputs}/>
        </div>
        <div className="cards">
        <Cards List={searchResults} func={func}/>
        </div>
    </div>
  );
}

export default App;
