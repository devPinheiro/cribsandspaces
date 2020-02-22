import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './index';

afterEach(cleanup);

describe('Card Component Unit Testing', () => {
  it('Should render component when mounted', () => {
    const { getByTestId } = render(
      <Card featured_image="test.png" description="testing" title="new component" tags="test" />
    );

    expect(getByTestId('card-component')).toHaveTextContent('new component');
  });

  it('Should render component when mounted with conditional prop', () => {
    const image = [
      {
        url: 'sample.png',
      },
    ];
    const { getByTestId } = render(
      <Card featured_image={image} description="testing" title="new component" tags="test" />
    );

    expect(getByTestId('card-component')).toHaveTextContent('new component');
  });
});
