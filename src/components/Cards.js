import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return(
        <div className='cards'>
            <h1>Check out these destinations:</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src="images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                         <CardItem 
                            src="images/img-2.jpg"
                            text="Travel through the Island of Bali in a Private Cruise"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                    <ul className='cards__items'>
                         <CardItem 
                            src="images/img-1.jpg"
                            text="Climb through a vast mountain range"
                            label="Adventure"
                            path="/services"
                        />
                         <CardItem 
                            src="images/img-5.jpg"
                            text="Wine and Dine at boujie five star resturants"
                            label="Luxary"
                            path="/services"
                        />
                    </ul>
                    <ul className='cards__items'>
                         <CardItem 
                            src="images/img-7.jpg"
                            text="Wake up early to awedropping sunrises at our seaside resorts"
                            label="Exploration"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Cards