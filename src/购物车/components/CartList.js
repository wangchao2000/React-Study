import React, { Component } from 'react'
import ListItem from './ListItem'

export default class CartList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.cart.map(cartItem => {
                            const {
                                id,
                                // title,
                                // price,
                                // qty
                            } = cartItem
                            return (
                                // <li key={id}>
                                //     <h3>{title}</h3>
                                //     <p>{price}</p>
                                //     <p><button>-</button>{qty}<button>+</button></p>
                                // </li>
                                <ListItem
                                    key={id}
                                    handleQtyAdd={this.props.handleQtyAdd}
                                    handleQtySub={this.props.handleQtySub}
                                    {...cartItem}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
