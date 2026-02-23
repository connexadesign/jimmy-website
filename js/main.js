import { getData } from './data_loader.js';
import { renderDishes, renderReviews, renderGallery } from './ui_renderer.js';

const mobileMenu = document.getElementById('mobileMenu');
const menuBtn = document.getElementById('menuBtn');
const closeMenu = document.getElementById('closeMenu');
const yearSpan = document.getElementById('year');
const dishGrid = document.getElementById('dishGrid');
const reviewsDiv = document.getElementById('reviews');
const galleryGrid = document.getElementById('galleryGrid');

menuBtn.addEventListener('click', () => mobileMenu.classList.remove('hidden'));
closeMenu.addEventListener('click', () => mobileMenu.classList.add('hidden'));
mobileMenu.querySelectorAll('.menu-link').forEach(l => l.addEventListener('click', () => mobileMenu.classList.add('hidden')));

yearSpan.textContent = new Date().getFullYear();

(async () => {
  const data = await getData();
  renderDishes(dishGrid, data.dishes);
  renderReviews(reviewsDiv, data.reviews);
  renderGallery(galleryGrid, data.dishes);

  lucide.createIcons();

  gsap.utils.toArray('section').forEach(sec => {
    gsap.from(sec, { opacity: 0, y: 40, duration: 0.6, scrollTrigger: { trigger: sec, start: 'top 80%' } });
  });
})();
