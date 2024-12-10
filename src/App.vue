<template>
  <header class="header" id="header">
        <div class="hamburger">
            <span class="hamburger__line"></span>
        </div>
        <div class="header__top">
            <div class="container">
                <div class="row">
                    <div class="header__top-left col-md-9">
                        <router-link to="/"><img src="@/assets/img/logo.png" alt="Логотип" class="header__img"></router-link>
                        <img src="@/assets/img/sport.png" alt="Министерство физической культуры и спорта Свердловской области" class="header__img">
                        <img src="@/assets/img/oblast.png" alt="" class="header__img">
                    </div>
                    <div class="header__top-right col-md-3">
                        <a href="mailto:aist.info@mail.ru" class="header__info">aist.info@mail.ru</a>
                        <a href="tel:+7(3435)41-81-17" class="header__info">+7(3435)41-81-17</a>
                        <a href="tel:+7(3435)41-88-37" class="header__info">+7(3435)41-88-37</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="header__bottom">
            <div class="container">
                <nav class="header__links">
                    <router-link to="/about" href="#" class="header__link">Сведения об образовательной организации</router-link>
                    <router-link to="/" href="#" class="header__link">Информация для родителей</router-link>
                    <router-link to="/" href="#" class="header__link">Антидопинг</router-link>
                    <router-link to="/" href="#" class="header__link">Услуги</router-link>
                    <router-link to="/" href="#" class="header__link">Спортивный комплекс</router-link>
                    <router-link to="/" href="#" class="header__link">Профилактические мероприятия</router-link>
                    <router-link to="/" href="#" class="header__link">Новости</router-link>
                </nav>
            </div>
        </div>
    </header>
    <main>
      <router-view/>
    </main>
    <footer class="footer">
        <div class="container">
            <div class="footer__container">
                <router-link v-scroll-to="'#header'" to="/"><img src="@/assets/img/logo.png" alt="Логотип" class="footer__logo"></router-link>
                <div class="footer__info">
                    Свердловская область, <br>
                    Нижний Тагил, <br>
                    Долгая улица, 1
                </div>
                <div class="footer__info">
                    <a href="mailto:aist.info@mail.ru" class="footer__link">Email: aist.info@mail.ru</a>
                    <a href="tel:+7(3435)41-81-17" class="footer__link">Телефон: +7(3435)41-81-17</a>
                    <a href="tel:+7(3435)41-88-37" class="footer__link">Телефон: +7(3435)41-88-37</a>
                    <a href="https://minobrnauki.gov.ru/" class="footer__link">Минобрнауки РФ</a>
                    <a href="https://midural.ru/community/100727/document69407/" class="footer__link">Горячая линия ФАДН</a>
                    <a href="https://minsport.midural.ru/" class="footer__link">Министерство спорта Свердловской области</a>
                </div>
                <a href="https://vk.com/club198181038"><img src="@/assets/img/vk.png" alt="VK" class="footer__img"></a>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
    };
</script>

<style>
@import url('@/css/bootstrap-grid.min.css');
@import url('@/css/bootstrap-reboot.min.css');
@import url('@/css/font.css');
#app {
    font-family: var(--text-font-family);
    color: #000;
}
:root{
    --main-color: #00665C;
    --text-font-family: Jost, sans-serif;
    --border-color: #00309D;
    --button-color: #009183;
}

body{
    background-color: var(--main-color);
}

.header{
    position: relative;
}

.header__top{
    background-color: #fff;
    padding-top: 37px;
    padding-bottom: 17px;
}

.header__img{
    max-height: 98px;
    margin-right: 16px;
}

.header__info{
    display: block;
    color: #000;
    font-size: 20px;
    font-weight: 400;
    line-height: normal;
    text-align: right;
    text-decoration: none;
}

.header__info:hover{
    color: #000;
    text-decoration: underline;
}

.header__bottom{
    padding-bottom: 34px;
    padding-top: 17px;
}

.header__links{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
}

.header__link{
    font-size: 24px;
    color: #000;
    font-weight: 500;
    line-height: 35px;
    letter-spacing: 0%;
    text-align: center;
    padding: 8px 18px;
    background-color: #fff;
    border: 2px solid var(--border-color);
    border-radius: 10px;
    text-decoration: none;
    transition: transform .25s ease-out;
}

.header__link:hover{
    color: #000;
    transform: scale(1.05);
}

.hamburger{
    display: none;
    position: absolute;
    top: 23px;
    right: 26px;
}

.hamburger__line{
    display: block;
    background-color: var(--button-color);
    height: 7px;
    width: 66px;
}

.hamburger__line::before, .hamburger__line::after{
    content: "";
    display: block;
    position: absolute;
    background-color: var(--button-color);
    height: 7px;
    width: 66px;
}

.hamburger__line::before{
    top: -12px;
    left: 0;
}

.hamburger__line::after{
    top: 12px;
    left: 0;
}



.footer{
    background-color: #fff;
    padding: 90px 0;
}

.footer__container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer__logo{
    max-height: 98px;
}

.footer__img{
    width: 56px;
    height: 56px;
}

.footer__info{
    display: flex;
    flex-direction: column;
    align-items:center;
    font-size: 20px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0%;
    text-align: center;
    color: var(--border-color);
}

.footer__link{
    color: var(--border-color);
}

.footer__link:hover{    
    color: var(--border-color);
    text-shadow: 0 0 1px var(--border-color);
}

.btn{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items:center;
    border: 2px solid rgb(0, 48, 157);
    border-radius: 10px;
    background: rgb(0, 145, 131);
    color: #fff;
    min-width: 269px;
    width: fit-content;
    padding: 0 24px;
    height: 51px;
    font-size: 24px;
    font-weight: 400;
    line-height: 35px;
    text-decoration: none;
}

.btn:hover{
    color: #fff;
}

.title{
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    line-height: 69px;
    text-align: center;
    padding-bottom: 18px;
}

@media screen and (min-width: 1400px){  /*xxl*/

}
@media screen and (max-width: 1400px){  /*xl*/

}

@media screen and (max-width: 1200px){ /*lg*/


}

@media screen and (max-width: 992px){ /*md*/    
    .btn{
        min-width: 240px;
        height: 46px;
        font-size: 20px;
        line-height: 29px;
    }
}

@media screen and (max-width: 768px){ /*sm*/
    .hamburger{
        display: block;
    }
    .header__bottom{
        height: 0;
        padding: 0;
        overflow: hidden;
        transform: scaleY(0);
        transition: padding .25s ease-out,transform .25s ease-out;
    }
    
    .header__bottom--active{
        height: auto;
        padding-bottom: 34px;
        padding-top: 17px;
        transform: scaleY(1);
    }
    .header__links{        
        flex-direction: column;
        justify-content: flex-start;
    }
    .btn{
        padding: 0 12px;
    }

}

@media screen and (max-width: 576px){ /*xs*/
    .header__img{
        max-height: 54px;
        margin-right: 9px;
    }
    .header__info{
        font-size: 16px;
    }
    .header__link{
        font-size: 16px;
        
        padding: 4px;
    }

    .footer{
        padding-top: 60px;
        padding-bottom: 128px;
    }
    .footer__container{
        flex-direction: column;
        gap: 83px;
    }

}

</style>
