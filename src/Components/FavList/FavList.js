import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Row,Card, Col } from 'react-bootstrap';
import Movie from '../Movie/Movie'
import UpdateModal from './updateModal/UpdateModal'


function Fav(){
    const [data, setData] = useState([]);
    const [show,setShow] = useState(false);
    const [mov,setMov] = useState({});

    const [title,setTitleInput] = useState("");
    const [image,setImageInput] = useState("");
    const [comment,setCommentInput] = useState("");

    const handleClose = ()=> setShow(false);

    const getFavMovies = async () => {
        return await axios.get(`https://moviesrepo.herokuapp.com/getMovies`)
            .then(result => {
                console.log(result.data);
                setData(result.data);
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(()=>{
        getFavMovies();
    },[]);


    const deleteFromFav = async(id) =>{
        await axios.delete(`https://moviesrepo.herokuapp.com/DELETE/${id}`)
                   .then(()=>{
                       console.log("deleted :(")
                       getFavMovies();
                   }).catch((err)=>{
                       console.log(err);
                   })
    } 

    return (
        <>
        <Container className='div-container'>
        <Row md={3}>
            {
                data.length && data.map((mov) => (
                    <Col key={mov.id} md={5}>
                        <Card className='div-card'>
                            <Card.Img className='div-card-img' variant="top" src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`} />
                            <Card.Body>
                            <Card.Title className='div-card-title'>{mov.title}</Card.Title>
                    <Card.Text>
                        {mov.release_date}

                    </Card.Text>

                    <Card.Text>
                        {mov.overview}

                    </Card.Text>
                     <Card.Text >
                                {mov.comment}
                                </Card.Text>
                                
                                <div>
                                    <Button className='div-card-button' variant="primary"
                                       onClick={()=>{
                                           setShow(true)
                                           setMov(mov);
                                           setTitleInput(mov.title);
                                           setCommentInput(mov.comment);
                                           setImageInput(mov.image);
                                        }}
                                    >Update</Button>
                                    <Button className='div-card-button' variant="danger" 
                                      onClick={()=>deleteFromFav(mov.id)}
                                    >Delete</Button>
            
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
                                    }
        </Row>
    </Container>

    {
        !data.length && <div><h2>No Such Results, Please try again later</h2></div>
    }

    {
      <UpdateModal show={show} handleClose={handleClose} mov={mov} getFavMovies={getFavMovies}
      
      
      titleInput={title}
      setTitleInput= {setTitleInput}
      imageInput ={image}
      setImageInput = {image}
      commentInput = {comment}
      setCommentInput ={setCommentInput}
      
      /> 
    }

</>
    )
}

export default Fav;