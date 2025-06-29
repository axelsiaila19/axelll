// Dark/Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = 'Dark Mode';
    localStorage.setItem('theme', 'light');
  }
});

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = 'Light Mode';
}

// Profile image animation
const profileImage = document.getElementById('profileImage');
profileImage.addEventListener('mouseenter', () => {
  profileImage.style.transform = 'scale(1.1) rotate(5deg)';
});

profileImage.addEventListener('mouseleave', () => {
  profileImage.style.transform = 'scale(1) rotate(0deg)';
});

// Hobby items animation
const hobbyItems = document.querySelectorAll('.hobi-item');
hobbyItems.forEach(item => {
  item.addEventListener('click', () => {
    // Reset all items first
    hobbyItems.forEach(i => {
      i.style.backgroundColor = '#3498db';
      i.style.transform = 'scale(1)';
    });
    
    // Highlight clicked item
    item.style.backgroundColor = '#e74c3c';
    item.style.transform = 'scale(1.05)';
    
    // Show alert with hobby
    alert(`Hobi Anda: ${item.textContent}`);
  });
});

// Contact info animation
const contactItems = document.querySelectorAll('.contact p');
contactItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'translateX(5px)';
  });
  
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'translateX(0)';
  });
});

// Typewriter effect for hero text
const heroTitle = document.querySelector('.hero h1');
const originalText = heroTitle.textContent;
heroTitle.textContent = '';

let i = 0;
const typeWriter = () => {
  if (i < originalText.length) {
    heroTitle.textContent += originalText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
};

// Start typing after 0.5 seconds
setTimeout(typeWriter, 500);

// Form Handling
const biodataForm = document.getElementById('biodataForm');
const aboutText = document.getElementById('aboutText');
const heroName = document.querySelector('.hero h1');
const heroProdi = document.querySelector('.hero p');

biodataForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const nama = document.getElementById('nama').value;
  const prodi = document.getElementById('prodi').value;
  const deskripsi = document.getElementById('deskripsi').value;
  
  if (nama) heroName.textContent = `Halo, Saya ${nama}`;
  if (prodi) heroProdi.textContent = prodi;
  if (deskripsi) aboutText.textContent = deskripsi;
  
  // Reset form
  biodataForm.reset();
  
  // Show success message
  alert('Biodata berhasil diperbarui!');
  
  // Scroll to about section
  document.getElementById('aboutSection').scrollIntoView({ behavior: 'smooth' });
});

// Load saved data if available
window.addEventListener('DOMContentLoaded', () => {
  const savedName = localStorage.getItem('biodata_nama');
  const savedProdi = localStorage.getItem('biodata_prodi');
  const savedDeskripsi = localStorage.getItem('biodata_deskripsi');
  
  if (savedName) {
    heroName.textContent = `Halo, Saya ${savedName}`;
    document.getElementById('nama').value = savedName;
  }
  
  if (savedProdi) {
    heroProdi.textContent = savedProdi;
    document.getElementById('prodi').value = savedProdi;
  }
  
  if (savedDeskripsi) {
    aboutText.textContent = savedDeskripsi;
    document.getElementById('deskripsi').value = savedDeskripsi;
  }
});