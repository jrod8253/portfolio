document.querySelectorAll('[data-story]').forEach(link => {
  link.addEventListener('click', () => {
    const story = document.getElementById(link.dataset.story);
    if (story) story.open = true;
  });
});
function openLinkedStory() {
  const id = location.hash.slice(1);
  const story = document.getElementById(id);
  if (story?.tagName === 'DETAILS') story.open = true;
}
window.addEventListener('hashchange', openLinkedStory);
openLinkedStory();

// Animate only visible surfaces, and stop work while the tab is hidden.
if ('IntersectionObserver' in window) {
  const motionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList.toggle('motion-visible', entry.isIntersecting));
  }, { threshold: 0.12 });
  document.querySelectorAll('.case, .system, .about, .hero-footer, .toolkit, footer, .stories').forEach(surface => {
    surface.classList.add('motion-ready');
    motionObserver.observe(surface);
  });
}
document.addEventListener('visibilitychange', () => {
  document.documentElement.classList.toggle('motion-paused', document.hidden);
});
