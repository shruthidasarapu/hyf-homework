async function logBadMovies() {
    try {
const response =  await fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
const arrayOfMovies  =  await  response.json();
const badMovies = arrayOfMovies.filter((movie) => (movie.rating < 5));
 console.log(badMovies);  
const badMovies2000 = badMovies.filter((movies) => movies.year >= 2000);
 console.log(badMovies2000);
    }
    catch(error) {
     alert (error)
    }
}
logBadMovies();