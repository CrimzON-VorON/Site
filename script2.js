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
        { titleClass: ".favourite-title", blockClass: ".favourite" },
        { titleClass: ".favourite-title5", blockClass: ".favourite5" },
        { titleClass: ".favourite-title2", blockClass: ".favourite2" },
        { titleClass: ".favourite-title3", blockClass: ".favourite3" },
        { titleClass: ".favourite-title4", blockClass: ".favourite4" },
    ];

    // Завантажуємо стан блоків із localStorage
    sections.forEach(({ titleClass, blockClass }) => {
        const titleElement = document.querySelector(titleClass);
        const contentBlock = document.querySelector(blockClass);

        if (contentBlock) {
            const isHidden = localStorage.getItem(blockClass) === "hidden";
            if (isHidden) {
                contentBlock.classList.add("hidden");
                if (titleElement) {
                    titleElement.textContent = titleElement.textContent.replace("Сховати", "Показати");
                }
            }
        }
    });

    // Додаємо обробники подій для кожного заголовка
    sections.forEach(({ titleClass, blockClass }) => {
        const titleElement = document.querySelector(titleClass);
        const contentBlock = document.querySelector(blockClass);

        if (titleElement && contentBlock) {
            titleElement.addEventListener("click", () => {
                if (contentBlock.classList.contains("hidden")) {
                    contentBlock.classList.remove("hidden");
                    titleElement.textContent = titleElement.textContent.replace("Показати", "Сховати");
                    localStorage.setItem(blockClass, "visible");
                } else {
                    contentBlock.classList.add("hidden");
                    titleElement.textContent = titleElement.textContent.replace("Сховати", "Показати");
                    localStorage.setItem(blockClass, "hidden");
                }
            });
        }
    });
});

