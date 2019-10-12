import React from 'react';
import './DriveComponent.css';

class DriveComponent extends React.Component {

  state = {
    drive: []
  }

  handleCreateFolder = () => {
    
  }

  handleCreateFile = () => {
    
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleCreateFolder}>Create Folder</button>
        <button onClick={this.handleCreateFile}>Create File</button>
      </div>
    );
  }
}

export default DriveComponent;
