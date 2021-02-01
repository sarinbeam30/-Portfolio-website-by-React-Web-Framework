import React, { ReactNode, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

/** IMPORT SCSS FILE */
import styles from '../Stylesheet/ContactStyleSheet.module.scss';
import styled from 'styled-components';
import { motion, useViewportScroll, useTransform, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/** IMPORT FONTAWESOMEICON */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

interface IProps {
    children: ReactNode;
}

//FadeInLeft_Function
function FadeInLeftWhenVisible({ children }: IProps) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.2 }}
            variants={{
                visible: { opacity: 1, transform: 'translateX(20px)' },
                hidden: { opacity: 0, transform: 'translateX(-200px)' },
            }}
        >
            {children}
        </motion.div>
    );
}

// FadeInRight_Function
function FadeInRightWhenVisible({ children }: IProps){
    
}

function Contact() {
    return (
        <div className={styles.contact_layout} id="contact">
            <FadeInLeftWhenVisible>
                <span className={styles.contact_Heading_1}>GET IN TOUCH</span>
            </FadeInLeftWhenVisible>
            <FadeInLeftWhenVisible>
                <span className={styles.contact_Heading_2}>CONTACT</span>
            </FadeInLeftWhenVisible>
            <div className="row">
                <div className="col-6">
                    <FadeInLeftWhenVisible>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.297722054526!2d100.47943906465362!3d13.700409640380705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2987cdd9ae303%3A0xc14f0010bc0dd4e!2s240+Soi+Somdet+Phra+Chao+Tak+Sin+40%2C+Khwaeng+Dao+Khanong%2C+Khet+Thon+Buri%2C+Krung+Thep+Maha+Nakhon+10600!5e0!3m2!1sen!2sth!4v1556231515100!5m2!1sen!2sth"
                            width="100%"
                            height="350"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen
                        ></iframe>
                    </FadeInLeftWhenVisible>
                </div>
                <div className="col-6 d-flex flex-column bg-light text-dark" style={{ maxWidth: '47.25%' }}>
                    <span className="mt-3">
                        <b>Address</b>
                    </span>
                    <span className="mt-3 mb-3">
                        <FontAwesomeIcon icon={['fas', 'home']} /> : 240(31/57) Soi Somdet Phra Chao Taksin 34, Somdet
                        Phra Chao Taksin Road, Daokanong, Thonburi, Bangkok 10600
                    </span>
                    <span className="my-3">
                        <FontAwesomeIcon icon={['fas', 'mobile-alt']} /> : 081-633-6088
                    </span>
                    <span className="my-3">
                        <FontAwesomeIcon icon={['fas', 'envelope']} /> : sarin_beam30@hotmail.com, 60090034@kmitl.ac.th
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Contact;
