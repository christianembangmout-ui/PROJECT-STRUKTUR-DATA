class Film {
  constructor(judul, genre, durasi, sutradara, rating_usia, rating) {
    this.judul = judul;
    this.genre = genre;
    this.durasi = durasi;
    this.sutradara = sutradara;
    this.rating_usia = rating_usia;
    this.rating = rating;
  }

  tampilkanInfo() {
    return `
      <div>
        <strong>${this.judul}</strong> <br>
        Genre: ${this.genre} <br>
        Durasi: ${this.durasi} <br>
        Sutradara: ${this.sutradara} <br>
        Rating Usia: ${this.rating_usia}+ <br>
        Rating: ${this.rating}/10 <br>
        <hr>
      </div>
    `;
  }
}

//Daftar film
const daftarFilm = [
  new Film("The Conjuring: Last Rites", "Mystery, Horror, Thriller", "2 jam 15 menit","Michael Chaves", 17, 9.2),
    new Film("Merah Putih: One For All", "Dokumenter, Horror, Thriller", "1 Hari","Lina Mukherjee", 21, 10.0),
    new Film("The Little Mermaid", "Adventure, Family, Fantasy", "2 jam 15 menit","Rob Marshall", 13, 8.5),
    new Film("Insidious: The Red Door", "Horror, Mystery, Thriller", "1 jam 45 menit","Patrick Wilson", 17, 7.8),
    new Film("Guardians of the Galaxy Vol. 3", "Action, Adventure, Comedy", "2 jam 30 menit","James Gunn", 13, 8.9),
    new Film("John Wick: Chapter 4", "Action, Crime, Thriller", "2 jam 49 menit","Chad Stahelski", 17, 9.1),
    new Film("Avatar 2", "Action, Adventure, Fantasy", "3 jam 12 menit","James Cameron", 13, 9.5),
    new Film("Black Panther: Wakanda Forever", "Action, Adventure, Drama", "2 jam 41 menit","Ryan Coogler", 13, 8.7),
    new Film("The Flash", "Action, Adventure, Sci-Fi", "2 jam 20 menit","Andy Muschietti", 13, 8.3),
    new Film("Mission: Impossible – Dead Reckoning Part One", "Action, Adventure, Thriller", "2 jam 50 menit","Christopher McQuarrie", 13, 9.0),
    new Film("Dune: Part Two", "Adventure, Drama, Sci-Fi", "2 jam 35 menit","Denis Villeneuve", 13, 8.8),
    new Film("Wonka", "Adventure, Comedy, Family", "2 jam 10 menit","Paul King", 7, 8.0),
    new Film("The Marvels", "Action, Adventure, Fantasy", "2 jam 15 menit","Nia DaCosta", 13, 8.4),
    new Film("Aquaman and the Lost Kingdom", "Action, Adventure, Fantasy", "2 jam 30 menit","James Wan", 13, 8.6),
    new Film("Shazam! Fury of the Gods", "Action, Adventure, Comedy", "2 jam 10 menit","David F. Sandberg", 13, 7.9),

    ];

//Masukkan ke HTML
const filmListDiv = document.getElementById("film-list");
daftarFilm.forEach(film => {
  filmListDiv.innerHTML += film.tampilkanInfo();
})