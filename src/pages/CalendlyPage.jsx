import React from 'react'
import styled from 'styled-components'
import Navbar from "../components/Navbar";
import { InlineWidget } from "react-calendly";

export default function CalendlyPage() {
  return (
    <>
    <Navbar/>
    <StyledCalendly>
      <div className="main_container">
          <InlineWidget url="https://calendly.com/shahzadj2001/30min" />
      </div>
    </StyledCalendly>
    </>
  )
}

const StyledCalendly = styled.div`
    
`
