import  './js/script.js';
import './style/style.css';
import './less/style.less';
import './scss/style.scss';

const importAll = require =>
    require.keys().reduce((acc, next) => {
        acc[next.replace("./", "")] = require(next);
        return acc;
    }, {});

const images = importAll(
    require.context("./assets/img/", false, /\.(png|jpe?g|svg|PNG)$/)
);
const videos = importAll(
    require.context("./assets/video/", false, /\.(mp4|mov|avi)$/)
);
const audios = importAll(
    require.context("./assets/audio/", false, /\.(mp3|ogg|m4a)$/)
);
const files = importAll(
    require.context("./assets/file/", false, /\.(rar|zip|pdf)$/)
);

images;
videos;
audios;
files;
