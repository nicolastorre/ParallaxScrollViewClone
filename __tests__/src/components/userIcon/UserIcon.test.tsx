import React from 'react';
import {render} from '@testing-library/react-native';
import UserIcon from '../../../../src/components/userIcon/UserIcon';

describe('UserIcon', () => {
  it('renders the head and body views correctly', () => {
    const {getByTestId} = render(<UserIcon />);

    expect(getByTestId('user-icon-head')).toBeTruthy();
    expect(getByTestId('user-icon-body')).toBeTruthy();
  });
});
