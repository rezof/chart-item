import React, { Component } from "react";
import Styled from "styled-components";

import "./App.css";

const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  border-bottom: 1px solid #f1f2f3;
  box-shadow: 0px 1px 10px lightgrey;
`;

const TopSection = Styled.div`
  display: flex;
`;

const BottomSection = Styled.div`
  display: flex;
`;

const Image = Styled.img`
  width: 30%;
  height: 30%;
  border-radius: 20px;
  margin-bottom: 20px;
`;

const ItemDetails = Styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  margin-left: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f1f2f3;
`;

const Button = Styled.button`
  font-size: 16px;
  width: 30%;
  color: #6bdbb8;
  text-align: center;
  border: 1px solid #6bdbb8;
  padding: 10px 12px;
  margin-right: 10px;

  &:before{
    content: 'x';
    border-right: 1px solid #6bdbb8;
    padding-right: 5px;
    margin-right: 5px;
  }
`;

const TotalWrapper = Styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const ItemLabel = Styled.label`
  font-size: 12px;
  color: #b2b2b2;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const ItemValue = Styled.p`
  font-size: 16px;
  color: #8f8f8f;
`;

/* */
const DetailItemWrapper = Styled.div`
flex: 1;
min-width: 50%;
display: flex;
flex-direction: column;
${props => (props.secondRow ? "justify-content: flex-end;" : "")}
`;

const TotalLabel = Styled(ItemLabel)`
  flex: 1;
  margin-bottom: 0;
`;

const TotalValue = Styled(ItemValue)`
  flex: 1;
`;

const DetailItem = ({ label, value, ...rest }) => {
  return (
    <DetailItemWrapper {...rest}>
      <ItemLabel>{label}</ItemLabel>
      <ItemValue>{value}</ItemValue>
    </DetailItemWrapper>
  );
};

class App extends Component {
  render() {
    const items = [
      { label: "farbe", value: "rot" },
      { label: "grosse", value: "11" },
      { label: "anzahl", value: "1" },
      { label: "press", value: "10,00$" }
    ];
    return (
      <Wrapper>
        <ItemWrapper>
          <TopSection>
            <Image src="/150x150.png" />
            <ItemDetails>
              {items.map((item, i) => {
                const secondRow = i >= items.length / 2;
                console.log("second row", secondRow, i);
                return <DetailItem key={i} secondRow={secondRow} {...item} />;
              })}
            </ItemDetails>
          </TopSection>
          <BottomSection>
            <Button>loschen</Button>
            <TotalWrapper>
              <TotalLabel>gesamt</TotalLabel>
              <TotalValue>10,00 $</TotalValue>
            </TotalWrapper>
          </BottomSection>
        </ItemWrapper>
      </Wrapper>
    );
  }
}

export default App;
