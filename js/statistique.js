const user = {
    name: "fouad",
    password:"fouad123" ,
    status: "user",
    levels: {
      A1: {
        categories: {
          grammaire: { validation: true, attempts: 1, time: 0 },
          vocabulaire: { validation: true, attempts: 0, time: 0 },
          comprehension: { validation: true, attempts: 0, time: 0 },
        },
      },
      A2: {
        categories: {
          grammaire: { validation: false, attempts: 0, time: 0 },
          vocabulaire: { validation: true, attempts: 0, time: 0 },
          comprehension: { validation: true, attempts: 0, time: 0 },
        },
      },
      B1: {
        categories: {
          grammaire: { validation: false, attempts: 0, time: 0 },
          vocabulaire: { validation: false, attempts: 0, time: 0 },
          comprehension: { validation: false, attempts: 0, time: 0 },
        },
      },
      B2: {
        categories: {
          grammaire: { validation: false, attempts: 0, time: 0 },
          vocabulaire: { validation: false, attempts: 0, time: 0 },
          comprehension: { validation: true, attempts: 0, time: 0 },
        },
      },
      C1: {
        categories: {
          grammaire: { validation: true, attempts: 0, time: 0 },
          vocabulaire: { validation: false, attempts: 0, time: 0 },
          comprehension: { validation: false, attempts: 0, time: 0 },
        },
      },
      C2: {
        categories: {
          grammaire: { validation: false, attempts: 0, time: 0 },
          vocabulaire: { validation: false, attempts: 0, time: 0 },
          comprehension: { validation: false, attempts: 0, time: 0 },
        },
      },
    },
  };

function initializeDefaultData() {
    if (!localStorage.getItem('users')) {
        const initialUsers = {
            'user1': JSON.parse(JSON.stringify(user))
        };
        localStorage.setItem('users', JSON.stringify(initialUsers));
    }
    watchAndUpdateValidation();
}

function watchAndUpdateValidation() {
    const users = JSON.parse(localStorage.getItem('users'));
    if (users && users.user1) {
       
        users.user1.levels.A1.categories.grammaire.validation = user.levels.A1.categories.grammaire.validation;
        users.user1.levels.A1.categories.vocabulaire.validation = user.levels.A1.categories.vocabulaire.validation;
        users.user1.levels.A1.categories.comprehension.validation = user.levels.A1.categories.comprehension.validation;
        
        
        users.user1.levels.A2.categories.grammaire.validation = user.levels.A2.categories.grammaire.validation;
        users.user1.levels.A2.categories.vocabulaire.validation = user.levels.A2.categories.vocabulaire.validation;
        users.user1.levels.A2.categories.comprehension.validation = user.levels.A2.categories.comprehension.validation;
      
        users.user1.levels.B1.categories.grammaire.validation = user.levels.B1.categories.grammaire.validation;
        users.user1.levels.B1.categories.vocabulaire.validation = user.levels.B1.categories.vocabulaire.validation;
        users.user1.levels.B1.categories.comprehension.validation = user.levels.B1.categories.comprehension.validation;
        
        
        users.user1.levels.B2.categories.grammaire.validation = user.levels.B2.categories.grammaire.validation;
        users.user1.levels.B2.categories.vocabulaire.validation = user.levels.B2.categories.vocabulaire.validation;
        users.user1.levels.B2.categories.comprehension.validation = user.levels.B2.categories.comprehension.validation;
        
        users.user1.levels.C1.categories.grammaire.validation = user.levels.C1.categories.grammaire.validation;
        users.user1.levels.C1.categories.vocabulaire.validation = user.levels.C1.categories.vocabulaire.validation;
        users.user1.levels.C1.categories.comprehension.validation = user.levels.C1.categories.comprehension.validation;
        
        
        users.user1.levels.C2.categories.grammaire.validation = user.levels.C2.categories.grammaire.validation;
        users.user1.levels.C2.categories.vocabulaire.validation = user.levels.C2.categories.vocabulaire.validation;
        users.user1.levels.C2.categories.comprehension.validation = user.levels.C2.categories.comprehension.validation;

       
        Object.entries(user.levels).forEach(([level, levelData]) => {
            Object.entries(levelData.categories).forEach(([category, categoryData]) => {
                if (categoryData.validation) {
                    users.user1.levels[level].categories[category].attempts = 1;
                }
            });
        });
        
        localStorage.setItem('users', JSON.stringify(users));
        updateStatsTable(document.getElementById('levelFilter')?.value || 'all');
    }
}

setInterval(watchAndUpdateValidation, 1000);

function updateExistingData() {
    const users = JSON.parse(localStorage.getItem('users'));
    if (users && users.user1) {
        users.user1.levels.A1.categories.grammaire.validation = true;
        users.user1.levels.A1.categories.vocabulaire.validation = true;
        users.user1.levels.A1.categories.comprehension.validation = true;
        
        users.user1.levels.A1.categories.grammaire.attempts = 1;
        users.user1.levels.A1.categories.vocabulaire.attempts = 1;
        users.user1.levels.A1.categories.comprehension.attempts = 1;
        
        localStorage.setItem('users', JSON.stringify(users));
    }
}

function getUserStats() {
    try {
        const users = JSON.parse(localStorage.getItem('users')) || {};
        return users;
    } catch (e) {
        console.error('Error parsing users data:', e);
        return {};
    }
}


function calculateProgress(score) {
    return (score / 10) * 100;
}

function getStatus(progress, attempts) {
    if (progress === 100) return 'Réussi';
    return attempts.count.toString();
}

function updateStatsTable(filterLevel = 'all') {
    const tableBody = document.getElementById('statsTableBody');
    const users = getUserStats();
    tableBody.innerHTML = '';

    const levelStats = {};

    
    Object.entries(users).forEach(([userId, userData]) => {
        Object.entries(userData.levels).forEach(([level, levelData]) => {
            if (!levelStats[level]) {
                levelStats[level] = { totalCategories: 0, successCount: 0 };
            }
            
            
            Object.values(levelData.categories).forEach(categoryData => {
                levelStats[level].totalCategories++;
                if (categoryData.validation === true) {
                    levelStats[level].successCount++;
                }
            });
        });
    });

    
    Object.entries(levelStats).forEach(([level, stats]) => {
        if (filterLevel === 'all' || level === filterLevel) {
            const row = document.createElement('tr');
            row.classList.add('border-b');
            
            
            const successRate = (stats.successCount / stats.totalCategories) * 100;
            
            row.innerHTML = `
                <td class="p-2">${level}</td>
                <td class="p-2">${stats.totalCategories}</td>
                <td class="p-2">
                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                        <div class="bg-blue-600 h-2.5 rounded-full" style="width: ${successRate}%"></div>
                    </div>
                </td>
                <td class="p-2">${successRate.toFixed(1)}%</td>
            `;
            
            tableBody.appendChild(row);
        }
    });
}

document.getElementById('levelFilter').addEventListener('change', (e) => {
    updateStatsTable(e.target.value);
});

document.addEventListener('DOMContentLoaded', () => {
    initializeDefaultData();
    updateExistingData();
    updateStatsTable();
}); 