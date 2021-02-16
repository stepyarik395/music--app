import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import  Credential  from '../Credential'
import axios from 'axios'



const Main = () => {
  
  const spotify = Credential()
  const state = useSelector(state => state)
  const [token, setToken] = useState('')

  useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
      .then(tokenResponse => {
        console.log(tokenResponse.data.access_token);
        setToken(tokenResponse.data.access_token)
    })
    
  }, [])

  return (
    <Wrapper>
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.div`
`