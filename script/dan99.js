//구구단 과제 풀이
const dan2 = document.querySelector('#dan2'); //2단고정
const calc = document.querySelector('#calc'); //계산식
const result = document.querySelector('#result'); //결과출력input
console.log(dan2, calc, result);
console.log(typeof(dan2.value), typeof(calc.value)); //string,string
console.log(`2*2=${'2'*'2'}, 2+2=${'2'+'2'}`); //2*2=4, 2+2=22 
//연산자 좌우 피연산자가 문자데이터일 경우
//더하기연산자(+) 라면 문자+문자=문자로 연결결과로 보여준다.
//나머지연산자(-,*,/,%) >> 문자를 암시적형변환으로 자동으로 
//숫자 데이터로 변경해서 문자*문자=숫자 결과로 보여준다.

//resultBtn 클릭하면 result에 결과 뜨게하기
    const test = document.querySelector('#test')
    test.addEventListener('click',function(){
    let first = Number(dan2.value);
    let last = Number(calc.value);
    console.log(first, last, first*last);
    // console.log(`${first} X ${last} = ${first*last}`);
    result.value = first*last
});