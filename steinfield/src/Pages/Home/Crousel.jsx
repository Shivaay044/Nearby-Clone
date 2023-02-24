import Carousel from 'react-bootstrap/Carousel';

function SlidingCrousel() {

  return (
    <Carousel>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://img4.nbstatic.in/tr:w-2800/63f462ee8db992000be12ca4.jpg"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://img4.nbstatic.in/tr:w-2800/63b3af1e22b317000c1336a8.jpg"
          alt="Second slide"
        />
      </Carousel.Item>

    </Carousel>
  );
}

export default SlidingCrousel;