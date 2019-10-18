const download = document.getElementById('download');
const series = document.getElementById("elementId");


download.addEventListener('click', (e) => {
    console.log('CLicked');
    const season = document.getElementById('season').value;
    const episode = document.getElementById('episode').value;
    const seriesValue = series.options[series.selectedIndex].text;
    window.open(`http://d9.o2tvseries.club/${seriesValue}/Season 0${season}/${seriesValue} - S0${season}E0${episode} (TvShows4Mobile.Com).mp4`, '_blank');
});
