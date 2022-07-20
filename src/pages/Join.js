import Layout from "../layouts/Layout";
import { useState, useEffect } from "react";
import JoinForm from "../utils/JoinForm";

function Join() {
  const path = process.env.PUBLIC_URL;

  return (
    <Layout name={"Join"}>
      <div className="visual">
        <div className="inner">
          <div className="text_box">
            <h2>Join</h2>
            <p>
              Jeep Care Service는 Jeep만의 최상의 서비스를 제공하기 위한
              프로그램 으로 차량 보증과 5년 소모성 부품 무상 교환 서비스가
              통합된 프로그램 입니다. 더 나은 고객 만족을 위해 아래의 서비스
              패키지를 Jeep 차량을 구매하는 모든 고객에게 제공합니다.
            </p>
          </div>
        </div>
      </div>
      <div className="inner">
        <div className="left_box">
          <h2>
            What will <br /> be next step?
          </h2>
          <ul>
            <li>
              <h3>1. We'll prepare a proposal</h3>
              <p>
                Required scope, timeline and apr.price will be included if you
                porvide us with detial information about a project.
              </p>
            </li>
            <li>
              <h3>2. Together we discuss it</h3>
              <p>
                Let's get acquainted and discuss all the possible variants and
                options. Google Hangouts or Skype usually works great.
              </p>
            </li>
            <li>
              <h3>3. Let's start building</h3>
              <p>
                When the contract is signed, and all goals are set we can start
                the first sprint
              </p>
            </li>
          </ul>
        </div>
        <JoinForm />
      </div>
    </Layout>
  );
}

export default Join;
