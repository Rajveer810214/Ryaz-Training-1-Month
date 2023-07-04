import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-duplicates

import { useDispatch } from 'react-redux';

import { bindActionCreators } from 'redux';
import { actioncreators } from '../state/index';

function Body () {
  const dispatch = useDispatch();
  const actions = bindActionCreators(actioncreators, dispatch);
  const images = [
    'https://sslimages.shoppersstop.com/sys-master/root/h41/h33/30190022098974/EOSS-Main-Banner-Web--hp--page--2023-06--15-new-sale.jpg',
    'https://sslimages.shoppersstop.com/sys-master/root/h06/h0f/30223702196254/private-brand_Top-Banner-web_200623.jpg',
    'https://sslimages.shoppersstop.com/sys-master/root/hd9/hab/30323975815198/fragrances_Top-Banner-web_2023-07-03-new-creative-hp-pg.jpg',
    'https://sslimages.shoppersstop.com/sys-master/root/h17/h08/30322125373470/Menswear_Top-Banner-web_030723.jpg',
    'https://sslimages.shoppersstop.com/sys-master/root/h99/h00/30322125111326/westernwear_Top-Banner-web_030723.jpg',
    'https://sslimages.shoppersstop.com/sys-master/root/h58/h04/30322125242398/watches_Top-Banner-web_030723.jpg',
    'https://sslimages.shoppersstop.com/sys-master/root/he5/h11/30322125635614/footwear_Top-Banner-web_030723.jpg'
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className='body' style={{ fontFamily: 'monsteerat' }}>
      <div className='image-container'>
        <img src={images[activeIndex]} alt='' />
      </div>
      <p style={{ textAlign: 'center' }}>SUMMER COLLECTION</p>
      <h2 className='tshirt' style={{ textAlign: 'center' }}>
        Popular T-shirts
      </h2>
      <div className='cards'>
        <div className='card1'>
          <img
            src='https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a-600x731.jpg'
            alt=''
          ></img>
          <button
            onClick={() => {
              actions.buyProduct(1000);
            }}
          >
            Add to cart <span>Rs.1000</span>
          </button>
        </div>
        <div className='card1'>
          <img
            src='https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-06-a-600x731.jpg'
            alt=''
          ></img>
          <button
            onClick={() => {
              actions.buyProduct(1000);
            }}
          >
            Add to cart <span>Rs.1000</span>
          </button>
        </div>
        <div className='card1'>
          <img
            src='https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-10-a-600x731.jpg'
            alt=''
          ></img>
          <button
            onClick={() => {
              actions.buyProduct(1000);
            }}
          >
            Add to cart <span>Rs.1000</span>
          </button>
        </div>
        <div className='card1'>
          <img
            src='https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-08-a-600x731.jpg'
            alt=''
          ></img>
          <button
            onClick={() => {
              actions.buyProduct(1000);
            }}
          >
            Add to cart <span>Rs.1000</span>
          </button>
        </div>
      </div>
      <h1 className='watchtext' style={{ textAlign: 'center' }}>
        Titan Best Sellers
      </h1>
      <div className='watches'>
        <div className='card1'>
          <img
            src='https://sslimages.shoppersstop.com/sys-master/images/he3/hcc/29846581739550/WTTNR1805QP01_NoColour.jpg_136Wx204H'
            alt=''
          ></img>
          <button
            onClick={() => {
              actions.buyProduct(2000);
            }}
          >
            Add to cart <span>Rs.2000</span>
          </button>
        </div>
        <div className='card1'>
          <img
            src='https://sslimages.shoppersstop.com/sys-master/images/h0e/h04/29843273777182/WTTNR95146KD02_NoColour.jpg_136Wx204H'
            alt=''
          ></img>
          <button
            onClick={() => {
              actions.buyProduct(1000);
            }}
          >
            Add to cart <span>Rs.1000</span>
          </button>
        </div>
        <div className='card1'>
          <img
            src='https://sslimages.shoppersstop.com/sys-master/images/he3/hcc/29846581739550/WTTNR1805QP01_NoColour.jpg_136Wx204H'
            alt=''
          ></img>
          <button
            onClick={() => {
              actions.buyProduct(1500);
            }}
          >
            Add to cart <span>Rs.1500</span>
          </button>
        </div>
        <div className='card1'>
          <img
            src='https://sslimages.shoppersstop.com/sys-master/images/h2b/h02/29852241756190/WTTNR2606WM09_NoColour.jpg_136Wx204H'
            alt=''
          ></img>
          <button
            onClick={() => {
              actions.buyProduct(2000);
            }}
          >
            Add to cart <span>Rs.2000</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Body;
