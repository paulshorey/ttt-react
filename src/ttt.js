// @flow
import React, { Component } from "react";
import * as Styled from "./ttt.styled";

class Td extends Component {
  render() {
    return (
      <Styled.Td type="submit" value="">
        X
      </Styled.Td>
    );
  }
}
class Tr extends Component {
  render() {
    return <Styled.Tr>{this.props.children}</Styled.Tr>;
  }
}

class TTT extends Component {
  constructor(props) {
    super(props);
    this.state = { cssWidthHeight: "100%" };
  }
  componentDidMount() {
    this.setState({
      cssWidthHeight:
        Math.min(this.TTTBoard.offsetHeight, this.TTTBoard.offsetWidth) + "px"
    });
  }
  render() {
    return (
      <Styled.TTT
        innerRef={form => {
          this.TTTBoard = form;
        }}
        onSubmit={e => {
          e.preventDefault();
          console.log(this.TTTBoard);
        }}
        style={{
          height: this.state.cssWidthHeight,
          width: this.state.cssWidthHeight
        }}
      >
        <Tr>
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
        </Tr>
      </Styled.TTT>
    );
  }
}

export default TTT;
