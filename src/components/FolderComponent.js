import React from 'react';
// import '../styles/DriveComponent.css';

const FolderComponent = props => {
    return (
        <div>
            folder - {props.folder.name} - <button onClick={() => props.handleFolderClick(props.folder)}>></button>
        </div>
    );
}

export default FolderComponent;
