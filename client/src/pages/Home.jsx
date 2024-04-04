import heroImg01 from '../assets/images/homeDoctor.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import featureImg from '../assets/images/feature-img.png'
import sun from '../assets/images/sun.png'
import videoIcon from '../assets/images/video-icon.png'
import avatarIcon from '../assets/images/avatar-icon.png'
import faqImg from '../assets/images/faq-img.png'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import About from '../components/About/About'
import ServiceList from '../components/Services/ServiceList'
import DoctorList from '../components/Doctors/DoctorList'
import FaqList from '../components/Faq/FaqList'
import Testimonial from '../components/Testimonial/Testimonial'
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";



const Home = () => {
  return (
    <>
            {/* ================hero start=============== */}
      
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container ">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center lg:items-start justify-between">
            {/* ================HERO CONTENT=============== */}
            <div>
              <div className="lg:w-[700px]">
                {/* <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy, longer life.
                </h1> */}
                <p className='text_para md:w-3/4 mb-4 md:leading-[1]'>
                  We are committed to providing you with the best healthcare
              services. With over 500+ professionals on board, we connect you
              with experienced doctors across various specialties.
                </p>
                <h1 className="relative font-['Helvetica_Now_Display'] text-6xl leading-[.8] text-headingColor font-[800] md:text-8xl md:leading-[.8] ">
              Healthcare{" "}
              <span className="absolute  logo  font-bold md:text-8xl ">
                    <img src={ sun } alt="sun" className="w-12 h-12 " />
                  </span> 
                  <br />
              for Personalized <br />
              Wellness solutions!
            </h1>
                <button className=" hollowBtn hover:bg-primaryColor hover:text-white hover:border-transparent ">
                  Request an Appointment <FiArrowUpRight />
                </button>
              </div>
              <div className="mt-[30px] lg:mt-[70px] flex flex-col md:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            
            {/* ====================images======================== */}
            <div className="flex flex-col items-center  gap-[30px] justify-between ">
              {/* <div>
                <img className='w-full' src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img className='w-full mb-[30px]' src={heroImg02} alt="" />
                <img className='w-full' src={heroImg03} alt="" />
              </div> */}
              <div className=" hollowBtn ">
              <span className="flex -space-x-4 overflow-x-hidden">
                {["p1", "p2", "p3", "p4"].map((items, index) => {
                  return (
                    <img
                      key={index}
                      // width={52}
                      // height={52}
                      className="inline-block h-10 w-10 rounded-full bg-cover"
                      src={`../../${items}.png`}
                      alt="doctors"
                    />
                  );
                })}
              </span>
              <span className="text-right md:text-center bold-16 md:bold-20 ml-3 text-zinc-600">
                over 500+ professionals on board
              </span>
              </div>
              {/* <div className='border border-zinc-500 px-4 py-2 rounded-full flex items-center justify-center'>
                <img className='w-full' src={heroImg01} alt="" />
                <div className="text-[14px] font-bold">
                  <p className=" group flex gap-2 items-center text-textColor">scroll-down
                    <span className='border border-zinc-900 rounded-full px-3 py-3 group-hover:bg-primaryColor group-hover:border-transparent group-hover:text-white'>
                      <FiArrowDown/>
                  </span>
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* ================hero end=============== */}
      
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">Delivering top-notch medical care</h2>
            <p className="text_para text-center">we offer a broad spectrum of medical services designed to meet the diverse health needs of our community.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Doctor</h2>
                <p className="text-[16px] leading-6 text-textColor font-[400] mt-4 text-center">Explore our network to find the right doctor for your healthcare needs.</p>
                <Link to="/" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                </Link>
              </div>
            </div>

             <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Discover Our Facilities</h2>
                <p className="text-[16px] leading-6 text-textColor font-[400] mt-4 text-center">Navigate through our extensive list of healthcare locations to find the nearest facility.</p>
                <Link to="/" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                </Link>
              </div>
            </div>

             <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Book Appointment</h2>
                <p className="text-[16px] leading-6 text-textColor font-[400] mt-4 text-center">Easily secure your next appointment using our streamlined booking system.</p>
                <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                </Link>
              </div>
            </div>


          </div>
        </div>
      </section>
      
      {/* =================about section start=============== */}
      <About/>
      {/* =================about section end=============== */}

      {/* =================Services section start=============== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center ">
              Our medical services 
            </h2>
            <p className="text_para text-center">
              offer comprehensive care tailored to each patient's unique needs.
            </p>
          </div>
          <ServiceList/>
        </div>
      </section>
      {/* =================Services section end=============== */}

      {/* =====================features section================== */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
          {/* =============feature content============ */}
          <div className="xl:w-[670px]">
            <h2 className="heading">
              Get Virtual treatment <br /> anytime.
            </h2>
            <ul className="pl-4">
              <li className="text_para">
                1. Directly schedule your appointment.
              </li>
              <li className="text_para">
                2.Find your doctor on our site, and reach out to their office.
              </li>
              <li className="text_para">
                3. Look at our list of doctors taking new patients and use the online tool to pick an appointment slot.
              </li>
            </ul>
            <Link to="/">
              <button className="btn">Learn more</button>
            </Link>
          </div>
          {/* ===============feature images ================== */}
          <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
            <img src={featureImg} className='w-3/4' alt="feature image" />
            <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3 ">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">Sat, 24</p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">10:00AM</p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px] ">
                    <img src={videoIcon} alt="videoIcon" />
                  </span>
                </div>
                
                <div className="rounded-full w-[65px] lg:w-[96px] bg-[#ccf0f3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 ">
                  Consultation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px] ">
                  <img src={avatarIcon} alt="avatarIcon" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor ">Wyane Colliding</h4>
                </div>
            </div>
            </div>
            </div>
        </div>
      </section>
      {/* =====================features section================== */}

      {/* =============Our great doctors =================== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center ">
              Our exceptional doctors 
            </h2>
            <p className="text_para text-center">
              Meet our dedicated team of experts, committed to providing the highest standard of medical care to every patient.
            </p>
          </div>
          <DoctorList/>
        </div>
      </section>

      {/* =============Our great doctors =================== */}

      {/* ===============FAQ section=-====================== */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="faqImg" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading mb-5 md:mb-7">Frequently Asked Questions by Our Valued Patients</h2>
              <FaqList/>
            </div>
          </div>
        </div>
      </section>
      {/* ===============FAQ section end================= */}

      {/* ======================testimonial section ================= */}
      <section>
        <div className="container">
            <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center ">
              Patient Testimonials
            </h2>
            <p className="text_para text-center">
              Discover the experiences and feedback from those who have entrusted us with their care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
      {/* ======================testimonial section end ================= */}
    </>
  )
}

export default Home
