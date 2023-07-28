//변수생성 키,몸무게, 확인버튼
let userHeight = document.querySelector('#user_height'); //키입력
let userWeight = document.querySelector('#user_weight'); //몸무게입력
const normal_w = document.querySelector('#normal_w'); //확인버튼
let result = document.querySelector('#result_screen') //결과창
//변수확인
console.log(userHeight, userWeight,normal_w, result);
//키입력후 확인버튼 눌렀을 때 결과창에 적정몸무게((본인신장-100)*0.9) 와 초과몸무게 나타내기
normal_w.addEventListener('click',function(){
    //결과 => 적중체중은 ?kg 이며, ?kg 초과되셨습니다.
    result.innerHTML=(``)
})
//적중체중 변수 만들기 키 몸무게 변수 만들기