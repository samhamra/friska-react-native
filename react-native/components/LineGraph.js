import React, { Component } from 'react';
import { ART } from 'react-native';

const { Group, Shape, Surface } = ART;

export class LineGraph extends Component {
  render() {
    return (
      <Surface width={200} height={100}>
        <Group x={0} y={0}>
          <Shape d="M150 0 L75 200 L225 200 Z" stroke="#000" strokeWidth={1} />
        </Group>
      </Surface>
    );
  }
}
