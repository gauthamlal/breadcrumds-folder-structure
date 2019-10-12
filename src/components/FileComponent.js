import React from 'react';
// import '../styles/DriveComponent.css';

const FileComponent = props => {

    return (
        <div className="entity">
            <i className="fa fa-file" aria-hidden="true"></i><span className="entity-name">{props.file.name}</span>
        </div>
    );
}

export default FileComponent;
