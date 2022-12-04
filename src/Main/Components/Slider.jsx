import { Carousel } from 'react-bootstrap';

export const Slider = () => {
    return (
        <Carousel style={{marginTop:"56px",marginBottom:"10px"}}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../src/assets/Banner-2shadow.png"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../src/assets/Banner-2shadow.png"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../src/assets/Banner-3shadow.png"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}
