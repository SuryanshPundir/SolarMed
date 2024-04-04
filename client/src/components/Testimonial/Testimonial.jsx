import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import patientAvatar from '../../assets/images/patient-avatar.png'
import { HiStar } from 'react-icons/hi'

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px] '>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {/* James Robertson */}
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="patient avatar" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor ">
                  James Robertson
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">"From the moment I walked in, the care and attention I received were unparalleled. The staff went above and beyond to ensure I felt comfortable and informed throughout my treatment. Truly grateful for the outstanding service."</p>
          </div>
        </SwiperSlide>
        
        {/* Maria Garcia */}
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="patient avatar" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor ">
                  Maria Garcia
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">"The compassion and professionalism of the team were evident in every interaction. My physician was not only highly knowledgeable but also genuinely caring. It's comforting to know such a dedicated healthcare team is looking after our community."</p>
          </div>
        </SwiperSlide>
        
        {/* Ethan Nguyen */}
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="patient avatar" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor ">
                  Ethan Nguyen
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">"Dealing with a chronic condition has been challenging, but finding a healthcare provider who truly listens and adapts treatment to my needs has made a significant difference. I've never felt more supported on my health journey."</p>
          </div>
        </SwiperSlide>
        
        {/* Sophia Patel */}
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="patient avatar" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor ">
                  Sophia Patel
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">"The virtual care options have been a game-changer for my busy lifestyle. Being able to consult with my doctor online and receive timely care has been incredibly convenient and effective."</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonial
