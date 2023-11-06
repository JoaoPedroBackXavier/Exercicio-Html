const handleAddItemToList = (task, itemsList, setItemsList, setTask) => (event) => {
    event.preventDefault();
  
    if (!task) {
      return;
    }
  
    setItemsList([...itemsList, task]);
    setTask("");
  };
  
  export default handleAddItemToList;
  