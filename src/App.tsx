import "./App.css";
import img from "./img/IMG_7555.JPG";

function App() {
  const info = [
    { title: "name", text: "주보미" },
    { title: "birth", text: "2005.06.23" },
    { title: "phone", text: "010-5965-5071" },
    { title: "email", text: "jubomi@biztechi.com" },
  ];
  const certificates = [
    "GTQ 그래픽 기술 자격증",
    "DIAT 디지털정보활용능력",
    "2022 SW마이스터고 연합해커톤 “과학기술정보통신부장관상”",
    "HSK 3급",
  ];
  const activity = [
    "2021 DAPC 알고리즘 대회",
    "2022 NYPC 알고리즘 대회",
    "2022 SW마이스터고 연합 해커톤",
    "2022 KOSA-마이다스 영 챌린지 해커톤",
    "2022 대덕소프트웨어마이스터고 영어 스피치 대회",
    "2023 체험형 현장실습(베스텔라랩)",
    "2023 ISTQB CTFL 국제자격시험 교육",
  ];
  return (
    <div className="flex">
      <div className="flex flex-col justify-between mr-200 w-fit">
        <h1 className="text-stroke text-200 leading-120 font-jum text-custom-yellow">
          PROFILE
        </h1>
        <img src={img} className="w-64" alt="증명사진" />
        <div>
          <p className="font-jum text-80 text-stroke text-custom-yellow">
            Front-end Developer
          </p>
          {info.map((v, i) => {
            return (
              <div className="flex items-center">
                <p className="font-harmattan text-40 w-90 text-stroke text-custom-yellow">
                  {v.title}
                </p>
                <span className="ml-5 font-poor text-30 text-custom-black">
                  {v.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center ml-200">
        <div>
          <p className="font-jum text-80 text-stroke text-custom-yellow">
            Certificates
          </p>
          {certificates.map((v, i) => (
            <>
              <span className="font-poor text-30 text-custom-black">{v}</span>
              <br />
            </>
          ))}
        </div>
        <hr className="mt-50 border-t-2 border-solid border-gray-300 w-800" />
        <div>
          <p className="font-jum text-80 text-stroke text-custom-yellow">
            Activity
          </p>
          {activity.map((v, i) => (
            <>
              <span className="font-poor text-30 text-custom-black">{v}</span>
              <br />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
