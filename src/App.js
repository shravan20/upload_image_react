// import React from 'react';
// import logo from './logo.svg';
// import './App.css';


import React from 'react';
import axios from 'axios';

class ReactUploadImage extends React.Component{

      constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('assets',this.state.file);
        const config = {
            headers: {
                'authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJpZCI6IjVlNmU0MDEwODIxODQ2NTJjNjRkMTMxNCIsIm5hbWUiOiJKb2huIERvZSIsImVtYWlsIjoiY2xhbndhNzc3QGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlzT3JnYW5pc2VyIjp0cnVlLCJ1c2VyRGVzZyI6eyJkZXNpZ25hdGlvbklkIjoiNWU2OGNjMmVjZGFjZDQzYjE4OTYzNWRhIiwiZGVzZ05hbWUiOiJQZW9wbGUncyBNYW5hZ2VyIDogTWFuYWdlciIsImRlcGFydG1lbnQiOiJIdW1hbiBSZXNvdXJjZSJ9LCJsb2NhdGlvbiI6IktvcmFtYW5nYWxhIn0sImlhdCI6MTU4NjYyMzI5MiwiZXhwIjoxNTg5MjE1MjkyfQ.-wXPZ3NVhGzwXKNRz6LxYuGCILrnpvOhvLIuxfc07pM',
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("http://04917916.ngrok.io/assets/addAsset?eventId=5e8d6760a618da4efa5d416c",formData,config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }


  render(){  
    return (
            <div className="App">
                    <form onSubmit={this.onFormSubmit}>
                        <h1>File Upload</h1>
                        <input type="file" name="assets" onChange= {this.onChange} />
                        <button type="submit">Upload</button>
                    </form>
            </div>
    );

  }

}

export default ReactUploadImage;
