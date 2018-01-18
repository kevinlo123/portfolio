import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import Header from './components/header';
import HeroBanner from './components/hero-banner'

ReactDOM.render(<div>
                    <div className="header-and-hero-banner">
                        <Header /> <HeroBanner />
                    </div>
                </div>, document.getElementById('root'));
