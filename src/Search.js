import React, { useState, useEffect } from 'react'
import './styles/Search.css'
import TuneIcon from '@material-ui/icons/Tune';
import VideoRow from './VideoRow';

function Search() {
    const [searchVideos, setSearchVideos] = useState([])
    const searchInput = 'javascript'
    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/search/?key=${process.env.REACT_APP_API_KEY}&part=snippet&q=${searchInput}&maxResults=12`)
        .then(res => res.json())
        .then(
            (data) => {
                setSearchVideos(data.items)
            }
        )
        .catch((error) => {
            console.error('Error:', error);
          });
    }, [])

    console.log(searchVideos);
    const currentDateTime = new Date()
   
    function diffHours(dt2, dt1) {
        var newPublishedDate = new Date(dt1.replace(/-/g,'/').replace('T',' ').replace('Z',''));
        var diff =(dt2.getTime() - newPublishedDate.getTime()) / 1000;
        diff /= (60 * 60);
        return Math.abs(Math.round(diff));
    }
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <div id="search">
            <div className="search-filter">
                <TuneIcon/>
                <h2>Filter</h2>
            </div>
            <hr/>
            {searchVideos.map((item) => (
               <VideoRow
                    key={item.id}
                    videoTitle={item.snippet.title}
                    thumbnailUrl={item.snippet.thumbnails.medium.url}
                    channelTitle={item.snippet.channelTitle}
                    publishedAt={diffHours(currentDateTime, item.snippet.publishedAt)}
               /> 
            ))}
            <hr/>

        </div>
    )
}

export default Search
