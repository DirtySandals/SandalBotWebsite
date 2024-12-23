import React from 'react';
import Board from './components/Board';
import './Board.css'
import Nav from './components/Nav';
import Footer from './components/Footer';

function Play() {
    return (
        <div className="pageWrapper">
            <Nav />
            <div id="play">
                <Board />
            </div>
            <Footer />
        </div>
    )
}

export default Play;