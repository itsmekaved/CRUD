import slide01 from '../static/student11.jpg'
import slide02 from '../static/student22.jpg'
import slide03 from '../static/student2.jpg'

import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
  <div className="row">
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="a-block w-100"
          src={slide01}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="a-block w-100"
          src={slide03}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="a-block w-100"
          src={slide02}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Home;