   document.addEventListener('DOMContentLoaded', function () {
            const galleryImages = document.querySelectorAll('.gallery-image');

            galleryImages.forEach(img => {
                img.addEventListener('click', function () {
                    const modalImage = document.getElementById('modalImage');
                    modalImage.src = this.src;
                    const myModal = new bootstrap.Modal(document.getElementById('imageModal'));
                    myModal.show();
                });
            });
        });