import React from 'react'

//Tasklist et setTasklist sont des props qu'on a passé a la fonction ShowTask
const ShowTask = ({tasklist , seTasklist}) => {

    
return (
    <section className='showTask'>
        <div className="head">
            <div>
                <span className='title'>Todo</span>
                <span className='count'>0</span>
            </div>
            <button className="clearAll">Clear All</button>
        </div>
        <ul>
            {/* Ici on utilisé la methode map pour parcour la liste de taches( qui est tableau ) et affiche le nom et le temps */}
            { tasklist.map((task) => (
                <li>
                    <p>
                        <span className='name'>{task.name}</span>
                        <span className='time'>{task.time}</span>
                    </p>
                    <i className='bi bi-pencil-square'>Modify</i>
                    <i className='bi bi-trash'>Delete</i>
                </li>
            ))}

        </ul>
    </section>
)
}

export default ShowTask
