const BASE_API = "https://yts.mx/api/v2/";

class API {
  async getSuggestions(id) {
    const query = await fetch(
      `${BASE_API}movie_suggestions.json?movie_id=${id}`
    );

    const data = await query.json();
    console.log(data);
    return data.data.movies;
  }

  async getMovies() {
    const query = await fetch(`${BASE_API}list_movies.json`);

    const data = await query.json();
    console.log(data);
    return data.data.movies;
  }
}

export default new API();
