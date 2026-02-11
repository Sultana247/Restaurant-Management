import Tilt from 'react-parallax-tilt';
const Cover = ({ img, title, desc }) => {
   
    return (
        <div style={{ backgroundImage: `url(${img})` }} className='bg-center bg-cover  py-15 px-10 md:py-38 md:px-35 mb-6'>
            <Tilt tiltEnable={false} scale={1.3} transitionSpeed={2500}>
      <div className="background-stripes ">
        <div className="header">
          <div className='bg-black opacity-75 py-5 md:py-38 mx-auto text-center px-5 md:px-30'>
                <h2 className='uppercase text-white text-7xl'>{title}</h2>
                <p className='inter-font text-white font-semibold text-2xl mt-4 normal-case'>{desc}</p>
                
            </div>
          <hr />
        </div>
        <div className="form">
         
        </div>
      </div>
    </Tilt>
            
        </div>
    );
};

export default Cover;