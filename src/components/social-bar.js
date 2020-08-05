import React from "react"
import styled from "styled-components"
import { SocialIcon } from 'react-social-icons';

function SocialBar(){
    return (
        <Wrapper>
        <div>
          <SHeader>
            <SocialIcon url="https://mobile.twitter.com/abhi2rai" style={{boxShadow:'none'}} target="_blank" />
            &nbsp;
            <SocialIcon network="github" bgColor="#f27b3a" url="https://gitlab.com/abhi2rai" style={{boxShadow:'none'}} target="_blank"/>
            &nbsp;
            <SocialIcon url="https://www.linkedin.com/public-profile/in/abhi2rai" style={{boxShadow:'none'}} target="_blank"/>
            &nbsp;
            <SocialIcon url="https://github.com/abhi2rai" style={{boxShadow:'none'}} target="_blank"/>
            &nbsp;
            <SocialIcon network="google_play" bgColor="#13ba6a" url="https://play.google.com/store/apps/developer?id=Abhishek+Rai" style={{boxShadow:'none'}} target="_blank"/>
          </SHeader>
        </div>
      </Wrapper>
    )
}

const Wrapper = styled.div`
`

const SHeader = styled.footer`
  text-align: center;
`

export default SocialBar