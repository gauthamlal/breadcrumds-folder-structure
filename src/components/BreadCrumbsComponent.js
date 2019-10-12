import React from 'react';
// import '../styles/DriveComponent.css';

const BreadCrumbsComponent = props => {
    const { breadCrumbsList } = props;
    const list = breadCrumbsList.map((crumb, index) => {
        return (<div key={crumb.id} onClick={() => props.handleBreadCrumbClick(crumb, index)}>
            > <span className="breadCrumb">{crumb.name}</span>
        </div>)
    })
    return (
        <div className="breadCrumbs">
            {[<div key='home' onClick={() => props.handleBreadCrumbClick({ id: '' }, -1)}><span className="breadCrumb">Home</span></div>, list]}
        </div>
    );
}

export default BreadCrumbsComponent;
