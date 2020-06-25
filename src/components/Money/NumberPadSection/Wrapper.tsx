import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  > .output{
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  > .pad{
    > button{
      float: left;
      width: 25%;
      height: 64px;
      font-size: 18px;
      border: none;
      border-top: 1px solid rgba(0,0,0,.25);
      border-right: 1px solid rgba(0,0,0,.25);
      background: #f5f5f5;
      &.ok{
        height: 128px;
        float: right;
      }
      &.zero{
        width: 50%;
      }
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4){
        border-top: none;
      }
      &:nth-child(4),
      &:nth-child(8),
      &:nth-child(12){
        border-right: none;
      }
    }
  }
`;

export {Wrapper};