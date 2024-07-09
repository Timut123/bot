import React from 'react';
import { Link } from 'react-router-dom';
import { BiShoppingBag, BiTransfer, BiUser, BiTransferAlt, BiCog, BiQrScan } from 'react-icons/bi';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className='HomePage'>
      <div className='HomePage-SettingsWrapper'>
        <Link to='/setting' className='HomePage-SettingsButton'>
          <BiCog />
        </Link>
      </div>
      <div className='HomePage-QRWrapper'>
        <Link to='/qrcode' className='HomePage-QRButton'>
          <BiQrScan />
        </Link>
      </div>
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
            P2P
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

