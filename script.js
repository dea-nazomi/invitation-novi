// Countdown Timer 
function startCountdown() {
    const eventDate = new Date("2024-12-25T00:00:00").getTime();

    // Fungsi yang akan berjalan setiap detik
    setInterval(function () {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            document.querySelector('.countdown-timer').innerHTML = "Pernikahan sudah dimulai!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("dayValue").innerHTML = days;
        document.getElementById("hourValue").innerHTML = hours;
        document.getElementById("minuteValue").innerHTML = minutes;
        document.getElementById("secondValue").innerHTML = seconds;
    }, 1000);
}

document.addEventListener("DOMContentLoaded", startCountdown);

// Function to play nasheed and scroll the entire page
function openInvitation() {
    const nasheedAudio = document.getElementById("nasheedAudio");

    // Cek apakah audio sudah diputar sebelumnya atau tidak
    if (nasheedAudio.paused) {
        // Coba untuk memutar audio
        nasheedAudio.play().then(() => {
            console.log("Audio dimulai");
            // Mulai scroll keseluruhan halaman setelah audio diputar
            startAutoScroll();
        }).catch(error => {
            console.error("Gagal memutar audio:", error);
            alert("Permintaan autoplay ditolak. Silakan izinkan audio untuk melanjutkan.");
        });
    } else {
        // Jika audio sudah diputar sebelumnya, langsung mulai scroll
        startAutoScroll();
    }
}

// Function to initiate the auto scroll of the entire page
function startAutoScroll() {
    const pageHeight = document.documentElement.scrollHeight;
    let currentScrollPosition = window.scrollY;

    // Kecepatan scroll yang lebih tinggi (misalnya 1px per frame)
    const scrollSpeed = 1;  // Meningkatkan kecepatan scroll

    // Scroll menggunakan requestAnimationFrame untuk animasi yang lebih halus
    function scrollStep() {
        // Hitung berapa banyak scroll yang perlu ditambahkan
        const targetScrollPosition = Math.min(currentScrollPosition + scrollSpeed, pageHeight);
        currentScrollPosition = targetScrollPosition;

        // Melakukan scroll ke posisi baru tanpa "smooth"
        window.scrollTo(currentScrollPosition, currentScrollPosition);

        // Jika belum mencapai bagian bawah, lanjutkan scroll
        if (currentScrollPosition < pageHeight) {
            requestAnimationFrame(scrollStep);
        }
    }

    // Mulai proses scroll
    requestAnimationFrame(scrollStep);
}


// Open map functionality
function openMap() {
    window.open("https://www.google.com/maps?q=aryaduta+hotel+pekanbaru", "_blank");
}

// RSVP form submission
const rsvpForm = document.getElementById('rsvp-form');
rsvpForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const attendance = document.getElementById('attendance').value;

    const messageContainer = document.querySelector('.messages');
    const newMessage = document.createElement('div');
    newMessage.classList.add('message');
    newMessage.innerHTML = `<p><strong>${name}:</strong> ${message} (${attendance})</p>`;
    messageContainer.appendChild(newMessage);

    rsvpForm.reset();
});

// Function to copy text (example for rekening number)
function copyToClipboard(elementId) {
    var text = document.getElementById(elementId).innerText; // Ambil teks dari p
    var tempInput = document.createElement('input'); // Buat elemen input sementara
    document.body.appendChild(tempInput); // Tempelkan ke body
    tempInput.value = text; // Masukkan teks ke input
    tempInput.select(); // Pilih teks
    document.execCommand('copy'); // Salin teks
    document.body.removeChild(tempInput); // Hapus input sementara

    // Memberikan feedback kepada pengguna
    alert('Nomor rekening telah disalin!');
}

// Event listener untuk tombol "Next" manual scroll
document.getElementById("nextButton").addEventListener("click", () => {
    scrollToNextPage(); // Scroll ke halaman berikutnya saat tombol "Next" diklik
});

// Function to scroll the entire page smoothly to the next page
function scrollToNextPage() {
    // Dapatkan tinggi dari halaman
    const pageHeight = document.documentElement.scrollHeight;
    const currentScrollPosition = window.scrollY;
    let targetScrollPosition = currentScrollPosition + window.innerHeight;

    // Pastikan tidak melampaui bagian bawah halaman
    if (targetScrollPosition >= pageHeight) {
        targetScrollPosition = pageHeight;
    }

    // Scroll secara bertahap
    window.scrollTo({
        top: targetScrollPosition,
        behavior: "smooth"
    });
}
    function openMap() {
      window.open('https://goo.gl/maps/example', '_blank');
    }

    function joinLive() {
      window.open('https://www.instagram.com', '_blank');
    }
