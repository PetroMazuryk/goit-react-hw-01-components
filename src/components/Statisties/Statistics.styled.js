import styled from 'styled-components';

export const Section = styled.section`
  width: 600px;
  margin: 0 auto;
  box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;
export const Title = styled.h2`
  padding: 20px;
  border: 1px solid var(--grey);
  text-align: center;
  font-size: 33px;
  font-weight: bold;
  border-bottom: 1px solid var(--grey);
  background-color: cornsilk;
`;
export const StatsList = styled.ul`
  margin-bottom: 20px;
  display: flex;
`;
export const StatsItem = styled.li`
  border: 1px solid var(--grey);

  width: 100%;
  height: 100%;
  padding: 10px 0;
  text-align: center;
  font-size: 22px;
  background-color: ${randomBgColor};
`;
export const StatsLabel = styled.span`
  font-size: 28px;
  font-size: 28px;
  display: block;
  padding-bottom: 5px;
  font-weight: bold;
`;
export const StatsPercentage = styled.span`
  font-size: 28px;
`;
function randomBgColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
