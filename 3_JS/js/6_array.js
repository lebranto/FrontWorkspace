test1.onclick = function(){
    /*
        자바스크립트의 배열은 크기제한이나, 타입제한이 없으며 유용한 메서드들이 존재한다.
        (ArrayList와 비슷)
    */

    var arr1 = []; //권장
    var arr2 = new Array();  // 생성자 생성
    var arr3 = new Array(3); // 크기지정, 초과하면 알아서 사이즈가 늘어남
    
    console.log(arr1 , arr2 , arr3);


    // 값대입

    arr1[0] = 'a';
    arr1[1] = 'b';
    arr1[2] = 'c';


    // 값 가져오기

    console.log(arr1[2]);
    console.log(arr1[100]); // undefined 반환

    // 반복문
    
    for(var i = 0; i< arr1.length; i++){
        console.log(arr1[i])
    }

    // 향상된 반복분
    // 1. for .. in 문
    //  - 객체, 배열 모두 반복이 가능
    //  - 겍체 반복시 i에는 객체의 속성명이 대입 <- 이건 나중에 배우기
    //  - 배열 반복시 i에는 객체의 배열의 인덱스가 대입, 다만 문제가 있어 잘 쓰이지 않는다.

    for(var i in arr1){
        console.log(i , arr1[i]);
    }

    /*
      for .. of 문
       - java의 향상된 반복문과 가장 비슷한 구문으로, 배열 유형의 데이터를
       반복시키기 위해 사용한다.
       - i에는 각 인덱스에 저장된 값이 대입된다.
       - 객체는 반복이 불가능 하다
    */

    for(var item of arr1){
        console.log(item);
    }

}


test2.onclick = function(){
    var arr1 = [1,2,3];
    var arr2 = new Array("철수","영희","김밥");

    var arr3 = [
        1,2,3,
        "안녕", true, {id : "mkm"},['a','b'],
        function(){console.log('zz')}
    ]

    arr3[7]();  // 배열 안에 있는 함수를 실행
}


test3.onclick = function(){
    var arr = ['apple', 'banana', 'pair', 'apple', 'grape'];
    console.log(arr.indexOf('apple')); // 0
    console.log(arr.lastIndexOf('apple'));  // 3
    console.log(arr.indexOf('mango'));  // -1 배열의 기본값

}

test4.onclick = function(){
    var arr1 = ['a','b','c'];
    var arr2 = [1,2,3,4,5];

    var newArr = arr1.concat(arr2);
    console.log(newArr);
    console.log(arr1); // 그대로다
}


test5.onclick = function(){
    // join : 배열 내부의 요소를 하나로 뭉친 문자열 리턴
    var arr = [1,2,3,4,5];
    var str = arr.join(); // 기본적으로 , 를 구분자로 쓴다.
    console.log(str);

    var str2 = arr.join(""); // 구분자를 제시할 수 있다.
    console.log(str2); 
}

test6.onclick = function(){
    var arr = [1,2,3,4,5];
    arr.reverse(); // 원본 배열의 정렬 순서를 변경
    console.log(arr);

}

test7.onclick = function(){
    var arr = [4,3,2,5,1];
    console.log(arr.sort()); // 원본 배열을 정렬

    // 내림차순 정렬
    // 정렬기준을 "함수"로 만든다.
    arr.sort(function(a, b){
        return b-a; // a-b는 오름차순, 다만 오름 차순은 기본이라 쓸일은 없다
    });
    console.log(arr);

    //문자열 정렬 : 오름차순
    var names = ["홍길동","김길동","라마단","다나가"]
    console.log(names.sort());

    names.sort(function(a,b){ //문자열 끼리 대소 비교할 수 있는 걸 이용
        if(a>b) return -1;   
        if(a<b) return 1;
        // 오름 차순은 -1과 1의 자리를 바꾼다. 오름 차순은 기본값.
        return 0;
    });

    console.log(names);

    //sort 메서드의 기본정렬은 "문자열 기준" 정렬
    // 문자열 기준은 첫번째 자리를 먼저 보고 똑같은으면 다음자리로 넘어가는 형식 
    arr =[1,2,15];
    console.log(arr.sort()); //1, 15 ,2
    // "2" > "15"   true

    console.log(arr.sort(function(a,b){
        return a-b
    }));
}

test8.onclick = function(){
    //push : 배열의 마지막에 요소를 추가한 후 , 변경된 길이를 반환
    //pop : 배열의 마지막 요소를 제거한 후 , 제거된 요소를 반환

    var arr = [];
    arr.push(1);
    arr.push(2);
    arr.push(3);
    console.log(arr);
    // 컬렉션의 add 메서드와 비슷

    console.log(arr.pop()); //3출력 배열에서 제거
    console.log(arr.pop()); 
    console.log(arr);

};

test9.onclick = function(){
    //unshift : 배열의 0번 인덱스의 요소 추가후, 변경된 길이 반환
    //shife : 배열의 0번 인덱스의 요소 제거후, 제거된 요소를 반환

    var arr = ['사과','배','뀰'];
    arr.unshift('감자');
    arr.unshift('양파');
    console.log(arr);

    console.log(arr.shift()); // 양파 출력, 배열에서 삭제된다.

}

test10.onclick = function(){
    /*
        slice(start, ena)
         -start 인텍스 부터 end 인덱스 까지의 요소를 가져와서 새배열 반환
    */

         var arr = ['a','b','c','d','e']
         // b,c,d, 만 추출

         var other = arr.slice(1,4);
         console.log(other); 
         console.log(arr); // 배열은 대로
}




test11.onclick = function(){
    /*
    
     splice(start, deleteCount, [추가할 요소1, 2 ...] )
       - 중간 위치에 요소를 추가하거나 삭제하는 메서드
       - start 인덱스 부터, deleteCount개의 요소를 제거하고,
         추가할 요소들을 추가한다.
       - 배열이 변경 된다.
    
    */
    
     var arr =['a','b','c','d','e'];
     
     //a x y c d e
     arr.splice(1 , 1, 'x','y')
     console.log(arr);
     
     // a x k h e
     arr.splice(2 ,3 , 'k','h')
     console.log(arr);
     
     // a x f r i k h e
     arr.splice(2,0 ,'f','r','i')
     console.log(arr);
    
     // a b
     arr.splice(1,7,'b')
     console.log(arr);
    }


    test12.onclick = function(){
    /* 
     prompt를 이용해 사용자의 취미리스트를 입력받으세요.
     * 예) 농구,수영,캠핑,낚시
     * ,구분자로 잘라서 배열로 담은후,
     * 사전순 정렬이후, ul#hobby-list의 자식li태그로 추가하세요
     */

      var list = document.querySelector("#hobby-list")
      var hobby = prompt("취미를 입력해 주세요");
     
      
      var arr = hobby.split(',').sort()          
      
      var result = ""
      for(var hobbies of arr){
          result += "<li>"+ hobbies +"</li>"
        }
        
      list.innerHTML = result;
    }


     test13.onclick = function(){
       /*
          forEach(function(value, [index],[배열]){   매개변수 2개 반환값x
                실행할 구문 
          })     
       */

        var arr = [1,2,3,4,5];
        var sum = 0;

        arr.forEach((num, index, arr2)=>{
            console.log(num, index, arr2);
            sum += num
            // 자바에서는 람다식을 쓰면 지역변수를 쓰면 final로 되기 떄문에
            // 누적식을 쓸 수 없다.
        });

        console.log(sum)

        //forEach에서는 유사배열도 사용 가능 HTMLCollect, NodeList
        var btnArr = document.querySelectorAll("input[type=button]") // NodeList로 반환

        var btnValues =[];
        btnArr.forEach(function(btn){  //메서드 내부에서 메서드에 의해 실행하는 함수 call back 함수 라고 한다.
            btnValues.push(btn.value);
        });
        console.log(btnValues);
     }


     test14.onclick = function(){
        /*
        array 에서만 사용 가능한 함수
        find : 배열에서 내가 지정한 조건을 만족하는 1개의 요소 반환
        filter : 배열에서 내가 지정한 조건을 만족하는 n개의 요소를 담은 배열 반환      
        map : 배열 안의 데이터를 내가 원하는 요소로 변경시켜 반환 
        */ 

        var objArr = [
            {id: 'gurwn', name: '혁주'},
            {id: 'gurwn2', name: '혁주2'},
            {id: 'gurwn3', name: '혁주3'},
            {id: 'gurwn4', name: '혁주4'}
        ];

        var findOne = objArr.find(function(obj){
            if(obj.id == 'rnjsgurwn'){
                return true;
            }
        })

        // 존재하지 않으면 undefined 반환
        console.log(findOne)


        var filteredArray = objArr.filter(function(obj){
            if(obj.id.includes('gurwn')){
                return true;
            }
        })

        console.log(filteredArray);


        var mappedArray = objArr.map(function(odj){
            return odj.name;
        })

        console.log(mappedArray); // name 부분만 빼서 배열로 만듬, 기존 배열은 영향 X

    }

    test15.onclick = function(){
     /**
     * 1) 배열 drink에 #drink태그의 자식li태그 텍스트를 추가. (forEach활용)
     * ['coke', 'juice', 'coffee', 'beer', 'wine']
     * 2) 배열 drink에서 'ff'가 들어가는 요소를 선택해서 findOne 반환. (find 활용)
     *  coffee
     * 3) 배열 drink에서  'o'가 들어가는 요소들을 선택해서 filteredArr 반환. (filter활용)
     * ['coke','coffee']
     * 4) 배열 drink를 활용하여 음료객체 배열을 생성 한후 mappedDrink에 반환(map 활용)     *
     * [{"menu": "coke","price": 2000},{"menu": "juice","price": 1600},{"menu": "coffee","price": 4000},
     *  {"menu": "beer","price": 8000},{"menu": "wine","price": 15000}]
     */


        //forEach
      var drink = [];
       var a = document.querySelectorAll('#drink>li')
       a.forEach(function (){
        drink.push(li.textContent)
       })
       
       //find
      var findOne = drink.find(function(d){
        if (d.includes(ff)){
            return true
        }
        console.log(findOne);
      });

      //filter
      var filteredArr =drink.filter(function(d){
        return d.includes("o");
      });

      var priceArr = [2000, 1600, 4000, 8000, 15000];
      var mappedDrink = drink.map(function(d, index){ // 인덱스 위치에 있는 것이 가격

         return {menu : d, price : priceArr[i]};

      })

    var a = document.querySelectorAll('li')
       
   

    //   drink.forEach(function(son){
    //     drinkes += son.value;
    //   });


    }

