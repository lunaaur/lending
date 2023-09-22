import React from 'react'
import './index.css'
import SecondPage from '../components/SecondPage/SecondPage'

export default function Main() {
  return (
    <div className='first-page-container'>
      <div className='first-page__box__glow'></div>
      <div className='first-page__background'>
        <div className="first-page__logo">
            <div className='logo'></div>
        </div>
        <div className='first-page__img-elems'>
         <div className='first-page__mafia-1'>
          <div className='mafia-1'></div>
        </div>
         <div className='first-page__box'>
         <div className='box'></div>
          </div>
         <div className='first-page__mafia-2'>
         <div className='mafia-2'></div>
          </div>
        </div>  
        <div className='first-page__text-block'>
          <div className='first-page__text-block__elems'>
            <p className='first-page__text__header'>Коллекционные издания</p>
            <p className='first-page__text__description'>Побеждайте легко, побеждайте стильно с новыми коллекционными изданиями «Аллодов Онлайн»!</p>
          </div>
        </div>
        <div className='first-page__glow'></div>
      </div>
      <div className='second-page-container'>
       <SecondPage />
      </div>
    </div>
  )
}
