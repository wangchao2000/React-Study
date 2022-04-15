import React, { Component } from 'react'
import CartList from './components/CartList'
import './App.css'

import { getPosts } from '../service'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: [
                {
                    id: 1,
                    title: 'iphone',
                    price: 5999,
                    qty: 2
                },
                {
                    id: 2,
                    title: 'huawei',
                    price: 3999,
                    qty: 10
                }
            ]
        }
    }

    UNSAFE_componentWillMount() {
        console.log('App componentWillMount')
    }

    get totalPrice() {
        return this.state.cart.reduce((total, currentItem) => {
            total += currentItem.price * currentItem.qty
            return total
        }, 0)
    }

    componentDidMount() {
        console.log('App componentDidMount')
        console.log(this)
        getPosts().then(res => {
            console.log(res)
        })
    }

    addNewProduct = () => {
        // this.setState({
        // cart: [...this.state.cart, {
        //     id: Math.random(),
        //     title: 'Xiaomi',
        //     price: 4999,
        //     qty: 1
        // }]
        // })
        const newCart = this.state.cart.slice()
        newCart.push({
            id: Math.random(),
            title: 'Xiaomi',
            price: 4999,
            qty: 10
        })
        // this.setState({
        //     cart: newCart
        // })
        this.setState(() => {
            return (
                { cart: newCart }
            )
        })
    }

    handleQtyAdd = (id) => {
        this.setState({
            cart: this.state.cart.map((cartItem) => {
                if (cartItem.id === id) {
                    cartItem.qty += 1
                }
                return cartItem
            })
        })
    }
    handleQtySub = (id) => {
        this.setState({
            cart: this.state.cart.map((cartItem) => {
                if (cartItem.id === id) {
                    cartItem.qty -= 1
                }
                return cartItem
            })
        })
    }

    render() {
        return (
            <div>
                <h1 className="title">购物车</h1>
                <CartList
                    cart={this.state.cart}
                    handleQtyAdd={this.handleQtyAdd}
                    handleQtySub={this.handleQtySub}
                />
                {/* <ul>
                    {
                        this.state.cart.map(cartItem => {
                            const {
                                id,
                                title,
                                price,
                                qty
                            } = cartItem
                            return (
                                <li key={id}>
                                    <h3>{title}</h3>
                                    <p>{price}</p>
                                    <p><button onClick={() => this.handleQtySub(id)}>-</button>{qty}<button onClick={() => this.handleQtyAdd(id)}>+</button></p>
                                </li>
                            )
                        })
                    }
                </ul> */}
                <button onClick={this.addNewProduct}>添加一个商品</button>
                <p>
                    总价：{this.totalPrice}
                </p>
            </div >
        )
    }
}

