import React from "react";

const Tab = ({ toggleClass, clickEvent, nameTab }) => {
    return (
        <button
            className={toggleClass}
            type="button"
            key={nameTab}
            onClick={clickEvent}
        >
            {nameTab}
        </button>
    );
};

export default Tab;
