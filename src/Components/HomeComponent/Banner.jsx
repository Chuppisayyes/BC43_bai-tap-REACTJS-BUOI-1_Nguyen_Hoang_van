import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className='text-center lh-lg'>
        <h1 className='fs-1'>A Warm Welcome!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel velit similique quisquam ducimus quidem, commodi, a, voluptatum officiis non quaerat consequatur ipsa laboriosam delectus rerum cum sit fugit neque unde.</p>
        <button type="button" class="btn btn-primary">Call to action</button>
      </div>
    )
  }
}
