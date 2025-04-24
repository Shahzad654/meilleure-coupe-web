import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  return (
    <>
    <Navbar/>
    <StyledPrivacy>
    <h3>Privacy Policy</h3>
      <div className="main_container">
       
        <Card>
          <Section>
            <h4>Introduction</h4>
            <p>
              La Meilleure Coupe ("we," "us," or "our") is committed to respecting and protecting your privacy.
              This Privacy Policy outlines how we collect, use, and disclose your information when you visit our
              website, make a purchase, or interact with our services.
            </p>
          </Section>

          <Section>
            <h4>Information We Collect</h4>
            <ul>
              <li><strong>Personal Information:</strong> Name, email, address, phone number, payment info</li>
              <li><strong>Usage Data:</strong> Pages viewed, interactions, time on site</li>
              <li><strong>Device Info:</strong> IP address, browser, operating system</li>
            </ul>
          </Section>

          <Section>
            <h4>How We Collect Information</h4>
            <ul>
              <li><strong>Directly:</strong> Via forms, orders, or inquiries</li>
              <li><strong>Automatically:</strong> Through cookies, analytics, and tracking tools</li>
            </ul>
          </Section>

          <Section>
            <h4>How We Use Your Information</h4>
            <ul>
              <li>Process and ship orders</li>
              <li>Send updates and offers</li>
              <li>Improve website and user experience</li>
              <li>Meet legal requirements</li>
            </ul>
          </Section>

          <Section>
            <h4>Sharing Your Information</h4>
            <p>We may share your data with service providers, marketing partners (with consent), or legal authorities as required.</p>
          </Section>

          <Section>
            <h4>Your Rights</h4>
            <p>You may request to access, update, or delete your data. Contact us at <strong>admin@lamerilleurecoupe.com</strong>.</p>
          </Section>

          <Section>
            <h4>Cookies & Tracking</h4>
            <p>We use cookies to personalize your experience. You can manage cookie settings in your browser.</p>
          </Section>

          <Section>
            <h4>Security</h4>
            <p>We use industry-standard practices to protect your data, but no method is 100% secure.</p>
          </Section>

          <Section>
            <h4>Policy Updates</h4>
            <p>This policy may be updated occasionally. Changes will be posted here.</p>
          </Section>

          <Section>
            <h4>Contact Us</h4>
            <p>If you have any concerns or questions, email us at <strong>admin@lamerilleurecoupe.com</strong>.</p>
          </Section>
        </Card>
      </div>
    </StyledPrivacy>
    <Footer/>
    </>
  )
}

const StyledPrivacy = styled.div`
  width: 90%;
  margin: var(--section-margin)auto;
 
  

  .main_container {
    max-width: 900px;
    margin: 0 auto;
  }

`

const Card = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  margin-top: 1rem;
`

const Section = styled.section`
  margin-bottom: 2rem;

  ul {
    padding-left: 1.2rem;
    list-style-type: disc;

    li {
      font-size: 1rem;
      margin-bottom: 0.5rem;
      color: #555;
    }
  }

  strong {
    color: #2c3e50;
  }
`
