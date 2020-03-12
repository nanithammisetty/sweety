import React from 'react';
import data from './data.json';
import lykha from './lykha.svg';
import App from './App';

import {BrowserRouter,Route,Link} from 'react-router-dom';
import Resume from './Resume';
let Profile=()=>{
    const profiles=data.profiles;
    return(
        <div className="parent">
            <BrowserRouter>
            <Route exact path="/resume" component={Resume}></Route></BrowserRouter>

            {profiles.map((i,j)=>(
                <div className="child" key={j}>
                    <img src={lykha} alt="profile"/>
                    <h3> {i.basics.Name} </h3> <hr></hr>
                    <a href={"mailto:"+i.basics.email}className="link">{i.basics.email}</a> <br></br>
                    <a href={"tel:"+i.basics.Phone}className="link"> {i.basics.Phone}</a>
                    <hr></hr>
                    <Link to={{pathname:"/resume",index:{value:{j}}}} className="btn">view profile </Link>      
                    </div>
            ))}    
         </div>
    )
}
export default Profile;