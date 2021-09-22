const url = 'https://swapi-api.hbtn.io/api/films/?format=json';
$.get(url, function (data) {
    data.results.map(list => $('UL#list_movies').append('<li> '+list.title+'</li>'));
});
