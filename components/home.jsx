import '../src/styles/home.css';
import portatoimg from '../src/assets/images_project/Nueva carpeta/portatoimg.png';

function Home() {
  return (
    <>
      <div className='container-prime'>
        <div className='container-home-search'>
          <h1>
            El mejor curso
            <br /> lo encuentras aquì
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <button>Saber mas</button>
        </div>
        <div className='img-home-container'>
          <img className='img-home-portato' src={portatoimg} alt='' />
        </div>
      </div>
    </>
  );
}

export default Home;
