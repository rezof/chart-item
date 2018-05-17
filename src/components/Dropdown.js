import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
  position: relative;
  width: 100%;
  color: #5c5c5c;
  font-size: 16px;
  box-sizing: border-box;
  background-image: url(/arrow_down.png);
  background-size: 12px;
  background-repeat: no-repeat;
  background-position-x: 80%;
  background-position-y: 50%;
`;

const ValueText = Styled.p`
  display: flex;
  align-items: center;
  height: 100%;
  color: inherit;
  padding: 0;
  margin: 0;
`;

const ItemsWrapper = Styled.div`
  position: absolute;
  right: -2px;
  left: -2px;
  max-height: 160px;
  overflow: scroll;
`;

const Item = Styled.p`
  background-color: white;
  border: 1px solid #dadada;
  padding: 12px 10px;
  margin: 0;
  cursor: pointer;
  &:hover{
    background-color: #eff2f5;
  }
  &:not(:last-of-type){
    border-bottom: none;
  }
`;

export default class DropDown extends React.Component {
  constructor(props) {
    super();
    const { selected } = props;
    this.state = {
      selectedItem: selected
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick.bind(this));
  }

  handleClick(e) {
    if (
      this._contentRef &&
      !this._contentRef.contains(e.target) &&
      this.state.isOpen
    ) {
      this.setState({ isOpen: false });
    }
  }

  handleItemSelection(e, selectedItem) {
    e.stopPropagation();
    const { onChange } = this.props;
    this.setState({ selectedItem, isOpen: false }, () => {
      if (typeof onChange === "function") {
        // in a real world app, should use proptypes..
        onChange(selectedItem);
      }
    });
  }

  isOpenDropdown(e) {
    e.stopPropagation();
    this.setState({ isOpen: true });
  }

  render() {
    const { selectedItem } = this.state;
    const { className, data } = this.props;
    return (
      <Container
        className={className}
        innerRef={ref => (this._contentRef = ref)}
        onClick={e => this.isOpenDropdown(e)}
      >
        <ValueText>{selectedItem}</ValueText>
        {this.state.isOpen && (
          <ItemsWrapper>
            {data.map(item => (
              <Item key={item} onClick={e => this.handleItemSelection(e, item)}>
                {item}
              </Item>
            ))}
          </ItemsWrapper>
        )}
      </Container>
    );
  }
}
