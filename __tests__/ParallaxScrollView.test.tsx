import React from 'react';
import {render} from '@testing-library/react-native';
import {ParallaxScrollView} from '../ParallaxScrollView';
import {Text} from 'react-native';

const mainHeader = 'Test main header';
const navHeader = 'Test nav header';
const contentText = 'Test Content Item';

describe('ParallaxScrollView', () => {
  it('renders the title and content correctly', () => {
    const {getByText} = render(
      <ParallaxScrollView
        mainHeader={mainHeader}
        navHeader={navHeader}
        renderContent={() => (
          <>
            <Text>{contentText}</Text>
          </>
        )}
      />,
    );

    expect(getByText(mainHeader)).toBeTruthy();

    expect(getByText(contentText)).toBeTruthy();
  });

  it('matches snapshot', () => {
    const tree = render(
      <ParallaxScrollView
        mainHeader={mainHeader}
        navHeader={navHeader}
        renderContent={() => (
          <>
            <Text>Item 1</Text>
            <Text>Item 2</Text>
          </>
        )}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
