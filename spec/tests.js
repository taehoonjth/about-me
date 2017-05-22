describe('나의 소개', function() {
  it('age의 데이터 형은 숫자(number)이어야 합니다', function() {
    expect(age).to.be.a('number');
  })
  it('name의 데이터 형은 문자열(string)이어야 합니다', function() {
    expect(string).to.be.a('string');
  })
  it('ageOfNextYear(1년 뒤 나이)은 age보다 1이 커야 합니다', function() {
    expect(ageOfNextYear).to.equal(age + 1);
  })
  it('ageOfNext10Years(10년 뒤 나이)은 age보다 10이 커야 합니다', function() {
    expect(ageOfNextYear).to.equal(age + 1);
  })
  it('friendList(친구들 리스트)의 데이터 형은 배열(array)이여야 합니다', function() {
    expect(friendList).to.be.a('array');
  })
  it('friendList(친구들 리스트)는 한명 이상의 친구를 가져야 합니다', function() {
    expect(friendList).to.not.lengthOf(0);
  })  
  it('isMarried(결혼 했는지)의 데이터 형은 불리언(boolean)이어야 합니다', function() {
    expect(isMarried).to.be.a('boolean');
  })
});