import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <StyledTerms>
        <h3>Terms of Service</h3>
        <div className="main_container">
          <Card>
            <Section>
              <h4>Introduction</h4>
              <p>
                These Terms of Service ("Terms") govern your use of the La Meilleure Coupe website and services. By accessing
                or using our services, you agree to be bound by these Terms.
              </p>
            </Section>

            <Section>
              <h4>Use of Our Services</h4>
              <ul>
                <li>You must be at least 18 years old or have parental consent to use our services.</li>
                <li>Do not misuse our services or interfere with their normal operation.</li>
              </ul>
            </Section>

            <Section>
              <h4>Account Responsibilities</h4>
              <ul>
                <li>Keep your account credentials confidential.</li>
                <li>You are responsible for all activities under your account.</li>
              </ul>
            </Section>

            <Section>
              <h4>Purchases & Payments</h4>
              <ul>
                <li>All prices are listed in local currency and may be subject to taxes.</li>
                <li>We reserve the right to cancel orders for any reason.</li>
              </ul>
            </Section>

            <Section>
              <h4>Intellectual Property</h4>
              <p>
                All content on our website, including text, images, and logos, is the property of La Meilleure Coupe and is protected
                by intellectual property laws.
              </p>
            </Section>

            <Section>
              <h4>Termination</h4>
              <p>
                We may suspend or terminate your access to our services at our sole discretion, with or without notice, for behavior
                that violates these Terms.
              </p>
            </Section>

            <Section>
              <h4>Limitation of Liability</h4>
              <p>
                We are not liable for any indirect, incidental, or consequential damages resulting from your use of our services.
              </p>
            </Section>

            <Section>
              <h4>Changes to These Terms</h4>
              <p>
                We may update these Terms at any time. Continued use of our services means you accept the updated Terms.
              </p>
            </Section>

            <Section>
              <h4>Contact Us</h4>
              <p>
                If you have questions or concerns about these Terms, please contact us at <strong>admin@lamerilleurecoupe.com</strong>.
              </p>
            </Section>
          </Card>
        </div>
      </StyledTerms>
      <Footer />
    </>
  )
}

const StyledTerms = styled.div`
  width: 90%;
  margin: var(--section-margin) auto;

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
