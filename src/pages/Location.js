import Layout from "../layouts/Layout";
import { useEffect, useRef, useState } from "react";

function Location() {
  //윈도우 전역객체에 있는 kakao키값을 바로 변수로 비구조화 할당
  const path = process.env.PUBLIC_URL;
  const { kakao } = window;
  const mapInfo = [
    {
      title: "영등포 서비스 센터",
      latlng: new kakao.maps.LatLng(37.5432, 126.889),
      imgSrc: `${process.env.PUBLIC_URL}/img/location/map_logo01.png`,
      imgSize: new kakao.maps.Size(54, 38),
      imgPos: {
        offset: new kakao.maps.Point(116, 99),
      },
    },
    {
      title: "성동 서비스 센터 ",
      latlng: new kakao.maps.LatLng(37.5494, 127.0551),
      imgSrc: `${process.env.PUBLIC_URL}/img/location/map_logo01.png`,
      imgSize: new kakao.maps.Size(54, 38),
      imgPos: {
        offset: new kakao.maps.Point(116, 99),
      },
    },
    {
      title: "백석 서비스 센터",
      latlng: new kakao.maps.LatLng(36.822, 127.1133),
      imgSrc: `${process.env.PUBLIC_URL}/img/location/map_logo01.png`,
      imgSize: new kakao.maps.Size(54, 38),
      imgPos: {
        offset: new kakao.maps.Point(116, 99),
      },
    },
  ];
  const [location, setLocation] = useState(null);
  const [traffic, setTraffic] = useState(false);
  const [info, setInfo] = useState(mapInfo);
  const [index, setIndex] = useState(0);
  const conMap = useRef(null);
  const btns = useRef(null);
  const option = {
    center: info[index].latlng,
    level: 3,
  };
  const imageSrc = info[index].imgSrc;
  const imageSize = info[index].imgSize;
  const imageOption = info[index].imgPos;

  //마커이미지 인스턴스 생성
  const markerImage = new kakao.maps.MarkerImage(
    imageSrc,
    imageSize,
    imageOption
  );

  //위치 인스턴스 생성
  const markerPosition = info[index].latlng;

  //위치 인스턴스 값을 인수로 해서 마커 인스턴스 생성
  const marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage,
  });
  //최종 마커 호출

  useEffect(() => {
    conMap.current.innerHTML = "";
    //지도 인스턴스 생성
    const map_instance = new kakao.maps.Map(conMap.current, option);
    const handleResize = () => {
      map_instance.setCenter(info[index].latlng);
    };
    //마커 출력
    marker.setMap(map_instance);
    //인스턴스값을 state에 담아서 관리
    setLocation(map_instance);

    //지도타입 컨트롤바 출력
    const mapTypeControl = new kakao.maps.MapTypeControl();
    map_instance.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPLEFT);

    //지도 줌 컨트롤바 출력
    const zoomControl = new kakao.maps.ZoomControl();
    map_instance.addControl(zoomControl, kakao.maps.ControlPosition.LEFT);

    //브라우저 리사이즈시 마커 중앙 유지
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [index]);

  useEffect(() => {
    if (location) {
      traffic
        ? location.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
        : location.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
    }
  }, [traffic]);

  return (
    <Layout name={"Location"}>
      <div className="visual">
        <div className="text_box">
          <h2>JEEP® SUPPORT </h2>
          <p>
            Jeep Care Service는 Jeep만의 최상의 서비스를 제공하기 위한 프로그램
            으로 차량 보증과 5년 소모성 부품 무상 교환 서비스가 통합된 프로그램
            입니다. 더 나은 고객 만족을 위해 아래의 서비스 패키지를 Jeep 차량을
            구매하는 모든 고객에게 제공합니다.
          </p>
        </div>
      </div>

      <div className="inner">
        <h2>Care & Location</h2>
        <div className="support_center">
          <div className="pic">
            <img
              src={`${path}/img/location/center.jpg`}
              alt="지프 파트너사 유벤투스 이미지"
            />
          </div>
          <div className="text_box">
            <h3>JEEP® CUSTOMER SUPPORT CENTER</h3>
            <p>
              Jeep® 고객 지원 센터는 고객님의 요청 사항을 신속하게 파악하고
              해결해드리겠습니다. <br /> 다양한 정보 제공과 고객님과의 원활한
              커뮤니케이션을 위해 노력하고 있사오니, <br />본 서비스를 많이
              활용해주시면 감사하겠습니다.
            </p>
            <p>
              l 고객 지원 센터 l <br />
              연락처 : 080-365-2470
              <br /> 운영 시간 : 평일 09 : 00 ~ 20 : 00 / 토요일 09 : 00 ~ 13 :
              00 <br />
              서비스 항목 : 고객불만 / 고객문의 접수 및 처리, 기타 고객상담업무
              관련 제반 사항
            </p>
          </div>
        </div>

        <div className="map_box">
          <div>
            <div id="map" ref={conMap}></div>
            <div className="btnSet">
              <button onClick={() => setTraffic(!traffic)}>
                {traffic ? "Traffic OFF" : "Traffic ON"}
              </button>

              <ul className="branch" ref={btns}>
                {info.map((info, idx) => {
                  let on = "";
                  index === idx ? (on = "on") : (on = "");
                  return (
                    <li key={idx} onClick={() => setIndex(idx)} className={on}>
                      {info.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="text_box">
            <h2>서비스 센터 검색</h2>
            <p>
              Jeep® 서비스 센터는 고객님의 요청 사항을 신속하게 파악하고
              해결해드리겠습니다. 다양한 정보 제공과 고객님과의 원활한
              커뮤니케이션을 위해 노력하고 있사오니, 본 서비스를 많이
              활용해주시면 감사하겠습니다.
            </p>
          </div>
        </div>
        <ul className="care">
          <li>
            <div className="pic">
              <img
                src={`${path}/img/location/care01.jpg`}
                alt="지프 파트너사 유벤투스 이미지"
              />
            </div>
            <div className="text_box">
              <p>WARRANTY PROGRAM</p>
              <span>
                고객님의 안전과 차량, Jeep가 책임집니다. Jeep Warranty는, 22년식
                차량 부터 3년/100,000km (선도래 기준)으로 변경 되었습니다.
              </span>
            </div>
          </li>
          <li>
            <div className="pic">
              <img
                src={`${path}/img/location/care02.jpg`}
                alt="지프 파트너사 유벤투스 이미지"
              />
            </div>
            <div className="text_box">
              <p>풀타임 모빌리티 개런티 프로그램</p>
              <span>
                풀타임 모빌리티 개런티 프로그램은 고객님께서 보증수리를
                받으시거나, 예기치 못한 사고를 당하셨을 때에 익숙한 차량을 계속
                이용하실 수 있도록 지원해 드리는 프로그램입니다.
              </span>
            </div>
          </li>
          <li>
            <div className="pic">
              <img
                src={`${path}/img/location/care03.jpg`}
                alt="지프 파트너사 유벤투스 이미지"
              />
            </div>
            <div className="text_box">
              <p>SERVICE RESERVATION</p>
              <span>
                고객님의 소중한 시간을 절약하고 차량 유지관리를 생활화하기
                위해서는 서비스센터 이용시 반드시 사전 예약을 부탁드립니다.{" "}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export default Location;
