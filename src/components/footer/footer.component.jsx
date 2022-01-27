import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer__info">
                This is a Demo Website Built with React, Redux, Saga, SCSS and
                etc.
            </p>
            <p className="footer__cont">
                <a target="_blank" href="https://github.com/alifarajzade">
                    Ali Farajzade 2022 &copy;
                </a>{' '}
                |
                <a
                    target="_blank"
                    href="https://github.com/alifarajzade/axile-clothing"
                >
                    Source Code
                </a>
            </p>
        </div>
    );
};

export default Footer;
