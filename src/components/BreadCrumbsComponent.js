import React from 'react';
// import '../styles/DriveComponent.css';

const BreadCrumbsComponent = props => {
    const { breadCrumbsList } = props;
    const list = breadCrumbsList.map((crumb, index) => {
        return (<div key={crumb.id} onClick={() => props.handleBreadCrumbClick(crumb, index)}>
            > {crumb.name}
        </div>)
    })
    return (
        <div style={{ display: 'flex' }}>
            {[<div key='home' onClick={() => props.handleBreadCrumbClick({ id: '' }, -1)}>Home</div>, list]}
        </div>
    );
}

export default BreadCrumbsComponent;
