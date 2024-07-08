import React from 'react';
import { Link } from 'react-router-dom';
import { BiShoppingBag, BiTransfer, BiUser, BiTransferAlt } from 'react-icons/bi';
import './HomePage.css'; // Подключение CSS файла

const HomePage = () => {
  return (
    <div className='HomePage'>
      <div className='HomePage-Icons'>
        <BiShoppingBag className='HomePage-Icon' />
        <BiTransfer className='HomePage-Icon' />
        <BiUser className='HomePage-Icon' />
        <BiTransferAlt className='HomePage-Icon' />
      </div>
      <div className='HomePage-Button'>
        <Link to='/payments'>Купить</Link>
        <Link to='/user'>Отправить</Link>
        <Link to='/market'>P2P Площадка</Link>
        <Link to='/exchanger'>Обменик</Link>
      </div>
    </div>
  );
}

export default HomePage;
