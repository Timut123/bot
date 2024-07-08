import React from 'react';
import { Link } from 'react-router-dom';
import { BiShoppingBag, BiTransfer, BiUser, BiTransferAlt } from 'react-icons/bi'; // Пример иконок, можно выбрать подходящие
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='HomePage'>
      <div className='HomePage-IconWrapper'>
        <BiShoppingBag className='HomePage-Icon' />
        <Link to='/payments' className='HomePage-Button'>
          Купить
        </Link>
      </div>
      <div className='HomePage-IconWrapper'>
        <BiTransfer className='HomePage-Icon' />
        <Link to='/user' className='HomePage-Button'>
          Отправить
        </Link>
      </div>
      <div className='HomePage-IconWrapper'>
        <BiUser className='HomePage-Icon' />
        <Link to='/market' className='HomePage-Button'>
          P2P Площадка
        </Link>
      </div>
      <div className='HomePage-IconWrapper'>
        <BiTransferAlt className='HomePage-Icon' />
        <Link to='/exchanger' className='HomePage-Button'>
          Обменик
        </Link>
      </div>
    </div>
  );
}

export default HomePage;

