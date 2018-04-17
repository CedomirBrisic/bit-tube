import React from 'react';

export class SearchBar extends React.Component {



    render() {

        return (
            <div className="row">
                <label htmlFor="search" className="col-xs-12 col-md-12">
                    <input onChange={this.props.appSetStateSearchValue} value={this.props.appStateSearchValue} className="searchbar col text-white" type="text" id="search" placeholder="Type your search here..." />
                    {/* <img onClick={this.props.appGoGetSearchedVideos} className="col-xs-2 col-md-2 btn" src="https://png.icons8.com/metro/1600/search.png" alt="search" /> */}
                </label>
            </div>
        )
    }
}