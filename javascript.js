var name;

var age;

var ageOfNextYear;

var ageOfNext10Years;

var isMarried;

if (isMarried) {
  var spouseName;
} else {
  var hasBoyOrGrildFriend;
  if (hasBoyOrGrildFriend) {
    var BoyOrGrildFriendName;
  }
}

var friendList;

var attachArrayElements = function(array) {
  var sum = '';

  //아래 for loop을 활용해 첫 번째 인자로 받은 array에 있는 요소들을 한 칸씩 띄어 하나의 문자열로 만듭니다.
  for (var i = 0; i < '이 곳을 채워넣으세요'; i++) {
    sum += ', ' + array[i];
  }
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

//아래 부분은 고치지 마세요.
var aboutMe = `나의 이름은 ${name}다. 
  올해 나이는 ${age}이다.
  내년에는 ${ageOfNextYear}이고 10년 뒤에는 ${ageOfNext10Years}다.
  현재 결혼은 ${isMarried === true ? '' : isMarried === false ? '안' : '?'}했다.
  나에게는 ${Array.isArray(friendList) ? friendList.length : 0}명의 친구들이 있다.
  그들의 이름은 ${friendNames}(이)다.
  어머니의 성함은 ${parents.mother.name}(이)고 ${parents.mother.birthday}에 태어나셨다.
  아버지의 성함은 ${parents.father.name}(이)고 ${parents.father.birthday}에 태어나셨다.
  `;

document.getElementById('result').innerText = aboutMe;