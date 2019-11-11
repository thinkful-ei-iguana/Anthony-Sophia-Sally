import React from 'react';
import {image} from '../IMG/broadcityimg.jpg';

export default function App () {
    return (
        <ul className='contact'>
            <li>Name: Sally Student</li>
            <li>Email Address: <a href="#">sstudent@gmail.com</a></li>
            <li>Phone Number: 1234567891</li>
            <img src= {image}/>
        </ul>
    )
}