$(document).ready(function(){
  $("#funny-bone").on("click", getLaugh)
}) 


const getLaugh = () => {
  let headers = new Headers({ 'Accept': 'application/json'})
  let request = new Request( 'https://icanhazdadjoke.com/', {headers: headers});
  fetch(request)
    .then(function(response) {
      return response.json();
    })
    .then(function(jokeJson){
      
      putJokeOnPage(jokeJson)
  });
}

const putJokeOnPage = (jokeJson) => {

  $("#actual-joke").html(jokeJson.joke)
}