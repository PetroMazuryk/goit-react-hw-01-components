import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 30px;
  border: 1px solid var(--grey);
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
`;

export const UserThumb = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 1px solid var(--grey);
  border-radius: 2em;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  padding: 0.8em;
  margin: 25px auto;
`;

export const UserName = styled.p`
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: bold;
`;

export const UserTag = styled.p`
  margin-bottom: 10px;
  color: var(--grey);
  font-size: 22px;
`;

export const Location = styled.p`
  margin-bottom: 20px;
  color: var(--grey);
  font-size: 22px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-top: 1px solid var(--grey);
  background-color: var(--bg-grey);
  text-align: center;
`;

export const StatListItem = styled.li`
  width: 100%;
  height: 100%;
  padding: 20px 0;
  :not(:last-child) {
    border-right: 1px solid var(--grey);
  }
`;

export const StatLabel = styled.span`
  display: block;
  margin-bottom: 5px;
  color: var(--grey);
`;

export const StatValue = styled.span`
  display: block;
  font-size: 24px;
  font-weight: bold;
`;
