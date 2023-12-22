import * as React from 'react';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const INITIAL_LIST = [
    {
        id: '1',
        firstName: 'Robin',
        lastName: 'Wieruch',
    },
    {
        id: '2',
        firstName: 'Aiden',
        lastName: 'Kettel',
    },
    {
        id: '3',
        firstName: 'Jannet',
        lastName: 'Layn',
    },
];


const Dashboard = () => {

    //  start
    const [lists, setLists] = React.useState({
        column1: INITIAL_LIST,
        column2: [],
        column3: [],
    });

    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const newList = Array.from(lists[source.droppableId]);
            const [removed] = newList.splice(source.index, 1);
            newList.splice(destination.index, 0, removed);

            setLists({
                ...lists,
                [source.droppableId]: newList,
            });
        } else {
            const sourceList = Array.from(lists[source.droppableId]);
            const destinationList = Array.from(lists[destination.droppableId]);
            const [movedItem] = sourceList.splice(source.index, 1);

            destinationList.splice(destination.index, 0, movedItem);

            setLists({
                ...lists,
                [source.droppableId]: sourceList,
                [destination.droppableId]: destinationList,
            });
        }
    };

    //   end
    return (
        <div>
            {/* <div>
                <DragDropContext onDragEnd={onDragEnd}>
                    <div style={{ display: 'flex' }}>
                        {Object.keys(lists).map((columnId) => (
                            <div key={columnId} style={{ flex: 1, margin: '8px' }}>
                                <Droppable droppableId={columnId}>
                                    {(provided) => (
                                        <div className='border w-52' {...provided.droppableProps} ref={provided.innerRef} style={{ minHeight: '100px' }}>
                                            {lists[columnId].map((item, index) => (
                                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                                    {(provided) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={{
                                                                border: '1px solid black',
                                                                padding: '8px',
                                                                marginBottom: '4px',
                                                                ...provided.draggableProps.style,
                                                            }}
                                                        >
                                                            <button className='btn'>delete</button>
                                                            <p>id: {item.id}</p>
                                                            {`${item.firstName} ${item.lastName}`}
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </div>
                        ))}
                    </div>

                </DragDropContext>
            </div> */}
            <div>
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className='flex'>

                        {/* 1st box */}
                        <Droppable droppableId="column1">
                            {(provided) => (
                                <div className='m-2 w-52'
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    <div className='text-2xl font-medium pb-4'>To-Do List</div>
                                    {lists.column1.map((item, index) => (
                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                            {(provided) => (
                                                <div
                                                    className='border p-2 mb-1'
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={{
                                                        ...provided.draggableProps.style,
                                                    }}
                                                >
                                                    {`${item.firstName} ${item.lastName}`}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                        {/* 2nd box */}
                        <Droppable droppableId="column2">
                            {(provided) => (
                                <div className=' m-2 w-52'
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}

                                >
                                    <div className='text-2xl font-medium pb-4'>Ongoing</div>
                                    {lists.column2.map((item, index) => (
                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={{
                                                        border: '1px solid black',
                                                        padding: '8px',
                                                        marginBottom: '4px',
                                                        ...provided.draggableProps.style,
                                                    }}
                                                >
                                                    {`${item.firstName} ${item.lastName}`}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                        {/* 3rd box */}
                        <Droppable droppableId="column3">
                            {(provided) => (
                                <div className='m-2 w-52'
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    <div className='text-2xl font-medium pb-4'>Complete</div>
                                    {lists.column3.map((item, index) => (
                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={{
                                                        border: '1px solid black',
                                                        padding: '8px',
                                                        marginBottom: '4px',
                                                        ...provided.draggableProps.style,
                                                    }}
                                                >
                                                    {`${item.firstName} ${item.lastName}`}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                </DragDropContext>
            </div>
        </div>
    );
};

export default Dashboard;