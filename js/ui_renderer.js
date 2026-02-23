export function renderDishes(target, dishes) {
  target.innerHTML = dishes.map(d => `
    <div class="bg-neutral-900 rounded-lg overflow-hidden shadow-lg group">
      <img src="${d.image}" alt="${d.name}" class="h-48 w-full object-cover group-hover:scale-105 transition-transform">
      <div class="p-4">
        <h3 class="font-semibold text-lg mb-2">${d.name}</h3>
        <p class="text-sm text-neutral-400">${d.desc}</p>
      </div>
    </div>
  `).join('');
}

export function renderReviews(target, reviews) {
  target.innerHTML = reviews.map(r => `
    <div class="bg-neutral-900 p-6 rounded-lg shadow-md">
      <p class="italic mb-4">“${r.text}”</p>
      <div class="flex items-center justify-center gap-1 text-amber-400">
        ${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}
      </div>
      <p class="mt-2 text-sm text-neutral-400">— ${r.author}</p>
    </div>
  `).join('');
}

export function renderGallery(target, dishes) {
  target.innerHTML = dishes.slice(0, 8).map(d => `
    <img src="${d.image}" alt="${d.name}" class="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform">
  `).join('');
}
