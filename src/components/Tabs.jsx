import React from 'react';

const Tabs = (props) => {

    const {tabName, setTabName} = props;

    const tabStyle = {
        border: "solid 2px black",
        height: "65px",
        width: "150px",
    };

    const changeTab = (e) => {
        e.preventDefault();
        e.target.style.background = 'black';
        e.target.style.color = 'white';
      };

    const normalTab = (e) => {
        e.preventDefault();
        e.target.style.background = 'white';
        e.target.style.color = 'black';
    }

    const selectTab = (index) => {
        setTabName({
            ...tabName,
            selectedTab: index,
        })
    };

    return (
        <div className="m-2 align-text-center">
        { tabName.content.map((content, index) => (
            <button 
                style={tabStyle} 
                onMouseOver={changeTab} 
                onMouseLeave={normalTab}
                onClick={() => {
                    return selectTab(index);
                }}
                className="m-2" 
                key={index}
                >Tab {index + 1}
            </button>
        ))}
        </div>
    );
}

export default Tabs;

