import React from 'react';
import { Bar } from './ProgressBarsStyled';

const defaulProps = {
  fillAmount: .5,
  barColor: '#000'
}

const ProgressBar = (props = { ...defaulProps }) => {
    return (
      <Bar style={{
        backgroundColor: '#efefef'
      }}>
        <Bar style={{
            width: `${props.fillAmount * 100}%`,
            backgroundColor: props.barColor
        }}></Bar>
      </Bar>
    )
}

export default ProgressBar