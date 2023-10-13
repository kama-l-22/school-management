import React from 'react'

export default function AddStudentModal({addStdOpen,openAddStdClose,opnAndClose}) {
  return (
    <div className='addstdmodal'>
      <div className="addModal">
      <div className="cancleButton" onClick={() => {openAddStdClose()}}>
          x
        </div>
        <div className='heading'>Add a New Scholor to the Organisation</div>
        <div className="form">
        
        <input className='firtsname' type='text' placeholder='FullName'/>
        <input className='lastname' type='text' placeholder='LastName'/>
        <input className='date' type='date'></input>
        <input className='remarks' type='text' placeholder='Add Remarks'></input>
        </div>

      <div className="buttons">
        <button className="Add">Add</button>
        <button className="cnl" onClick={()=>{openAddStdClose()}}>Cancle</button>
        </div>
      </div>
    </div>
  )
}
