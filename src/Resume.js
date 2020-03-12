import React from 'react';
import lykha from './lykha.svg';
import data from './data.json';
 let Resume=(props)=>{
    let info=Object.values(props.location.index.value);
    let person=data.profiles[info] 
    console.log(person);

    
    return(
         <div className="parent">
             <div className="child">

             <img src={lykha} alt="profile"/>
           
        <h3> {person.basics.Name}</h3>
        <hr></hr>
      
        <h3> {person.basics.email}</h3>
        <h3> {person.basics.Phone}</h3>
        
       
             </div>
             <div className="child2">
           
                 <h3>Educational Qualifications</h3>

                
                 <hr></hr>
                {person.education.map((i,j)=>(
                     <div key={j}>
                         <h5> {i.degree} </h5>
                         <ul>
                             <li>{i.Percent+"%"}</li>
                             <li>{i.institute}</li>


                         </ul>
                     </div>
                 )) }
                  <h3>Skills</h3>
                  <hr></hr>
                  {person.skills.map((i,j)=>(
                    <div key={j}>
                       <h4> {i.type}</h4>
                       {i.values.map((k,l)=>(
                           <div key={l} style={{display:"inline"}}>
                               <span className="skill"> {k} </span>
                            </div>
                        ))}
                     </div>))
                     }
             </div>
         </div>
     )
 }



export default Resume;