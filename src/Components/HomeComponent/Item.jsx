import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div className='container'>
                <div className="list-item d-flex m-1 p-3">
                    <div className="card-item m-2 border border-dark rounded">
                        <img src="./img/jerry keke.png" alt="..." className='card-img-top' />
                        <div className="item-content text-center mt-3">
                            <h1>Card title</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aliquid sunt quae tenetur dolorem dolor fugiat consequuntur fuga adipisci quo.</p>
                            <button type="button" class="btn btn-primary mb-4">Find out More</button>
                        </div>
                    </div>
                    <div className="card-item m-2 border border-dark rounded">
                        <img src="./img/jerry keke.png" alt="..." className='card-img-top' />
                        <div className="item-content text-center mt-3">
                            <h1>Card title</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aliquid sunt quae tenetur dolorem dolor fugiat consequuntur fuga adipisci quo.</p>
                            <button type="button" class="btn btn-primary mb-4">Find out More</button>
                        </div>
                    </div>
                    <div className="card-item m-2 border border-dark rounded">
                        <img src="./img/jerry keke.png" alt="..." className='card-img-top' />
                        <div className="item-content text-center mt-3">
                            <h1>Card title</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aliquid sunt quae tenetur dolorem dolor fugiat consequuntur fuga adipisci quo.</p>
                            <button type="button" class="btn btn-primary mb-4">Find out More</button>
                        </div>
                    </div>
                    <div className="card-item m-2 border border-dark rounded">
                        <img src="./img/jerry keke.png" alt="..." className='card-img-top' />
                        <div className="item-content text-center mt-3">
                            <h1>Card title</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aliquid sunt quae tenetur dolorem dolor fugiat consequuntur fuga adipisci quo.</p>
                            <button type="button" class="btn btn-primary mb-4">Find out More</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
