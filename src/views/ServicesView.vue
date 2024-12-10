<template>

    <section class="services">
        <div class="services__title">
            <div class="container">
                <h1 class="title title__services">Аренда беседки</h1>
            </div>
        </div>
        <img class="services__img services__img--top" src="@/assets/img/services_top.jpg" alt="Беседка">
        <div class="container">
            <div class="services__container">
                <h2 class="table__title">Прейскурант цен на платные услуги ГАУ ДО СО «СШОР Антс» с 01 декабря 2023 года</h2>
                <table class="table">
                    <thead>
                        <tr>
                        <th>№ п/п</th>
                        <th class="table__align-left">Наименование услуги</th>
                        <th>ед. изм.</th>
                        <th>цена, руб. (с НДС)</th>
                        </tr>
                    </thead>
                    <tbody class="table__body">
                        <tr>
                            <td class="table__align-left" colspan="4">
                                Беседки (у спортивного гостиничного комплекса)
                            </td>
                        </tr>                            
                        <tr>
                        <td>1</td>
                        <td align="left" class="table__align-left">Беседка маленькая</td>
                        <td>час</td>
                        <td>450.00</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td class="table__align-left">Беседка большая</td>
                        <td>час</td>
                        <td>600.00</td>
                        </tr>
                    </tbody>
                </table>
                <div class="services__info">
                    <p class="services__info-text">График работы: 09:00 – 22:00</p>
                    <p class="services__info-text">Подробнее по телефону: +7(343)541-88-43</p>
                </div>
            </div>
        </div>        
        <img class="services__img services__img--bottom" src="@/assets/img/srvices_bottom.jpg" alt="Беседка">
    </section>
</template>

<style>
    .services{
        position: relative;
    }
    .services__title{
        position: absolute;
        width: 100vw;
        top: 114px;
    }
    .title__services{
        text-align-last: left;
    }
    .services__img{
        width: 100%;
    }
    .services__img--bottom{
        margin-bottom: 67px;
    }
    .services__container{
        position: relative;
        border: 2px solid rgb(0, 48, 157);
        border-radius: 20px;
        background: rgb(255, 255, 255);
        padding: 19px 15px 47px 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -180px;
        margin-bottom: -150px;
    }
    .table__title{
        margin-bottom: 38px;
        font-size: 24px;
        font-weight: 400;
        line-height: 35px;
        text-align: center;
    }
    th, td {
        padding: 10px 25px;
        font-size: 24px;
        font-weight: 400;
        line-height: 35px;
        text-align: center;
    }
    .table__align-left{
        text-align: left;
    }
    .table__body::before, .table__body::after{
        content: '';
        display: block;
        position: absolute;
        background-color: rgb(0, 48, 157);
        height: 2px;
        width: 100%;
        left: 0;
    }
    .services__info{
        font-size: 24px;
        font-weight: 400;
        line-height: 35px;
        letter-spacing: 0%;
        text-align: center;
        margin-top: 38px;
    }
    .services__info-text{
        margin-bottom: 0;
    }
    @media screen and (max-width: 768px){
        th, td {
        padding: 10px 5px;
        font-size: 20px;
        line-height: 29px;
        text-align: left;
        }
        
        .table__body::before, .table__body::after{
            display: none;
        }        
        .services__container{
            padding-bottom: 39px;
            margin: 34px 0;
        }
        .table__title{
            margin-bottom: 31px;
            margin-left: 23px;
            margin-right: 23px;
        }        
        .services__title{
            top: 12px;
        }
        .title__services{
            text-align: center;
            text-align-last: center;
        }
        
        .services__img--bottom{
            margin-bottom: 34px;
        }
    }
</style>