import React, { useRef } from 'react'
import AssessmentOverview from './Assessment_overview'
import Myassessment from './Myassessment'
import ClearIcon from '@mui/icons-material/Clear';
import {useSelector} from "react-redux";
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import ComputerIcon from '@mui/icons-material/Computer';
export default function MainDiv() {
  var ref=useRef(null);
  var select=useSelector(state=>state.val);
  function handleClick(){
    ref.current.style.transform="translateY(1000px)";
  }
  var list2=["UI/UX and Design","No of Question","Web Development","UI/UX and Design","Web Development",];
  if(ref.current)
  {
    if(ref.current.style.transform===("translateY(1000px)")){
      ref.current.style.transform="translateY(0px)";
    }
    else{
      if(select==="on"){
        
        ref.current.style.transform="translateY(0px)";
      }
      else{
        console.log("off");
        ref.current.style.transform="translateY(1000px)";
      }
    }
    
  }
  
  return (
    <div className='maindiv' style={{position:"relative",zIndex:0,marginLeft:"2%",overflow:"hidden",borderRadius:"10px",background:"white",display:"flex",flexDirection:"column",alignItems:"center"}}>
       <div id='assm' style={{width:"100%",height:"70px",display:"flex",alignItems:'center'}}>
            <div id='assminside' style={{width:"auto",height:"60%",fontSize:"20px",fontWeight:500,paddingLeft:"20px",paddingRight:"20px",marginRight:"15px",display:"flex",justifyContent:'center',alignItems:'center',color:"#1C4980"}}>Assessment</div>
            <div id='top_' style={{width:"85%",height:"100%",display:'flex',alignItems:'center'}}>
              <div id='myashead' style={{width:"auto",height:"99%",borderBottom:"3px solid #0173E6",color:"#0173E6",paddingLeft:"20px",fontWeight:500,paddingRight:"20px",justifyContent:'center',alignItems:'center'}}>My assessments</div>
              <div id='mob' ><StayCurrentPortraitIcon /></div>
              <div id='comp'><ComputerIcon /></div>
            </div>
       </div>
       <div className='asov' style={{width:"100%",display:"flex",flexDirection:"column"}}>
            <AssessmentOverview />
       </div>
       <div className='myas' style={{width:"100%"}}>
          <Myassessment />
       </div>
       <div ref={ref} style={{position:"absolute",transform:"translateY(2000px)",transition:"all .5s",width:"43%",border:"1px solid rgb(217, 219, 222)",borderRadius:"10px",display:"flex",flexDirection:"column",zIndex:10,boxShadow:"0 21px 32px -10px rgba(0,0,0,.5)",height:"auto",top:50,background:"white"}}>
          <div style={{width:"100%",height:"70px",borderBottom:"1px solid rgb(217, 219, 222)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <h2 style={{marginLeft:"20px",color:"rgb(28, 73, 128)"}}>Create New Assignment</h2>
              <ClearIcon onClick={handleClick} style={{marginRight:"20px"}} />
          </div>
          <div style={{width:"auto",height:"5.2vw",paddingLeft:"25px"}}>
            <h3 style={{color:"rgb(28, 73, 128)",fontSize:"1vw"}}>Name of Assessment</h3>
            <input style={{width:"90%",height:"2.5vw",border:"1px solid rgb(217, 219, 222)",borderRadius:"10px",color:"rgb(28, 73, 128)",fontSize:"1vw",paddingLeft:"20px",marginTop:"-3px"}} placeholder='Type Here' />
          </div>
          <div style={{width:"auto",height:"5.2vw",paddingLeft:"25px"}}>
          <h3 style={{color:"rgb(28, 73, 128)",fontSize:"1vw"}}>Purpose of the test is</h3>
            <select  style={{width:"94%",height:"2.5vw",border:"1px solid rgb(217, 219, 222)",borderRadius:"10px",color:"rgb(28, 73, 128)",fontSize:"1vw",paddingLeft:"20px",marginTop:"-3px"}}  >
            <option value=""  >Select</option>
            <option value="Job">Job</option>
            <option value="Internship">Internship</option>
            <option value="Examination">Examination</option>
            </select>
          </div>
          <div style={{width:"auto",height:"5.2vw",paddingLeft:"25px"}}>
          <h3 style={{color:"rgb(28, 73, 128)",fontSize:"1vw"}}>Description</h3>
            <select  style={{width:"94%",height:"2.5vw",border:"1px solid rgb(217, 219, 222)",borderRadius:"10px",color:"rgb(28, 73, 128)",fontSize:"1vw",paddingLeft:"20px",marginTop:"-3px"}}  >
            <option value=""  >Select</option>
            <option value="Job">Job</option>
            <option value="Internship">Internship</option>
            <option value="Examination">Examination</option>
            </select>
          </div>
          <div style={{width:"auto",height:"12.3vw",paddingLeft:"25px",display:"flex",flexDirection:"column"}}>
            <h3 style={{color:"rgb(28, 73, 128)",fontSize:"1vw"}}>Skills</h3>
            <div style={{width:"90%",overflow:"hidden",display:"flex",flexDirection:"column",marginLeft:"0px",borderRadius:"10px",height:"95%",border:"1px solid rgb(217, 219, 222)"}}>
              <div style={{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",height:"70%",borderBottom:"1px solid rgb(217, 219, 222)"}}>
              {
                list2.map((e,i)=>{
                  return <div style={{fontSize:".8vw",color:"rgb(28, 73, 128)",marginRight:"10px",borderRadius:"20px",border:"1px solid rgb(217, 219, 222)",display:"flex",paddingLeft:"10px",background:"rgb(222, 236, 255)",paddingRight:"10px",justifyContent:"space-evenly",alignItems:"center",height:"2.1vw"}} key={i}>{e}
                    <ClearIcon style={{fontSize:"1vw",marginLeft:"5px",color:"rgb(28, 73, 128)"}} />
                  </div>
                })
              }
              </div>
            <input style={{width:"99%",paddingLeft:"20px",outline:"none",height:"29%",border:"none",borderBottom:"1px solid rgb(217, 219, 222)",borderRadius:"10px",color:"rgb(28, 73, 128)",fontSize:"1vw",marginTop:"0px"}} placeholder='Type Here' />
            </div>
          </div>
          <div style={{width:"auto",height:"5.2vw",paddingLeft:"25px"}}>
            <h3 style={{color:"rgb(28, 73, 128)",fontSize:"1vw"}}>Duration of Assessment</h3>
            <input style={{width:"90%",height:"2.5vw",border:"1px solid rgb(217, 219, 222)",borderRadius:"10px",color:"rgb(28, 73, 128)",fontSize:"1vw",paddingLeft:"20px",marginTop:"-3px"}} placeholder='Type Here' />
          </div>
          <div style={{width:"auto",marginBottom:"auto",height:"5.2vw",paddingLeft:"25px",marginTop:"5%",boxShadow:"o 21px 32px 10px rgb(245, 245, 245)",display:"flex",justifyItems:'center',alignItems:'center'}}>
            <button style={{width:"90%",height:"2.3vw",fontWeight:700,borderRadius:"10px",outline:"none",border:"none",background:"blue",color:"white",fontSize:".9vw"}}>Save</button>
          </div>
       </div>
    </div>
  )
}




