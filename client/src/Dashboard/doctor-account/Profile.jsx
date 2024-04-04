import { useEffect, useState } from "react";
import {AiOutlineDelete} from 'react-icons/ai'
import uploadimageToCloudnary  from '../../utils/uploadCloudinary'
import {BASE_URL, token} from '../../config'
import {toast} from 'react-toastify'
import HashLoader from "react-spinners/HashLoader";

const Profile = ({doctorData}) => {
    const [loading, setLoading] = useState(false)
    const [formData, setFromData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        bio: '',
        gender: '',
        specialization: '',
        ticketPrice: 0,
        qualifications: [{
            startingDate: "",
            endingDate: "",
            degree: "",
            university: "",
        }],
        experiences: [{
            startingDate: "",
            endingDate: "",
            position: "",
            hospital: "",
        }],
        timeSlots: [{
            day: "",
            startingTime: "",
            endingTime: "",
        }],
        about: '',
        photo: null,
    })

    useEffect(() => {
        setFromData({
            name: doctorData?.name,
            email: doctorData?.email,
            password: doctorData?.password,
        phone: doctorData?.phone,
        bio: doctorData?.bio,
        gender: doctorData?.gender,
        specialization: doctorData?.specialization,
        ticketPrice: doctorData?.ticketPrice,
        qualifications: doctorData?.qualifications,
        experiences: doctorData?.experiences,
        timeSlots: doctorData?.timeSlots,
        about: doctorData?.about,
        photo: doctorData?.photo,
        })
    },[doctorData])
    const handleInputChange = e => {
        setFromData({...formData, [e.target.name]: e.target.value})
     };
     
    const handleFileInputChange = async event => {
         const file = event.target.files[0];
        const data = await uploadimageToCloudnary(file)
        
        console.log(data);
        setFromData({...formData, photo: data.url})
     }

    const updateProfileHandler = async e => { 
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            })

            const result = await res.json()
            if (!res.ok) {
                throw Error(result.message);
            }

            toast.success(result.message);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            toast.error(error.message);
        }
    }

    const addItem = (key, item) => { 
        setFromData(prevFormData=>({...prevFormData, [key]: [...prevFormData[key], item]}))
    }

    const handleReusableInputChangeFunc = (key, index, event) => {
        const {name, value} = event.target
        
        setFromData(prevFormData => {
            const updateItems = [...prevFormData[key]]

            updateItems[index][name] = value

            return {
                ...prevFormData,
                [key]: updateItems,
            }
        })
    }

    const deleteItem = (key, index) => {
        setFromData(prevFormData => ({
            ...prevFormData,
            [key]: prevFormData[key].filter((_, i) => i != index)
        }))
     }

    const addQualification = e => { 
        e.preventDefault();
        addItem('qualifications', {
            startingDate: "",
            endingDate: "",
            degree: "PHD",
            university: "DHAKA",
        })
    }

    const deleteQualificationChange = (e, index) => { 
        e.preventDefault();
        deleteItem('qualifications', index)
    }

    const handleQualificationChange = (event, index) => {
        handleReusableInputChangeFunc('qualifications', index, event)
        
    }

    const addExperience = e => { 
        e.preventDefault();
        addItem('experiences', {
           startingDate: "",
            endingDate: "",
            position: "Surgeon",
            hospital: "AIMS Rishikesh",
        })
    }

    const deleteExperienceChange = (e, index) => { 
        e.preventDefault();
        deleteItem('experiences', index)
    }

    const handleExperienceChange = (event, index) => {
        handleReusableInputChangeFunc('experiences', index, event)
        
    }

    const addTimeSlot = e => { 
        e.preventDefault();
        addItem('timeSlots', {
          day: "Monday",
            startingTime: "10:00",
            endingTime: "18:30",
        })
    }

    const deleteTimeSlotChange = (e, index) => { 
        e.preventDefault();
        deleteItem('timeSlots', index)
    }

    const handleTimeSlotChange = (event, index) => {
        handleReusableInputChangeFunc('timeSlots', index, event)
        
    }
  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">Profile Information</h2>
          <form action="">
              <div className="mb-5">
                  <p className="form_label">Name*</p>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="full name" className="form_input" />
              </div>
              <div className="mb-5">
                  <p className="form_label">Email*</p>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="email@domain.com" className="form_input" readOnly aria-readonly disabled="true" />
              </div>
              <div className="mb-5">
                  <p className="form_label">Phone*</p>
                  <input type="number" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="phone number" className="form_input" />
              </div>
              <div className="mb-5">
                  <p className="form_label">Bio*</p>
                  <input type="text" name="bio" value={formData.bio} onChange={handleInputChange} placeholder="bio" className="form_input" maxLength={100} />
              </div>
              <div className="mb-5">
                  <div className="grid grid-cols-3 gap-5 mb-[30px] ">
                      <div>
                          <p className="form_label">Gender*</p>
                          <select className="form_input py-3.5" name="gender" id="gender" value={formData.gender} onChange={handleInputChange}>
                              <option value="">Select</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                          </select>
                      </div>
                       <div>
                          <p className="form_label">Specialization*</p>
                          <select className="form_input py-3.5" name="specialization" id="specialization" value={formData.specialization} onChange={handleInputChange}>
                              <option value="">Select</option>
                              <option value="surgeon">Surgeon</option>
                              <option value="neurologist">Neurologist</option>
                              <option value="dermatologist">Dermatologist</option>

                          </select>
                      </div>

                      <div>
                          <p className="form_label">Ticket Price</p>
                          <input type="number" placeholder="100" name="ticketPrice" value={formData.ticketPrice} className="form_input" onChange={handleInputChange} />
                      </div>
                </div>
              </div>
              <div className="mb-5">
                  <p className="form_label">Qualifications*</p>
                  {formData.qualifications?.map((item, index) => <div key={index}>
                      <div>
                          <div className="grid grid-cols-2 gap-5">
                              <div>
                                  <p className="form_label">Starting Date*</p>
                                  <input type="date" name="startingDate" value={item.startingDate} className="form_input" onChange={e=> handleQualificationChange(e, index)} />
                              </div>
                               <div>
                                  <p className="form_label">Ending Date*</p>
                                  <input type="date" name="endingDate" value={item.endingDate} className="form_input" onChange={e=> handleQualificationChange(e, index)}/>
                              </div>
                          </div>
                          <div className="grid grid-cols-2 gap-5 mt-5">
                              <div>
                                  <p className="form_label">Degree*</p>
                                  <input type="text" name="degree" value={item.degree} className="form_input" onChange={e=> handleQualificationChange(e, index)} />
                              </div>
                               <div>
                                  <p className="form_label">University*</p>
                                  <input type="text" name="university" value={item.university} className="form_input" onChange={e=> handleQualificationChange(e, index)} />
                              </div>
                          </div>

                          <button onClick={e=>deleteQualificationChange(e,index)} className="bg-red-600 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer">
                              <AiOutlineDelete/>
                          </button>
                      </div>
                  </div>)}
                  <button onClick={addQualification} className="bg-[#000000d3] text-white py-2 px-5 rounded h-fit cursor-pointer">Add Qualification</button>
              </div>

              <div className="mb-5">
                  <p className="form_label">Experiences*</p>
                  {formData.experiences?.map((item, index) => <div key={index}>
                      <div>
                          <div className="grid grid-cols-2 gap-5">
                              <div>
                                  <p  className="form_label">Starting Date*</p>
                                  <input type="date" name="startingDate" value={item.startingDate} className="form_input" onChange={e=> handleExperienceChange(e, index)} />
                              </div>
                               <div>
                                  <p className="form_label">Ending Date*</p>
                                  <input type="date" name="endingDate" value={item.endingDate} className="form_input" onChange={e=> handleExperienceChange(e, index)} />
                              </div>
                          </div>
                          <div className="grid grid-cols-2 gap-5 mt-5">
                              <div>
                                  <p className="form_label">Position*</p>
                                  <input type="text" name="position" value={item.position} className="form_input" onChange={e=> handleExperienceChange(e, index)} />
                              </div>
                               <div>
                                  <p className="form_label">Hospital*</p>
                                  <input type="text" name="hospital" value={item.hospital} className="form_input" onChange={e=> handleExperienceChange(e, index)} />
                              </div>
                          </div>

                          <button onClick={e=> deleteExperienceChange(e,index)} className="bg-red-600 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer">
                              <AiOutlineDelete/>
                          </button>
                      </div>
                  </div>)}
                  <button onClick={addExperience} className="bg-[#000000d3] text-white py-2 px-5 rounded h-fit cursor-pointer">Add Experience</button>
              </div>
              
              <div className="mb-5">
                  <p className="form_label">Time Slots*</p>
                  {formData.timeSlots?.map((item, index) => <div key={index}>
                      <div>
                          <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                              <div>
                                  <p className="form_label">Day*</p>
                                  <select name="day" id="day" value={item.day} className="form_input py-3.5" onChange={e=> handleTimeSlotChange(e, index)}>
                                      <option value="">Select</option>
                                      <option value="monday">Monday</option>
                                      <option value="tuesday">Tuesday</option>
                                      <option value="wednesday">Wednesday</option>
                                      <option value="thursday">Thursday</option>
                                      <option value="friday">Friday</option>
                                      <option value="saturday">Saturday</option>
                                      <option value="sunday">Sunday</option>
                                  </select>
                              </div>
                               <div>
                                  <p className="form_label">Starting Time*</p>
                                  <input type="time" name="startingTime" value={item.startingTime} className="form_input" onChange={e=> handleTimeSlotChange(e, index)}/>
                              </div>
                              <div>
                                  <p className="form_label">Ending Time*</p>
                                  <input type="time" name="endingTime" value={item.endingTime} className="form_input" onChange={e=> handleTimeSlotChange(e, index)} />
                              </div>
                              <div className="flex items-center">
                                  
                          <button onClick={e=>deleteTimeSlotChange(e, index)} className="bg-red-600 rounded-full text-white text-[18px] cursor-pointer mt-6">
                              <AiOutlineDelete/>
                          </button>
                               </div>
                          </div>

                      </div>
                  </div>)}
                  <button onClick={addTimeSlot} className="bg-[#000000d3] text-white py-2 px-5 rounded h-fit cursor-pointer">Add Time Slot</button>
              </div>

              <div className="mb-5">
                  <p className="form_label">About</p>
                  <textarea name="about" id="about" rows={5} value={formData.about} className="form_input" onChange={handleInputChange} placeholder="Write about yourself"></textarea>
              </div>

              <div className="mb-5 flex items-center gap-3">
                  {formData.photo && <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center overflow-hidden">
                  <img src={formData.photo} alt="" className='w-full h-full object-cover'/>
                </figure>}
                <div className='relative w-[130px] h-[50px]'>
                  <input
                    type="file"
                    name='photo'
                    id='customerFile'
                    onChange={handleFileInputChange}
                    accept='.jpg, .png'
                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                    />

                  <label htmlFor="customerFile"
                    className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="mt-7">
                  <button type="submit" onClick={updateProfileHandler} className="bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg">{loading? <HashLoader/> :'Update Profile'}</button>
              </div>
      </form>
    </div>
  )
}

export default Profile
