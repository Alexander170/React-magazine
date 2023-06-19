import React, { Component } from 'react'

export class item extends Component {
  render() {
    return (
      <div className='item'>
        <img className="photo" alt='' src={"./img/" + this.props.item.img} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}$</b>
        <div className='add-to-card' onClick={() => this.props.onAdd(this.props.item)}>+</div>
      </div>
    )
  }
}

export default item