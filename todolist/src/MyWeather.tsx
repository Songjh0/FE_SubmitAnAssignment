import React, { Component } from "react";

interface MyProps{
  weather : string;
  children : React.ReactNode;
}

// const MyWeather : React.FC<MyProps> = ({children, weather}) => {

//   return (
//     <div>
//       {children}<p></p>
//       오늘의 날씨는 {weather} 입니다
//     </div>
//   )
// }

// 클래스 컴포넌트로 변경
class MyWeather extends Component<MyProps>{
  render() {

    // this를 사용해서 props를 받아옴 (this = 포인터 개념)
    // this는 컴포넌트를 가져오는 대상 객체
    const {children, weather} = this.props;

    return(
      <div>
          {children}<p></p>
          오늘의 날씨는 {weather} 입니다
      </div>
    )
  }
}

export default MyWeather;