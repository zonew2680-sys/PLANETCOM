        // Gestion du formulaire
        const form = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');
        const successMessage = document.getElementById('successMessage');
        const errorMessage = document.getElementById('errorMessage');

        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Envoi en cours...';
            
            // Masquer les messages précédents
            successMessage.classList.remove('show');
            errorMessage.classList.remove('show');
            
            const formData = new FormData(form);
            
            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });
                
                const data = await response.json();
                
                if (data.success) {
                    successMessage.classList.add('show');
                    form.reset();
                    
                    // Masquer le message après 5 secondes
                    setTimeout(() => {
                        successMessage.classList.remove('show');
                    }, 5000);
                } else {
                    errorMessage.classList.add('show');
                    
                    setTimeout(() => {
                        errorMessage.classList.remove('show');
                    }, 5000);
                }
            } catch (error) {
                errorMessage.classList.add('show');
                
                setTimeout(() => {
                    errorMessage.classList.remove('show');
                }, 5000);
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Envoyer le message';
            }
        });

        // Animation des champs au focus
        document.querySelectorAll('input, textarea, select').forEach(field => {
            field.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
            });
            
            field.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });
        });