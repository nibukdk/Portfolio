import React from 'react';
import './footer.css';

const Footer = () => {
    const footer_div =
        <footer className="footer">
            <p>All copyright belongs to Nibesh Khadka, {new Date().getFullYear()}. </p>
        </footer>


    return footer_div;

}


export default Footer;