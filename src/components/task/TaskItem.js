import {  Card, CardActions, CardContent, IconButton, Typography } from "@mui/material";
import React from "react";

const TaskItem = (props) => {
  return (

    <Card sx={{ maxWidth: 275, mb: 3 }} data-testid="notes-item">
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.taskItem.taskTitle}
                </Typography>
            </CardContent>
            {props.taskItem.taskDescription}
            <CardActions>
                <IconButton
                    size="large"
                    edge="start"
                    // onClick={handleDeleteClick}
                >
                    {/* <DeleteForeverIcon>



                   </DeleteForeverIcon> */}
                </IconButton>
            </CardActions>
        </Card>
   // <Box 

        //     data-testid="ledger-item"
        //     sx={{
        //         mb: 3
        //     }}>
        //     <Card>
        //         <CardContent>
        //             <Grid container>
        //                 <Grid item={true} xs={12} md={4}>
        //                     <Box id="item-taskTitle">{props.taskItem.taskTitle}</Box>
        //                 </Grid>
        //                 <Grid item={true} xs={12} md={4}>
        //                     <Box id="item-desc">{props.taskItem.taskDescription}</Box>
        //                 </Grid>
        //                 <Grid item={true} xs={12} md={4}>
        //                     <Box id="item-taskStatus">{props.taskItem.taskStatus}</Box>
        //                 </Grid>
        //                 <Grid item={true} xs={12} md={4}>
        //                     <Box id="item-assignee">{props.taskItem.assignee}</Box>
        //                 </Grid>
        //                 <Grid item={true} xs={12} md={4}>
        //                     <Box id="item-createdBy">{props.taskItem.createdBy}</Box>
        //                 </Grid>
                        
        //                 <Grid item={true} xs={12} md={3}>
        //                     <Box id="item-date">
        //                         {new Date(props.taskItem.createdOn).toLocaleString()}
        //                     </Box>
        //                 </Grid>
        //                 <Grid item={true} xs={12} md={3}>
        //                     <Box id="item-date2">
        //                         {new Date(props.taskItem.dueDate).toLocaleString()}
        //                     </Box>
        //                 </Grid>
        //                 <Grid item={true} xs={12} md={1}>
        //                     <Box>
        //                         <IconButton
        //                            size="large"
        //                            edge="start"
        //                         //    onClick={handleDeleteClick}
        //                         >
        //                             {/* <DeleteForeverIcon></DeleteForeverIcon> */}
        //                         </IconButton>
        //                     </Box>
        //                 </Grid>
        //             </Grid>
        //         </CardContent>
        //     </Card>
        // </Box>
  );
};

export default TaskItem;
