import { render, screen } from '@testing-library/react';
import App from './App';
import ShallowRenderer from 'react-test-renderer/shallow';

test('renders container in App', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  const app = renderer.getRenderOutput();


  console.log("Test", app.props.children)

  expect(app.props.children[0]).toHaveTextContent('Substring Search');
});
