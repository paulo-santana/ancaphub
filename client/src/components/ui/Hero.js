import React from "react";
import styled from "styled-components";

const HeroWrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  background: ${ props => props.theme.palette.paper };
  padding: 40px 30px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  
  h2 { 
    font-size: 30px;
    margin-bottom: 5px;
    color: ${ props => props.theme.palette.text.primary };
  }

  p {
    color: ${ props => props.theme.palette.text.secondary };
  }
`;

const Hero = ({ title, description, actions }) => (
  <HeroWrapper>
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>

    <div>
      {actions}
    </div>
  </HeroWrapper>
);

export default Hero;
