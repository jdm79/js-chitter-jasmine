(function(exports) {
  if(!this.peeps) {
    document.getElementById('loading').innerHTML = "Loading..."
  } 

  const allPeepsUrl = 'https://chitter-backend-api.herokuapp.com/peeps'

  function Chitter() {
    this.peeps = []
  }

  Chitter.prototype.hideLoading = function() {
    document.getElementById('loading').innerHTML = ""
  }

  chitter = new Chitter()
 
  Chitter.prototype.getPeeps = function(allPeepsUrl) {
    fetch(allPeepsUrl)
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
        this.peeps = data
        console.log(this.peeps)
        console.log(data)
        return this.peeps
      })
      
      .catch(error => {
        if (error.status === 404) {
          console.log('error is ', error.status, error)
        }
      })
    }
    
  Chitter.prototype.showPeeps = function() {    
    function createNode(element) {
      return document.createElement(element)
      }

      function append(parent, el) {
        return parent.appendChild(el)
      }

      const ul = document.getElementById('list-items')
      fetch(allPeepsUrl)
      .then((res) => res.json())
      .then(function(data) {
        chitter.hideLoading()

        let peeps = data
        return peeps.map(function(peep) {
          console.log(peep.body)
          let li = createNode('li')
          li.innerHTML = 
          `<div id="peep"> 
            <p>${peep.user.handle}</p>
            <h2>${peep.body}</h2>
          </div>`
          append(ul, li)
        })
      })
      .catch(function(error) {
        if (error.status === 404) {
          console.log('error is ', error.status, error)
        }
      })
    }

  Chitter.prototype.helloWorld = function() {
    console.log("hello world!")
  }

  
  Chitter.prototype.postPeep = function() {
    let content = {"peep": {"user_id":232, "body":"from the app"}};
    // The actual fetch request
      fetch('https://chitter-backend-api.herokuapp.com/peeps/', {
        method: 'post',
        headers: {
        'Authorization': 'Token token=_2a_10_rJfVnPspFO1QAE5y42uIl_',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
      })
    } 

  chitter.showPeeps()

})(this)
