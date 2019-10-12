import React from 'react';
import '../styles/DriveComponent.css';
import BreadCrumbsComponent from './BreadCrumbsComponent';
import EntityListComponent from './EntityListComponent';

class DriveComponent extends React.Component {

  state = {
    entities: [],
    breadCrumbsList: [],
    currentFolderId: ''
  }

  handleCreateFolder = () => {
    const name = prompt('Enter the name of the folder', "");
    if (name) {
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
    if (name) {
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

  handleFolderClick = folder => {
    this.setState({
      breadCrumbsList: [
        ...this.state.breadCrumbsList,
        folder
      ],
      currentFolderId: folder.id
    })
  }

  handleBreadCrumbClick = (breadCrumb, index) => {
    const getNewList = () => {
      if (index === -1) {
        return [];
      } else {
        return [
          ...this.state.breadCrumbsList.slice(0, index + 1)
        ];
      }
    }
    this.setState({
      breadCrumbsList: getNewList(),
      currentFolderId: breadCrumb.id
    })
  }

  getSubEntities = () => {
    const subEntities = this.state.entities.filter(entity => entity.parentId === this.state.currentFolderId)
    return subEntities;
  }

  render() {
    return (
      <div className="App">
        <button className="createFolder" onClick={this.handleCreateFolder}>Create Folder</button>
        <button className="createFile" onClick={this.handleCreateFile}>Create File</button>
        <BreadCrumbsComponent breadCrumbsList={this.state.breadCrumbsList} handleBreadCrumbClick={this.handleBreadCrumbClick} />
        <EntityListComponent subEntities={this.getSubEntities()} handleFolderClick={this.handleFolderClick} />
      </div>
    );
  }
}

export default DriveComponent;
