<script>
  // পেজ লোডে সিস্টেম পছন্দ অনুযায়ী dark ক্লাস সেট
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
  }

  // Toggle বাটন আইডি দিয়ে খোঁজা
  const toggleBtn = document.getElementById('darkModeToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
    });
  }
</script>