function TaskPage(){
    const { projectId, taskId } = useParams();
//from Abel from discord>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//     const deleteTask = async (req, res) => {
//     try {
//         // This needs an authorization check
//         //get to be update task
//         const getDeleteTask = await Task.findById(req.params.taskId);
//         if (!getDeleteTask) {
//             return res.status(400).json({ message: "Invalid Task ID" });
//         }
//         //find the project owner
//         const projectId = getDeleteTask.project;
//         console.log(projectId);
//         const getUpdateProject = await Project.findById(projectId);
//         if (!getUpdateProject) {
//             return res.status(400).json({ message: "Invalid project ID" });
//         }
//         // check if the user field on that task matches the authenticated user’s _id.
//         if (getUpdateProject.user.toString() !== req.user._id) {
//             return res
//                 .status(403)
//                 .json({ message: "Not Authorize to update this task" });
//         }
//         const task = await Task.findByIdAndDelete(req.params.taskId);
//         if (!task) {
//             return res.status(404).json({ message: "No task found with this id!" });
//         }
//         res.json({ message: "task deleted!" });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// };
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const getAllTaskByProjectId = async (req, res) => {
//     try {
//         //verify the ownership
//         const getViewProject = await Project.findById(req.params.projectId);
//         if (!getViewProject) {
//             return res.status(400).json({ message: "Invalid Project ID" });
//         }
//         // check if the user field on that task matches the authenticated user’s _id.
//         if (getViewProject.user.toString() !== req.user._id) {
//             return res
//                 .status(403)
//                 .json({ message: "Not Authorize to view this project tasks" });
//         }
//         //if all checks out
//         const task = await Task.find({ project: req.params.projectId });
//         res.json(task);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// };
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    return(
        <>
        </>
    )
}

export default TaskPage;