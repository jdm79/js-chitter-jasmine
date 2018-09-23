# Front-end Chitter Challenge

### The Stack

* JavaScript
* HTML
* CSS
* Bootstrap
* External API (Makers Chitter)
* Jasmine test suite


### Sending Requests to the API

Whenever we send or retrieve information with JavaScript, we initiate an Ajax call. Ajax is a technique to send and retrieve information behind the scenes without needing to refresh the page. In this project we're using Ajax calls using the Fetch API, replacing the more complicated XMLHttpRequest. Fetch is now supported by most current browsers. Fetch uses promises, thereby avoiding multiple nested callbacks. For those browsers that may not support Fetch (some older implementations of IE, perhaps), we can use a [Fetch polyfill](https://github.com/github/fetch "Fetch polyfill"). 


### First Steps

I started off by adding the following code in a script tag directly on the index.html: 

``` javascript
fetch(https://chitter-backend-api.herokuapp.com/peeps)
  .then(res => { console.log(res) })
```

This was successful in terms of getting a 200 response from the API, but there was no sign of the JSON data I so desperately sought. 

This was because Fetch returns a promise and, in this case, it's returning data in JSON format. So we call the .json method on the response ('res' in my example) in order to convert the data. This returns another promise which we can then grab the data from using another .then call:

``` javascript
fetch("https://chitter-backend-api.herokuapp.com/users")
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
```

This works! I now have access to all 234 (as of Saturday) users from the Chitter API. 


### Resources I found helpful during the project

* https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
* https://css-tricks.com/using-fetch/
* https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data

