import React from 'react'
import './index.css'

export default function SecondPage() {
  return (
      <div className='second-page'>
    <div className='second-page__background'>
      <div className='second-page__dog'>
        <div className='second-page__dog-image'></div>
        <div className='second-page__elipse'></div>
      </div>
      <div className='second-page__table-block'>
      <div className='second-page__blocks'>
        <div className='second-page__block__header'>
        <p className='second-page__header'>Набор «Посылка с Контрабандой»</p>
          </div>
          <div className='second-page__options-block'>
          <div className='second-page__options'>
              <div className='second-page__option-1'>Бесплатные сервера</div>
              <div className='second-page__option-2'>Подписочный сервер</div>
          </div>
          </div>
          <div className='second-page__table'>
        <div>
          <img src={require('./clock.png')} width="62" height="65"></img>
        </div>
         <div className='second-page__table-row'>Игровое время 30 дней</div>
         <div className='second-page__table-row'>-</div>
         <div className='second-page__table-row'>30 дней</div> 
         <div>
          <img src={require('./toolbox.png')} width="62" height="65"></img>
        </div>
         <div className='second-page__table-row-long'>Запечатанный набор инструментов</div>
         <div className='second-page__table-row'>1</div>
         <div className='second-page__table-row'>1</div>
         <div>
          <img src={require('./rune.png')} width="62" height="65"></img>
        </div>
         <div className='second-page__table-row'>Хрупкая чистая руна 10-й ступени</div>
         <div className='second-page__table-row'>1</div>
         <div className='second-page__table-row'>-</div>
         <div>
          <img src={require('./symbol.png')} width="62" height="65"></img>
        </div>
         <div className='second-page__table-row'>Большой символ изобилия творца</div>
         <div className='second-page__table-row'>10</div>
         <div className='second-page__table-row'>-</div>
         <div>
          <img src={require('./mana.png')} width="62" height="65"></img>
        </div>
         <div className='second-page__table-row'>Мана-батарея</div>
         <div className='second-page__table-row'>-</div>
         <div className='second-page__table-row'>20</div>
         <div>
          <img src={require('./memory.png')} width="62" height="65"></img>
        </div>
         <div className='second-page__table-row'>Модуль памяти</div>
         <div className='second-page__table-row'>-</div>
         <div className='second-page__table-row'>10</div>
         <div>
          <img src={require('./vito-2.png')} width="62" height="65"></img>
        </div>
         <div className='second-page__table-row'>Помощник Вито</div>
         <div className='second-page__table-row'>1</div>
         <div className='second-page__table-row'>1</div>
          </div>
        </div>
        <div className='second-page__payment'>
        <div className='second-page__block__item'>
          <div className='second-page__block__image'>
{/*             <img src={require('./box.png')} width="402" height="323" /> */}
            </div>
            <div className="second-page__payment">
              <div className='second-page__payment-buttons'>
            <div className='second-page__block__price'>
              <p className='price'>399 ₽</p>
            </div>
              <div className='second-page__button-block'>
              <button>Приобрести</button>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
  )
}
