// تعريف المستخدمين مباشرة في localStorage عند تحميل الصفحة
const users = {
    user1: {
        name: "fouad",
        levels: {
            A1: {
                categories: {
                    grammaire: { validation: true, attempts: 3 },
                    vocabulaire: { validation: true, attempts: 2 },
                    comprehension: { validation: false, attempts: 1 }
                }
            },
            A2: {
                categories: {
                    grammaire: { validation: false, attempts: 1 },
                    vocabulaire: { validation: false, attempts: 0 },
                    comprehension: { validation: false, attempts: 0 }
                }
            },
            B1: {
                categories: {
                    grammaire: { validation: false, attempts: 2 },
                    vocabulaire: { validation: true, attempts: 3 },
                    comprehension: { validation: false, attempts: 1 }
                }
            },
            B2: {
                categories: {
                    grammaire: { validation: false, attempts: 0 },
                    vocabulaire: { validation: false, attempts: 0 },
                    comprehension: { validation: false, attempts: 0 }
                }
            },
            C1: {
                categories: {
                    grammaire: { validation: false, attempts: 0 },
                    vocabulaire: { validation: false, attempts: 0 },
                    comprehension: { validation: false, attempts: 0 }
                }
            },
            C2: {
                categories: {
                    grammaire: { validation: false, attempts: 0 },
                    vocabulaire: { validation: false, attempts: 0 },
                    comprehension: { validation: false, attempts: 0 }
                }
            }
        }
    },
    user2: {
        name: "ahmed",
        levels: {
            A1: {
                categories: {
                    grammaire: { validation: true, attempts: 2 },
                    vocabulaire: { validation: false, attempts: 1 },
                    comprehension: { validation: false, attempts: 0 }
                }
            },
            A2: {
                categories: {
                    grammaire: { validation: true, attempts: 3 },
                    vocabulaire: { validation: true, attempts: 2 },
                    comprehension: { validation: false, attempts: 1 }
                }
            },
            B1: {
                categories: {
                    grammaire: { validation: false, attempts: 1 },
                    vocabulaire: { validation: false, attempts: 0 },
                    comprehension: { validation: false, attempts: 0 }
                }
            },
            B2: {
                categories: {
                    grammaire: { validation: false, attempts: 0 },
                    vocabulaire: { validation: false, attempts: 0 },
                    comprehension: { validation: false, attempts: 0 }
                }
            },
            C1: {
                categories: {
                    grammaire: { validation: false, attempts: 0 },
                    vocabulaire: { validation: false, attempts: 0 },
                    comprehension: { validation: false, attempts: 0 }
                }
            },
            C2: {
                categories: {
                    grammaire: { validation: false, attempts: 0 },
                    vocabulaire: { validation: false, attempts: 0 },
                    comprehension: { validation: false, attempts: 0 }
                }
            }
        }
    }
};

// حفظ البيانات في localStorage مباشرة
localStorage.setItem('users', JSON.stringify(users));

function updateStatsTable(filterLevel = 'all', filterName = 'all') {
    const tableBody = document.getElementById('statsTableBody');
    tableBody.innerHTML = ''; // مسح المحتوى السابق

    const usersData = JSON.parse(localStorage.getItem('users'));
    
    Object.values(usersData).forEach(user => {
        // تصفية حسب اسم المستخدم
        if (filterName === 'all' || user.name.toLowerCase() === filterName.toLowerCase()) {
            // إضافة صف لاسم المستخدم
            const nameRow = document.createElement('tr');
            nameRow.innerHTML = `
                <td colspan="4" class="p-2 font-bold bg-gray-100">
                    ${user.name}
                </td>
            `;
            tableBody.appendChild(nameRow);

            // إضافة صفوف المستويات
            Object.entries(user.levels).forEach(([level, levelData]) => {
                if (filterLevel === 'all' || level === filterLevel) {
                    const totalCategories = Object.keys(levelData.categories).length;
                    const validatedCategories = Object.values(levelData.categories)
                        .filter(cat => cat.validation).length;
                    const totalAttempts = Object.values(levelData.categories)
                        .reduce((sum, cat) => sum + cat.attempts, 0);
                    
                    const successRate = (validatedCategories / totalCategories) * 100;

                    const levelRow = document.createElement('tr');
                    levelRow.innerHTML = `
                        <td class="p-2">${level}</td>
                        <td class="p-2">${totalAttempts}</td>
                        <td class="p-2">
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-blue-600 h-2.5 rounded-full" 
                                     style="width: ${successRate}%">
                                </div>
                            </div>
                        </td>
                        <td class="p-2">${successRate.toFixed(1)}%</td>
                    `;
                    tableBody.appendChild(levelRow);
                }
            });
        }
    });
}

// إضافة مستمعي الأحداث
document.addEventListener('DOMContentLoaded', () => {
    const nameFilter = document.getElementById('nameFilter');
    const levelFilter = document.getElementById('levelFilter');

    nameFilter.addEventListener('change', () => {
        updateStatsTable(levelFilter.value, nameFilter.value);
    });

    levelFilter.addEventListener('change', () => {
        updateStatsTable(levelFilter.value, nameFilter.value);
    });

    // عرض جميع البيانات عند تحميل الصفحة
    updateStatsTable();
}); 