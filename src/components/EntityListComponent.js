import React from 'react';
import FolderComponent from './FolderComponent';
import FileComponent from './FileComponent';

const EntityListComponent = props => {
    const { subEntities } = props;

    const entityList = subEntities.map(entity => {
        if (entity.isFolder) {
            return <FolderComponent folder={entity} />
        } else {
            return <FileComponent file={entity} />
        }
    })

    return (
        entityList
    );
}

export default EntityListComponent;
