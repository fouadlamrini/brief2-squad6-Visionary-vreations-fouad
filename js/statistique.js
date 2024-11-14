  // Fonction pour récupérer les données des utilisateurs
function getUserStats() {
    const users = {};
    const keys = Object.keys(localStorage);
    
    // Parcourir tous les éléments du localStorage
    keys.forEach(key => {
        if (key.startsWith('user_')) {
            const userData = JSON.parse(localStorage.getItem(key));
            users[key] = userData;
        }
    });
    
    return users;
}

// Fonction pour calculer le pourcentage de réussite
function calculateProgress(score) {
    return (score / 10) * 100;
}

// Fonction pour déterminer le statut
function getStatus(progress) {
    return progress >= 100 ? 'Réussi' : '3';
}

// Fonction pour mettre à jour le tableau des statistiques
function updateStatsTable(filterUser = 'all', filterLevel = 'all') {
    const tableBody = document.getElementById('statsTableBody');
    const users = getUserStats();
    tableBody.innerHTML = '';

    Object.entries(users).forEach(([userId, userData]) => {
        if ((filterUser === 'all' || userId === filterUser) &&
            (filterLevel === 'all' || userData.level === filterLevel)) {
            
            const progress = calculateProgress(userData.score);
            const row = document.createElement('tr');
            row.classList.add('border-b');
            
            row.innerHTML = `
                <td class="p-2">${userData.username}</td>
                <td class="p-2">${userData.level}</td>
                <td class="p-2">${userData.score}/10</td>
                <td class="p-2">${getStatus(progress)}</td>
                <td class="p-2">
                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                        <div class="bg-blue-600 h-2.5 rounded-full" style="width: ${progress}%"></div>
                    </div>
                    <span class="text-sm">${progress}%</span>
                </td>
            `;
            
            tableBody.appendChild(row);
        }
    });
}

// Fonction pour mettre à jour les filtres
function updateFilters() {
    const userFilter = document.getElementById('userFilter');
    const users = getUserStats();
    
    // Ajouter les options des utilisateurs
    userFilter.innerHTML = '<option value="all">Tous les utilisateurs</option>';
    Object.entries(users).forEach(([userId, userData]) => {
        userFilter.innerHTML += `<option value="${userId}">${userData.username}</option>`;
    });
}

// Événements des filtres
document.getElementById('userFilter').addEventListener('change', (e) => {
    updateStatsTable(e.target.value, document.getElementById('levelFilter').value);
});

document.getElementById('levelFilter').addEventListener('change', (e) => {
    updateStatsTable(document.getElementById('userFilter').value, e.target.value);
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    updateFilters();
    updateStatsTable();
}); 