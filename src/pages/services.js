export function initServicesPage() {

        // Interactive Service Grid Category Filtering
        function initPage() {
            const filterBtns = document.querySelectorAll('.btn-service-filter');
            const serviceItems = document.querySelectorAll('.service-item');

            filterBtns.forEach(function (btn) {
                btn.addEventListener('click', function () {
                    const filter = this.getAttribute('data-filter');

                    filterBtns.forEach(function (b) { b.classList.remove('active'); });
                    this.classList.add('active');

                    serviceItems.forEach(function (item) {
                        const categories = (item.getAttribute('data-category') || '').split(' ');
                        const match = filter === 'all' || categories.includes(filter);

                        if (match) {
                            item.classList.remove('is-hidden');
                            item.style.opacity = '0';
                            item.style.transform = 'translateY(10px)';
                            setTimeout(function () {
                                item.style.opacity = '1';
                                item.style.transform = 'translateY(0)';
                            }, 30);
                        } else {
                            item.style.opacity = '0';
                            item.style.transform = 'translateY(10px)';
                            setTimeout(function () {
                                item.classList.add('is-hidden');
                            }, 200);
                        }
                    });
                });
            });
        }
  if (typeof document !== "undefined") initPage();
}
