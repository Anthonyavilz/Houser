import React from 'react';
import House from '../House/House';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <div>
                Wizard
                <House />
            </div>
        )
    }
}

export default Dashboard;