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
            <QuickView open={modalIsShow} onClose={modalCloseHandler} />
            <h2>test1</h2>
            <h2>test2</h2>
            <h2>test3</h2>
            <h2>test4</h2>
            <h2>test5</h2>
            <h2>test6</h2>
            <h2>test7</h2>
            <h2>test8</h2>
            <h2>test9</h2>
            <h2>test10</h2>
            <h2>test1</h2>
            <h2>test2</h2>
            <h2>test3</h2>
            <h2>test4</h2>
            <h2>test5</h2>
            <h2>test6</h2>
            <h2>test7</h2>
            <h2>test8</h2>
            <h2>test9</h2>
            <h2>test10</h2>
            <h2>test1</h2>
            <h2>test2</h2>
            <h2>test3</h2>
            <h2>test4</h2>
            <h2>test5</h2>
            <h2>test6</h2>
            <h2>test7</h2>
            <h2>test8</h2>
            <h2>test9</h2>
            <h2>test10</h2>
            <h2>test1</h2>
            <h2>test2</h2>
            <h2>test3</h2>
            <h2>test4</h2>
            <h2>test5</h2>
            <h2>test6</h2>
            <h2>test7</h2>
            <h2>test8</h2>
            <h2>test9</h2>
            <h2>test10</h2>
            <h2>test1</h2>
            <h2>test2</h2>
            <h2>test3</h2>
            <h2>test4</h2>
            <h2>test5</h2>
            <h2>test6</h2>
            <h2>test7</h2>
            <h2>test8</h2>
            <h2>test9</h2>
            <h2>test10</h2>
           
            <div style={{height:'1000px'}}></div>
        </div>
    )
}


export default HomePage;