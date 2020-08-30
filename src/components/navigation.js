import React from "react"
import styled from "styled-components"

const Navigation = props => (
  <NavigationWrapper props={props}>{props.children}</NavigationWrapper>
)

const NavigationWrapper = styled.button`
  display: block;
  border: none;
  text-align: left;
  box-sizing: border-box;
  text-decoration: none;
  padding: 0px;
  border-radius: 0px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-left=0px;

  background: ${props => props.props.background || "none"};
  color: ${props => props.props.color || "#20ff32"};
  font-size: ${props => props.props.fontSize || "15px"};
  font-weight: ${props => props.props.fontWeight || "600"};
  margin: ${props => props.props.margin};
  text-align: ${props => props.props.textAlign};


`

export default Navigation
