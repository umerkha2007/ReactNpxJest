// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { getAllGames } from '../fake-api';
import { Route, Routes, Link } from 'react-router-dom';
import { ReactNode, useState } from 'react';
// import {} from '@sample-jest-npx/'
export type TestableComponentProps = {
  page: string,
  children: string,
};
export const TestableComponent = ({page, children}: TestableComponentProps) => {
  const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
  };
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
    <>
    <h1>Status: {status}</h1>
    <a
      className={status}
      href={page || '#'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
    </>
  );
};
export function App() {
  
  return (
    <>
      <div />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
      <div className="container">
        <div className="games-layout">
          {getAllGames().map((x) => (
            <div>
              <br />
              <h1>{x.id}</h1>
              <img src={x.image} alt={x.id} />
              <li>{x.name}</li>
              <li>{x.description}</li>
              <li>{x.price}</li>
              <li>{x.rating}</li>
            </div>
          ))}
        </div>
      </div>
      <TestableComponent page="http://www.facebook.com">Facebook</TestableComponent>
    </>
  );
}

export default App;
