(function(exports) {

  const allPeepsUrl = 'https://chitter-backend-api.herokuapp.com/peeps'

  function Chitter() {
    this.peeps = []
  }
  this.chitter = new Chitter()
 

  
  Chitter.prototype.getPeeps = function(allPeepsUrl) {
    fetch()
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
        let peeps = data
        return peeps.map(function(peep) {
          console.log(peep.body)
          let li = createNode('li')
          li.innerHTML = `a peep ${peep.body}`
          append(ul, li)
        })
      })
      .catch(function(error) {
        console.log(error)
      })
    }
  
  Chitter.prototype.showIndividualPeep = function() {
    }    

  chitter.getPeeps()
  chitter.showPeeps()

})(this)
