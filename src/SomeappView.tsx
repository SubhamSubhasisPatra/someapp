import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { SomeappViewProps } from './Someapp.types';

const NativeView: React.ComponentType<SomeappViewProps> =
  requireNativeViewManager('Someapp');

export default function SomeappView(props: SomeappViewProps) {
  return <NativeView {...props} />;
}
