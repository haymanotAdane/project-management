import { Box, Container, Fab } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import TaskItem from './TaskItem';
import {Link} from 'react-router-dom';

const taskItems = [{
    "id":1,
   "taskTitle":"task 1",
   "taskDescription":"task 1 description",
   "taskStatus": "TODO",
   "assignee": "Jack",
   "createdBy":"Anjana",
   "createdOn":new Date(),
   "dueDate": new Date(2022,10,12)
}, {
    "id":2,
    "taskTitle":"task 2",
    "taskDescription":"task 1 description",
    "taskStatus": "TODO",
    "assignee": "Jack",
    "createdBy":"Anjana",
    "createdOn":new Date(),
    "dueDate": new Date(2022,10,12)
 }, {
    "id":3,
    "taskTitle":"task 3",
    "taskDescription":"task 1 description",
    "taskStatus": "TODO",
    "assignee": "Jack",
    "createdBy":"Anjana",
    "createdOn":new Date(),
    "dueDate": new Date(2022,10,12)
 }]
const Task = ()=>{
   

    return(

        <Container>
      <Box>
        <Fab color="primary" data-testid="add-fab">
          <AddIcon />
        </Fab>
      </Box>
      <Box>
      {
          taskItems?.map((item) => {
            return <TaskItem
              key={item.id}
              taskItem={item}
              component= {Link}
              to ="/taskItem"/>
            //   onLedgerDelete={handleLedgerItemDelete}/>
          })
        }
      </Box>
    </Container>

    )
}
export default Task;