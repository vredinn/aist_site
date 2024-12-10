<template>
    <section class="welcome">
            <div class="container">
                <h1 class="welcome__text">
                    Государственное автономное учреждение дополнительного образования Свердловской области «Спортивная школа олимпийского резерва «Аист»
                </h1>
            </div>
    </section>
    <section class="options">
        <div class="container">
        <div class="slider">
            <img src="@/assets/icons/prev.svg" alt="prev" class="slider__button slider__button_prev"/>
            <ul id="slider1" class="slider__area">
                <li class="slider__card">
                    <div class="slider__card-img-wrapper">
                        <img class="slider__card-img slider__card-img" src="@/assets/img/double.webp" alt="img" draggable="false">
                    </div>
                    <span class="slider__title">Лыжное двоеборие</span>
                    <a class="btn btn--slider" href="#">Читать подробнее</a>
                </li>
                <li class="slider__card">
                    <div class="slider__card-img-wrapper">
                        <img class="slider__card-img slider__card-img" src="@/assets/img/jumping.jpg" alt="img" draggable="false">
                    </div>
                    <span class="slider__title">Прыжки на лыжах с трамплина</span>
                    <a class="btn btn--slider" href="#">Читать подробнее</a>
                </li>
                <li class="slider__card">
                    <div class="slider__card-img-wrapper">
                        <img class="slider__card-img slider__card-img" src="@/assets/img/ski.jpg" alt="img" draggable="false">
                    </div>
                    <span class="slider__title">Горнолыжный спорт</span>
                    <a class="btn btn--slider" href="#">Читать подробнее</a>
                </li>
                <li class="slider__card">
                    <div class="slider__card-img-wrapper">
                        <img class="slider__card-img slider__card-img" src="@/assets/img/freestyle.jpg" alt="img" draggable="false">
                    </div>
                    <span class="slider__title">Фристайл</span>
                    <a class="btn btn--slider" href="#">Читать подробнее</a>
                </li>
                <li class="slider__card">
                    <div class="slider__card-img-wrapper">
                        <img class="slider__card-img slider__card-img" src="@/assets/img/racing.webp" alt="img" draggable="false">
                    </div>
                    <span class="slider__title">Лыжные гонки</span>
                    <a class="btn btn--slider" href="#">Читать подробнее</a>
                </li>
                <li class="slider__card">
                    <div class="slider__card-img-wrapper">
                        <img class="slider__card-img slider__card-img" src="@/assets/img/shooting.jpg" alt="img" draggable="false">
                    </div>
                    <span class="slider__title">Стендовая стрельба</span>
                    <a class="btn btn--slider" href="#">Читать подробнее</a>
                </li>
            </ul>                               
            <img src="@/assets/icons/next.svg" alt="next" class="slider__button slider__button_next"/>
        </div>
        </div>
    </section>
    <section class="brochure">
        <div class="container">
            <div class="brochure__container">
                <p class="brochure__text">Хочешь знать всё о ГАУ ДО СО "СШОР "АИСТ"? Тогда открой нашу брошюру!</p>
                <a href="#" class="btn">Открыть брощюру</a>
            </div>
        </div>
    </section>
    <section class="gosuslugi">
        <GosUslugi/>
    </section>
    <section class="news">
        <div class="container">
            <div class="title">Новости</div>
            <div class="slider">
                <img src="@/assets/icons/prev.svg" alt="prev" class="slider__button slider__button_prev"/>
                <ul id="slider1" class="slider__area">
                    <li class="slider__card">
                        <div class="slider__card-img-wrapper">
                            <img class="slider__card-img slider__card-img" src="@/assets/img/news1.jpg" alt="img" draggable="false">
                        </div>
                        <span class="slider__title slider__title--news">XVI городская научно-практическая конференция педагогических работников спортивных школ</span>
                        <a class="btn btn--slider" href="#">Читать подробнее</a>
                    </li>
                    <li class="slider__card">
                        <div class="slider__card-img-wrapper">
                            <img class="slider__card-img slider__card-img" src="@/assets/img/news2.jpg" alt="img" draggable="false">
                        </div>
                        <span class="slider__title slider__title--news">Учебно-тренировочное мероприятие отделения горнолыжного спорта</span>
                        <a class="btn btn--slider" href="#">Читать подробнее</a>
                    </li>
                    <li class="slider__card">
                        <div class="slider__card-img-wrapper">
                            <img class="slider__card-img slider__card-img" src="@/assets/img/news3.png" alt="img" draggable="false">
                        </div>
                        <span class="slider__title slider__title--news">День ветеранов спорта</span>
                        <a class="btn btn--slider" href="#">Читать подробнее</a>
                    </li>
                    <li class="slider__card">
                        <div class="slider__card-img-wrapper">
                            <img class="slider__card-img slider__card-img" src="@/assets/img/news4.jpg" alt="img" draggable="false">
                        </div>
                        <span class="slider__title slider__title--news">Поздравляем с днём рождения тренера-преподавателя Хоботову Кристину Эдуардовну!</span>
                        <a class="btn btn--slider" href="#">Читать подробнее</a>
                    </li>
                    <li class="slider__card">
                        <div class="slider__card-img-wrapper">
                            <img class="slider__card-img slider__card-img" src="@/assets/img/news5.png" alt="img" draggable="false">
                        </div>
                        <span class="slider__title slider__title--news">Поздравляем с днем рождения тренера Шишкина Вадима Владимировича!</span>
                        <a class="btn btn--slider" href="#">Читать подробнее</a>
                    </li>
                    <li class="slider__card">
                        <div class="slider__card-img-wrapper">
                            <img class="slider__card-img slider__card-img" src="@/assets/img/shooting.jpg" alt="img" draggable="false">
                        </div>
                        <span class="slider__title slider__title--news">Стендовая стрельба</span>
                        <a class="btn btn--slider" href="#">Читать подробнее</a>
                    </li>
                </ul>                               
                <img src="@/assets/icons/next.svg" alt="next" class="slider__button slider__button_next"/>
            </div>
            <a href="#" class="btn btn--center">Читать все новости</a>
        </div>
    </section>
    <section class="calendar">
        <div class="container">
            <div class="title">Календарь мероприятий</div>
            <div class="calendar__container">
                <iframe src="https://calendar.google.com/calendar/embed?height=500&amp;wkst=1&amp;ctz=Asia%2FYekaterinburg&amp;bgcolor=%23ffffff&amp;showTitle=0&amp;showCalendars=0&amp;showTz=0&amp;src=Z29yYWRvbGdheUBnbWFpbC5jb20&amp;color=%23039BE5" style="border:solid 1px #777;border-radius: 15px" width="100%" height="500" frameborder="0" scrolling="no"></iframe>		</div>
        </div>
    </section>
    <section class="partners">
        <div class="container">
            <div class="title">Партнеры</div>
            <div class="partners__container">
                <div class="partners__img-wrapper"><img src="@/assets/img/partner1.png" alt="Партнер" class="partners__img"></div>
                <div class="partners__img-wrapper"><img src="@/assets/img/partner2.png" alt="Партнер" class="partners__img"></div>
                <div class="partners__img-wrapper"><img src="@/assets/img/partner3.jpg" alt="Партнер" class="partners__img"></div>
                <div class="partners__img-wrapper"><img src="@/assets/img/partner4.png" alt="Партнер" class="partners__img"></div>
                <div class="partners__img-wrapper"><img src="@/assets/img/partner5.png" alt="Партнер" class="partners__img"></div>
                <div class="partners__img-wrapper"><img src="@/assets/img/partner6.png" alt="Партнер" class="partners__img"></div>
                <div class="partners__img-wrapper"><img src="@/assets/img/partner7.jpg" alt="Партнер" class="partners__img"></div>
            </div>
        </div>
    </section>
    <section class="adress">
        <div class="container">
            <div class="title">Как проехать?</div>
            <div class="row">
                <div class="col-lg-3 col-md-6 order-md-1 order-1">
                    <div class="bus">
                        <div class="bus__title">Отправление от остановки "Пенсионат "Аист"" </div>
                        <div class="bus__time">05:35</div>
                        <div class="bus__time">05:35</div>
                        <div class="bus__time">05:35</div>
                        <div class="bus__time">05:35</div>
                        <div class="bus__time">05:35</div>
                        <div class="bus__time">05:35</div>
                        <div class="bus__time">05:35</div>
                        <div class="bus__time">05:35</div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 order-md-2 order-3">
                    <div class="bus">
                        <div class="bus__title">Отправление от остановки "Вокзал" </div>
                        <div class="bus__time">05:35</div>
                        <div class="bus__time">05:35</div>
                        <div class="bus__time">05:35</div>
                        <div class="bus__time">05:35</div>
                        <div class="bus__time">05:35</div>
                        <div class="bus__time">05:35</div>
                        <div class="bus__time">05:35</div>
                        <div class="bus__time">05:35</div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 order-md-3 order-2">
                    <div class="map__container">
			<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1DuIVN-aQlDgHio8WePZedLiMUC1PepU&amp;ehbc=2E312F&amp;noprof=1" width="100%" height="480"></iframe>		</div>
                </div>
                <div class="col-lg-3 col-md-6 order-md-4 order-4">
                    <div class="map__container">
                        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1sGX9fYyHEEmYue4OKICSBrA7ezk9QqY&amp;ehbc=2E312F&amp;noprof=1" width="100%" height="480"></iframe>		</div>
                </div>
            </div>
        </div></section>
</template>

<script>
import GosUslugi from '@/components/GosUslugi.vue';
    export default {
        name: 'HomeView',
        components:{
            GosUslugi
        },
        mounted(){
            
let sliders = document.querySelectorAll(".slider");
let slider_areas = document.querySelectorAll(".slider__area");
let sliderBtns = document.querySelectorAll(".slider__button");

let isDragging = false, startX, startScrollLeft;
let timeoutIds = new Map(); // Для хранения таймеров для каждого слайдера

// Инициализация слайдеров
for (let sl_area of slider_areas) {
    let firstCardWidth = sl_area.querySelector(".slider__card").offsetWidth;
    let cardPerView = Math.round(sl_area.parentElement.offsetWidth / firstCardWidth);
    let carouselChildrens = [...sl_area.children];

    // Клонируем последние и первые карточки для бесконечной прокрутки
    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        sl_area.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    carouselChildrens.slice(0, cardPerView).forEach(card => {
        sl_area.insertAdjacentHTML("beforeend", card.outerHTML);
    });
}

// Логика кнопок прокрутки
sliderBtns.forEach(btn => {
    let firstCardWidth = btn.parentElement.querySelector(".slider__area").querySelector(".slider__card").offsetWidth;
    btn.addEventListener("click", () => {
        let sl_area = btn.parentElement.querySelector(".slider__area");
        sl_area.scrollLeft += btn.classList.contains("slider__button_prev") ? -firstCardWidth : firstCardWidth;
        infiniteScroll(sl_area);
    });
});

// Начало перетаскивания
function dragStart(e, sl_area) {
    isDragging = true;
    sl_area.classList.add("slider__area_dragging");
    startX = e.pageX || e.touches[0].pageX;
    startScrollLeft = sl_area.scrollLeft;
}

// Логика перетаскивания
function dragging(e, sl_area) {
    if (!isDragging) return;
    sl_area.scrollLeft = startScrollLeft - ((e.pageX || e.touches[0].pageX) - startX);
}

// Остановка перетаскивания
function dragStop(sl_area) {
    isDragging = false;
    sl_area.classList.remove("slider__area_dragging");
    infiniteScroll(sl_area); // Проверяем необходимость циклической прокрутки после остановки
}

// Автоматическое воспроизведение слайдера
function autoPlay(sl_area) {
    let firstCardWidth = sl_area.querySelector(".slider__card").offsetWidth;
    let id = setInterval(() => {
        sl_area.scrollLeft += firstCardWidth;
        infiniteScroll(sl_area);
    }, 2500);
    timeoutIds.set(sl_area, id); // Сохраняем таймер для каждого слайдера
}

// Остановка автоматического воспроизведения
function stopAutoPlay(sl_area) {
    clearInterval(timeoutIds.get(sl_area)); // Останавливаем текущий интервал
}

// Бесконечная прокрутка
function infiniteScroll(sl_area) {
    // Если слайдер прокручен до начала
    if (sl_area.scrollLeft <= 0) {
        sl_area.classList.add("slider__area_no-transition");
        sl_area.scrollLeft = sl_area.scrollWidth - (2 * sl_area.offsetWidth); // Прокручиваем к концу
        sl_area.classList.remove("slider__area_no-transition");
    }
    // Если слайдер прокручен до конца
    else if (Math.abs(sl_area.scrollLeft - (sl_area.scrollWidth - sl_area.offsetWidth)) < 2) {
        sl_area.classList.add("slider__area_no-transition");
        sl_area.scrollLeft = sl_area.offsetWidth; // Прокручиваем к началу
        sl_area.classList.remove("slider__area_no-transition");
    }
}

// Добавляем события для каждого слайдера отдельно
for (let sl_area of slider_areas) {
    sl_area.addEventListener("mousedown", (e) => {
        dragStart(e, sl_area);
        function onMouseMove(e) {
            dragging(e, sl_area);
        }
        function onMouseUp() {
            dragStop(sl_area);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        }
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
    });

    // Добавляем поддержку touch-событий
    sl_area.addEventListener("touchstart", (e) => dragStart(e, sl_area));
    sl_area.addEventListener("touchmove", (e) => dragging(e, sl_area));
    sl_area.addEventListener("touchend", () => dragStop(sl_area));

    sl_area.addEventListener("scroll", () => infiniteScroll(sl_area));
}

// Добавляем остановку и воспроизведение при наведении/уходе курсора
for (let slider of sliders) {
    slider.addEventListener("mouseenter", () => {
        stopAutoPlay(slider.querySelector(".slider__area"));
    });
    slider.addEventListener("mouseleave", () => {
        autoPlay(slider.querySelector(".slider__area"));
    });
}

// Запускаем автоматическое воспроизведение для каждого слайдера
slider_areas.forEach(sl_area => autoPlay(sl_area));

        }
    }
</script>


<style>
    .welcome{
        padding-top: 36px;
        background: url('@/assets/img/welcome.png');
        background-size: cover;
        background-repeat: no-repeat;
        height: 580px;
    }
    .welcome__text{
        color: #fff;
        font-size: 36px;
        font-weight: 700;
        line-height: 52px;
        text-align: left;
    }

    .options{
        padding-top: 36px;
    }

    .slider {
        max-width: 100%;
        position: relative;
        padding: 0 80px;
    }
    .slider__button {
        z-index: 2;
        height: 60px;
        width: 60px;
        background: #fff;
        border: 2px solid rgb(0, 48, 157);
        border-radius: 10px;
        cursor: pointer;
        position: absolute;
        top: 48%;
        transform: translateY(-50%);
        padding: 10px;
    }

    .slider__button:first-child {
        left: 0;
    }
    .slider__button:last-child {
        right: 0;
    }
    .slider__area {
        padding: 0;
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: calc((100% / 3) - 13.35px);
        gap: 20px;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        scrollbar-width: 0;
        margin: 0;
    }
    .slider__card {
        display: flex;
        align-content: center;
        justify-content: center;
        height: 100%;
        scroll-snap-align: start;
        list-style: none;
        border: 2px solid rgb(0, 48, 157);
        border-radius: 20px;
        background-color: #fff;
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        overflow: visible;
        padding: 42px 32px;
    }

    .slider__area::-webkit-scrollbar {
        display: none;
    }
    .slider__area_no-transition {
        scroll-behavior: auto;

    }
    .slider__area_dragging {
        scroll-snap-type: none;
        scroll-behavior: auto;
    }
    .slider__area_dragging .slider__card {
        cursor: grab;
        user-select: none;
        -webkit-user-select: none;
    }
    .slider__card-img-wrapper{
        height: 210px;
        width: 100%;
    }
    .slider__card-img {
        width: 100%;
        height: 100%;
        object-fit:cover;
        border: 2px solid rgb(0, 48, 157);
        border-radius: 10px;
        z-index: 1;
        display: flex;
        align-content: center;
        justify-content: center;
    }
    .slider__title {
        margin-top: 22px;
        min-height: 100px;
        font-size: 32px;
        font-weight: 400;
        line-height: 46px;
        letter-spacing: 0%;
        text-align: center;
        margin-bottom: 16px;
    }

    .slider__title--news{
        font-size: 20px;
        line-height: 30px;
    }

    .btn--slider{
        min-width: 0;
        width: 100%;
        margin-top: auto;
    }

    .btn--center{
        margin: 0 auto;
        margin-top: 36px;
    }

    .brochure{
        padding-top: 36px;
        padding-bottom: 48px;
    }
    .brochure__container{
        padding: 33px 55px 44px 55px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 2px solid rgb(0, 48, 157);
        border-radius: 20px;
        background: rgb(255, 255, 255);
    }
    .brochure__text{
        font-size: 48px;
        font-weight: 400;
        line-height: 69px;
        letter-spacing: 0%;
        text-align: center;
        margin-bottom: 48px;
    }

    .news{
        padding-top: 36px;
    }

    .calendar{
        padding-top: 36px;
    }
    .calendar__container{
        border-radius: 20px;
        height: 512px;
        overflow: hidden;
        padding: 6px;
        background-color: #ffffff;
    }

    .partners{        
        padding-top: 36px;
    }
    .partners__container{
        background: #fff;
        border-radius: 20px;
        border: 2px solid rgb(0, 48, 157);
        display: flex;
        justify-content: center;
        gap: 20px;
        align-items:center;
        flex-wrap: wrap;
        padding: 20px 10px
    }
    .partners__img-wrapper{
        position: relative;
        max-height: 64px;
    }
    .partners__img{
        max-height: 64px;
        width: 100%;
    }
    .adress{
        padding-top: 36px;
        padding-bottom: 118px;
    }
    .bus, .map__container{
        margin-bottom: 20px;
    }
    .bus__time, .bus__title{
        font-size: 20px;
        line-height: 29px;
        text-align: center;
        border: 2px solid rgb(0, 48, 157);
        border-radius: 7px;
        background: rgb(255, 255, 255);
        padding: 12px;
    }
    .bus__title{        
        margin-bottom: 10px;
    }
    .bus__time{        
        margin-bottom: 5px;
    }
    @media screen and (max-width: 1200px){
        .slider__area {
            grid-auto-columns: calc((100% / 2) - 5px);
            gap: 10px;
        }
        .slider__card{        
            scroll-snap-align: start;
        }
    }

    @media screen and (max-width: 992px){ /*md*/

    }

    @media screen and (max-width: 768px){
        .options{
            padding-top: 27px;
        }
        .welcome__text{
            font-size: 19px;
            line-height: 27px;  
        }
        .slider__area{
            grid-auto-columns: 100%;
            gap: 10px;
        }
        .slider__card{
            padding: 38px 28px;
        }
        .slider__title{
            font-size: 24px;
            line-height: 35px;
            margin: 20px 0;
            min-height: 80px;
        }
        .slider__title--news{
            font-size: 20px;
            line-height: 29px;
            margin: 20px 0;
            min-height: 80px;
        }
        .slider__card-img-wrapper{
            height: 186px;
        }

        .brochure__container{
            padding: 33px 16px;
        }
        .brochure__text{
            font-size: 36px;
            font-weight: 400;
            line-height: 52px;
            margin-bottom: 26px;
        }
        .partners__container{
            flex-direction: column;
            background: none;
            border:none;
            padding: 0;
        }
        .partners__img-wrapper{
            max-width: 200px;
            background: #fff;
            border-radius: 15px;
            border: 2px solid rgb(0, 48, 157);
            padding: 10px 20px;
            max-height: 100%;
        }
        .partners__img{
            max-height: 100%;
        }
    }

    @media screen and (max-width: 576px){
        .slider{
            padding: 0;
        }
        .slider__button{
            display: none;
        }
    }
</style>