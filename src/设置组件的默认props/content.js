import React from 'react'

const Content = (props) => {
    return (
        <div>
            <p>{props.name}是⼀个构建UI的库</p>
        </div>
    )
}

Content.defaultProps = {
    name: 'React.js'
}

export default Content
