import React from 'react';
import { task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new task('Example', 'No desciptcion', false,LEVELS.NORMAL)
    return (
        <div>
            Your task: 
            <TaskComponent task={ defaultTask }></TaskComponent>
        </div>
    );
};



export default TaskListComponent;
