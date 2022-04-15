import React, { Component, Fragment } from 'react'

const withCopyright = (WrappedComponent) => {
    return class NewComponent extends Component {
        render() {
            return (
                <Fragment>
                    <WrappedComponent {...this.props} />
                    <div>&copy; Silk Software 2019 </div>
                </Fragment>
            )
        }
    }
}

export default withCopyright
