import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { LinearProgress, CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userActions } from '../store/userSlice'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const steps = ['Personal Information', 'Contact Details', 'Address']

export default function EditProfile() {
  const [activeStep, setActiveStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    
    phoneNumber: '',
    alternatePhone: '',
    
    streetAddress: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  })

  const [errors, setErrors] = useState({})
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  console.log(user)

  useEffect(() => {
    if (!user.uid) {
      navigate('/login', { replace: true })
      return
    }

    if (user.userInfo && Object.keys(user.userInfo).length > 0) {
      setFormData(user.userInfo)
    }
  }, [user, navigate])

  const validateStep = (step) => {
    const newErrors = {}
    
    switch (step) {
      case 0:
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
        if (!formData.gender) newErrors.gender = 'Gender is required'
        break
      case 1:
        if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required'
        if (formData.alternatePhone && !formData.alternatePhone.trim()) {
          newErrors.alternatePhone = 'Please enter a valid alternate phone number'
        }
        break
      case 2:
        if (!formData.streetAddress.trim()) newErrors.streetAddress = 'Street address is required'
        if (!formData.city.trim()) newErrors.city = 'City is required'
        if (!formData.state.trim()) newErrors.state = 'State/Province is required'
        if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP/Postal code is required'
        if (!formData.country.trim()) newErrors.country = 'Country is required'
        break
      default:
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(activeStep)) {
      if (activeStep === steps.length - 1) {
        handleSubmit()
      } else {
        setActiveStep((prevStep) => prevStep + 1)
      }
    }
  }

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async () => {
    if (validateStep(activeStep)) {
      try {
        if (!user.uid) {
          throw new Error('User not authenticated')
        }

        setLoading(true)
        
        await updateDoc(doc(db, 'userInfo', user.uid), {
          ...formData,
          updatedAt: new Date().toISOString()
        })
        
        dispatch(userActions.setUserInfo(formData))
        
        navigate('/profile', { replace: true })
      } catch (error) {
        console.error('Error updating profile:', error)
      } finally {
        setLoading(false)
      }
    }
  }

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <FormGroup>
            <InputGroup>
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className={errors.firstName ? 'error' : ''}
              />
              {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
            </InputGroup>
            <InputGroup>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className={errors.lastName ? 'error' : ''}
              />
              {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
            </InputGroup>
            <InputGroup>
              <label>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className={errors.gender ? 'error' : ''}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <ErrorMessage>{errors.gender}</ErrorMessage>}
            </InputGroup>
          </FormGroup>
        )
      case 1:
        return (
          <FormGroup>
            <InputGroup>
              <label>Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className={errors.phoneNumber ? 'error' : ''}
              />
              {errors.phoneNumber && <ErrorMessage>{errors.phoneNumber}</ErrorMessage>}
            </InputGroup>
            <InputGroup>
              <label>Alternate Phone</label>
              <input
                type="tel"
                name="alternatePhone"
                value={formData.alternatePhone}
                onChange={handleChange}
                className={errors.alternatePhone ? 'error' : ''}
              />
              {errors.alternatePhone && <ErrorMessage>{errors.alternatePhone}</ErrorMessage>}
            </InputGroup>
          
          </FormGroup>
        )
      case 2:
        return (
          <FormGroup>
            <InputGroup>
              <label>Street Address</label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                required
                className={errors.streetAddress ? 'error' : ''}
              />
              {errors.streetAddress && <ErrorMessage>{errors.streetAddress}</ErrorMessage>}
            </InputGroup>
            <InputGroup>
              <label>Apartment/Suite</label>
              <input
                type="text"
                name="apartment"
                value={formData.apartment}
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup>
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className={errors.city ? 'error' : ''}
              />
              {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
            </InputGroup>
            <InputGroup>
              <label>State/Province</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className={errors.state ? 'error' : ''}
              />
              {errors.state && <ErrorMessage>{errors.state}</ErrorMessage>}
            </InputGroup>
            <InputGroup>
              <label>ZIP/Postal Code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
                className={errors.zipCode ? 'error' : ''}
              />
              {errors.zipCode && <ErrorMessage>{errors.zipCode}</ErrorMessage>}
            </InputGroup>
            <InputGroup>
              <label>Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className={errors.country ? 'error' : ''}
              />
              {errors.country && <ErrorMessage>{errors.country}</ErrorMessage>}
            </InputGroup>
          </FormGroup>
        )
      default:
        return 'Unknown step'
    }
  }

  const progress = ((activeStep + 1) / steps.length) * 100

  return (
    <>
    <Navbar/>
    <StyledSetup>
      <div className="main_container">
        <div className="setup_paper">
          <h3>Edit Your Profile</h3>
          
          <div className="step_content">
            {getStepContent(activeStep)}
          </div>

          <div className="progress_container">
            <LinearProgress 
              variant="determinate" 
              value={progress} 
              sx={{ 
                height: 8,
                borderRadius: 4,
                backgroundColor: '#f0f0f0',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 4,
                }
              }}
            />
            <StepIndicator>
              Step {activeStep + 1} of {steps.length}
            </StepIndicator>
          </div>

          <div className="button_container">
            <button
              className={`back_button ${activeStep === 0 ? 'disabled' : ''}`}
              disabled={activeStep === 0 || loading}
              onClick={handleBack}
            >
              Back
            </button>
            <button
              className="next_button"
              onClick={handleNext}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: "white" }} />
              ) : activeStep === steps.length - 1 ? (
                'Finish'
              ) : (
                'Next'
              )}
            </button>
          </div>
        </div>
      </div>
    </StyledSetup>
    <Footer/>
    </>
  )
}

const StyledSetup = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  .main_container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto; 
    
  }

  .setup_paper {
    padding: 2rem;
    border-radius: 1rem;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h2 {
      text-align: center;
      margin-bottom: 2rem;
    }
  }

  .step_content {
    margin: 2rem 0;
    min-height: 300px;
  }

  .progress_container {
    margin: 2rem 0;
    padding: 0 1rem;
  }

  .button_container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
    padding: 0 1rem;
  }

  @media (max-width: 640px) {
    padding: 1rem;

    .setup_paper {
      padding: 1.5rem;
    }

    .step_content {
      min-height: 250px;
    }
  }
`

const StepIndicator = styled.div`
  text-align: center;
  margin-top: 0.5rem;
  color: #666;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;


  input, select {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;


    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }

    &:disabled {
      background-color: #f5f5f5;
      cursor: not-allowed;
    }

    &.error {
      border-color: #d32f2f;
    }
  }
`

const ErrorMessage = styled.span`
  color: #d32f2f;
  font-size: 0.875rem;
`

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 100px;

  &.back_button {
    background: none;
    border: 1px solid var(--primary-color);
    color: var(--primary-color);

    &.disabled {
      border-color: #ccc;
      color: #666;
      cursor: not-allowed;
      background-color: #f5f5f5;
    }

    &:hover:not(.disabled) {
      background-color: rgba(var(--primary-color-rgb), 0.1);
    }
  }

  &.next_button {
    background-color: var(--primary-color);
    border: none;
    color: white;

    &:hover {
      opacity: 0.9;
    }
  }
`
