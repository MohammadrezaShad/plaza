import React, { useState } from 'react';
import QuickView from '../../../dialogs/product';
import Dialog from '../../../shared/dialog';

import {
    Title
} from './home.styled';




const HomePage = () => {
    const [modalIsShow, setModalIsShow] = useState(false);

    const modalCloseHandler = () => {
        setModalIsShow(false);
    }

    return (
        <div>
            <Title>home client</Title>
            
            <button onClick={() => {setModalIsShow(true)}}>show modal</button>
            <div style={{height:'1000px'}}></div>
            <QuickView open={modalIsShow} onClose={modalCloseHandler} />
        </div>
    )
}


export default HomePage;