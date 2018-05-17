import React from "react";
import Styled from "styled-components";

const Wrapper = Styled.div``;

const Value = Styled.span`
  display: inline-block;
  width: 30%;
  text-align: center;
`;

const Button = Styled.button`
  color: #9e9e9e;
  font-size: 12px;
  line-height: 12px;
  border: 1px solid #bbbbbb;
  padding: 2px 5px;
`;

export default class Quantity extends React.Component {
  changeQuantity(amount) {
    const { value } = this.props;
    const changeTo = value + amount >= 1 ? value + amount : value;
    if (changeTo !== value)
      this.setState({ value: changeTo }, () => {
        if (typeof this.props.onChange === "function") {
          this.props.onChange(this.state.value);
        }
      });
  }

  render() {
    return (
      <Wrapper>
        <Button onClick={this.changeQuantity.bind(this, -1)}>-</Button>
        <Value>{this.props.value || 1}</Value>
        <Button onClick={this.changeQuantity.bind(this, 1)}>+</Button>
      </Wrapper>
    );
  }
}
