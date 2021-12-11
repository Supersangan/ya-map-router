import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  background: white;
`;

export const DeleteButton = styled.button`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.3rem;
  border: none;
  background: transparent;
  cursor: pointer;

  & svg {
    display: block;
    width: 1rem;
    height: 1rem;
  }

  & svg * {
    fill: var(--pink);
  }

  &:hover svg * {
    fill: var(--pink-bright);
  }
`;

export const Name = styled.span`
  flex-grow: 1;
  padding: .5rem 1.6rem .5rem .5rem;
`;