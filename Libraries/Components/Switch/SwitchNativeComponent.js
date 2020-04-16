/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

import type {BubblingEventHandler, WithDefault} from '../../Types/CodegenTypes';
import type {ColorValue} from '../../StyleSheet/StyleSheetTypes';
import type {ColorValue} from '../../StyleSheet/StyleSheetTypes';
import type {ViewProps} from '../View/ViewPropTypes';
import type {NativeOrDynamicColorType} from '../../Color/NativeOrDynamicColorType'; // TODO(macOS ISS#2323203)

import codegenNativeComponent from '../../Utilities/codegenNativeComponent';
import {type NativeComponentType} from '../../Utilities/codegenNativeComponent';

type SwitchChangeEvent = $ReadOnly<{|
  value: boolean,
|}>;

type NativeProps = $ReadOnly<{|
  ...ViewProps,

  // Props
  disabled?: WithDefault<boolean, false>,
  value?: WithDefault<boolean, false>,
  tintColor?: ?(ColorValue | NativeOrDynamicColorType),
  onTintColor?: ?(ColorValue | NativeOrDynamicColorType),
  thumbTintColor?: ?(ColorValue | | NativeOrDynamicColorType),

  // Deprecated props
  thumbColor?: ?(ColorValue | NativeOrDynamicColorType),
  trackColorForFalse?: ?(ColorValue | NativeOrDynamicColorType),
  trackColorForTrue?: ?(ColorValue | | NativeOrDynamicColorType),

  // Events
  onChange?: ?BubblingEventHandler<SwitchChangeEvent>,
|}>;

export default (codegenNativeComponent<NativeProps>('Switch', {
  paperComponentName: 'RCTSwitch',
}): NativeComponentType<NativeProps>);
