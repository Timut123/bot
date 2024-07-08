import React from 'react';
import { Link } from 'react-router-dom';
import { BiShoppingBag, BiTransfer, BiUser, BiTransferAlt } from 'react-icons/bi'; // Пример иконок, можно выбрать подходящие
import './HomePage.css'; // Импорт CSS файла, где определены стили для HomePage компонента

const HomePage = () => {
  return (
    <div className='HomePage'>
      <div className='HomePage-ButtonRow'>
        <div className='HomePage-ButtonWrapper'>
          <BiShoppingBag className='HomePage-Icon' />
          <Link to='/payments' className='HomePage-Button'>
            Купить
          </Link>
        </div>
        <div className='HomePage-ButtonWrapper'>
          <BiTransfer className='HomePage-Icon' />
          <Link to='/user' className='HomePage-Button'>
            Отправить
          </Link>
        </div>
        <div className='HomePage-ButtonWrapper'>
          <BiUser className='HomePage-Icon' />
          <Link to='/market' className='HomePage-Button'>
            P2P Площадка
          </Link>
        </div>
        <div className='HomePage-ButtonWrapper'>
          <BiTransferAlt className='HomePage-Icon' />
          <Link to='/exchanger' className='HomePage-Button'>
            Обменик
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

