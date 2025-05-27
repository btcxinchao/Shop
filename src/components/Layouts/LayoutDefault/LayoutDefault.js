import React from 'react';
import Nav from '../navigation/Nav';
import './Layout.scss';
import { Outlet } from 'react-router';
import '../../../assets/scss/global.scss';

const LayoutDefault = () => {
  return (
    <>
      <Nav />
      <main id='main'>
        <Outlet /> 
        {/* Mỗi page tự quản container */}
      </main>
    </>
  );
};


export default LayoutDefault;
