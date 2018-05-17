import React, { Component } from "react";
import Styled from "styled-components";
import { Dropdown, Quantity } from "./components";

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
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  width: 30%;
  color: #6bdbb8;
  border: 1px solid #6bdbb8;
  min-height: 35px;
  margin-right: 10px;
  background: #fff;

  &:before{
    content: '';
    background-image: url(/cross-out-mark.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    min-height: 12px;
    min-width: 12px;
  }
`;

const ButtonText = Styled.span`
  border-left: 1px solid #6bdbb8;
  padding-left: 5px;
  margin-left: 5px;
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

const DetailItemWrapper = Styled.div`
  flex: 1;
  min-width: 50%;
  display: flex;
  flex-direction: column;
  ${props => (props.flexEnd ? "justify-content: flex-end;" : "")}
`;

const TotalLabel = Styled(ItemLabel)`
  flex: 1;
  margin-bottom: 0;
`;

const TotalValue = Styled(ItemValue)`
  flex: 1;
`;

class App extends Component {
  state = { quantity: 1, price: 10 };

  renderItemDetails() {
    const { quantity, price } = this.state;
    return (
      <React.Fragment>
        <DetailItemWrapper>
          <ItemLabel>farbe</ItemLabel>
          <ItemValue>rot</ItemValue>
        </DetailItemWrapper>
        <DetailItemWrapper>
          <ItemLabel>grosse</ItemLabel>
          <Dropdown
            selected={11}
            data={[7, 8, 9, 10, 11, 12, 13]}
            onChange={() => {}}
          />
        </DetailItemWrapper>
        <DetailItemWrapper flexEnd>
          <ItemLabel>anzahl</ItemLabel>
          <Quantity
            value={quantity}
            onChange={qte => this.setState({ quantity: qte })}
          />
        </DetailItemWrapper>
        <DetailItemWrapper flexEnd>
          <ItemLabel>press</ItemLabel>
          <ItemValue>{`${price} $`}</ItemValue>
        </DetailItemWrapper>
      </React.Fragment>
    );
  }
  render() {
    const { price, quantity } = this.state;
    return (
      <Wrapper>
        <ItemWrapper>
          <TopSection>
            <Image src="/150x150.png" />
            <ItemDetails>{this.renderItemDetails()}</ItemDetails>
          </TopSection>
          <BottomSection>
            <Button>
              <ButtonText>loschen</ButtonText>
            </Button>
            <TotalWrapper>
              <TotalLabel>gesamt</TotalLabel>
              <TotalValue>{`${parseFloat(price * quantity).toFixed(
                2
              )} $`}</TotalValue>
            </TotalWrapper>
          </BottomSection>
        </ItemWrapper>
      </Wrapper>
    );
  }
}

export default App;
