import React from 'react';
import {Alert, Text} from 'react-native';
import {render, fireEvent} from '@testing-library/react-native';
import {RoundButton} from '../../../../src/components/roundButton/RoundButton';

jest.spyOn(Alert, 'alert');

describe('RoundButton', () => {
  it('renders the icon inside the button', () => {
    const {getByText} = render(<RoundButton icon={<Text>🔔</Text>} />);
    expect(getByText('🔔')).toBeTruthy();
  });

  it('uses the default background color if none is provided', () => {
    const {getByTestId} = render(<RoundButton icon={<Text>🔔</Text>} />);
    const button = getByTestId('round-button');
    expect(button.props.style.backgroundColor).toBe('black');
  });

  it('uses the provided background color', () => {
    const {getByTestId} = render(
      <RoundButton icon={<Text>🔔</Text>} backgroundColor="red" />,
    );
    const button = getByTestId('round-button');

    expect(button.props.style).toMatchObject({
      backgroundColor: 'red',
      borderRadius: 20,
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
    });
  });

  it('triggers Alert when pressed', () => {
    const {getByTestId} = render(<RoundButton icon={<Text>🔔</Text>} />);
    fireEvent.press(getByTestId('round-button'));
    expect(Alert.alert).toHaveBeenCalledWith('Under construction');
  });
});
