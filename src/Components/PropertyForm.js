import React, { useState } from "react";
import { useHistory } from "react-router";
import base from "../Api/base";
const PropertyForm = () => {
  const [Name, setName] = useState('');
  const [Description, setDescription] = useState('');
  const [Size, setSize] = useState(0);

  const history = useHistory();
  const SubmitHandle=(e)=>{
  e.preventDefault();
  base('Property').create({"Name": Name,"Description": Description,"Number":Size}
      , function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    alert('Record created with new id = '+ records.getId());
  
  })
  history.push('/');
}
  return (
    <div className = 'form-grp'>
      <form onSubmit ={SubmitHandle}>
        <div className='input'>
          <input 
               type="text" placeholder="Name" value={Name}
                onChange = {(e)=>{setName(e.target.value)}}
            />
            
        </div>
       
        <div className='input'>
          <input type="text" placeholder="Description"  value={Description}
            onChange={(e)=>{setDescription(e.target.value)}}
          />
          
        </div>
        
        <div className='input'>
          <input type="number" placeholder="Size"  value={Size}
            onChange={(e)=>{setSize(e.target.value)}}
          />
        </div>
        <div className='btn'>
        <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PropertyForm;
