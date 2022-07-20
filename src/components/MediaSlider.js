import Anime from "../asset/anim";

import { useRef, useEffect } from "react";

function MediaSlider() {
  const path = process.env.PUBLIC_URL;

  const panel = useRef(null);
  const next = useRef(null);
  const prev = useRef(null);
  const navi = useRef(null);
  const Index = useRef(0);
  const EnableClick = useRef(true);

  const init = () => {
    const panel_li = panel.current.children;
    const len = panel_li.length;
    const currentEl = panel.current.querySelector(".on");
    const current_index = Array.from(panel_li).indexOf(currentEl);
    return [currentEl, current_index, len];
  };

  const showNext = () => {
    const [currentEl, current_index, len] = init();
    let next_index = null;

    current_index !== len - 1
      ? (next_index = current_index + 1)
      : (next_index = 0);
    if (EnableClick.current) showSlide(currentEl, next_index, 1);
  };

  const showPrev = () => {
    const [currentEl, current_index, len] = init();
    let prev_index = null;

    current_index !== 0
      ? (prev_index = current_index - 1)
      : (prev_index = len - 1);
    if (EnableClick.current) showSlide(currentEl, prev_index, -1);
  };

  const activation = (index) => {
    for (const el of navi.current.children) el.classList.remove("on");
    navi.current.children[index].classList.add("on");
  };

  const showIndex = (index) => {
    const [currentEl, current_index] = init();
    const target_index = index;

    if (!EnableClick.current) return;
    if (target_index > current_index) showSlide(currentEl, target_index, 1);
    if (target_index < current_index) showSlide(currentEl, target_index, -1);
  };

  const showSlide = (el, index, direction) => {
    const panel_li = panel.current.children;
    //setIndex(index);
    Index.current = index;
    EnableClick.current = false;
    new Anime(el, {
      prop: "left",
      value: -direction * 100 + "%",
      duration: 500,
      callback: () => {
        el.classList.remove("on");
        el.style.display = "none";
      },
    });

    panel_li[index].style.display = "block";
    panel_li[index].style.left = direction * 100 + "%";

    new Anime(panel_li[index], {
      prop: "left",
      value: "0%",
      duration: 500,
      callback: () => {
        panel_li[index].classList.add("on");
        EnableClick.current = true;
      },
    });

    activation(index);
  };

  useEffect(() => activation(Index.current), []);

  return (
    <section id="slider">
      <ul className="panel" ref={panel}>
        <li className="s1 on">
          <img src={`${path}/img/media/story01.jpg`} alt="지프 유투브 사진" />
        </li>
        <li className="s2">
          <img src={`${path}/img/media/story02.jpg`} alt="지프 유투브 사진" />
        </li>
        <li className="s3">
          <img src={`${path}/img/media/story03.jpg`} alt="지프 유투브 사진" />
        </li>
        <li className="s4">
          <img src={`${path}/img/media/story04.jpg`} alt="지프 유투브 사진" />
        </li>
        <li className="s5">
          <img src={`${path}/img/media/story05.jpg`} alt="지프 유투브 사진" />
        </li>
      </ul>

      <ul className="navi" ref={navi}>
        {[0, 1, 2, 3, 4].map((num) => {
          return <li key={num} onClick={() => showIndex(num)}></li>;
        })}
      </ul>

      <button className="prev" ref={prev} onClick={showPrev}>
        prev
      </button>
      <button className="next" ref={next} onClick={showNext}>
        next
      </button>
    </section>
  );
}

export default MediaSlider;
