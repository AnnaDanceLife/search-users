import styled from 'styled-components'
import { Button } from '../../App.styles'

export const GoMainPageButton = styled(Button)`
  width: 241px;
  height: 50px;
  font-size: 16px;
  line-height: 150%;
`

export const ProfileTitle = styled.h2`
  color: #000;
  font-size: 40px;
  font-style: normal;
  line-height: 220%;
  margin-bottom: 30px;
  margin-top: 30px;
`

export const ProfileUser = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 70px;
`

export const UserAvatar = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
`
export const UserAvatarImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`

export const UserInfoContainer = styled.div``

export const UserInfoText = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 40px;
  color: #000000;
  margin-bottom: 20px;
`
