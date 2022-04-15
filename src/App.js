import React, { Component, Fragment } from 'react'
// import { CountProvider, CountButton, Count } from './counterContext'

class App extends Component {
    constructor() {
        super()
        this.state = {
            name: 'React',
            isLiked: false,
            people: [{
                id: 1,
                name: 'Leo',
                age: 35
            }, {
                id: 2,
                name: 'XiaoMing',
                age: 16
            }]
        }

    }

    handleBtnClick = () => {
        this.setState({
            isLiked: !this.state.isLiked
        }, () => {
            console.log('回调里的', this.state.isLiked);
        })
        console.log('回调外的', this.state.isLiked);
    }
    render() {
        return (
            // <CountProvider>
            //     <CountButton type='decrease' />
            //     <Count />
            //     <CountButton type='increase' />
            // </CountProvider>
            <Fragment>
                <h1>欢迎学习{this.state.name}</h1>
                <button onClick={this.handleBtnClick}>
                    {
                        this.state.isLiked ? '取消' : '收藏'
                    }
                </button>

                {
                    this.state.people.map(item => {
                        return (
                            <dl key={item.id}>
                                <dt>{item.name}</dt>
                                <dd>{item.age}</dd>
                            </dl>
                        )
                    })
                }
            </Fragment>


        )
    }
}
export default App
