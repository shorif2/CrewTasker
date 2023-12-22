import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";




const Modal = () => {
    const {user} = useAuth()

    const axiosPublic = useAxiosPublic()

    const { register, handleSubmit,   } = useForm();


    const onSubmit = (data) =>{

        const title = data.title
        const description = data.description
        const priority = data.priority
        const deadline = data.deadline
        const status = 'To-Do'
        const userEmail = user.email

        const task = {title,description, priority, deadline, status, userEmail}
        console.log(task);

        axiosPublic.post('/task', task)
        .then(result =>{
            console.log(result);
        })
        .catch(err =>{
            console.log(err);
        })


    }

    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my_modal_6" className="px-4 py-2 border font-semibold rounded">+ Add Task</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col">
                            <label htmlFor="title">Title</label>
                            <input className="border p-2" placeholder="Title" {...register("title")} />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="description">Description</label>
                            <input className="border p-2" placeholder="Description" {...register("description")} />
                        </div>

                        <div className="flex gap-6 w-full">
                        <div className="w-1/2">
                        <label htmlFor="priority">Priority</label>
                            <select className=" border w-full p-2" {...register("priority")}>
                                <option value="low">Low</option>
                                <option value="moderate">Moderate</option>
                                <option value="high">high</option>
                            </select>
                        </div>
                       <div className="flex flex-col w-1/2">
                       <label htmlFor="Deadline">Deadline</label>
                       <input className="p-2 border" type="date"  placeholder="Deadline" {...register("deadline")} />
                       </div>
                        </div>
                        <button type="submit" className="btn btn-sm btn-outline">+ Add Task</button>
                    </form>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;