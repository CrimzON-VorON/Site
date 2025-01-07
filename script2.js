document.addEventListener("DOMContentLoaded", () => {
    const snowContainer = document.getElementById("snow-container");
    const toggleSnowButton = document.getElementById("toggle-snow");
    let isSnowing = false;
    let snowInterval;

    // Функція створення сніжинок
    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.innerText = "❄️";

        // Випадкове розташування сніжинки
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.top = Math.random() * window.innerHeight + "px"; // Початкова висота сніжинки
        snowflake.style.fontSize = Math.random() * 15 + 10 + "px"; // Розмір від 10px до 25px
        snowflake.style.animationDuration = Math.random() * 3 + 4 + "s"; // Тривалість падіння (4-7 секунд)
        snowflake.style.animationDelay = Math.random() * 2 + "s"; // Затримка перед падінням

        snowContainer.appendChild(snowflake);

        // Видалення після закінчення анімації
        setTimeout(() => {
            snowflake.remove();
        }, 20000); // Видаляємо через 20 секунд
    }

    // Функція для вмикання/вимикання снігу
    function toggleSnow() {
        if (isSnowing) {
            clearInterval(snowInterval);
            snowContainer.innerHTML = ""; // Очищаємо контейнер
            toggleSnowButton.innerText = "❄️ Увімкнути сніг";
            localStorage.setItem("isSnowing", "false"); // Зберігаємо стан у localStorage
        } else {
            snowInterval = setInterval(createSnowflake, 550); // Кожні 550 мс додаємо сніжинку
            toggleSnowButton.innerText = "❄️ Вимкнути сніг";
            localStorage.setItem("isSnowing", "true"); // Зберігаємо стан у localStorage
        }
        isSnowing = !isSnowing;
    }

    // Перевіряємо стан снігу при завантаженні сторінки
    const savedState = localStorage.getItem("isSnowing");
    if (savedState === "true") {
        toggleSnow(); // Увімкнути сніг, якщо він був увімкнений
    }

    // Слухач подій для кнопки
    toggleSnowButton.addEventListener("click", toggleSnow);
});


document.addEventListener("DOMContentLoaded", () => {
            const popupOverlay = document.getElementById("popup-overlay-building");
            const closePopupButton = document.getElementById("close-popup-building");

            // Показуємо вікно при завантаженні сторінки
            popupOverlay.style.display = "flex";

            // Закриваємо вікно при натисканні на кнопку
            closePopupButton.addEventListener("click", () => {
                popupOverlay.style.display = "none";
            });
        });


document.addEventListener("DOMContentLoaded", () => {
    const sections = [
        { titleClass: ".favourite-title", blockClass: ".favourite", searchInputClass: "#searchInput", sortButtonClass: "#sort_list" },
        { titleClass: ".favourite-title5", blockClass: ".favourite5", searchInputClass: "#searchInput5", sortButtonClass: "#sort_list5" },
        { titleClass: ".favourite-title2", blockClass: ".favourite2", searchInputClass: "#searchInput2", sortButtonClass: "#sort_list2" },
        { titleClass: ".favourite-title3", blockClass: ".favourite3", searchInputClass: "#searchInput3", sortButtonClass: "#sort_list3" },
        { titleClass: ".favourite-title4", blockClass: ".favourite4", searchInputClass: "#searchInput4", sortButtonClass: "#sort_list4" },
    ];

    // Завантажуємо стан блоків із localStorage
    sections.forEach(({ titleClass, blockClass, searchInputClass, sortButtonClass }) => {
        const titleElement = document.querySelector(titleClass);
        const contentBlock = document.querySelector(blockClass);
        const searchInput = document.querySelector(searchInputClass);
        const sortButton = document.querySelector(sortButtonClass);

        if (contentBlock) {
            const isHidden = localStorage.getItem(blockClass) === "hidden";
            if (isHidden) {
                contentBlock.classList.add("hidden");
                if (titleElement) {
                    titleElement.textContent = titleElement.textContent.replace("Сховати", "Показати");
                }
                if (searchInput) {
                    searchInput.classList.add("hidden"); // Сховуємо поле пошуку
                }
                if (sortButton) {
                    sortButton.classList.add("hidden"); // Сховуємо кнопку сортування
                }
            }
        }
    });

    // Додаємо обробники подій для кожного заголовка
    sections.forEach(({ titleClass, blockClass, searchInputClass, sortButtonClass }) => {
        const titleElement = document.querySelector(titleClass);
        const contentBlock = document.querySelector(blockClass);
        const searchInput = document.querySelector(searchInputClass);
        const sortButton = document.querySelector(sortButtonClass);

        if (titleElement && contentBlock) {
            titleElement.addEventListener("click", () => {
                if (contentBlock.classList.contains("hidden")) {
                    contentBlock.classList.remove("hidden");
                    if (searchInput) {
                        searchInput.classList.remove("hidden"); // Показуємо поле пошуку
                    }
                    if (sortButton) {
                        sortButton.classList.remove("hidden"); // Показуємо кнопку сортування
                    }
                    titleElement.textContent = titleElement.textContent.replace("Показати", "Сховати");
                    localStorage.setItem(blockClass, "visible");
                } else {
                    contentBlock.classList.add("hidden");
                    if (searchInput) {
                        searchInput.classList.add("hidden"); // Сховуємо поле пошуку
                    }
                    if (sortButton) {
                        sortButton.classList.add("hidden"); // Сховуємо кнопку сортування
                    }
                    titleElement.textContent = titleElement.textContent.replace("Сховати", "Показати");
                    localStorage.setItem(blockClass, "hidden");
                }
            });
        }
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput3");
    const favouriteContainer = document.querySelector(".favourite3");
    const moviesBoxes = favouriteContainer.querySelectorAll(".movies_boxes");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();

        moviesBoxes.forEach(box => {
            const title = box.querySelector(".p_text_media").textContent.toLowerCase();
            if (title.includes(query)) {
                box.style.display = "flex"; // Відображаємо елемент
            } else {
                box.style.display = "none"; // Ховаємо елемент
            }
        });
    });
});

function filterMovies(searchInputId, containerClass) {
    const searchInput = document.getElementById(searchInputId).value.toLowerCase();
    const movieItems = document.querySelectorAll(containerClass + ' [class^="movies_boxes"]');
    
    movieItems.forEach(item => {
        const title = item.querySelector('.p_text_media').textContent.toLowerCase();
        if (title.includes(searchInput)) {
            item.style.display = 'block';  // Показуємо елемент, якщо він містить пошуковий запит
        } else {
            item.style.display = 'none';   // Сховуємо елемент, якщо не містить пошуковий запит
        }
    });
}

// Виклики функцій для різних контейнерів
document.getElementById('searchInput4').addEventListener('keyup', () => filterMovies('searchInput4', '.favourite4'));
document.getElementById('searchInput2').addEventListener('keyup', () => filterMovies('searchInput2', '.favourite2'));
document.getElementById('searchInput5').addEventListener('keyup', () => filterMovies('searchInput5', '.favourite5'));
document.getElementById('searchInput').addEventListener('keyup', () => filterMovies('searchInput', '.favourite'));

// Муві бокси
function filterPlannedMovies() {
    const searchInput = document.getElementById('searchInput2').value.toLowerCase();
    const movieItems = document.querySelectorAll('.favourite2 [class^="movies_boxes"]'); // Вибираємо всі елементи з класами, що починаються на movies_boxes
    
    movieItems.forEach(item => {
        const title = item.querySelector('.p_text_media').textContent.toLowerCase();
        if (title.includes(searchInput)) {
            item.style.display = 'block';  // Показуємо елемент, якщо він містить пошуковий запит
        } else {
            item.style.display = 'none';   // Сховуємо елемент, якщо не містить пошуковий запит
        }
    });
}
function filterWatchedMovies() {
    const searchInput = document.getElementById('searchInput3').value.toLowerCase();
    const movieItems = document.querySelectorAll('.favourite3 [class^="movies_boxes"]'); // Вибираємо всі елементи з класами, що починаються на movies_boxes

    movieItems.forEach(item => {
        const titleElement = item.querySelector('.p_text_media');
        const title = titleElement ? titleElement.textContent.toLowerCase() : ''; // Перевіряємо існування
        if (title.includes(searchInput)) {
            item.style.display = 'block';  // Показуємо елемент, якщо він містить пошуковий запит
        } else {
            item.style.display = 'none';   // Сховуємо елемент, якщо не містить пошуковий запит
        }
    });
}
// для 1
function sortMediaByName() {
    const container = document.querySelector('.favourite');
    const mediaBlocks = Array.from(container.children); // Отримуємо всі дочірні елементи

    // Сортуємо елементи за текстом у .p_text_media
    mediaBlocks.sort((a, b) => {
        const nameA = a.querySelector('.p_text_media').textContent.toLowerCase();
        const nameB = b.querySelector('.p_text_media').textContent.toLowerCase();
        return nameA.localeCompare(nameB); // Порівнюємо імена
    });

    // Очищаємо контейнер і додаємо відсортовані елементи
    container.innerHTML = '';
    mediaBlocks.forEach(block => container.appendChild(block));
}
// для 2
function sortPlannedMoviesByName() {
    const container = document.querySelector('.favourite2');
    const mediaBlocks = Array.from(container.children);

    // Сортуємо елементи за текстом у .p_text_media
    mediaBlocks.sort((a, b) => {
        const nameA = a.querySelector('.p_text_media')?.textContent?.toLowerCase() || '';
        const nameB = b.querySelector('.p_text_media')?.textContent?.toLowerCase() || '';
        return nameA.localeCompare(nameB); // Порівнюємо імена
    });

    // Очищаємо контейнер і додаємо відсортовані елементи
    container.innerHTML = '';
    mediaBlocks.forEach(block => container.appendChild(block));
}

function sortPlannedMoviesByRating() {
    const container = document.querySelector('.favourite2');
    const mediaBlocks = Array.from(container.children);

    // Сортуємо елементи за рейтингом у зворотному порядку
    mediaBlocks.sort((a, b) => {
        const ratingA = a.querySelector('.rating1, .rating2, .rating3, .rating4')?.classList[0]?.match(/\d+/)?.[0] || 0;
        const ratingB = b.querySelector('.rating1, .rating2, .rating3, .rating4')?.classList[0]?.match(/\d+/)?.[0] || 0;
        return ratingB - ratingA; // Зворотний порядок
    });

    // Очищаємо контейнер і додаємо відсортовані елементи
    container.innerHTML = '';
    mediaBlocks.forEach(block => container.appendChild(block));
}
// для 3
function sortWatchedMoviesByName() {
    const container = document.querySelector('.favourite3');
    const mediaBlocks = Array.from(container.children); // Отримуємо всі дочірні елементи

    // Сортуємо елементи за текстом у .p_text_media
    mediaBlocks.sort((a, b) => {
        const nameA = a.querySelector('.p_text_media')?.textContent?.toLowerCase() || '';
        const nameB = b.querySelector('.p_text_media')?.textContent?.toLowerCase() || '';
        return nameA.localeCompare(nameB); // Порівнюємо імена
    });

    // Очищаємо контейнер і додаємо відсортовані елементи
    container.innerHTML = '';
    mediaBlocks.forEach(block => container.appendChild(block));
}

function sortWatchedMoviesByRating() {
    const container = document.querySelector('.favourite3');
    const mediaBlocks = Array.from(container.children); // Отримуємо всі дочірні елементи

    // Сортуємо елементи за класом rating (з rating1 до rating4)
    mediaBlocks.sort((a, b) => {
        const ratingA = a.querySelector('.rating1, .rating2, .rating3, .rating4')?.classList[0]?.match(/\d+/)?.[0] || 0;
        const ratingB = b.querySelector('.rating1, .rating2, .rating3, .rating4')?.classList[0]?.match(/\d+/)?.[0] || 0;
        return ratingA - ratingB; // Сортування у порядку зростання рейтингу
    });

    // Очищаємо контейнер і додаємо відсортовані елементи
    container.innerHTML = '';
    mediaBlocks.forEach(block => container.appendChild(block));
}
// для 4
function sortAbandonedMoviesByName() {
    const container = document.querySelector('.favourite4');
    const mediaBlocks = Array.from(container.children);

    // Сортуємо елементи за текстом у .p_text_media
    mediaBlocks.sort((a, b) => {
        const nameA = a.querySelector('.p_text_media')?.textContent?.toLowerCase() || '';
        const nameB = b.querySelector('.p_text_media')?.textContent?.toLowerCase() || '';
        return nameA.localeCompare(nameB); // Порівнюємо імена
    });

    // Очищаємо контейнер і додаємо відсортовані елементи
    container.innerHTML = '';
    mediaBlocks.forEach(block => container.appendChild(block));
}

function sortAbandonedMoviesByRating() {
    const container = document.querySelector('.favourite4');
    const mediaBlocks = Array.from(container.children);

    // Сортуємо елементи за рейтингом у зворотному порядку
    mediaBlocks.sort((a, b) => {
        const ratingA = a.querySelector('.rating1, .rating2, .rating3, .rating4')?.classList[0]?.match(/\d+/)?.[0] || 0;
        const ratingB = b.querySelector('.rating1, .rating2, .rating3, .rating4')?.classList[0]?.match(/\d+/)?.[0] || 0;
        return ratingB - ratingA; // Зворотний порядок
    });

    // Очищаємо контейнер і додаємо відсортовані елементи
    container.innerHTML = '';
    mediaBlocks.forEach(block => container.appendChild(block));
}
// для 5
function sortWatchingMoviesByName() {
    const container = document.querySelector('.favourite5');
    const mediaBlocks = Array.from(container.children); // Отримуємо всі дочірні елементи

    // Сортуємо елементи за текстом у .p_text_media
    mediaBlocks.sort((a, b) => {
        const nameA = a.querySelector('.p_text_media').textContent.toLowerCase();
        const nameB = b.querySelector('.p_text_media').textContent.toLowerCase();
        return nameA.localeCompare(nameB); // Порівнюємо імена
    });

    // Очищаємо контейнер і додаємо відсортовані елементи
    container.innerHTML = '';
    mediaBlocks.forEach(block => container.appendChild(block));
}
////

