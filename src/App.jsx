import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { auth, db } from './firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { userActions } from './store/userSlice'
import About from './pages/About'
import ProfileSetup from './pages/ProfileSetup'
import ProfilePage from './pages/ProfilePage'
import EditProfile from './pages/EditProfile'
import { doc, getDoc } from 'firebase/firestore'
import ContactUs from './pages/ContactUs'
import LoadingAnimation from './animations/loading.json'
import Lottie from 'react-lottie-player'
import Product from './pages/Product'
import ScrollToTop from './components/ScrollToTop'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Success from './pages/Success'


function App() {
  const [loading, setLoading] = useState(true)
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

            const userCart = await getDoc(doc(db, 'cart', user.uid));
            if (userCart.exists()) {
              dispatch(userActions.setCart(userCart.data()));
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
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
      setLoading(false)
    })

    return () => unsubscribe()
  }, [dispatch])


  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <Lottie
          animationData={LoadingAnimation}
          style={{ width: 200, height: 200 }}
          loop
          play
        />
      </div>
    )
  }

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/profile-setup' element={<ProfileSetup />}/>
        <Route path='/profile' element={<ProfilePage />}/>
        <Route path='/edit-profile' element={<EditProfile />}/>
        <Route path='/contact' element={<ContactUs />}/>
        <Route path='/products/:category' element={<Product />}/>
        <Route path='/product-detail/:name' element={<ProductDetail />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/success' element={<Success/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
