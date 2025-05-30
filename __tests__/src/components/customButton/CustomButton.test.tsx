import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {StyleSheet, Text} from 'react-native';
import {CustomButton} from '../../../../src/components/customButton/CustomButton';

describe('CustomButton', () => {
  it('renders with text and icon', () => {
    const {getByText, getByTestId} = render(
      <CustomButton icon={<Text>👤</Text>} text="Profile" />,
    );

    expect(getByTestId('custom-button')).toBeTruthy();
    expect(getByText('👤')).toBeTruthy();
    expect(getByText('Profile')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <CustomButton text="Click me" onPress={onPressMock} />,
    );

    fireEvent.press(getByTestId('custom-button'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('applies round style with custom size', () => {
    const {getByTestId} = render(
      <CustomButton round={true} size={80} icon={<Text>👤</Text>} />,
    );

    const button = getByTestId('custom-button');
    const flatStyle = StyleSheet.flatten(button.props.style);

    expect(flatStyle.borderRadius).toBe(40);
    expect(flatStyle.width).toBe(80);
    expect(flatStyle.height).toBe(80);
  });

  it('applies custom style from props', () => {
    const customStyle = {marginTop: 20};
    const {getByTestId} = render(
      <CustomButton text="Styled" style={customStyle} />,
    );

    const button = getByTestId('custom-button');
    const flatStyle = StyleSheet.flatten(button.props.style);

    expect(flatStyle.marginTop).toBe(20);
  });
});
