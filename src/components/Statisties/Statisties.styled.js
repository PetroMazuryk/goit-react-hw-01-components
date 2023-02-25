import styled from 'styled-components';

export const Container = styled.section`
  width: 600px;
  margin: 0 auto;
  border: 1px solid var(--grey);

  box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  border-bottom: 1px solid var(--grey);
 
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ListItem = styled.li`
  width: 100%;
  height: 100%;
  padding: 10px 0;
  text-align: center;
  font-size: 22px;
  background-color: ${randomBgColor};
`;

function randomBgColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Label = styled.span`
  display: block;
  padding-bottom: 5px;
  font-weight: bold;
`;

export const Percentage = styled.span`
  display: block;
`;
