 document.addEventListener('DOMContentLoaded', function() {
            const toggleBtn = document.getElementById('toggleMenuBtn');
            const hiddenMenuItems = document.querySelectorAll('.menu-item.hidden');
            let isExpanded = false;

            toggleBtn.addEventListener('click', function() {
                if (!isExpanded) {
                    // Tampilkan semua menu
                    hiddenMenuItems.forEach(item => {
                        item.classList.remove('hidden');
                        // Tambahkan animasi fade in
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        
                        setTimeout(() => {
                            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 100);
                    });
                    
                    toggleBtn.textContent = 'Lihat Sedikit';
                    isExpanded = true;
                
                } else {
                    // Sembunyikan menu tambahan
                    hiddenMenuItems.forEach(item => {
                        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(-20px)';
                        
                        setTimeout(() => {
                            item.classList.add('hidden');
                            item.style.removeProperty('opacity');
                            item.style.removeProperty('transform');
                            item.style.removeProperty('transition');
                        }, 300);
                    });
                    
                    toggleBtn.textContent = 'Lihat Semua';
                    isExpanded = false;
                    
                    // Scroll ke section menu
                    document.getElementById('menu').scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });