const todos = (state = [], action) => {
  
};


const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  };
  const stateAfter = [
    {
    id: 0,
    text: 'Learn Redux',
    completed: false
    }
  ];

  deepFreeze
};

 
