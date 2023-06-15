import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-size: cover;
`

export const ResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 10ps;
  width: 65%;
  margin-top: 60px;
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 10px;
`

export const GameViewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  height: 60vh;
`

export const PopupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GameResultViewContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 560px;
`

export const SelectedOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 600px;
  width: 80%;
`

export const GameUserOptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const PopUpBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const PlayAgainButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #223a5f;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  align-self: center;
`
export const TriggerButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #223a5f;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`
export const GameParticipantChoiceImage = styled.img`
  width: 170px;
  height: 170px;
`
export const PopUpImage = styled.img`
  width: 90%;
  align-self: center;
`
export const Option = styled.h1`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #ffffff;
`
export const ScorePhrase = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #223a5f;
`
export const ScoreNumber = styled.p`
  font-size: 28px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #223a5f;
`
export const ResultText = styled.p`
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #ffffff;
  text-align: center;
`
export const GameParticipantText = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #ffffff;
`

export const GameOptionsList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding-left: 0px;
  margin-left: 0px;
  max-width: 480px;
  flex-wrap: wrap;
`
