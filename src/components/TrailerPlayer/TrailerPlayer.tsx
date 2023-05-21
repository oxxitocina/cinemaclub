import {Helmet} from "react-helmet";

export default function TrailerPlayer() {
  return (
    <>
        <div id="yohoho" data-player="trailer" data-kinopoisk="326"></div>
        <Helmet><script src="//yohoho.cc/yo.js"></script></Helmet>
    </>
  )
}
