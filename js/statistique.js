const users = [
    {
        name: "fouad",
        password: "fouad123",
        status: "user",
        levels: {
            A1: {
                categories: {
                    grammaire: { validation: true, attempts: 1, time: 0 },
                    vocabulaire: { validation: true, attempts: 1, time: 0 },
                    comprehension: { validation: true, attempts: 1, time: 0 },
                },
            },
            A2: {
                categories: {
                    grammaire: { validation: false, attempts: 0, time: 0 },
                    vocabulaire: { validation: false, attempts: 0, time: 0 },
                    comprehension: { validation: false, attempts: 0, time: 0 },
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
                    comprehension: { validation: false, attempts: 0, time: 0 },
                },
            },
            C1: {
                categories: {
                    grammaire: { validation: false, attempts: 0, time: 0 },
                    vocabulaire: { validation:false, attempts: 0, time: 0 },
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
        }
    },
    {
        name: "ahmed",
        password: "a@123",
        status: "user",
        levels: {
            A1: {
                categories: {
                    grammaire: { validation: false, attempts: 1, time: 0 },
                    vocabulaire: { validation: false, attempts: 0, time: 0 },
                    comprehension: { validation:false, attempts: 0, time: 0 },
                },
            },
            A2: {
                categories: {
                    grammaire: { validation:false, attempts: 0, time: 0 },
                    vocabulaire: { validation: false, attempts: 0, time: 0 },
                    comprehension: { validation: false, attempts: 0, time: 0 },
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
                    comprehension: { validation: false, attempts: 0, time: 0 },
                },
            },
            C1: {
                categories: {
                    grammaire: { validation: false, attempts: 0, time: 0 },
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
        }
    }
    // Vous pouvez ajouter autant d'utilisateurs que vous voulez ici
];

function initializeDefaultData() {
    if (!localStorage.getItem('users')) {
        const initialUsers = {};
        users.forEach((user, index) => {
            initialUsers[`user${index + 1}`] = JSON.parse(JSON.stringify(user));
        });
        localStorage.setItem('users', JSON.stringify(initialUsers));
    }
}

function getUserStats() {
    try {
        const users = JSON.parse(localStorage.getItem('users'));
        console.log('Loaded users:', users);
        return users || {};
    } catch (e) {
        console.error('Error parsing users data:', e);
        return {};
    }
}

function updateStatsTable(filterLevel = 'all', searchName = '') {
    const tableBody = document.getElementById('statsTableBody');
    if (!tableBody) {
        console.error('Table body not found!');
        return;
    }
    
    const users = getUserStats();
    tableBody.innerHTML = '';

    Object.entries(users).forEach(([userId, userData]) => {
        if (searchName === '' || userData.name.toLowerCase().includes(searchName)) {
            const headerRow = document.createElement('tr');
            headerRow.innerHTML = `
                <td colspan="4" class="p-2 font-bold bg-gray-100">
                    ${userData.name}
                </td>
            `;
            tableBody.appendChild(headerRow);

            Object.entries(userData.levels).forEach(([level, levelData]) => {
                if (filterLevel === 'all' || level === filterLevel) {
                    const validations = Object.values(levelData.categories)
                        .filter(cat => cat.validation).length;
                    const attempts = Object.values(levelData.categories)
                        .reduce((sum, cat) => sum + cat.attempts, 0);
                    const categoryCount = Object.keys(levelData.categories).length;
                    
                    const successRate = (validations / categoryCount) * 100;

                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td class="p-2">${level}</td>
                        <td class="p-2">${attempts}</td>
                        <td class="p-2">
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-blue-600 h-2.5 rounded-full" 
                                     style="width: ${successRate}%">
                                </div>
                            </div>
                        </td>
                        <td class="p-2">${successRate.toFixed(1)}%</td>
                    `;
                    tableBody.appendChild(row);
                }
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeDefaultData();
    
    const nameFilter = document.getElementById('nameFilter');
    const levelFilter = document.getElementById('levelFilter');

    nameFilter.addEventListener('input', (e) => {
        const searchName = e.target.value.trim().toLowerCase();
        updateStatsTable(levelFilter.value, searchName);
    });

    levelFilter.addEventListener('change', (e) => {
        const searchName = nameFilter.value.trim().toLowerCase();
        updateStatsTable(e.target.value, searchName);
    });

    updateStatsTable('all', '');
}); 