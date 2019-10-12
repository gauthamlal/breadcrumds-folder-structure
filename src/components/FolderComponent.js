import React from 'react';
// import '../styles/DriveComponent.css';

const FolderComponent = props => {
    return (
        <div className="entity">
            <i className="fa fa-folder" aria-hidden="true"></i><span className="entity-name">{props.folder.name}</span><button onClick={() => props.handleFolderClick(props.folder)}>></button>
        </div>
    );
}

export default FolderComponent;
