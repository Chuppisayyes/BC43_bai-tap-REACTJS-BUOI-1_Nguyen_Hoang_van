import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="container d-flex justify-content-between p-1">
                <div classname="logo_header w-25">
                    <a className='fs-2 text-decoration-none text-white ' href="...">Start Bootstrap</a>
                </div>
                <div classname="menu-header w-75">
                    <ul className='mt-1' type='none'>
                        <li>
                            <a className='text-decoration-none hover p-2 text-white fs-5 mt-1 d-inline-block text-center' href="...">Home</a>
                            <a className='text-decoration-none hover p-2 text-white fs-5 mt-1 d-inline-block text-center' href="...">About</a>
                            <a className='text-decoration-none hover p-2 text-white fs-5 mt-1 d-inline-block text-center' href="...">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}


