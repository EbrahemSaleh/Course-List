import React from 'react'

 const From = (props) => 
  {
        return (
         <form onSubmit={props.Add}>
  <div class="form-group">
   <input type ='text' className="form-control" onChange={props.update} value={props.current}/>
   <button type="submit" class="btn  btn-outline-primary mt-3 btn-block">Add</button>
  </div>
         </form>
        )
    }


export default From
