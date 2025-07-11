document.addEventListener('DOMContentLoaded', () => {
    const readMoreLinks = document.querySelectorAll('.read-more');
    const blogContentDiv = document.getElementById('blog-content');
    const fullBlogSection = document.getElementById('full-blog-section');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const blogId = link.getAttribute('data-blog-id');
            const blogUrl = `blog/${blogId}.html`;

            // Fetch blog content
            fetch(blogUrl)
                .then(response => {
                    if (!response.ok) throw new Error('Blog post not found');
                    return response.text();
                })
                .then(data => {
                    // Update content and show section
                    blogContentDiv.innerHTML = data;
                    fullBlogSection.classList.remove('hidden');
                    // Scroll to the full blog section
                    fullBlogSection.scrollIntoView({ behavior: 'smooth' });
                })
                .catch(error => {
                    blogContentDiv.innerHTML = '<p class="text-red-600">Error loading blog post. Please try again later.</p>';
                    fullBlogSection.classList.remove('hidden');
                    fullBlogSection.scrollIntoView({ behavior: 'smooth' });
                });
        });
    });
});