function trackMovies() {
    let movies = [];
    let numMovies = parseInt(prompt("How many movies do you want to rate?"));

    for (let i = 0; i < numMovies; i++) {
        let title = prompt("Enter movie title:");
        let rating = parseInt(prompt("Enter movie rating (1-5):"));

        movies.push({ title: title, rating: rating });
    }

    movies.sort((a, b) => b.rating - a.rating);
    let highestRatedMovie = movies[0];

    console.log("Sorted Movies by Rating:", movies);
    console.log("Highest Rated Movie:", highestRatedMovie);

    document.getElementById("result").innerHTML = `
        Sorted Movies: ${JSON.stringify(movies)}<br>
        Highest Rated Movie: ${highestRatedMovie.title} with a rating of ${highestRatedMovie.rating}
    `;
}
