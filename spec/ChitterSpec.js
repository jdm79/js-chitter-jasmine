describe("Chitter", function() {

  it("should be able to show all peeps", function() {
    chitter = new Chitter()
    expect(chitter.showPeeps()).toEqual([])
  })
})
