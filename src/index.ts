import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to Someapp.web.ts
// and on native platforms to Someapp.ts
import SomeappModule from './SomeappModule';
import SomeappView from './SomeappView';
import { ChangeEventPayload, SomeappViewProps } from './Someapp.types';

// Get the native constant value.
export const PI = SomeappModule.PI;

export function hello(): string {
  return SomeappModule.hello();
}

export async function setValueAsync(value: string) {
  return await SomeappModule.setValueAsync(value);
}

const emitter = new EventEmitter(SomeappModule ?? NativeModulesProxy.Someapp);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { SomeappView, SomeappViewProps, ChangeEventPayload };
