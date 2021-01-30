import React, { Component } from "react";
import { Modal, Alert } from "antd";

export class ModalCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.counter = null;
  }

  componentDidMount() {
    this.counter = setInterval(
      () => this.setState({ count: this.state.count + 1 }),
      500
    );
  }

  componentWillUnmount() {
    clearInterval(this.counter);
  }

  render() {
    return (
      <div>
        <Modal
          closable={false}
          visible={this.props.visible}
          onOk={() => {
            this.props?.onOk(this.state.count);
          }}
        >
          <Alert type="info" message={`Count: ${this.state.count}`} />
          {this.props.children}
        </Modal>
      </div>
    );
  }
}
