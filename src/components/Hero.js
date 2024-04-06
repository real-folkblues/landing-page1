import React, { Component } from 'react';
import styles from '@/styles/Hero.module.scss';

class Hero extends Component {
    render(){
        const { title, subtitle } = this.props;
        return (
            <>
            <div id={styles.hero_container}>
                <div id={styles.hero_headline}>
                    <div className='text-center text light'>
                    <h1 className='px-3 pb-3'>{title}</h1>
                    <div className='row justify-content-center px-3'>
                    <p className='col-md-6'>{subtitle}</p>
                    </div>
                    </div>
                    </div>
                    </div>
                </>
        )
    }
}

export default Hero;