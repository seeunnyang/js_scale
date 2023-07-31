//변수생성 키,몸무게, 확인버튼
let userHeight = document.querySelector('#user_height'); //키입력
let userWeight = document.querySelector('#user_weight'); //몸무게입력
const button = document.querySelector('#button'); //확인버튼
let result = document.querySelector('#result_screen') //결과창
let normal_w = (userHeight-100)*0.9
//변수확인
console.log(userHeight, userWeight, button, result, normal_w);
//키입력후 확인버튼 클릭했을 때 결과창에 적정몸무게((본인신장-100)*0.9) 와 초과몸무게 나타내기
//결과 => 적중체중은 ?kg 이며, ?kg 초과되셨습니다.
button.addEventListener('click',function(){
    result.innerHTML = `적중체중은 ${normal_w}kg 이며, ${userWeight-normal_w}kg 입니다`
})