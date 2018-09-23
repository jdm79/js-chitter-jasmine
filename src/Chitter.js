(function(exports) {
  function Chitter() {
    this.peeps = []
  }
  chitter = new Chitter()

  
  Chitter.prototype.getPeeps = function() {
    fetch('https://chitter-backend-api.herokuapp.com/peeps')
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject({
            status: res.status,
            statusText: res.statusText
          })
        }
      })
      .then(data => {
        console.log(data)
        this.peeps = data
        return this.peeps
      })
      .catch(error => {
        if (error.status === 404) {
          console.log('error is ', error.status, error)
        }
      })
    }
  
  Chitter.prototype.showPeeps = function() {
    Chitter.getPeeps()
    console.log("this is the showPeeps function", this.peeps)
    }
  
  Chitter.prototype.showIndividualPeep = function() {
    document.getElementById('test').innerHTML = 
        `<li>${data[0].body}<p>by ${data[0].id}</p></li>
        `
    }    
})(this)
