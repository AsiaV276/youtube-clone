import React from 'react'
import './styles/Search.css'
import TuneIcon from '@material-ui/icons/Tune';

function Search(apiData) {
    /* // Search for a specified string.
        function search() {
            var q = $('#query').val();
            var request = gapi.client.youtube.search.list({
                q: q,
                part: 'snippet'
            });

            request.execute(function(response) {
                var str = JSON.stringify(response.result);
                $('#search-container').html('<pre>' + str + '</pre>');
            });
        }*/
    return (
        <div id="search">
            <div className="search-filter">
                <TuneIcon/>
                <h2>Filter</h2>
            </div>
            <hr/>
            {/*<ChannelRow
                image
                channelName
                verified
                subs
                numVideos
                description
            />*/}
            <hr/>

        </div>
    )
}

export default Search
