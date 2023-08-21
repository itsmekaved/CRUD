import slide01 from '../static/volt3_edit.jpg'
import slide02 from '../static/volt4_edit.jpg'
import slide03 from '../static/volt5.jpg'

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