import React from 'react';
import House from '../House/House';
import Axios from 'axios';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: []
        }
        this.getHouses = this.getHouses.bind(this);
        this.deleteHouse = this.deleteHouse.bind(this);
    }

    componentDidMount() {
        this.getHouses();
    }

    getHouses() {
        Axios.get('/api/houses')
            .then(resp => {
                console.log('It Works', resp.data);
                this.setState({
                    houses: resp.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    deleteHouse(id) {
        Axios.delete(`/api/house/${id}`)
            .then(res => this.getHouses())
    }

    render() {
        return(
            <div>
                <button onClick={() => this.props.history.push('/wizard')} >Add New Property</button>
                {this.state.houses.map(el => {
                    return <House house={el} deleteHouse={this.deleteHouse} key={el.id} />
                })}
            </div>
        )
    }
}

export default Dashboard;