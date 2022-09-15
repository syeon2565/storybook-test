// src/DesignSystem/Button/index.tsx

import React from 'react';
import styled, { css } from 'styled-components';


const Button = (props) => {
  const {
    size = 'small',
    fontColor = '',
    children,
    disabled = true,
    ...restProps
  } = props; // props의 기본값 설정

  return (
    <Btn
      type="button"
      size={size}
      fontColor={fontColor}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </Btn>
  );
};
//index에서 보이는 것은 디자인시스템 컴포넌트로 불러오는 값

// props size를 받아 size별 스타일링
const Btn = styled.button`
  ${props =>
    props.size === 'small' &&
    css`
      width: 112px;
      height: 34px;
      font-size: 18px;
    `}
  ${props =>
    props.size === 'medium' &&
    css`
      width: 160px;
      height: 42px;
      font-size: 22px;
    `}
      ${props =>
    props.size === 'large' &&
    css`
      width: 240px;
      height: 48px;
      line-height: 28px;
      font-size: 24px;
    `}

  border: 2px solid #fff38b;
  border-radius: 10px;
  cursor: pointer;
  color: ${props => (props.fontColor ? props.fontColor : '#2E2E2E')};

  &:disabled {
    border: 2px solid #e5e5e5;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
    background: #afafaf;
  }

  :hover {
    background: linear-gradient(180deg, #f2b112 0%, #f3ca67 100%);
  }
`;


export default Button;

