// @flow
import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';

type Props = {
  children: React.Node,
};
const ComponentWithRouter = ({ children }: Props) => (
  <MemoryRouter>{children}</MemoryRouter>
);

export default ComponentWithRouter;
