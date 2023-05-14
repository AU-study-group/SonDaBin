import {htmlss} from"./components/module/timelimit.js"; // htmlss로 선언된 함수를 가져와라
const web = document.querySelector('.web'); // const(상수선언) web(div태그 class이름) 
//document.querySelector('.web') web을 가져와라
web.insertAdjacentHTML('beforeend', htmlss); // web아래에 htmlss에 정의된 코드를 제일 밑에 붙여라
