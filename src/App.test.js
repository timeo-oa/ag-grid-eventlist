import { render } from '@testing-library/react';
import App from './App';

//For all tests to pass, set attribute suppressColumnVirtualisation={true} for AgGrid component
test('renders all the headers', async () => {
  const { getByText } = render(<App />);
  expect(getByText("Track ID")).toBeInTheDocument();  // PASS
  expect(getByText("Status")).toBeInTheDocument(); // PASS
  expect(getByText("Hits")).toBeInTheDocument(); // PASS
  expect(getByText("First Detect")).toBeInTheDocument(); // PASS
  expect(getByText("Duration")).toBeInTheDocument(); //PASS
  expect(getByText("Location")).toBeInTheDocument(); //PASS
  expect(getByText("Not Here")).toBeInTheDocument(); //FAIL
});