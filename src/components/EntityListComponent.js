import React from 'react';
import FolderComponent from './FolderComponent';
import FileComponent from './FileComponent';

const EntityListComponent = props => {
    const { subEntities } = props;

    const entityList = subEntities.map((entity, index) => {
        if (entity.isFolder) {
            return <FolderComponent key={entity.id} folder={entity} handleFolderClick={props.handleFolderClick} pos={index} />
        } else {
            return <FileComponent key={entity.id} file={entity} />
        }
    })

    return (
        entityList
    );
}

export default EntityListComponent;
