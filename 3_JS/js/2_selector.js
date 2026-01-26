/*
    document 객체
     - 작성한 html의 태그를 파싱하여, 변환된 js object를 가지고 있는 객체
     - DOM : Document Object Model
*/




    document.querySelector("#id").onclick = function() {
    // id와 일치하는 요소를 선택하는 선택자 함수
    // 1. getElementById('아이디명')
    // id 값과 일치하는 *1개* 요소 선택
    var li = document.getElementById("myli2");
    // 2. querySelector('css선택자') css선택자와 일치하는 요소 *1개* 선택
    // var 키워드로 선언한 변수는 동일한 변수명이여도 에러가 나지 않는다
    li = document.querySelector("#myli2");

    console.log("li");
    console.dir("li"); // 객체구조 열람 메서드
    // 객체가 가지고 있는 모든 속성(key 와 value 값) 을 보여준다고 본다.

    // 선택한 요소의 스타일 속성 변경
    li.style.color = '#fff';
    li.style.backgroundColor = 'magenta';

    // 3. id 속성값으로 접근하기. -> 실무에서 사용은 지양
    // - 브라우저는(몇몇 브라우저 제외) id 값의 요소를 전역변수의 형태로 등록
    //   하기 때문에 id 속성값을 통해 요소를 바로 획득할 수 있다.
    // - 단, 모든 부라우저에서 지원하지 않고, 또다른 변수와 이름이 충돌 될 수 있기 때문에
    //   주의 해야 한다.
    myli2.style.color ='red';

};

document.querySelector("#tag-name").onclick = function() {
    // 태그명 기준 요소 선택
    // 1. getElementsByTagName : 배열 형태의 데이터 반환
    var liArr = document.getElementsByTagName("li")
    //HTMLCollection이 출력, 이는 생긴 건 배열이나, 배열의 유용한 메서드들은
    //일부만 존재하는 유사 배열이다.
    console.log(liArr);

    // 2. querySelectorAll(태그명선택자) 
    liArr = document.querySelectorAll("li");

    //NodeList도 유사 배열이나, 유용한 메서드들을 지원한다.
    console.log(liArr);
    

    for (let index = 0; index < liArr.length; index++) { 
        console.log(liArr[index]);

        liArr[index].style.color ="rgb(130,220,50)";
        liArr[index].style.backgroundColor="magenta";     
    }

    // 배열의 유용한 메서드1번

    liArr.forEach( (li) => {
        li.style.color = "white";
    });

};


document.querySelector("#class-name").onclick = function(){
    // 클래스 명으로 요소를 선택하는 방법들
    //getElementsByClassName(클래스명);
    var groups = document.getElementsByClassName("group");
    groups = document.querySelectorAll(".group");

    // 버튼을 누를때마다 선택한 요소의 배경색을 바꾸기
    
    for(var i = 0; i < groups.length; i++){
        var li = groups[i];

        var current = li.style.backgroundColor; //getter 함수처럼 사용

        if(current != 'springgreen'){
            li.style.backgroundColor = 'springgreen';
        }else{
            li.style.backgroundColor = 'white';
        }

        
    }
};


document.querySelector("#name-selector").onclick = function(){
    // 체크한 체크박스의 값들을 가져오기.
    var hobbies = document.getElementsByName("hobby");
    hobbies = document.querySelectorAll('input[name=hobby]') // input 태그들 중에 name이 hobby인 것을 가져온다.
    console.log(hobbies);

    for(var i = 0; i< hobbies.length; i++){
        var hobby = hobbies[i];
        console.dir(hobby);
        // 체크 박스의 체크 여부를 관리하는 속성
        if(hobby.checked){
            console.log(hobby.value);
        }

    }
};


document.querySelector("#email-confirm").onclick = function(){

    //id로 접근
    var email = document.getElementById("userEmail"); //document.querySelector("#userEmail") 도 가능
    console.log(email.value);

    // 태그명으로 접근
    var emailArr = document.getElementsByTagName("input"); //document.querySelector("input") 도 가능
    console.log(emailArr[7].value); //직접 찾아 준다.

    var emailName = document.querySelector("input[name=userEmail]");
    console.log(emailName.value);
}