import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Row,Card, Col } from 'react-bootstrap';
import ModalMovie from '../ModalMovie/ModalMovie'
function MovieList(props) {
    const [data, setData] = useState([]);
    const [cardInfo, setCardInfo] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    // console.log(process.env.REACT_APP_BASE_URL);
    const getAllTrending = async () => {
        // await // here the thing that will happen (fetching from API or getting from database )
        // return await axios.get(`${process.env.REACT_APP_BASE_URL}/recipes`)
        return await axios.get(`https://moviesrepo.herokuapp.com/trending`)
            .then(result => {
                console.log(result.data);
                return result.data;
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        void (async () => {
            let data = await getAllTrending();
            setData(data);
        })();
    }, []);
    return (
        <>
         <Container className='div-container'>
                <Row md={3}>
                    {
             
                data.length && data.map((ele) => (
        

                    <Card  style={{ width: '50rem' }}>
                        <Card.Img variant="top" src={ele.poster_path} />
                        
                        <Card.Body>
                            <Card.Title>{ele.title}</Card.Title>
                            <Card.Text>
                                {ele.release_date}

                            </Card.Text>

                            <Card.Text>
                                {ele.overview}

                            </Card.Text>
                            <div>
                                <Button className='div-card-button' variant="primary"
                                    onClick={() => {
                                        setCardInfo(ele)
                                        setShow(true);
                                    }}>Add To Favorite</Button>
                            </div>

                        </Card.Body>
                    </Card>

                ))
            }

            {
                !data.length && <div><h2>No Such Results, Please try again later</h2></div>
            }
             {
                <ModalMovie cardInfo={cardInfo} show={show} handleClose={handleClose} />
            }
              </Row>
            </Container>
        </>

    )
}
export default MovieList