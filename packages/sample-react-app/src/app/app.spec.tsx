import { fireEvent, getByText, render, screen } from '@testing-library/react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import App, { TestableComponent } from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(getByText(/Welcome sample-react-app/gi)).toBeTruthy();
  });

  // DOM tests
  it('Facebook link should be present and be clickable', () => {
  const {queryByLabelText, getByLabelText} = render(
    <TestableComponent page="http://facebook.com">Facebook</TestableComponent>,
  );

  expect(queryByLabelText('This is the generated root route')).toBeDefined();

  fireEvent.click(screen.getByText(/Facebook/));

  expect(screen.getByText("Facebook")).toBeDefined();
}); 
  // DOM tests end

  // Snapshot tests
  it('changes the class when hovered', () => {
    const component = renderer.create(
      <TestableComponent page="http://www.facebook.com">Facebook</TestableComponent>,
    );
    let tree = component.toJSON() as ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();
  
    // manually trigger the callback
    renderer.act(() => {
      tree.props.onMouseEnter();
    });
    // re-rendering
    tree = component.toJSON() as ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();
  
    // manually trigger the callback
    renderer.act(() => {
      tree.props.onMouseLeave();
    });
    // re-rendering
    tree = component.toJSON() as ReactTestRendererJSON;;
    expect(tree).toMatchSnapshot();
  });
  // Snapshot tests
});
