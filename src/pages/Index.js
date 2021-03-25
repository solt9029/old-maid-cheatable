import { Link } from "react-router-dom";
import { Jumbotron as RJumbotron, Container, Button, Row } from "reactstrap";
import styled from "styled-components";

const StyledJumbotron = styled(RJumbotron)`
  background: linear-gradient(
      45deg,
      rgba(100, 100, 120, 0.9),
      rgba(100, 100, 110, 0.8)
    ),
    url("https://4.bp.blogspot.com/-EQ85ihB7tG4/W0mFymHvRhI/AAAAAAABNUs/4H-ms5HYIF0KRGArz32Mz9Cihgi15bauACLcBGAs/s400/game_trump_babanuki.png")
      repeat;
  background-size: contain;
  text-align: center;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 3.9em;
  margin-top: 50px;
  margin-bottom: 50px;
  font-weight: bold;
`;

const StyledButton = styled(Button)`
  width: 9.5em;
  margin: 15px;
`;

const ButtonText = styled.span`
  font-size: 0.9em;
  font-weight: 500;
  color: #fff;
`;

const NarrowContainer = styled(Container)`
  max-width: 700px;
`;

const StyledContainer = styled(Container)`
  padding: 10px;
  background: linear-gradient(
    45deg,
    rgba(100, 100, 120, 0.9),
    rgba(100, 100, 110, 0.8)
  );
  color: #fff;
  margin-top: 50px;
  text-align: center;
`;

export default function IndexPage() {
  return (
    <div>
      <StyledJumbotron>
        <Container>
          <Title>ズルできるババ抜き</Title>
          <Link to="/game">
            <StyledButton color="info" size="lg" to="/rule">
              <ButtonText>ゲームを始める！</ButtonText>
            </StyledButton>
          </Link>
        </Container>
      </StyledJumbotron>
      <NarrowContainer>
        <Row style={{ marginTop: "70px" }}>
          <p>誰もがやったことのあるババ抜き。</p>
          <p>
            現実でやるときには、ちらっと相手の手札が見えてしまった、なんてこともあります。相手の手札をわざと見ることだって、やろうと思えばできるんです。（と言っておきながらあれですが、ズルしちゃダメですよ！！）
          </p>
          <p>
            ズルできるババ抜き、作ってみました。（現実ではズルしないでくださいね！！）
          </p>
        </Row>
        <Row style={{ marginTop: "70px" }}>
          <h3>さあ、ズルできるババ抜きの世界を楽しもう！</h3>
        </Row>
      </NarrowContainer>
      <StyledContainer style={{ marginTop: "100px" }} fluid>
        <small>
          Kenshi Shiode <a href="https://twitter.com/solt9029">@solt9029</a>
        </small>
      </StyledContainer>
    </div>
  );
}
