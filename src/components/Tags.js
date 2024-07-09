import React from "react";

const Tags = ({ tag }) => {
    return (
        <div className="tags-cont py-1 px-2">
            <p className="mb-0">{tag}</p>
        </div>
    );
};

export default Tags;