describe("Chitter", function() {
  beforeEach(function()  {
    chitter = new Chitter();
  })
  
  it("should be able to show all peeps", function() {
    chitter = new Chitter();

    expect(chitter.getPeeps()).toEqual([])
  })

})
