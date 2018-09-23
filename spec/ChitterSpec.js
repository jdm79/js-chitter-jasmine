'use strict';

describe('Chitter', function() {
  var chitter

  beforeEach(function() {
    chitter = new Chitter();
  });

  it('should show all peeps', function() {
    expect(chitter.showPeeps()).toEqual([])
  })

  it('can post a peep', function() {
    expect(chitter.postPeep()).toEqual("hello world!")
  })
})
