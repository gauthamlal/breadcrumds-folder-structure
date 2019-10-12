import React from 'react';
// import '../styles/DriveComponent.css';

const BreadCrumbsComponent = props => {
    const { breadCrumbsList } = props;
    const list = breadCrumbsList.map(crumb => {
        return (<div key={crumb.id}>
            > {crumb.name}
        </div>)
    })
    return (
        <div style={{display: 'flex'}}>
            {[<div key='home'>Home</div>, list]}
        </div>
    );
}

export default BreadCrumbsComponent;
