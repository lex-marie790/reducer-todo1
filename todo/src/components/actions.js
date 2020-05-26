import React from "react";

const handleChanges = e => {
    e.preventDefault();
    this.setState({
        newItem: e.target.value
    });
};

const handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.newItem)
};

const taskSubmit = e => {

};

const clearCompleted = e => {

};

const toggleItem = e => {

}

const addTask = e => {

}

export default handleChanges;
export default handleSubmit;
export default taskSubmit;
export default clearCompleted;
export default toggleItem;
export default addTask;



