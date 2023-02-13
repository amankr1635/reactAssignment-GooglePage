import React from "react";
import Logo from "./components/Logo.js"
import InputBox from "./components/InputBox.js"
import SearchButton from "./components/SearchButton"
import LuckyButton from "./components/LuckyButton"
import LanguageNotes from "./components/LanguageNotes"



export default function App(){
  return (
    
    <div style={{marginTop : "50px"}}>
     <div style={{display: "flex", justifyContent : "center"}}>
      <Logo/>        
      </div>
     <div style={{display:"flex", justifyContent: "center"}} >
     <InputBox/>
     </div>
     <div  style={{display:"flex", justifyContent: "center",padding:"5px",gap: "5px"}}> 
      <SearchButton/>
      <LuckyButton/>
     </div>
     <div style={{display:"flex", justifyContent: "center"}}>
    <LanguageNotes/>
       </div>
    </div>
  );
}
