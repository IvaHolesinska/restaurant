import { styled } from 'styled-components';
type Position = 'left' | 'middle' | 'right';

type TextFieldProps = {
  children?: React.ReactNode;
  position?: Position;
};

const TextFieldContainer = styled.div<{ position: Position }>`
  display: flex;
  flex-direction: column;

  align-items: ${({ position }) =>
    position === 'right'
      ? 'flex-end'
      : position === 'middle'
      ? 'center'
      : 'flex-start'};
`;

const TextField = ({ children, position = 'left' }: TextFieldProps) => {
  return (
    <TextFieldContainer position={position}>{children}</TextFieldContainer>
  );
};

export default TextField;
