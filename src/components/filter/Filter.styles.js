import styled from 'styled-components'

export const CenterblockFilter = styled.div`
  position: relative;
  display: box;
  display: -ms-flexbox;
  display: flex;
  box-orient: horizontal;
  box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  position: relative;
  border-color: #009ee4;
  color: #009ee4;
  cursor: pointer;
`

export const FilterPopup = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  border-radius: 12px;
  background: #313131;
  box-sizing: border-box;
  left: 0;
  min-width: 269px;
  padding: 32px 32px 4px 32px;
  position: absolute;
  top: 50px;
`

export const PopupList = styled.ul`
  max-height: 212px;
  max-width: 242px;
  overflow-y: auto;

  &::scrollbar {
    width: 4px;
    border-radius: 4px;
    background-color: #4b4949;
  }

  &::scrollbar-thumb {
    border-radius: 4px;
    background-color: #ffffff;
  }
`

export const PopupText = styled.li`
  cursor: pointer;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #ffffff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  padding-bottom: 28px;

  &:hover {
    color: #b672ff;
    cursor: pointer;
    text-decoration: underline #b672ff;
  }
`