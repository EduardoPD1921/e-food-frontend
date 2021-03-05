import React from 'react'
import axios from 'axios'

import Nav from '../Components/Nav'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
// import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class RestaurantsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            restaurants: []
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/api/restaurant/all'
        })
            .then(resp => {
                this.setState({ restaurants: resp.data })
            })
    }

    render() {
        return (
            <div className="container-fluid">
                <Nav />
                {this.state.restaurants.map((element, key) => {
                    return (
                        <Card className="test">
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {element.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {element.street}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    )
                })}
            </div>
        )
    }
}

export default RestaurantsPage