export const getSearchedVideos = (inputValue) => {
    return fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAyGWDbi-44c-YoV0t-DxO4wlA06OEcEew	&part=snippet&maxResults=6&q=${inputValue}&type=''`,{
        // params:{
        //     "key":"AIzaSyAyGWDbi-44c-YoV0t-DxO4wlA06OEcEew",
        //     "part":"snippet",
        //     "maxResults":"1",
        //     "q":inputValue
        // },
        method:"GET"
    })
    .then((response) => {
        return response.json();
    })
}