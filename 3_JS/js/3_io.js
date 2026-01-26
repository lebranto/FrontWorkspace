confirmBtn.onclick=function(){
    //confirm : 확인/취소버튼을 통해 노리적인 처리를 지원하는 팝업창
    var bool = confirm("정말 삭제하시겠습니까?")
    console.log(bool);
    //확인을 누르면 true 로 바뀜
    if(bool){
        // 파일삭제 로직..
        // alert : 메세지 내용을 출력하는 팝업
        alert("파일을 삭제했습니다.")
    }
}

promptBtn.onclick = function(){
    // prompt : 사용자로부터 문자열 입력을 받을 수 있는 모달

    var name = prompt("당신의 이름은 무엇입니까")
    console.log(name); //값이 있는 경우 그대로, 값이 없는 경우 null

    if(!name){
    // if(name == null || name ==""){
        alert("올바른 이름을 입력하세요")
    }else{
         alert("안녕하세요!! " + name + "님!!")
    }
}