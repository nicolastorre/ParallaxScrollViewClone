import React from 'react';
import {render} from '@testing-library/react-native';
import {ParallaxScrollView} from '../ParallaxScrollView';
import {Text} from 'react-native';

describe('ParallaxScrollView', () => {
  it('renders the title and content correctly', () => {
    const title = 'Test Title';
    const contentText = 'Test Content Item';

    const {getByText} = render(
      <ParallaxScrollView
        title={title}
        renderContent={() => (
          <>
            <Text>{contentText}</Text>
          </>
        )}
      />,
    );

    expect(getByText(title)).toBeTruthy();

    expect(getByText(contentText)).toBeTruthy();
  });

  it('matches snapshot', () => {
    const tree = render(
      <ParallaxScrollView
        title="Snapshot Title"
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
