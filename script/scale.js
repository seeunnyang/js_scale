//변수생성 키,몸무게, 확인버튼
let userHeight = document.querySelector('#user_height'); //키입력
let userWeight = document.querySelector('#user_weight'); //몸무게입력
const button = document.querySelector('#button'); //확인버튼
let result = document.querySelector('#result_screen') //결과창

//변수확인
console.log(userHeight, userWeight, button, result);
//키입력후 확인버튼 클릭했을 때 결과창에 적정몸무게((본인신장-100)*0.9) 와 초과몸무게 나타내기
//결과 => 적중체중은 ?kg 이며, ?kg 초과되셨습니다.
button.addEventListener('click',function(){
    //1. 사용자가 입력한 키와 몸무게 정보 받아오기
    let userH = Number(userHeight.value);
    let userW = Number(userWeight.value);
    console.log(userH, userW);
    let normal_w = (userH-100)*0.9;
    console.log(normal_w);
    let resultW = userW-normal_w; //몸무게변환변수-평균몸무게변수
    console.log(resultW);
    result.innerHTML = `적중체중은 ${normal_w}kg 이며, 초과몸무게는 ${resultW}kg 입니다.`
})