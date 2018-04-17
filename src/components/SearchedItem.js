import React from "react";

export const SearchedItem = (props) => {
    return (
        <div className="searched-item col-xs-2 col-md-2 ">
            <img data-videoId={props.appSearchedShortcutUrl} onClick={props.appSearchedShortcut} src={props.appSearchedUrl} alt="searched result" />
        </div>
    )
}