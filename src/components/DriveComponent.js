import React from 'react';
import '../styles/DriveComponent.css';
import BreadCrumbsComponent from './BreadCrumbsComponent';
import EntityListComponent from './EntityListComponent';

class DriveComponent extends React.Component {

  state = {
    entities: [],
    currentFolderId: ''
  }

  handleCreateFolder = () => {
    const name = prompt('Enter the name of the folder', "");
    if (name.length) {
      this.setState({
        entities: [
          ...this.state.entities,
          {
            name,
            id: 'folder_' + (Date.now()).toString(),
            isFolder: true,
            parentId: this.state.currentFolderId
          }
        ]
      });
    }
  }

  handleCreateFile = () => {
    const name = prompt('Enter the name of the file', "");
    if (name.length) {
      this.setState({
        entities: [
          ...this.state.entities,
          {
            name,
            id: 'file_' + (Date.now()).toString(),
            isFolder: false,
            parentId: this.state.currentFolderId
          }
        ]
      });
    }
  }

  getSubEntities = () => {
    const subEntities = this.state.entities.filter(entity => {
      if (entity.parentId === this.state.currentFolderId) {
        return entity;
      }
    })
    return subEntities;
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleCreateFolder}>Create Folder</button>
        <button onClick={this.handleCreateFile}>Create File</button>

        <BreadCrumbsComponent />
        <EntityListComponent subEntities={this.getSubEntities()} />
      </div>
    );
  }
}

export default DriveComponent;
