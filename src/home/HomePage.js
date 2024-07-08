import React from 'react';
import { Link } from 'react-router-dom';
import { BiShoppingBag, BiTransfer, BiUser, BiTransferAlt } from 'react-icons/bi'; // Пример иконок, можно выбрать подходящие
import './HomePage.css'; // Импорт CSS файла, где определены стили для HomePage компонента

const HomePage = () => {
  return (
    <div className='HomePage'>
      <div className='HomePage-ButtonRow'>
        <div className='HomePage-ButtonWrapper'>
          <Link to='/payments' className='HomePage-Button'>
            Купить
          </Link>
          <BiShoppingBag className='HomePage-Icon' />
        </div>
        <div className='HomePage-ButtonWrapper'>
          <Link to='/user' className='HomePage-Button'>
            Отправить
          </Link>
          <BiTransfer className='HomePage-Icon' />
        </div>
        <div className='HomePage-ButtonWrapper'>
          <Link to='/market' className='HomePage-Button'>
            P2P Площадка
          </Link>
          <BiUser className='HomePage-Icon' />
        </div>
        <div className='HomePage-ButtonWrapper'>
          <Link to='/exchanger' className='HomePage-Button'>
            Обменик
          </Link>
          <BiTransferAlt className='HomePage-Icon' />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

