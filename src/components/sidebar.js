import React from 'react'
import {useSelector} from "react-redux";
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuizIcon from '@mui/icons-material/Quiz';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
export default function Sidebar() {
    // var select=useSelector(state=>state.val);
    var menu_list=[{name:"Dashboard",icons:DashboardIcon},{name:"Assessment",icons:AssignmentTurnedInIcon,background:"rgb(230, 241, 252)"},{name:"My library",icons:QuizIcon}];
  return (
    <div className='sidebar'>
        <div style={{width:"80%",height:"40%",borderBottom:"2px dashed #B9CBD5",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:'center'}}>
            {
                menu_list.map((e,i)=>{
                    return <div style={{width:"125px",borderRadius:"10px",height:'15%',border:e.background?'2px solid rgb(19, 136, 232)':"none",background:e.background?e.background:"none",paddingTop:"10px",paddingBottom:"10px",display:"flex",justifyContent:"center",flexDirection:"column",color:e.background?"rgb(19, 136, 232)":"#1C4980",alignItems:'center'}} key={i}>
                        {<e.icons style={{fontSize:"32px",margin:"2px",color:e.background?"rgb(19, 136, 232)":"#1C4980"}} />}
                        {e.name}
                        </div>
                })
            }
        </div>
        <div style={{width:"80%",height:"auto",display:'flex',paddingTop:"10px",flexDirection:"column",alignItems:'center'}}>
                <div style={{border:"1px solid #DD572C",marginTop:"10px",width:"65px",padding:"2px",borderRadius:"20px",height:"auto",textAlign:'center',fontSize:"14px",color:"#DD572C"}}> Admin</div>
                <div style={{width:"auto",height:'auto',marginTop:"25px",display:"flex",justifyContent:"center",flexDirection:"column",color:"#1C4980",alignItems:'center'}}>
                        {<DashboardIcon style={{fontSize:"32px",margin:"4px",color:"#1C4980"}} />}
                        Round status
                        </div>
        </div>
    </div>
  )
}
