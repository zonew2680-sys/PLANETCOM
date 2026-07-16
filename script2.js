// Données pour chaque service
        const servicesData = {
            'telecom': {
                title: 'Domaine des Telecoms',
                subtitle: 'Notre expertise s\'étend dans la sous-région ouest-africaine avec des projets de grandes tailles réalisés.',
                intro: 'PlanetCom est spécialisée dans les solutions télécommunications complètes, de la planification à la mise en œuvre.',
                heroImage: 'images/imagedelaterre.png',
                sectors: [
                    {
                        icon: '📡',
                        title: 'Ingénierie',
                        items: [
                            'Élaboration de design',
                            'Planification des fréquences',
                            'Dimensionnement de réseaux 2G, 3G & 4G',
                            'APD - Audit - Étude de Charge'
                        ]
                    },
                    {
                        icon: '📶',
                        title: 'Drive Test et Optimisation',
                        items: [
                            'Optimisation des réseaux',
                            'Suivi et analyse QoS',
                            'Audit de la qualité et des performances',
                            'Benchmarking des réseaux 2G/3G/4G (TEMS & NEMO)'
                        ]
                    },
                    {
                        icon: '🛜',
                        title: 'Réseaux Fibre Optique',
                        items: [
                            'Architecture de réseau',
                            'Planning & Conception détaillée',
                            'Autorisations & Logistique',
                            'Génie Civil - Mise en Service / Last Mile'
                        ]
                    }
                ],
                
            },
            'genie-civil': {
                title: 'Domaine du Génie Civil et de l\'Energie',
                subtitle: 'Notre expertise s\'étend dans la sous-région ouest-africaine avec des projets de grandes tailles réalisés.',
                intro: 'Nous opérons dans les secteurs suivants avec une expertise reconnue en construction et énergie.',
                heroImage: 'images/genie.jpg',
                sectors: [
                    {
                        icon: '⚙️',
                        title: 'Ingénierie',
                        items: [
                            'APD - Audit - Étude de Charge',
                            'Études techniques détaillées',
                            'Conception et planification'
                        ]
                    },
                    {
                        icon: '🏗️',
                        title: 'Construction',
                        items: [
                            'Chambres - Pylônes - Abris',
                            'Dalles Opérateurs',
                            'Construction de sites clé en main',
                            'Aménagement de sites COLOC'
                        ]
                    },
                    {
                        icon: '⚡',
                        title: 'Energie',
                        items: [
                            'Audit et Dimensionnement',
                            'Fourniture, Installation et Maintenance de Panneaux',
                            'Installation et maintenance de Groupe Électrogène',
                            'Installation de TGBT et matériels électriques',
                            'Construction de sites solaires'
                        ]
                    }
                ],

            },
            'agent-commercial': {
                title: 'Services d\'Agent Commercial',
                subtitle: 'PlanetCom peut devenir une extension de votre département commercial.',
                intro: 'Nous offrons des services commerciaux complets pour accompagner nos clients dans leur développement.',
                heroImage: 'images/marketing.png',
                sectors: [
                    {
                        icon: '💼',
                        title: 'Représentation Commerciale',
                        items: [
                            'Extension de votre force commerciale',
                            'Prospection de nouveaux clients',
                            'Gestion de portefeuille clients',
                            'Suivi des opportunités d\'affaires'
                        ]
                    },
                    {
                        icon: '📊',
                        title: 'Développement Commercial',
                        items: [
                            'Études de marché',
                            'Stratégie commerciale',
                            'Négociation de contrats',
                            'Reporting et analyse des ventes'
                        ]
                    },
                    {
                        icon: '🤝',
                        title: 'Partenariats',
                        items: [
                            'Mise en relation avec partenaires stratégiques',
                            'Développement de réseaux d\'affaires',
                            'Gestion des relations clients',
                            'Support après-vente'
                        ]
                    }
                ],
                
            }
        };

        // Fonction pour afficher le contenu d'un service
        function displayService(serviceKey) {
            const service = servicesData[serviceKey];
            const contentDiv = document.getElementById('dynamic-content');
            
            let sectorsHTML = '';
            service.sectors.forEach(sector => {
                sectorsHTML += `
                    <div class="sector-title">${sector.icon} ${sector.title}</div>
                    <ul class="sector-list">
                        ${sector.items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                `;
            });

            let imagesHTML = '';
            if (service.images && service.images.length > 0) {
                imagesHTML = `
                    <div class="image-grid">
                        ${service.images.map(img => `<img src="${img}" alt="Projet">`).join('')}
                    </div>
                `;
            }

            contentDiv.innerHTML = `
                <div class="hero-section">
                    <img src="${service.heroImage}" alt="Hero" class="hero-image">
                    <div class="hero-overlay">
                        <h1 class="hero-title">${service.title}</h1>
                        <p class="hero-subtitle">${service.subtitle}</p>
                    </div>
                </div>

                <div class="content-intro">
                    <p>${service.intro}</p>
                </div>

                ${sectorsHTML}

                ${imagesHTML}

            `;
        }

        // Gestion des clics sur les items de navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function() {
                // Retirer la classe active de tous les items
                document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
                
                // Ajouter la classe active à l'item cliqué
                this.classList.add('active');
                
                // Récupérer le service sélectionné
                const serviceKey = this.getAttribute('data-service');
                
                // Afficher le contenu correspondant
                displayService(serviceKey);
            });
        });
  
            // Afficher le premier service par défaut (Telecom)
            displayService('telecom');
        