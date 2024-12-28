document.addEventListener('DOMContentLoaded', function() {
    // Логіка для правого блоку
    const sideRight = document.getElementById('sideRight');
    const toggleBtn = document.getElementById('toggleBtn');

    console.log("Right button and sideRight initialized"); // Перевірка, чи кнопка знайдена

    toggleBtn.addEventListener('click', function() {
        console.log("Right button clicked"); // Перевірка кліку
        sideRight.classList.toggle('collapsed');
        if (sideRight.classList.contains('collapsed')) {
            toggleBtn.textContent = '➖';
        } else {
            toggleBtn.textContent = '➕';
        }
    });

    // Логіка для лівого блоку
    const sideLeft = document.getElementById('sideleft'); // правильний ID тут
    const toggleBtn2 = document.getElementById('toggleBtn2');

    console.log("Left button and sideLeft initialized"); // Перевірка, чи кнопка знайдена

    toggleBtn2.addEventListener('click', function() {
        console.log("Left button clicked"); // Перевірка кліку
        sideLeft.classList.toggle('collapsed');
        if (sideLeft.classList.contains('collapsed')) {
            toggleBtn2.textContent = '➖';
        } else {
            toggleBtn2.textContent = '➕';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    for (let i = 1; i <= 40; i++) {
        const toggleBtnOpen = document.getElementById(`toggleBtn${(i * 2) - 1}`);
        const popup = document.getElementById(`popup${i}`);
        const toggleBtnClose = document.getElementById(`toggleBtn${i * 2}`);

        toggleBtnOpen.addEventListener('click', function() {
            popup.classList.toggle('open'); // Відкриває або закриває спливаюче вікно
            if (popup.classList.contains('open')) {
                toggleBtnOpen.textContent = 'Рецензія';
            } else {
                toggleBtnOpen.textContent = 'Рецензія';
            }
        });

        toggleBtnClose.addEventListener('click', function() {
            popup.classList.toggle('open'); // Відкриває або закриває спливаюче вікно
            if (popup.classList.contains('open')) {
                toggleBtnClose.textContent = '✖';
            } else {
                toggleBtnClose.textContent = '✖';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Обробка кнопок закриття попапів для togglebtn81 до togglebtn120
    for (let i = 81; i <= 120; i++) {
        const toggleBtnClose = document.getElementById(`toggleBtn${i}`);
        const screenPopup = document.getElementById(`screenpopup${i - 80}`); // Використовуємо правильний ID попапу

        if (toggleBtnClose && screenPopup) {
            toggleBtnClose.addEventListener('click', function() {
                screenPopup.classList.add('closing'); // Додає клас closing для анімації

                // Використовуємо setTimeout, щоб почекати завершення анімації перед прихованням
                setTimeout(() => {
                    screenPopup.classList.remove('open', 'closing'); // Видаляємо класи
                }, 500); // Затримка має відповідати тривалості анімації (0.5s)
            });
        }
    }
    
    // Обробка кнопок для відкриття попапів, якщо потрібно
    for (let i = 1; i <= 40; i++) {
        const screenBtn = document.getElementById(`screenBtn${i}`);
        const screenPopup = document.getElementById(`screenpopup${i}`);

        if (screenBtn && screenPopup) {
            screenBtn.addEventListener('click', function() {
                if (screenPopup.classList.contains('open')) {
                    // Якщо попап вже відкритий, закриваємо його
                    screenPopup.classList.add('closing'); // Додаємо клас closing

                    // Використовуємо setTimeout, щоб почекати завершення анімації перед прихованням
                    setTimeout(() => {
                        screenPopup.classList.remove('open', 'closing'); // Видаляємо класи
                    }, 100); // Затримка має відповідати тривалості анімації
                } else {
                    // Якщо попап закритий, відкриваємо його
                    screenPopup.classList.add('open'); // Додаємо клас open
                }
            });
        }
    }
});

  // Закриття попапів по клавіші ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" || event.keyCode === 27) {
            for (let i = 1; i <= 100; i++) { // Для всіх попапів з номером
                const popup = document.getElementById(`popup${i}`);
                const screenPopup = document.getElementById(`screenpopup${i}`);

                // Закриваємо всі відкриті попапи
                if (popup && popup.classList.contains('open')) {
                    popup.classList.remove('open');
                }
                if (screenPopup && screenPopup.classList.contains('open')) {
                    screenPopup.classList.remove('open');
                }
            }
        }
    });
    
document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const imagePopup = document.getElementById('imageScreenshotPopup');
    const popupImg = document.getElementById('screenshotPopupImg');
    const popupClose = document.getElementById('screenshotPopupClose');
    const imageCaption = document.getElementById('imageCaption'); // Елемент для підпису
    const popupVideo = document.getElementById('screenshotPopupVideo');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let currentIndex = 0;

    const showImage = (index) => {
        const thumbnail = thumbnails[index];
        const fullsizeSrc = thumbnail.getAttribute('data-fullsize');
        const captionText = thumbnail.getAttribute('data-caption'); // Отримуємо підпис

        if (thumbnail.classList.contains('video-thumbnail')) {
            const videoSrc = thumbnail.getAttribute('data-video');
            popupImg.style.display = 'none';
            popupVideo.src = videoSrc;
            popupVideo.style.display = 'block';
            imageCaption.textContent = ''; // Очищаємо підпис для відео
            imageCaption.style.display = 'none'; // Сховати підпис
        } else {
            popupImg.src = fullsizeSrc;
            popupImg.style.display = 'block';
            popupVideo.style.display = 'none';
            popupVideo.src = ''; // Очищаємо src для відео
            imageCaption.textContent = captionText; // Встановлюємо підпис
            imageCaption.style.display = 'block'; // Показати підпис
        }

        currentIndex = index;
        imagePopup.classList.add('open');
    };

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function() {
            showImage(index); // Відкриваємо попап з відповідним зображенням або відео
        });
    });

    popupClose.addEventListener('click', function() {
        imagePopup.classList.remove('open'); // Закриваємо попап
        popupImg.src = ''; // Очищаємо src для зображень
        popupVideo.src = ''; // Очищаємо src для відео
        imageCaption.textContent = ''; // Очищаємо підпис
        imageCaption.style.display = 'none'; // Сховати підпис
    });

    imagePopup.addEventListener('click', function(event) {
        if (event.target === this) {
            this.classList.remove('open');
            popupImg.src = '';
            popupVideo.src = '';
            imageCaption.textContent = ''; // Очищаємо підпис
            imageCaption.style.display = 'none'; // Сховати підпис
        }
    });

    // Перехід до попереднього зображення або відео
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            showImage(currentIndex - 1);
        } else {
            showImage(thumbnails.length - 1);
        }
    });

    // Перехід до наступного зображення або відео
    nextBtn.addEventListener('click', function() {
        if (currentIndex < thumbnails.length - 1) {
            showImage(currentIndex + 1);
        } else {
            showImage(0);
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const imageGallery = document.getElementById('imageGallery');
    const basePath = "../img/gamescreen/elden/";
    const totalImages = 34; // кількість зображень

    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement('img');
        img.src = `${basePath}elden${i}.jpg`;
        img.alt = `Elden ${i}`;
        img.classList.add('thumbnail'); // додаємо клас через add
        img.setAttribute('data-fullsize', `${basePath}elden${i}.jpg`);
        img.loading = 'lazy'; // атрибут lazy для оптимізації завантаження
        imageGallery.appendChild(img);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const imageGallery5 = document.getElementById('imageGallery5'); // правильний ID
    const basePath = "../img/gamescreen/codev/";
    const totalImages = 38; // кількість зображень

    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement('img');
        img.src = `${basePath}codev${i}.jpg`;
        img.alt = `Codev ${i}`;
        img.classList.add('thumbnail'); // додаємо клас через add
        img.setAttribute('data-fullsize', `${basePath}codev${i}.jpg`);
        img.loading = 'lazy'; // атрибут lazy для оптимізації завантаження
        imageGallery5.appendChild(img);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.screenshotspopup-img'); // Знаходимо всі елементи з класом .screenshotspopup-img

    images.forEach(image => {
        image.classList.add('zoom'); // Додаємо клас .zoom для кожного елемента .screenshotspopup-img

        let scale = 1; // Початковий масштаб

        // Обробка події прокручування колеса миші
        image.addEventListener('wheel', function(event) {
            event.preventDefault(); // Відключаємо стандартну поведінку прокручування сторінки

            // Збільшуємо або зменшуємо масштаб в залежності від напрямку прокрутки
            if (event.deltaY < 0) {
                scale += 0.1; // Збільшуємо масштаб
            } else {
                scale -= 0.1; // Зменшуємо масштаб
            }

            // Обмеження мінімального та максимального масштабів
            scale = Math.min(Math.max(0.5, scale), 2); // Мінімальний масштаб: 0.5, максимальний: 2

            // Окремо обробляємо трансформацію для масштабування, зберігаючи translate для центрування
            image.style.transform = `translate(-50%, -50%) scale(${scale})`;
        });
    });
});

// Функція для відкриття/закриття попапу
function togglePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup.classList.contains('open')) {
        popup.classList.remove('open');
        popup.classList.add('closing');
        setTimeout(() => {
            popup.classList.remove('closing');
        }, 500); // Затримка для анімації закриття
    } else {
        popup.classList.add('open');
    }
}

// Додаємо обробники подій для кнопок відкриття
for (let i = 1; i <= 100; i++) {
    const gameButton = document.querySelector(`.gametogglebtn${i}`);
    if (gameButton) {
        gameButton.addEventListener('click', () => togglePopup(`popup${40 + i}`));
    }

    const closeButton = document.getElementById(`closetoggleBtn${i}`);
    if (closeButton) {
        closeButton.addEventListener('click', (e) => {
            const popup = e.target.closest('div');
            popup.classList.remove('open');
            popup.classList.add('closing');
            setTimeout(() => {
                popup.classList.remove('closing');
            }, 500);
        });
    }

    const screenshotButton = document.getElementById(`screenshotBtn${i}`);
    if (screenshotButton) {
        screenshotButton.addEventListener('click', () => togglePopup(`screenpopup${40 + i}`));
    }

    const anotherCloseButton = document.getElementById(`anotherclosetoggleBtn${i}`);
    if (anotherCloseButton) {
        anotherCloseButton.addEventListener('click', (e) => {
            const popup = e.target.closest('div');
            popup.classList.remove('open');
            popup.classList.add('closing');
            setTimeout(() => {
                popup.classList.remove('closing');
            }, 500);
        });
    }
}
// Виконуємо код лише якщо кнопка існує на сторінці
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (!scrollToTopBtn) return; // Якщо кнопки немає, зупиняємо виконання

    // Робимо кнопку завжди видимою
    scrollToTopBtn.style.display = 'block';

    // Додаємо подію для прокручування сторінки вверх
    scrollToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
});



// Отримуємо всі елементи з класом 'glass_effect' (блоки, які відкривають попапи)
const characters = document.querySelectorAll('.glass_effect');
// Отримуємо всі попапи з класами, які починаються на 'waifu_popup'
const popups = document.querySelectorAll('[class^="waifu_popup"]');
// Елемент для затемнення
const overlay = document.getElementById('overlay');

// Функція відкриття попапу
function openPopup(index) {
    popups[index].classList.add('show_popup');
    overlay.classList.add('show_popup');
    
    // Додаємо анімацію для зображень з класами 'popup_image' і 'popup_image2'
    const images = popups[index].querySelectorAll('.popup_image, .popup_image2');
    
    // Скидаємо стилі для всіх зображень перед показом
    images.forEach(image => {
        image.style.opacity = '0'; // Скидаємо opacity
        image.style.transform = 'translateY(20px)'; // Повертаємо зміщення
        
        setTimeout(() => {
            image.classList.add('show_image');
            image.style.opacity = '1'; // Додаємо opacity
            image.style.transform = 'translateY(0)'; // Повертаємо на місце
        }, 300); // Затримка перед показом зображення
    });
}

// Функція закриття всіх попапів
function closeAllPopups() {
    popups.forEach(popup => {
        const images = popup.querySelectorAll('.popup_image, .popup_image2');
        popup.classList.remove('show_popup'); // Закриваємо попап
        
        // Скидаємо стилі для всіх зображень після затримки
        setTimeout(() => {
            images.forEach(image => {
                image.classList.remove('show_image'); // Скидаємо анімацію зображення
                image.style.opacity = '0'; // Скидаємо opacity на 0
                image.style.transform = 'translateY(20px)'; // Повертаємо зміщення
            });
        }, 300); // Затримка на 300мс, щоб відповідало часу анімації
    });
    overlay.classList.remove('show_popup'); // Закриваємо overlay
}

// Додаємо обробники подій для кожного блоку з класом 'glass_effect'
characters.forEach((character, index) => {
    character.addEventListener('click', () => openPopup(index));
});

// Додаємо обробники подій для кнопок закриття всередині кожного попапу
document.querySelectorAll('.button_closing_waifu').forEach(button => {
    button.addEventListener('click', closeAllPopups);
});

// Закриття попапів при натисканні на затемнення
overlay.addEventListener('click', closeAllPopups);

// Додаємо обробник подій для закриття попапів при натисканні клавіші Esc
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { // Перевірка на натискання клавіші Esc
        closeAllPopups();
    }
});


// Функція для автопрогравання аудіо при відкритті попапу
function playAudio(index) {
    const audioElement = popups[index].querySelector('audio');
    if (audioElement) {
        audioElement.play();
    }
}

// Функція для паузи аудіо при закритті попапу
function pauseAudio(index) {
    const audioElement = popups[index].querySelector('audio');
    if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0; // Скидаємо аудіо до початку
    }
}

// Функція закриття всіх попапів і зупинки аудіо
function closeAllPopupsWithAudio() {
    popups.forEach((popup, index) => {
        popup.classList.remove('show_popup'); // Закриваємо попап
        pauseAudio(index); // Зупиняємо аудіо
    });
    overlay.classList.remove('show_popup'); // Закриваємо overlay
}

// Додаємо обробники подій для відкриття попапів (потрібно підключити з основним скриптом)
characters.forEach((character, index) => {
    character.addEventListener('click', () => {
        openPopup(index); // Викликаємо функцію відкриття попапу
        playAudio(index); // Автопрогравання аудіо
    });
});

// Додаємо обробники подій для закриття всіх попапів (потрібно підключити з основним скриптом)
document.querySelectorAll('.button_closing_waifu').forEach((button, index) => {
    button.addEventListener('click', () => {
        closeAllPopupsWithAudio(); // Закриваємо попапи і зупиняємо аудіо
    });
});

// Закриття попапів при натисканні на overlay і зупинка аудіо
overlay.addEventListener('click', closeAllPopupsWithAudio);

// Закриття попапів при натисканні клавіші Esc
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeAllPopupsWithAudio(); // Закриваємо попапи і зупиняємо аудіо
    }
});



// Функція для відкриття попапа з новим унікальним ідентифікатором
function openMediaPopup(id) {
    // Закрити всі медіа-попапи перед відкриттям нового
    const mediaPopups = document.querySelectorAll('.media_popup');
    mediaPopups.forEach(popup => {
        popup.classList.remove('show');
    });

    // Відкриваємо потрібний попап
    const popup = document.getElementById(id);
    if (popup) {
        popup.classList.add('show');
    }
}

// Функція для закриття медіа-попапа
function closeMediaPopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.classList.remove('show');
    }
}

// Закриття медіа-попапа при натисканні на фон
window.onclick = function(event) {
    const mediaPopups = document.querySelectorAll('.media_popup');
    mediaPopups.forEach(popup => {
        if (event.target === popup) {
            popup.classList.remove('show');
        }
    });
};

// Закриття медіа-попапа при натисканні на інші блоки
const mediaBoxes = document.querySelectorAll('.favourite > div');
mediaBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const openPopupId = box.classList[0].replace('movies_boxes', 'media_popup');
        const popup = document.getElementById(openPopupId);
        
        // Якщо попап відкритий, закриваємо його, інакше відкриваємо новий
        if (popup && popup.classList.contains('show')) {
            closeMediaPopup(openPopupId);
        } else {
            openMediaPopup(openPopupId);
        }
    });
});


function toggleSpecs() {
    var specs = document.getElementById('hidden-specs');
    
    if (specs.style.display === 'block') {
        specs.style.display = 'none'; // Ховаємо вікно
    } else {
        specs.style.display = 'block'; // Показуємо вікно
    }
}


function toggleInfoMyself() {
    var specs = document.getElementById('hidden-info-myself');
    
    if (specs.style.display === 'block') {
        specs.style.display = 'none'; // Ховаємо вікно
    } else {
        specs.style.display = 'block'; // Показуємо вікно
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const cloudImg = document.querySelector(".image_float_cloud img");

    // Затримка у 5 секунд перед появою
    setTimeout(() => {
        cloudImg.classList.add("visible"); // Додаємо клас для появи

        // Затримка у 4 секунди перед зникненням
        setTimeout(() => {
            cloudImg.classList.remove("visible"); // Видаляємо клас для зникнення
        }, 4000);
    }, 5000);
});

document.addEventListener("DOMContentLoaded", () => {
    const ratingAndBack = document.querySelector('.rating_and_back');
    const stickyElement = document.getElementById('stickyElement');

    // Додано getBoundingClientRect для визначення поточної позиції елемента
    window.addEventListener('scroll', function() {
        const rect = stickyElement.getBoundingClientRect(); // Отримуємо позицію елемента

        // Перевіряємо, чи досяг елемент верхньої частини вікна
        if (rect.top <= 0) {
            ratingAndBack.classList.add('fixed'); // Додаємо клас для фіксації
        } else {
            ratingAndBack.classList.remove('fixed'); // Видаляємо клас для фіксації
        }
    });
});


