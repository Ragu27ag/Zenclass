import React from "react";
import './Team.css';



function Team({timg,tname,tcap,trop})  {
    return(
        <div className = "root">
        
        <img c src={timg} alt={tname} />
        <p>Team : {tname}</p>
        <p>Captain : {tcap}</p>
        {trop > 0 ? (<p>Titles : {trop}</p>) : (<p>0</p>)}
        <button>Vote</button>
        </div>
    );
}

export default Team;