import React from 'react'
import withCopyright from './withCopyright'

function Logo(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default withCopyright(Logo)
