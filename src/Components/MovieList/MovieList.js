import { Container, Row } from 'react-bootstrap';
import Movie from '../Movie/Movie'

function MovieList({data}) {

    return (
        <>
            <Container className='div-container'>
                <Row md={3}>
                    {

                        data.length && data.map((mov) => (
                            <Movie mov={mov} />
                        ))




                    }
                    {
                        !data.length && <div><h2>No Such Results, Please try again later </h2></div>
                    }

                    {/* {
                        <ModalMovie cardInfo={cardInfo} show={show} handleClose={handleClose} />
                    } */}
                </Row>
            </Container>
        </>

    )
}
export default MovieList