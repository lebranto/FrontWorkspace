test1.onclick = function(){
    var str = "Samsung Apple Xiomi";
    console.log(str.length);
    console.log(str.toUpperCase());
    console.log(str.indexOf('pl'));
    console.log(str.lastIndexOf('i'));
    console.log(str.charAt(0));
    //또는
    console.log(str[0]);
    // 위에 것을 많이 쓴다.
    console.log(str.substring(2,4)); //2 , 3번 인덱스값 추출
    console.log(str.substring(2));   //2번 부터 끝까지

    var arr = str.split(" ");
    console.log(arr);
}

test2.onclick = function(){
    var num =123.456;

    console.log(Math.round(num*10)/10);
    console.log(Math.ceil(num));
    console.log(Math.floor(num));

    // 그외 자바의 메서드 명과 동일한 메서드 다수 존재  Ex) random, sqlt 등이 있다.
}

test3.onclick = function(){
// 자바에 있는 Calendar은 없고 Date 만 있다.

var now = new Date();
 console.log(now);

  // 내가 원하는 기산 정보를 가진 Date 객체
  var time1 = new Date(2026, 0, 20);  //2026-01-20
  console.log(time1)

  // 날짜형식의 문자열로 객체 생성 가능
  var time2 = new Date("1999/03/01 15:44:21");
  console.log(time2)

  //참고 : 자바스크립트에는 오버로딩 기능은 없다

  //date객체를 yyyy/mm/dd(e) HH:MM:ss 형식으로 출력하고 싶다면?  자바에서는 simpledateformat

  displayDate(time2);

};


//yyyy/mm/dd(e) 형식으로 만들기
function displayDate(date){
    var yyyy = date.getFullYear();
    var mm = date.getMonth()+1;
    var dd = date.getDate();

    var dayArr = ['일','월','화','수','목','금','토']
    var day = date.getDay(); //0(일) ~ 6(토)

    alert(yyyy + "/" + mm+"/"+dd + " ("+ dayArr[day]+")" )

}



test4.onclick = function(){
  console.log(3+7+"7") //107, 문자열

   // '7'은 number 자료형으로 형변환 된 후 연산
  console.log(7 -'7') //0 , number
  console.log(7 *'7') //49 , number
  console.log(7 /'7') //1 , number
  console.log(7 %'4') //3 , number
  // 즉, +을 제외한 산술 연산시 문자열은 number 자료형으로
  // 자동 변환된다.

  console.log(7 % 'a') 
  // 숫자형태가 아닌 문자열을 숫자로 형변환시 반환되는 값(NaN) 
  // NaN(number)과 기타 값들간의 연산 결과는 항상 NaN이 반환

  console.log(7 + true); // true는 Number로 변환시 1로 처리
  console.log(7 + false); // false는 Number로 변환시 0으로 처리

  // 모든 연산시에는 ㅜ언시값과 원시값끼리만 연산이 가능하기 때문에, 참조 변수는 원시값으로
  // 변환된 후 연산 처리 된다.
  // [] -> [].toString -> ' ' + 1 => '1'
  console.log([] + 1); // 문자열 1이 반환,
  console.log([].toString); 
  console.log({} + 1);
  // [].toString => []

  function fn(){};

  console.log(fn + 1);

};

test5.onclick =function() {
    var num = "1234.567원";
    console.log(Number(num)) 
    //Number는 정수/실수로 변환이 가능. 단, 변환 불가 문자가 있는 경우 NaN이 나옴
    console.log(parseInt(num))
    // 문자열을 정수로 변환. 단, 변환 불가 문자가 있는 경우 해당 문자의 앞까지만 변환
    // 12ㄹ34.567 이면 12만 나온다
    console.log(parseFloat(num))
};


test6.onclick =function(){
    console.log(10 / 0); //infinity
    console.log(typeof(10/0)); //Number

    console.log(10/'a'); //NaN
    console.log(typeof(10/'a'));  //number

    console.log(10/Infinity); //0

    var num = prompt("숫자를 입력하세요")

    if(!isNaN(num)){
        alert("숫자입니다.")
    }else{
        alert("숫자가 아닙니다.")
    }

};


test7.onclick = function(){
    /*
        자바 스크립트에서는 변수나 리터럴이 bbolean 형으로 형변환이 가능하다
         - if(값) , Boolean(값)

        
        값이 존재하지 않는 것들을 false로 변환된다.
        ex) 0, -0, 0.0, "", undefined, null, NaN
        
        값이 존재하는 것들은 true로 변환된다.
        ex) 123, - 123, 1.23, "안", "안녕", new Date(), [], {}, 함수형

        // [] = new Array() 를 축약한 것으로 주소값이 있어 true 로 나온다
        // 다만 [].toString이 되는 경우 "" 이 되기 때문에 false로 나올 수 있다. 이런 경우는 거의 없다..
    
    */

    console.log(Boolean(123));  // true
    console.log(Boolean(-500)); // true
    console.log(Boolean(0));    // false
    console.log(Boolean(NaN));  // false 
    

    console.log(Boolean("abc")); // true
    console.log(Boolean("")); // false

    console.log(Boolean(undefined)); // false
    console.log(Boolean(null));      // false
    console.log(Boolean([]));        // true 
    console.log(Boolean({}));        // true
    
    function fn(){}
    console.log(Boolean(fn)); // true


    console.log("0" == 0); //true
    console.log([] == 0); //true
    //[] 가 toString 이 되고 Number("") = 0 이기 때문에
    console.log([] == "0");
};


test8.onclick = function(){
    /*
    일반 동등 비교 연산자
    ==, !=
    왼쪽 오른 쪽 타입이 서로 다르다면 "자동형변환" 후 비교 수행

    엄격 동등비교 연산자
    ===, !==
    왼쪽 오른쪽 타입이 서로 다르다면 바로 false를 반환하는 연산자(===기준)
    즉, 두 갑간의 자료형 검사 또한 수행한다 
    */

    console.log(3 == "3"); // true
    console.log(3 != "3"); // false

    console.log(3 === "3"); // 자료형이 달라서 false
    console.log(3 === 3); // 자료형이 같으니 true

    console.log(3 !== "3"); // true
    console.log(3 === Number("3")); // true

    // console.log([] === 3) 항상 에러가 나온다.

    console.log(null == undefined); // boolean으로 형변환 되어서 true
    console.log(null === undefined); // 자료가 서로 달라서 false

};

test9.onclick = function(){
    var num = prompt("정수를 입력하세요")

    // 입력한 값이 홀수인지 짝수인지 출력
    // if(num % 2 == 0){
    //     alert("짝수");
    // }else{
    //     alert("홀수");
    // }

    // 짧은 조건문
    // a(조건식) && b(실행문) -> a가 참인경우 b실행
    // a(조건식) || b(실행문) -> a가 거짓인 경우 b실행

    num % 2 ==0 && alert("짝수");
    num % 2 ==1 && alert("홀수");

};

