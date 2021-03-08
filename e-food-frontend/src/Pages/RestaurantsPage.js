import React from 'react'
import axios from 'axios'

import Nav from '../Components/Nav'

// import Card from '@material-ui/core/Card'
// import CardActionArea from '@material-ui/core/CardActionArea'
// import CardActions from '@material-ui/core/CardActions'
// import CardContent from '@material-ui/core/CardContent'
// // import CardMedia from '@material-ui/core/CardMedia'
// import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

class RestaurantsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            restaurants: [],
            picture: {}
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

    selectImage = (e) => {
        this.setState({ picture: {
            pictureAsFile: e.target.files[0],
            picturePreview: URL.createObjectURL(e.target.files[0])
        } })
    }

    submitForm = () => {
        const formData = new FormData()
        formData.append("image", this.state.picture.pictureAsFile)
        
        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/test',
            data: formData
        })
            .then(resp => console.log(resp))
            .catch(error => console.log(error.response))
    }

    render() {
        return (
            <div className="container-fluid">
                <Nav />
                {/* {this.state.restaurants.map((element, key) => {
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
                })} */}
                <input onChange={e => this.selectImage(e)} type="file"></input>
                <button onClick={() => this.submitForm()}>test</button>
            </div>
        )
    }
}

export default RestaurantsPage