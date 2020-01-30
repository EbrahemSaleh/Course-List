import React, { Component } from 'react';
import From from './components/From';
import List from './components/List';



 class App extends Component {
     state = {
         courses: [ 
          {name :"HTML"},
         {name :"CSS"},
         {name :"jQuery"}
        ],
        current:''
     }

     // update course
     handleChange = (e) =>{
     this.setState({
         current:e.target.value 
     })
     }

     // Add course
     handleAdd =(e) =>{
         e.preventDefault()
         let current = this.state.current;
         let courses = this.state.courses;

         courses.push({name:current});

         this.setState({
             courses,
             current:''
         })
     }

     //Delete course
     handleDel = (index) =>{
         let courses = this.state.courses
         courses.splice(index , 1);
         this.setState({
             courses
         })
     }

     //Edit course
     handleEdit = (index , value) => {
         let courses = this.state.courses
         let course = courses[index] 
         course['name'] = value 
         this.setState({
             courses
         })
     }
    
    render() {
        const {courses} = this.state;
        const courseList = courses.map( (course , index ) => {
            return <List 
             details={course}  
            key={index} 
            index={index} 
            Delete={this.handleDel} 
             Edit={this.handleEdit}
             />
        } )
   
     
        return (
            
                  
                    <div className ="col-10 mx-auto col-md-8 mt-4 col-sm-8">
                <h2 className="text-center text-primary">Add course</h2>
                <From  update={this.handleChange}  Add={this.handleAdd}   current={this.state.current} />
               <ul className="list-group">{courseList} </ul>
               </div>
               
            

         
        
        )
    }
}

export default App
