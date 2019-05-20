import React from 'react'
import '../assets/scss/main.scss'

import Header1 from './Header1'

class Template extends React.Component {
    render() {
        const { children } = this.props

        return (
            <div>
                <Header1 />
                {children}
            </div>
        )
    }
}

export default Template
