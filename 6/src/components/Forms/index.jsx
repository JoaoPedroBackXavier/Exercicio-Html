const handleChangeInput = (setTask) => (event) => {
  const inputTask = event.target.value;

  setTask(inputTask);
};

export default handleChangeInput;

