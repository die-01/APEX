
const form = document.getElementById('contact-form');
const textarea = document.getElementById('message');
const counter = document.getElementById('char-count');

// 1. Gestion du compteur de caractères
textarea.oninput = function () {
    const len = this.value.length;
    counter.textContent = `${len} / 180`;

    if (len >= 180) {
        counter.className = "absolute top-[-16px] right-2 text-[10px] font-bold text-red-500";
    } else {
        counter.className = "absolute top-[-16px] right-2 text-[10px] font-medium text-neutral-400";
    }
};

// 2. Soumission silencieuse à Netlify
form.onsubmit = function (e) {
    e.preventDefault();
    fetch('/', { method: 'POST', body: new FormData(this) })
        .then(() => {
            this.reset();
            document.getElementById('msg-succes').classList.remove('hidden');
        });
};



document.querySelectorAll('img').forEach(img => {
    // Si l'image est déjà chargée (via le cache du navigateur)
    if (img.complete) {
        img.classList.remove('opacity-0');
    } else {
        // Sinon, on attend qu'elle finisse de charger à 100%
        img.addEventListener('load', () => img.classList.remove('opacity-0'));
    }
});