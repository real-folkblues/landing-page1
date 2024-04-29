//Page layout for main page. Can copy/paste this to create other pages and customize divs/containers etc. Currently set up with a title, subtitle, and image.


import Image from 'next/image';
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
                    <div className={`${styles.cover_imgs_container} text-center d-flex justify-content-center`}>
                        <Image
                         src="/images/typewriter.jpg"
                         alt="Screenshot of thing showing the main player w several comments."
                         height={480}
                         width={640}
                         className='typewriter_shadow mt-5 d-none d-md-block'/>
                    </div>
                    </div>
                    </div>
                </>
        )
    }
}

export default Hero;