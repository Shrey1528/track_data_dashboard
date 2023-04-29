import { Container, InputContainer } from "./VisualizeStyled";

const Visualize = () => {
  return (
    <Container>
      <InputContainer>
        <input type="file" name="file" id="file" class="inputfile" />
      </InputContainer>
    </Container>
  );
};

export default Visualize;
