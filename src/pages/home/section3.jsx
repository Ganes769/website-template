import image from 'assets/images/Home_image_2.jpg';
import { Link } from 'react-router-dom';
import { aosDivAnimation } from 'utils/constants';

const Section3 = () => {
  return <section className="mb-16 flex mobile:px-0 laptop:px-12 justify-center">
    <div className="shadow-lg px-6 pt-8 w-full flex mobile:flex-col laptop:flex-row rounded-xl mb-4 relative max-width-container" {...aosDivAnimation(100)} >

      {/* <div className='text-center'> */}
      <img src={image} className='h-[90px] inline-block mb-4 mobile:hidden laptop:block' alt="logo-1" />
      <img src={image} className='h-[90px] inline-block mr-4 mobile:hidden laptop:block' alt="logo-1" />
      {/* </div> */}

      <div className='flex justify-center'>
        <img src={image} className='h-[90px] inline-block mb-4 mobile:block laptop:hidden' alt="logo-1" />
        <img src={image} className='h-[90px] inline-block mr-4 mobile:block laptop:hidden' alt="logo-1" />
      </div>

      <div className='mb-6'>
        <p className='mb-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aspernatur atque adipisci harum, ducimus, repellendus excepturi recusandae id animi consectetur architecto! Libero earum cumque excepturi quod veritatis iure alias qui!</p>

        <p className='text-xl font-semibold'>Sushant Tandukar</p>
        <p className='mb-2'>Software Developer (Frontend), Logica Beans</p>
      </div>



      <button className="text-white text-xl px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-800 absolute -bottom-5 right-10"><Link to={"/contact"}>Let's talk</Link></button>
    </div>



  </section>
}

export default Section3;