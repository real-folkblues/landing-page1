import React, { Component } from 'react';
import Link from 'next/link';


class Footer extends Component {
    render() {
        const current_year = new Date().getFullYear();
        return (
            <div id="section_footer">
                <div className='text-center py-4'>
                    <Link href="https://unsplash.com/photos/brown-and-black-typewriter-qFH7-yKoxik?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash" target="blank" className='btn btn-link'>
                        Photo
                    </Link>
                    <span>|</span>
                    <Link href="https://unsplash.com/photos/brown-and-black-typewriter-qFH7-yKoxik?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash" target="blank" className='btn btn-link'>
                        Contact
                    </Link>
                    <span>|</span>
                    <Link href="https://unsplash.com/photos/brown-and-black-typewriter-qFH7-yKoxik?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash" target="blank" className='btn btn-link'>
                        Test
                    </Link>
                    <p>Copyright @ {current_year}, Marleny Arrue. All Rights Reserved.</p>
                </div>
            </div>
        )
    }
}

export default Footer;