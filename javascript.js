var myName;

var thisYear = '2018';
//위처럼 thisYear을 직접 입력해도 좋지만 2019년이 됐을 때는 어떻게 하죠?
//그래서 그 문제를 해결하기 위해 아래 처럼 프로그래밍으로 처리할 수도 있습니다.
//아직 아래 코드가 이해 안가셔도 괜찮습니다.
// var thisYear = new Date().getFullYear();


var age;

var ageOfNextYear;

var ageOfNext10Years;

var isMarried;

if (isMarried) {
  var spouseName;
} else {
  var hasBoyOrGirlFriend;
  if (hasBoyOrGirlFriend) {
    var BoyOrGirlFriendName;
  }
}

var friendList;



//아래 함수는 for loop을 활용해 함수가 인자로 받은 배열에 있는 요소들을 콤마를 붙인 후 한 칸씩 띄어 하나의 문자열로 만듭니다. 
//예를 들어 ['철수', '영희', '토르'] --> '철수, 영희, 토르'
var attachArrayElements = function(array) {
  var sum;

  for (var i = 0; i < array.length; i++) {
    
  }

  return sum;
};

//위의 attachArrayElements함수를 활용하세요
var friendNames;

var parents = {
  mother: {
    name: null,
    birthday: null
  },
  father: {
    name: null,
    birthday: null
  }
};



// 아래 부분은 고치지 마세요.
var aboutMe = `나의 이름은 ${myName}(이)다. 
  올해는 ${thisYear}년 이고 나의 나이는 ${age}이다.
  내년에는 ${ageOfNextYear}이고 10년 뒤에는 ${ageOfNext10Years}다.
  현재 결혼은 ${isMarried === true ? '' : isMarried === false ? '안' : '?'}했다. 
  ${isMarried === true ? '배우자의 이름은 ' + spouseName + '다.' : ''}
  ${hasBoyOrGirlFriend === true ? '이성친구의 이름은 ' + BoyOrGirlFriendName + '다.' : ''}
  나에게는 ${Array.isArray(friendList) ? friendList.length : 0}명의 친구들이 있다.
  그들의 이름은 ${friendNames}(이)다.
  어머니의 성함은 ${parents.mother.name}(이)고 ${parents.mother.birthday}에 태어나셨다.
  아버지의 성함은 ${parents.father.name}(이)고 ${parents.father.birthday}에 태어나셨다.
  `;

document.getElementById('result').innerText = aboutMe;