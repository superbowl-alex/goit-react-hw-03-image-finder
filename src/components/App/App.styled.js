import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
`;
export const WrapSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.colors.buttonColor};
`;
