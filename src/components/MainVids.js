import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Popup from "./Popup";
function MainVids() {
  const path = process.env.PUBLIC_URL;
  const Vids = useSelector((store) => store.youtubeReducer.youtube);
  const [Index, setIndex] = useState(0);
  const pop = useRef(null);
  return (
    <>
      <section id="vids" className="myScroll">
        <h2>MEDIA</h2>
        <div className="top_text">
          <h3>WHY WE JEEP</h3>
          <p>
            Jeep®는 우리가 만들지 않습니다. 여러분이 만드는 것입니다. 멈출 수
            없는 열정으로 채워진 Jeep® 커뮤니티와 함께 Jeep® 라이프를 사는
            진정한 의미를 경험하시길 바랍니다.{" "}
          </p>
        </div>
        <div className="vids_youtube">
          {Vids.map((vid, idx) => {
            if (idx < 6) {
              return (
                <article key={idx}>
                  <span
                    onClick={() => {
                      setIndex(idx);
                      pop.current.open();
                    }}
                  >
                    play
                  </span>
                  <div className="pic">
                    <img
                      src={vid.snippet.thumbnails.standard.url}
                      alt={vid.snippet.title}
                    />
                  </div>
                </article>
              );
            }
          })}
          <Link to="/media" className="btnPlus">
            MORE VIEW
          </Link>
        </div>
        <video
          muted
          controls
          src={`${path}/img/jeeplife/members_video.mp4`}
        ></video>
      </section>
      <Popup ref={pop}>
        <>
          {Vids.length !== 0 && (
            <iframe
              src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
              frameBorder="0"
            ></iframe>
          )}
        </>
      </Popup>
    </>
  );
}

export default MainVids;
