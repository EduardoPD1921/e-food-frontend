import React from 'react'

import Nav from '../Components/Nav'
import Header from '../Components/Header'

class MainPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="container-fluid">
                <Nav mainPage={true} />
                <Header />
            </div>
        )
    }
}

export default MainPage