async function loadSongs() {
  const res = await fetch("songs.json");
  const songs = await res.json();

  const categories = {
    "Trending": document.getElementById("trending"),
    "Latest Releases": document.getElementById("latest"),
    "Afrobeat": document.getElementById("afrobeat"),
    "Hip-hop": document.getElementById("hiphop"),
    "Street Vibes": document.getElementById("street"),
    "Party": document.getElementById("party"),
    "Albums": document.getElementById("albums"),
  };

  songs.forEach(song => {
    const card = document.createElement("div");
    card.className = "song-card";
    card.innerHTML = `
      <img src="${song.cover}">
      <a href="player.html?title=${encodeURIComponent(song.title)}&cover=${encodeURIComponent(song.cover)}&song=${encodeURIComponent(song.url)}">
        <p>${song.title}</p>
      </a>
    `;
    categories[song.category].appendChild(card);
  });
}

loadSongs();
