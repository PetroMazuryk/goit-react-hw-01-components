import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;

  border: 1px solid black;
  padding: 8px;
  border-radius: 6px;

  ${({ status }) => {
    if (status === true) {
      return 'svg {color: green;}';
    } else if (status === false) {
      return 'svg {color: red;}';
    } else {
      return 'svg {color: var(--bg-grey);}';
    }
  }}

  box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    box-shadow: 0 2.8px 2px red, 0 6.7px 4px blue, 0 12.5px 6px green,
      0 8px 17.9px purple, 0 4px 3px orange, 0 10px 8px teal;
  }
  &:hover svg {
    opacity: 1;
  }
`;

export const Image = styled.img`
  padding-left: 10px;
  padding-right: 10px;
  display: block;
  width: 12%;

  object-fit: cover;
`;

export const FriendsName = styled.div`
  margin-right: 20px;
  font-size: 20px;
  font-weight: bold;
`;

export const FriendsIcon = styled.div`
  svg {
    opacity: 0;
  }
`;
