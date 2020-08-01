import React, { Component } from 'react';


class Dashboard extends Component{

    state = {
        selectedFile: null,
        newsBody:null,
        newsHeadline:null,
    }


    
    fileSelectedHandler = (event)=>{
        this.setState({
            selectedFile:event.target.files[0]
        })
    }

    fileUploadHandler = ()=>{
        console.log(this.state.selectedFile)
    }

    newsBodyHandler = (event) => {
        this.setState({
            newsBody:event.target.value,
        })
    }

    newsBodyHandlerOnSubmit = () => {
        console.log(this.state.newsBody)
    }

    newsHeadLineHandler = (event) => {
        this.setState({
            newsHeadline:event.target.value,
        })
        
    }

    newsHeadLineHandlerOnSubmit = () => {
        console.log(this.state.newsHeadline)
    }

    render(){
    return(
    <div>
    <div className="inputField">
     <textarea 
     className='input'
     placeholder='Type your news to upload...'
     type='textarea'
     onChange={this.newsBodyHandler}
     />
    </div>
    <button className='btnDash' onClick={this.newsBodyHandlerOnSubmit}>submit </button>

    <div className="inputField">
     <textarea 
     className='input'
     placeholder='Type headlines...'
     type='textarea'
     onChange={this.newsHeadLineHandler}
     />
    </div>
    <button className='btnDash' onClick={this.newsHeadLineHandlerOnSubmit}>submit</button>

    <div className="inputField">
     <input  
     type='file'
     onChange={this.fileSelectedHandler}
     />
    <button className='btnDash' onClick={this.fileUploadHandler}>upload</button>
   </div>
   </div>);
    }

}


export default  Dashboard;