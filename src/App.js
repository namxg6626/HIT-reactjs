import React from "react";
import { Button, Row, Alert } from "antd";
import { ModalCounter } from "./components";
import "antd/dist/antd.css";
import "./App.css";

export default class App extends React.Component {
  state = {
    isModalVisible: false,
    countValue: null,
  };

  closeModal = () => {
    this.setState({ isModalVisible: false });
  };

  openModal = () => {
    this.setState({ isModalVisible: true });
  };

  handleOk = (val) => {
    this.closeModal();
    this.setState({ countValue: val });
  };

  render() {
    return (
      <div className="app">
        {this.state.isModalVisible && (
          <ModalCounter
            visible={this.state.isModalVisible}
            onOk={(countValue) => this.handleOk(countValue)}
          >
            <Alert
              type="success"
              message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolore doloremque laborum dicta vel tempore!"
            />
          </ModalCounter>
        )}
        <Row justify="center">
          <Button onClick={() => this.openModal()} type="primary">
            Hit me :D !
          </Button>
        </Row>
        <Row justify="center">
          {this.state.countValue && <p>Count value: {this.state.countValue}</p>}
        </Row>
      </div>
    );
  }
}
