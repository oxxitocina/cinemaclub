import {Helmet} from "react-helmet";

export default function MoviePlayer({id}) {
  return (
    <>
        <div id="yohoho" data-kinopoisk={id} style={{
            width: '100%',
            height: '100%'
        }}>
       </div>
       
        <Helmet>
            <script src="//yohoho.cc/yo.js"></script>
        </Helmet>
    </>
  )
}
