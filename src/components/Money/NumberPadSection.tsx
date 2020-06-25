import styled from 'styled-components';
import React, {useState} from 'react';

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

const NumberPadSection: React.FC = () => {
    const [output, setOutput] = useState('0');
    const onClickButtonWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
        if (text === null) {
            return;
        }
        switch (text) {
            case '.':
                break;
            case '删除':
                break;
            case '清空':
                break;
            case 'OK':
                break;
            default:
                if (output === '0') {
                    setOutput(text);
                } else {
                    setOutput(output + text);
                }
        }
    };
    return (
        <Wrapper>
            <div className="output">
                {output}
            </div>
            <div className="pad clearfix" onClick={onClickButtonWrapper}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">OK</button>
                <button className="zero">0</button>
                <button>.</button>
            </div>
        </Wrapper>
    );
};

export {NumberPadSection};