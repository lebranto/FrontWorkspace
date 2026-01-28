test1.onclick = function(){
    /*
        object
          - {속성명 : 속성값, ...} 으로 구성된 요소를 관리하는 객체를 의미
          - 속성명 : 식별자의 역할을 하며, 보통 문자열로 작성
          - 속성값 : 모든 타입의 값을 저장할 수 있다.
    */

  var obj1 = {
    name : '홍길동' ,
    //''가 보이지 않지만 속성명은 문자열
    age : 33 ,
    married : true,
    hobby : ['축구', '야구'],
    pet : {
        name : '구리구리',
        breed : '말티즈'
    },
    1 : 456,
    'user-name' : 'zzz'
  };

  var odj2 = new Object(); // {} 과 같다
  // 객체 내부 속성(프로퍼티)에 접근하는 방법
  // 1) 점표기법(dot notation)
  odj2.pname = '말린 망고'; // {pname : "말린 망고"}
  odj2.price = 3000; //{pname : ..., price : 3000}
  
  
  // 2) 브래킷표기법(braket notation)
  // - 브래킷 표기법은 속성명을 반드시 문자열 리터럴 혹은
  //   문자열 번수를 제시해야 한다.
  // - for ..in 문을 사용할 때에도 반드시 이 표기법을 사용해야 한다.
  
  odj2['origin'] = '필리핀';
  
  // 속성명에 특수문자나, 띄어쓰기가 포함되어 있다면 대활호 표기법 사용해야 한다
  odj2['ty-pe'] = '피클'

  console.log(odj2)


}

test2.onclick = function(){
    // 자바에서는 class 안에 선언한 함수를 메서드라고 불렀음
    // js 에서는 객체/ 클래스 안에 선언한 함수를 메서드라고 부른다.

    const pet = {
        petName : '코코',
        eat : function(food){
            console.log(this.petName + "가 " + food + "맛있게 먹는다");
            // 메서드에서의 this는 메서드를 호출한 객체의 주소값이 바인딩 pet
            // 익명 함수일 경우에만 된다, 화살표 함수(=람다식) 은 되지 않는다.
            
            // this를 쓰지 않으면 petName is not defined  
            // 지역 변수도 아니고 전역 변수도 아니기 때문
        }
    };

    console.log(pet);
    pet.eat('츄르');
    pet["eat"]('우유')
}

var game; // 전역 변수

test3.onclick = function(){

    game = {
        title : 'diablo4',
        price : 35000,
        lang : ['ko','en','cn'],
        run : function(){
            console.log(this.title + "을 실행합니다")
            // 시작시간 기록
            this['start-time'] = new Date();
        },
        
        shutdown : function(){
            console.log(this.title)
            this['end-time'] = new Date()     
        },

        duration : function(){
            //두시간의 차이를 ms로 반환
            var dur = this['end-time'] - this['start-time'];
            dur = Math.floor(dur/1000/60);
            console.log(dur + "분 동안 게임하셨네요")
        }

    }

    // 객체 반복문 돌리기
    for(var key in game){
        console.log("key : " + key)

        console.log("value : " + game.key)   // 점표기법을 쓰면 undefined가 나온다.  
        console.log("value : " + game[key])  // 브리켓 접근 법에서는 가능
    }

    game.run();
};


test4.onclick = function() {
   game && game.shutdown();
   game && game.duration();

} 


test5.onclick = function(){
    //객체는 생성된 이후, 자유롭게 속성을 "추가"하거나, 삭제할 수 있다.
    var student = {};
    student.name = '홍길동';
    student["class"]='g';
    student.no = 33;

    //객체 내부의 속성을 제거 하고 싶으면?
    delete student.class; // 클래스가 삭제됨

    console.log(student);

}


test6.onclick = function(){
  /*
    toString 메서드 오버라이딩
    - 자사스크립트는 모든 객체가 Object를 상속한다.
    - 즉, Object의 메서드를 사용하거나 재정의 가능하다.
   
  */

    var notebook = {
        title : '오늘의 일기',
        content : '오늘은 붕어빵을 먹었다',
        date : new Date(),
        toString : function(){
            return "{ title : " + this.title + ", content : "+ this.content
            + ", date : " + this.date + "}";
        }
    };

    console.log(notebook + "");
}

test7.onclick = function(){

    /*
     생성자 함수 (es5버전)   => class 와 비슷한 역할을 함
      - 자바스크립트에서 객체지향 프로그래밍을 지원하는 핵심 기능
      - 클래스를 정의하기 위한 요도의 함수로, 생성자 함수로 만든 함수는
        new 연산자와 함께 호출해야 한다.
      - 생성자 함수는 첫 글자를 클래스와 같이 대문자로 작성하는 것이 관례
      - 모든 함수는 보이지 않는 prototype 이라는 속성을 가지고 있으며
        이 속성을 통해 상속 관계를 유지한다.
        
     * prototype
      - 모든 함수가 묵시적으로 가지고 있는 속성으로, 부모 객체를 저장해두는
        저장공간.  

    */

    function Pet(kind, name, breed, weight){
        // {} <- this로 접근
        // 필드부 
        //  - 생성자 함수 내부에서 this는 현재 생성된 주소값을 의미한다.
        this.kind = kind;
        this.name = name;
        this.breed = breed;
        this.weight = weight;

        //메서드부
        this.bark = function(){
            return this.weight >10 ? '멍멍' : '왈왈'
        }


    // // 현재 클래스의 부모 객체에 속성/ 메서드를 추가하는 방법
    // Pet.prototype.bark = function(){
    //     return this.weight >10 ? '멍멍' : '왈왈'
    //    } // 이렇게 하면 bark 가 사라진다.
   
   }
    var coco = new Pet('고양이', '코코', '브리티시 숏헤어','3kg');
    console.log(coco);
    console.log(coco.bark());
}




test8.onclick = function(){

    /*
        javascript의 class 생성 문법(es6)
    */

   class Animal{
        // 생성자 함수를 반드시 써야 한다.
        constructor(kind){
            this.kind=kind;
        }

   }

   // 상속
   class Pet extends Animal{
    
    #hobby;
    // 기본값 public,  private으로 쓰려면 앞에 #을 붙인다.
    constructor(kind, name, breed, weight){
        super(kind);
        this.name = name;
        this.breed = breed;
        this.weight = weight;
    }

    // 메서드부
    // get/setter
    // hobby 속성에 값을 추가하는 메서드 setter
    setHobby(value){
        this.hobby = value;
        //만약 private로 했다면 this.#hobby 라고 써준다.
    }

    getHobby(){
        return this.Hobby;
        //만약 private로 했다면 this.#hobby 라고 써준다.
    }
    
    // 모던 js 의 setter/getter 방식
    // 접근자 프로퍼티 사용
    set hobby(value){
        this.#hobby = value;
    }

    get hobby(){
        return this.#hobby
    }
}
    var cat = new Pet('고양이', '코코', '브숏',3)
    console.log(cat);

    //hobby를 public을 사용시

    // cat.setHobby('츄르 먹기');
    // console.log(cat.getHobby());

    // cat.hobby = '츄르 먹기';
    // console.log(cat.hobby);
    // 위 와 동일한 결과가 나온다.

    //set get 이 필요한 이유
    // private의 값에 접근하기 위해서

    // hobby 를 private로 했을시
    cat.hobby = '낮잠자기';
    console.log(cat.hobby);
    // #hobby 에 값이 입력된다.



}

