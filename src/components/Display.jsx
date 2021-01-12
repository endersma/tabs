import React from 'react';

const Display = (props) => {

    const {tabName} = props;

    const displayBox = {
        border: "solid 2px black",
        width: "900px",
        height: "400px",
    };

    return (
        <div style={displayBox} className="m-2 p-4">
            {tabName.content[tabName.selectedTab]}
        </div>
    );
}

export default Display;
