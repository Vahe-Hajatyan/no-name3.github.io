import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/reduxStore";

test('renders without crashing', () => {
<BrowserRouter>
<Provider store={store}>
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  </Provider>
</BrowserRouter>
});