// Supabase config
const SUPABASE_URL = "https://mfsfapytozxxamismrpm.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mc2ZhcHl0b3p4eGFtaXNtcnBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1NDY2NTYsImV4cCI6MjA4MTEyMjY1Nn0.8IJ2RAOoSAiqv9tT9Bfn13G52DMLDvJAPpvT53z5Jiw";

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Admin login
function login() {
    if (
        document.getElementById("email").value === "shereboyofficial1515@gmail.com" &&
        document.getElementById("password").value === "Madamedon15"
    ) {
        alert("Login successful!");
        document.getElementById("panel").style.display = "block";
    } else {
        alert("Incorrect login");
    }
}

// Upload song
async function uploadSong() {
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const cover = document.getElementById("cover").files[0];
    const song = document.getElementById("song").files[0];

    // Upload cover
    const coverPath = `covers/${Date.now()}_${cover.name}`;
    let { data: coverUpload } = await client.storage.from("songs").upload(coverPath, cover);
    const coverURL = `${SUPABASE_URL}/storage/v1/object/public/songs/${coverPath}`;

    // Upload MP3
    const songPath = `songs/${Date.now()}_${song.name}`;
    let { data: songUpload } = await client.storage.from("songs").upload(songPath, song);
    const songURL = `${SUPABASE_URL}/storage/v1/object/public/songs/${songPath}`;

    // Save to songs.json manually
    alert("Upload successful!\nNow edit songs.json and add:\n" + JSON.stringify({
        title,
        category,
        cover: coverURL,
        url: songURL
    }, null, 2));
}
