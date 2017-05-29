var myName = '김철수';

var thisYear = 2017;

var age = 25;

var ageOfNextYear = age + 1;

var ageOfNext10Years = age + 10;

var isMarried = false;

if (isMarried) {
  var spouseName;
} else {
  var hasBoyOrGirlFriend = false;
  if (hasBoyOrGirlFriend) {
    var BoyOrGirlFriendName;
  }
}

var friendList = ['영희', '순이', '촬스', '경식'];

var attachArrayElements = function(array) {
  var sum = '';

  //아래 for loop을 활용해 첫 번째 인자로 받은 array에 있는 요소들을 한 칸씩 띄어 하나의 문자열로 만듭니다.
  for (var i = 0; i < array.length; i++) {
    sum += ', ' + array[i];
  }

  return sum;
};

//위의 attachArrayElements함수를 활용하세요
var friendNames = attachArrayElements(friendList);

var parents = {
  mother: {
    name: '김갑자',
    birthday: '1965.12.11'
  },
  father: {
    name: '김순자',
    birthday: '1968.10.15'
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