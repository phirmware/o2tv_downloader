const play = document.getElementById('download');
const series = document.getElementById("elementId");
const vidScreenRight = document.getElementById('screen_right');
const vidScreenLeft = document.getElementById('screen_left');
const vidContainerRight = document.getElementById('video_container_right');
const vidContainerLeft = document.getElementById('video_container_left');

const list = movieList();

console.log(list);

for(let i = 0; i < list.length; i ++) {
    series.insertAdjacentHTML('beforeend',`<option value="${list[i]}">${list[i]}</option>`);
}


play.addEventListener('click', (e) => {
    const season = document.getElementById('season').value;
    const episode = document.getElementById('episode').value;
    const seriesValue = series.options[series.selectedIndex].text;
    if (episode.length > 1) {
        vidScreenRight.src = `http://d9.o2tvseries.club/${seriesValue}/Season ${season}/${seriesValue} - S${season}E${episode} (TvShows4Mobile.Com).mp4`;
        vidScreenLeft.src = `http://d9.o2tvseries.club/${seriesValue}/Season ${season}/${seriesValue} - S${season}E${episode} (O2TvSeries.Com).mp4`;

    } else {
        vidScreenRight.src = `http://d9.o2tvseries.club/${seriesValue}/Season 0${season}/${seriesValue} - S0${season}E0${episode} (TvShows4Mobile.Com).mp4`;
        vidScreenLeft.src = `http://d9.o2tvseries.club/${seriesValue}/Season 0${season}/${seriesValue} - S0${season}E0${episode} (O2TvSeries.Com).mp4`, '_blank';
    }
    vidScreenLeft.load();
    vidScreenRight.load();
});

vidScreenLeft.addEventListener('loadeddata', () => {
    console.log('Left loaded');
    vidContainerLeft.style.bottom = '0px';
});

vidScreenRight.addEventListener('loadeddata', () => {
    console.log('Right loaded');
    vidContainerRight.style.bottom = '0px';
});

vidScreenLeft.addEventListener('error', () => {
    vidContainerLeft.style.bottom = '-300px';
});

vidScreenRight.addEventListener('error', () => {
    vidContainerRight.style.bottom = '-300px';
});
