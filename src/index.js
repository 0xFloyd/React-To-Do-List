import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import './index.css';








class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            priority: '',
            date: '',
            modal: false,
        };

        this.handleInput= this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
    }


    toggle() {
        this.setState(NewState => ({
            modal: !NewState.modal,
        }));
    }

    handleInput(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event){
        alert('A title was submitted: ' + this.state.title + this.state.description + this.state.priority + this.state.date);
        event.preventDefault();
        this.toggle();
        this.setState({
            title: '',
            description: '',
            priority: '',
            date: '',
        });
    }

    render() {
        return(
            <Container>
                <Button onClick={this.toggle}>+</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add Task</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label xs={2} lg={2}>Title:</Label>
                                <Col xs={12} lg={10}>
                                    <Input type="text" name="title" value={this.state.title} onChange={this.handleInput} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label xs={4} lg={2}>Description:</Label>
                                <Col xs={12} lg={10}>
                                    <Input type="text" name="description" value={this.state.description} onChange={this.handleInput} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="formDate" xs={2}>Date:</Label>
                                <Col xs={12} lg={10}>
                                    <Input
                                        type="date"
                                        name="date"
                                        id="formDate"
                                        placeholder="date placeholder"
                                        value={this.state.date}
                                        onChange={this.handleInput}
                                        />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label xs={4} lg={2}>Priority:</Label>
                                <Col xs={12} lg={10}>
                                    <Input type="select" name="priority" value={this.state.priority} onChange={this.handleInput}>
                                        <option></option>
                                        <option value="!">!</option>
                                        <option value="!!">!!</option>
                                        <option value="!!!">!!!</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <Button type="submit" value="Submit">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </Container>
        );
    }

}



class ToDoListApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true
        };
    }


    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <ToDoForm></ToDoForm>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>hey</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>hey</div>
                    </Col>
                </Row>

            </Container>
        );
    }
}

ReactDOM.render(
    <ToDoListApp />,
    document.getElementById('root')
);