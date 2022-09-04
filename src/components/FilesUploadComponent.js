import React, { Component } from 'react';
import axios from 'axios';
// import '../styles/Forms.css'
import Grid from '@mui/material/Grid';
import {Header} from '../components/Header';
import Category from '../components/Category';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {  TextEditor } from './TextEditor';
class FilesUploadComponent extends Component {
    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.onHeadlineChange = this.onHeadlineChange.bind(this);
        this.onContentChange = this.onContentChange.bind(this);
        this.onYoutubeVideoIdChange = this.onYoutubeVideoIdChange.bind(this);
        this.onCategoryChange = this.onCategoryChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
         this.onChnageTextEditor = this.onChnageTextEditor.bind(this);
        this.state = {
            profileImg: '',
            name: '',
            headline: '',
            content: '',
            category: 'kerala',
            youtubeVideoId: '',
             text: ''
        }
    }



    onCategoryChange(e) {  
        this.setState({ category: e.target.value });
        console.log(e.target.value)
        if (e.target.value === "whatsapp") {
            
        }
        console.log(this.state)
    }

    onContentChange(e) {  
        this.setState({ content: e.target.value });
        console.log(this.state)
    }

    onHeadlineChange(e) {  
        this.setState({headline: e.target.value});
    }

    onNameChange(e) {
        console.log("E is " + e)
        this.setState({name: e.target.value});
    }
    onFileChange(e) {
        console.log("E is " + e)
        this.setState({ profileImg: e.target.files[0] })
    }
    onTextEditorChange(e) {
        console.log("E is " + e)
        // this.setState({ profileImg: e.target.files[0] })
    }
    onYoutubeVideoIdChange(e) {
        console.log("E is " + e)
        this.setState({youtubeVideoId: e.target.value});
    }
    onChnageTextEditor(value) {
        console.log("E is " + value)
        this.setState({ text: value });
           this.setState({ content: value });
    }
    
    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('profileImg', this.state.profileImg)
        formData.append('name', this.state.name)
        formData.append('headline', this.state.headline)
        formData.append('content', this.state.content)
        formData.append('category', this.state.category)
        formData.append('youtubeVideoId', this.state.youtubeVideoId)
        console.log(this.state.name)
        axios.post("http://3.109.211.218:4000/api/user-profile", formData, {
        }).then(res => {
            console.log(res)
        })
        e.target.reset();
        this.state = {
           
            profileImg: '',
            name: '',
            headline: '',
            content: '',
            category: 'kerala',
            youtubeVideoId: ''
        
        }
        console.log(this.state)
    }
    render() {
        return (
            <>
            
          <div className="container"  style={{marginTop: "50px"}}>
          
            <div className="formdiv">
              <form onSubmit={this.onSubmit}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  
                >
                                <div className='row'>
                                    <div className='col-md-6 col-sm-12'>
                                         <label htmlFor="rname">Reporter/Journalist Name</label>
                        <input type="text" id="rname" name="reportername" className='form-control' value={this.state.value} onChange={this.onNameChange} placeholder="Reporter name.."/>
                                    </div>
                                    <div className='col-md-6 col-sm-12'>
        <label htmlFor="headline">Headline</label>
                    <input type="text" id="headline" name="headline" className='form-control' value={this.state.value} onChange={this.onHeadlineChange} placeholder="Headline"></input>
                                    </div>
                    </div>
                                <div className='row'>
                                    <div className='col-md-6 col-sm-12'>
                                           <label htmlFor="category">Category</label>
                    <select className='form-select' id="category" value={this.state.value} onChange={this.onCategoryChange} name="category">
                    <option value="kerala">Kerala</option>
                    <option value="national">National</option>
                    <option value="international">International</option>
                    <option value="e-paper">E-Paper</option>
                    <option value="interview">Interviews</option>
                                        <option value="vellithira">Vellithira</option>
                                        {/* Whats app is changed to gallery */}
                    <option value="whatsapp">Gallery</option>
                    <option value="crime">Crime</option>
                    <option value="youtube">Youtube</option>
                    </select>
                                    </div>
                                    <div className='col-md-6 col-sm-12'>
 <label htmlFor="youtubeVideoIdInput">Youtube Video ID</label>
                    <input className='form-control' type="text" id="youtubeVideoIdInput" name="youtubeVideoId" value={this.state.value} onChange={this.onYoutubeVideoIdChange} placeholder="Video Id"></input>
                                    </div>
                    </div>
                                <div className='row'>
                                 
                                    <div className='col-md-6 col-sm-12'>
                                        <label>Choose file</label>
  <input   className='form-control'  type="file" onChange={this.onFileChange} />
                                            
                                    </div>
                                    <div className='col-md-6 col-sm-12'>

                                    </div>
                                </div>
                                <div className='row'>
                                    {/* <label htmlFor="content">Content</label> */}
                                   <ReactQuill
            
        value={this.state.text}
        onChange={this.onChnageTextEditor}
        // getSelection={this.onChangeSelection}
      />
                    {/* <textarea className = "contentInput form-control" type="text"  style={{height:'200px'}}  id="content" name="content" value={this.state.value} onChange={this.onContentChange} placeholder="Content"></textarea> */}
                                </div>
                
                      
                        
                        <div className="form-group">
                            <button style={{marginTop:'20px'}} className="button btn btn-primary" type="submit">Upload</button>
                        </div>
                </Grid>
              </form>
            </div>
          </div>
          </>
        );
    }
}

export default FilesUploadComponent;