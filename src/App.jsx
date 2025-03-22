import React, { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { auth, db } from './firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { userActions } from './store/userSlice'
import Footer from './components/Footer'
import About from './pages/About'
import ProfileSetup from './pages/ProfileSetup'
import ProfilePage from './pages/ProfilePage'
import { doc, getDoc } from 'firebase/firestore'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (user.emailVerified) {
          dispatch(
            userActions.setCurrentUser({
              email: user.email,
              uid: user.uid,
            })
          )
          
          
          try {
            const userDoc = await getDoc(doc(db, 'userInfo', user.uid));
            if (userDoc.exists()) {
              dispatch(userActions.setUserInfo(userDoc.data()));
            }
          } catch (error) {
            console.error('Error fetching user info:', error);
          }
        } else {
          await signOut(auth)
          dispatch(
            userActions.setCurrentUser({
              email: "",
              uid: null,
            })
          )
        }
      } else {
        dispatch(
          userActions.setCurrentUser({
            email: "",
            uid: null,
          })
        )
      }
    })

    return () => unsubscribe()
  }, [dispatch])

  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/profile-setup' element={<ProfileSetup />}/>
        <Route path='/profile' element={<ProfilePage />}/>
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App
