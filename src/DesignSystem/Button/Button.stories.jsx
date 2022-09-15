import React from 'react';
import Button from '.';

export default {
  title: 'Example/Button', // 스토리북 내에서 보여지는 경로
  component: Button, // 컴포넌트명 즉, 스토리북 디자인시스템 이름
};

const Template = args => (
    <Button {...args} />
);

export const Test = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Test.args = {
  type: 'button',
  size: 'medium',
  fontColor: '#839', 
  children: '버튼',
  disabled: false,
};
 // 여기는 스토리북에서 보이는 기본값 