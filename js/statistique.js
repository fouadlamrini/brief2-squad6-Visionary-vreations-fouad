
const users = {
    'user_1': {
        username: 'Ahmed',
        level: 'A1',
        score: 10,
        attempts: {
            A1: { count: 2 },
            A2: { count: 0 },
            B1: { count: 0 },
            B2: { count: 0 },
            C1: { count: 0 },
            C2: { count: 0 }
        }
    },
    'user_2': {
        username: 'Sarah',
        level: 'B1',
        score: 7,
        attempts: {
            A1: { count: 3 },
            A2: { count: 2 },
            B1: { count: 1 },
            B2: { count: 0 },
            C1: { count: 0 },
            C2: { count: 0 }
        }   
    },
    'user_3': {
        username: 'muhamed',
        level: 'C1',
        score: 10,
        attempts: {
            A1: { count: 3 },
            A2: { count: 3 },
            B1: { count: 2 },
            B2: { count: 1 },
            C1: { count: 2 },
            C2: { count: 0 }
        }
    }
};


function initializeDefaultData() {
    Object.entries(users).forEach(([key, value]) => {
        if (!localStorage.getItem(key)) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    });
}


function getUserStats() {
    const users = {};
    const keys = Object.keys(localStorage);
    
    keys.forEach(key => {
        if (key.startsWith('user_')) {
            const userData = JSON.parse(localStorage.getItem(key));
            users[key] = userData;
        }
    });
    
    return users;
}


function calculateProgress(score) {
    return (score / 10) * 100;
}

function getStatus(progress, attempts) {
    if (progress === 100) return 'Réussi';
    return attempts.count.toString();
}

function updateStatsTable(filterUser = 'all', filterLevel = 'all') {
    const tableBody = document.getElementById('statsTableBody');
    const users = getUserStats();
    tableBody.innerHTML = '';

    Object.entries(users).forEach(([userId, userData]) => {
        if ((filterUser === 'all' || userId === filterUser) &&
            (filterLevel === 'all' || userData.level === filterLevel)) {
            
            
            const levelAttempts = userData.attempts[userData.level];
            const categories = ['grammaire', 'vocabulaire', 'comprehension'];
            
            categories.forEach(category => {
                const progress = calculateProgress(userData.score);
                const row = document.createElement('tr');
                row.classList.add('border-b');
                
                row.innerHTML = `
                    <td class="p-2">${userData.level} - ${category}</td>
                    <td class="p-2">${levelAttempts[category]?.count || 0}</td>
                    <td class="p-2">
                        <div class="w-full bg-gray-200 rounded-full h-2.5">
                            <div class="bg-blue-600 h-2.5 rounded-full" style="width: ${progress}%"></div>
                        </div>
                        <span class="text-sm">${progress}%</span>
                    </td>
                `;
                
                tableBody.appendChild(row);
            });
        }
    });
}


function updateFilters() {
    
    const userFilter = document.getElementById('userFilter');
    const users = getUserStats();
    
    userFilter.innerHTML = '<option value="all">Tous les utilisateurs</option>';
    Object.entries(users).forEach(([userId, userData]) => {
        console.log("userData",userData);
        userFilter.innerHTML += `<option value="${userId}">${userData.username}</option>`;
    });
}


document.getElementById('userFilter').addEventListener('change', (e) => {
    updateStatsTable(e.target.value, document.getElementById('levelFilter').value);
});

document.getElementById('levelFilter').addEventListener('change', (e) => {
    updateStatsTable(document.getElementById('userFilter').value, e.target.value);
});

document.addEventListener('DOMContentLoaded', () => {
    initializeDefaultData();
    updateFilters();
    updateStatsTable();
}); 