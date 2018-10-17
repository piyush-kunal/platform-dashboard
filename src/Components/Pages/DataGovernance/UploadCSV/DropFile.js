import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { Button, Grid } from '@material-ui/core';
import { CloudUploadTwoTone } from '@material-ui/icons'

const styles = {

    largeIcon: {
      width: 60,
      height: 60,
      fontSize: 60
    },
  
  };

export default class DropFile extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            files: [], 
            data: ''
        }
    }
    
    // componentWillMount() {

    // var csvFilePath = this.state.files[0]
    // var Papa = require("papaparse/papaparse.min.js");
    // Papa.parse(csvFilePath, {
    //     header: true,
    //     download: true,
    //     skipEmptyLines: true,
    //     // Here this is also available. So we can call our custom class method
    //     complete: this.updateData
    // });
    // }

    // updateData = (result) => {
    //     const data = result.data;
    //     console.log('data');
    //     // Here this is available and we can call this.setState (since it's binded in the constructor)
    //     this.setState({data: data}); // or shorter ES syntax: this.setState({ data });
    // }

    handleUpload = () => {

    }

    onDrop(files) {   
    var Papa = require("papaparse/papaparse.min.js");
    console.log(files[0])
    Papa.parse(files[0], {
        complete: function(results) {
        console.log("Finished:", results.data);
        }
       });
    this.setState({
        files
    });
    }

  render() {
    return (
        
        <section>
        <div>
        <Grid 
            container
            direction="column-reverse"
            justify="flex-start"
            alignItems="center">
          <Dropzone 
            accept="text/csv"
            onDrop={this.onDrop.bind(this)}>
            <p>Try dropping some files here, or click to select files to upload.</p>
            <CloudUploadTwoTone md-36="true"/>
          </Dropzone>
        </Grid>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {
              this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside>
        <label htmlFor="outlined-button-file">
          <Button 
            variant="outlined" 
            component="span"
            onClick={this.handleUpload}
            >
            Upload
          </Button>
        </label>
      </section>

    )
  }
}
