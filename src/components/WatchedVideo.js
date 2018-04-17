import React from "react";

export const WatchedVideo = (props) => {
    return (
        <div className="col-xs-6 col-md-4 watched-video mb-3">
            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${props.appWatchedVideo}?rel=0`} frameBorder="0" allow="autoplay; encrypted-media" title={`watchedVideo${props.key}`} allowFullScreen></iframe>
        </div>
    )
}