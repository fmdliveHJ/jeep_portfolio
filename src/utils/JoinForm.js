import { useState, useEffect } from "react";

function JoinForm() {
  const path = process.env.PUBLIC_URL;
  const initVal = {
    userid: "",
    pwd1: "",
    pwd2: "",
    email: "",
    comments: "",
  };
  const [val, setVal] = useState(initVal);
  const [Err, setErr] = useState({});

  const check = (val) => {
    const errs = {};
    const eng = /[a-zA-Z]/;
    const num = /[0-9]/;
    const spc = /[!@#$%^&*()_+]/;

    //userid인증처리
    if (val.userid.length < 5) {
      errs.userid = "아이디를 5글자 이상 입력하세요";
    }
    //password인증처리
    if (
      val.pwd1.length < 5 ||
      !eng.test(val.pwd1) ||
      !num.test(val.pwd1) ||
      !spc.test(val.pwd1)
    ) {
      errs.pwd1 =
        "비밀번호는 5글자 이상, 영문, 숫자, 특수문자를 모두 포함하세요.";
    }
    if (val.pwd1 !== val.pwd2 || !val.pwd2) {
      errs.pwd2 = "두개의 비밀번호를 동일하게 입력하세요";
    }
    if (val.email.length < 8 || !/@/.test(val.email)) {
      errs.email = "이메일은 8글자이상 @를 포함해 입력하세요";
    }
    if (!val.gender) {
      errs.gender = "성별을 선택하세요";
    }
    if (!val.interests) {
      errs.interests = "관심사를 하나이상 선택하세요";
    }
    if (val.comments.length < 20) {
      errs.comments = "남기는 말은 20글자 이상 입력하세요";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(check(val));
  };
  return (
    <div className="form_box">
      <div className="top_box">
        <div className="pic">
          <img
            src={`${path}/img/join/ico_v_bl.jpg`}
            alt="지프 파트너사 유벤투스 이미지"
          />
        </div>
        <p>
          회원가입을 하시면 다양한 서비스와 혜택을 받으실 수 있습니다. <br />
          고객님의 개인정보보호를 위해 인증을 거쳐 회원가입을 하고 있습니다.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className="h">회원가입 폼 양식</legend>
          <table>
            <caption className="h">회원가입 정보입력</caption>
            <colgroup>
              <col width={"50%"} />
              <col width={"50%"} />
            </colgroup>
            <tbody>
              <tr>
                <th colSpan={2}>status</th>
              </tr>
              <tr>
                <td>
                  <label htmlFor="userid">USER ID</label>
                  <input
                    type="text"
                    id="userid"
                    name="userid"
                    placeholder="아이디를 입력하세요."
                    value={val.userid}
                    onChange={handleChange}
                  />
                  <span className="err">{Err.userid}</span>
                </td>
                <td>
                  <label htmlFor="pwd1">PASSWORD</label>
                  <input
                    type="password"
                    name="pwd1"
                    id="pwd1"
                    placeholder="비밀번호를 입력하세요"
                    value={val.pwd1}
                    onChange={handleChange}
                  />
                  <span className="err">{Err.pwd1}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="pwd2">RE-PASSWORD</label>
                  <input
                    type="password"
                    name="pwd2"
                    id="pwd2"
                    placeholder="비밀번호를 재입력하세요"
                    value={val.pwd2}
                    onChange={handleChange}
                  />
                  <span className="err">{Err.pwd2}</span>
                </td>
                <td>
                  <label htmlFor="email">E-MAIL</label>
                  <input
                    type="text"
                    id="emial"
                    name="email"
                    placeholder="이메일주소를 입력하세요"
                    value={val.email}
                    onChange={handleChange}
                  />
                  <span className="err">{Err.email}</span>
                </td>
              </tr>
              <tr>
                <th colSpan={2}>Comments</th>
              </tr>
              <tr>
                <td colSpan={2}>
                  <label htmlFor="comments">COMMENTS</label>
                  <textarea
                    name="comments"
                    id="comments"
                    cols="30"
                    rows="10"
                    value={val.comments}
                    onChange={handleChange}
                  ></textarea>
                  <span className="err">{Err.comments}</span>
                </td>
              </tr>

              {/* btnSet */}
              <tr>
                <th colSpan="2">
                  <input type="reset" value="CANCEL" />
                  <input type="submit" value="SUBMIT" />
                </th>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </form>
    </div>
  );
}

export default JoinForm;
