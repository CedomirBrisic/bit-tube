import React from 'react';

export const PlayingVideo = (props) => {
    return (
            <iframe className="bright-shadow mb-5" width="665" height="415" src={`https://www.youtube.com/embed/${props.appFirstOfSearched}?rel=0&autoplay=1`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="default"></iframe>
    )
}