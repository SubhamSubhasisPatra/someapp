import * as React from 'react';

import { SomeappViewProps } from './Someapp.types';

export default function SomeappView(props: SomeappViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
