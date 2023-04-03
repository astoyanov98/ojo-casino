import React from "react";
import Badge from "../badge/Badge";
import Bonus from "../bonus/Bonus";
import logo from '../../images/logo.png'
import starFull from '../../images/starFull.svg'
import starHalf from '../../images/starHalf.svg'
import BulletListItems from "../bulletListItems/BulletListItems";
import Button from "../button/Button";
import { isMobile, isTablet } from 'react-device-detect';
import "./Card.css";

const Card = () => {
  const imageCount = 4;

  const cardDesktopView = () => {
    return (
      <div className="row d-flex align-items-center card_container">
        <Badge title={"USERS CHOICE"} />
        <div className="col-12 col-md-1 col-lg-1"><span className="number">01</span></div>
        <div className="col-6 col-md-3 col-lg-2">
          <img width='100vw' src={logo} alt="" />
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <h5>PlayOjo Casino</h5>
          {[...Array(imageCount)].map((_, index) => (
            <img
              key={index}
              src={starFull}
              alt="My Image"
              width='25px'
            />
          ))}
          <img src={starHalf} width='25px' alt="" />
          <p className="rating">4.5/5</p>
        </div>
        <div className="col-12 col-md-4 col-lg-3">
          <Bonus />
        </div>
        {!isMobile ? (
          <>
            <div className="col-12 col-md-6 col-lg-2">
              <BulletListItems />
            </div>
            <div className="col-12 col-md-6 col-lg-2">
              <Button label='JOUER' />
            </div>
          </>
        ) : (
          <>
            <div className="col-12 col-md-6 col-lg-2 mt-2">
              <Button label='JOUER' />
            </div>
            <div className="col-12 col-md-6 col-lg-2 mt-2">
              <BulletListItems />
            </div>
          </>
        )}
      </div>
    )
  }

  const cardTabletView = () => {
    return (
      <div className="card_container p-2">
        <Badge title={"USERS CHOICE"} />
        <div className="row">
          <div className="col-4">
            <span className="number">01</span>
            <img height='100%' src={logo} alt="" />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col">
                <h5>PlayOjo Casino</h5>
                {[...Array(imageCount)].map((_, index) => (
                  <img
                    key={index}
                    src={starFull}
                    alt="My Image"
                    width='25px'
                  />
                ))}
                <img src={starHalf} width='25px' alt="" />
                <p className="rating">4.5/5</p>
              </div>
              <div className="col">
                <Bonus />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <Button label='JOUER' />
              </div>
            </div>
          </div>
        </div>
        <div>
          <BulletListItems isOneLine='true' />
        </div>
      </div>
    )
  }

  return (
    <>
      {isTablet ? cardTabletView() : cardDesktopView()}
    </>
  );
};

export default Card;
