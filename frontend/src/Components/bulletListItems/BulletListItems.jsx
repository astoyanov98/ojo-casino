import React from "react";
import './BulletListItems.css'
import Check from '../../images/check.svg'

const BulletListItems = ({ isOneLine }) => {
    return (
        <div className="row mt-2" style={{ textAlign: 'left' }}>
            <div className={isOneLine && 'col'}>
                <img src={Check} alt="" />
                <span className="bulletText">Retraits rapides</span>
            </div>
            <div className={isOneLine && 'col'}>
                <img src={Check} alt="" />
                <span className="bulletText">Enregistrement en douceur</span>
            </div>
            <div className={isOneLine && 'col'}>
                <img src={Check} alt="" />
                <span className="bulletText">Benefices non imposables</span>
            </div>
        </div>
    )
}

export default BulletListItems;