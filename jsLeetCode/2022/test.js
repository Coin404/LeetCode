function getTasks(tasks) {
    const newTasks = []
    for (let i = 0; i < tasks.length; i++) {
      // 渲染计划时间
      if (tasks[i].planStart && tasks[i].planEnd) {
        const newTask = {}
        newTask.start = tasks[i].planStart
        newTask.end = tasks[i].planEnd
        newTask.name = tasks[i].name + '_计划周期'
        newTask.id = tasks[i].id + '_plan'
        newTask.type = tasks[i].type
        newTask.styles = {
          progressColor: '#ffbb54', 
          progressSelectedColor: '#74b9ff' 
        }
        newTasks.push(newTask)
      }
      // 渲染实际时间
      if (tasks[i].actualStart && tasks[i].actualEnd) {
        const newTask = {}
        newTask.start = tasks[i].actualStart
        newTask.end = tasks[i].actualEnd
        newTask.name = tasks[i].name + '_实际周期'
        newTask.id = tasks[i].id + '_actual'
        newTask.type = tasks[i].type
        newTask.progress = tasks[i].progress
        newTask.styles = {
          backgroundColor: '#8cc5ff',
          progressSelectedColor: '#cccccc' ,
        }
        newTasks.push(newTask)
      }
    }
    return newTasks
  }
  
  const task = [
    {
      actualStart: 1653570875410,
      actualend: 1653550675410,
      planStart: 1653570875410,
      planEnd: 1653570875410,
      name: 'Idea',
      id: 'Task 0',
      type: 'task',
      progress: 50,
      isDisabled: false,
      styles: { progressColor: '#ffbb54', progressSelectedColor: '#74b9ff' },
    },
    {
      actualStart: 1653570875410,
      actualend: 1653550675410,
      planStart: 1653570875410,
      planEnd: 1653570875410,
      name: 'Idea2',
      id: 'Task 1',
      type: 'task',
      progress: 90,
      isDisabled: false,
      styles: { progressColor: '#ffbb54' },
      dependencies: ['Task 0'],
    },
  ]
  
  const tasks = getTasks(task)
  console.log(tasks)