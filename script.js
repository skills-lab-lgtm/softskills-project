// Scroll animation
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.add('active');
  });
});
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});

// Skill toggle (используется ТОЛЬКО на index.html)
function toggleSkill(card) {
  card.classList.toggle('active');
}

// Language switch — ТОЛЬКО если кнопка существует
const langBtn = document.getElementById('langBtn');

if (langBtn) {
  let currentLang = 'ru';

  langBtn.onclick = () => {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    langBtn.textContent = currentLang === 'ru' ? 'EN' : 'RU';

    document.querySelectorAll('[data-ru]').forEach(el => {
      el.textContent = el.dataset[currentLang];
    });
  };
}

// Chart — ТОЛЬКО если есть canvas
const ctx = document.getElementById('skillsChart');

if (ctx) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Коммуникация', 'Мышление', 'EQ', 'целепологание'],
      datasets: [{
        label: 'Влияние (%)',
        data: [85, 78, 90, 70],
        backgroundColor: '#6a85ff'
      }]
    }
  });
}
