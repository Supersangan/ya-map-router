import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;
