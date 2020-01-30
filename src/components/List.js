import React, { Component , Fragment } from 'react'

 class List extends Component {

    state={
        updateItem: false
    }
              // current item
              renderItem = () =>{
                return(
                <li className="list-group-item  text-center mb-2">
                {this.props.details.name}
                <div className="btn-group d-flex justify-content-between ">
                <button type="button" class="btn btn-outline-success mx-2 " onClick={() =>{this.toggleItem()}}>Edit</button>
                <button type="button" class="btn btn-outline-danger"  onClick={() =>{ this.props.Delete(this.props.index) } }>Delete</button>
                </div>
            </li>
                )
            }
            // toggleItem
            toggleItem = () =>{
                let { updateItem} = this.state
                this.setState({
                    updateItem : !updateItem
                })
            }

            //edit item 
            EditItem = (e) => {
                e.preventDefault()
               this.props.Edit(this.props.index , this.input.value)
               this.toggleItem()
            }
            // update item 
            renderUpdate = () => {
                return(
                    
                    <form className="form-group" onSubmit={this.EditItem}>
                    <input type="text" 
                     className="form-control" 
                     defaultValue={this.props.details.name}
                     ref={(v) => {this.input =v }}
                     />
                <button type="button" className="btn  btn btn-light  my-1 btn-block" onClick={this.EditItem}>Update</button>
                </form>
                
                )
            }

    render() {
        let  {updateItem} = this.state
        return (
            <Fragment >
                { updateItem ? this.renderUpdate() : this.renderItem()}
            </Fragment >
        )
    }
}

export default List
