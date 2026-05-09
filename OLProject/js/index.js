// Toggle TOC (Sidebar)
document.getElementById('btn-toc').addEventListener('click', function() {
    const toc = document.getElementById('toc-panel');
    this.classList.toggle('active');
    toc.style.display = toc.style.display === 'none' ? 'flex' : 'none';
});

// Toggle Analysis Panel
document.getElementById('btn-analysis').addEventListener('click', function() {
    const panel = document.getElementById('analysis-panel');
    this.classList.toggle('active');
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
});
