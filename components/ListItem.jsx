import React from 'react'
import { Button } from '@/components/ui/button';

const ListItem = ({todo, removeTodo, finishTodo}) => {
  return (
       <li  className='min-w-[400px]   flex items-center justify-between gap-4'>
          <p className='min-w-[320px] text-lg p-2 rounded-lg border border-blue-200'>{todo.text}</p>
         <div className='flex gap-2'>
            {/* Delete Button */}
            <Button onClick={()=> removeTodo(todo.id)} variant='secondary' size='lg'>Delete</Button>

            {/* finished Button */}
            <label htmlFor="my_modal_7" className="btn w-22 bg-blue-200 hover:bg-blue-400 ">Finished</label>
             {/* Put this part before </body> tag */}
             <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="text-lg font-bold text-green-500">Success!</h3>
                    <p className="py-4 text-black">Congratulation! Your Todo is finished.</p>
                    <div className='flex justify-end'>
                     <Button className=' text-right' onClick={()=> removeTodo(todo.id)} variant='outline' size='lg'>Finished</Button>
                    </div>
                </div>
                
            </div>
         </div>
        </li>
  )
}

export default ListItem

