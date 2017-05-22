describe('나의 소개', function() {
  it('age의 데이터 형은 숫자(number)이어야 합니다', function() {
    expect(age).to.be.a('number');
  });
  it('name의 데이터 형은 문자열(string)이어야 합니다', function() {
    expect(string).to.be.a('string');
  });
  it('ageOfNextYear(1년 뒤 나이)은 age보다 1이 커야 합니다', function() {
    expect(ageOfNextYear).to.equal(age + 1);
  });
  it('ageOfNext10Years(10년 뒤 나이)은 age보다 10이 커야 합니다', function() {
    expect(ageOfNextYear).to.equal(age + 1);
  });
  it('isMarried(결혼 했는지)의 데이터 형은 불리언(boolean)이어야 합니다', function() {
    expect(isMarried).to.be.a('boolean');
  });
  if (isMarried === true) {
    it('결혼했다면 spouseName(배우자 이름)의 데이터 형은 문자열(string)이어야 합니다', function() {
      expect(spouseName).to.be.a('string');
    });   
  } else {
    it('결혼 안했다면 hasBoyOrGirlFriend(이성친구 여부)의 데이터 형은 불리언(boolean)이어야 합니다', function() {
      expect(hasBoyOrGirlFriend).to.be.a('string');
    }); 
  }
  if (hasBoyOrGirlFriend) {
    it('이성친구가 있다면 hasBoyOrGirldFriend(이성친구의 이름)의 데이터 형은 문자열(string)이어야 합니다', function() {
      expect(BoyOrGirlFriendName).to.be.a('string');
    });
  }
  it('friendList(친구들 리스트)의 데이터 형은 배열(array)이여야 합니다', function() {
    expect(friendList).to.be.a('array');
  });
  it('friendList(친구들 리스트)는 한명 이상의 친구를 가져야 합니다', function() {
    expect(friendList).to.not.lengthOf(0);
  });  
  it('attachArrayElements(배열의 원소들 붙이기)는 문자열(string)을 반환해야 합니다', function() {
    expect(attachArrayElements(['하', '호'])).to.be.a('string');
  });
  it('friendNames은 friendList(친구들 리스트)에 있는 모든 친구들의 이름을 \', \'로 이어붙인 문자열 이어야 합니다.  ', function() {
    var sum = '';
    for (var i = 0; i < friendList.length; i++) {
      sum += ', ' + friendList[i];
    }    
    expect(friendNames).to.equal(sum);
  });
  for (var key in parents) {
    it('부모님의 성함은 문자열(string)이어야 합니다', function() {
      expect(parents[key].name).to.be.a('string');
    });
  }
  for (var key in parents) {
    it('부모님의 생신은 숫자(number)이어야 합니다', function() {
      expect(parents[key].birthday).to.be.a('number');
    });
  }
});