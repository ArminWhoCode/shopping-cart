import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__copy'>
                <h5 className='footer__header'>
                    &copy;{new Date().getFullYear()}
                    <span>Armin</span>
                </h5>
                <h5>All Rights reserved</h5>
            </div>
        </footer>
    )
}

export default Footer