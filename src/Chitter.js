function Chitter() {
  this.peeps = []
}

Chitter.prototype.getPeeps = function() {
  fetch('https://chitter-backend-api.herokuapp.com/peeps')
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject('something went wrong!')
      }
    })
    .then(data => {
      console.log('data is', data)
      this.peeps = data
      return this.peeps
    })
    .catch(error => console.log('error is', error))
  }
}


Chitter.prototype.showPeeps = function() {
  var elem = document.getElementById('test')
  elem.innerHTML = "hello world"
}


  // let content = {"peep": {"user_id":232, "body":"anthony joshua woz here"}};

    // // The actual fetch request
    // fetch('https://chitter-backend-api.herokuapp.com/peeps/', {
    //   method: 'put',
    //   headers: {
    //     'Authorization': 'Token token=_2a_10_rJfVnPspFO1QAE5y42uIl_',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(content)
    // })
