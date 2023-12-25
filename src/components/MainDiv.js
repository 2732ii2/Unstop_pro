import React, { useEffect, useRef, useState } from 'react'
import AssessmentOverview from './Assessment_overview'
import Myassessment from './Myassessment'
import ClearIcon from '@mui/icons-material/Clear';
import {useSelector} from "react-redux";
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import ComputerIcon from '@mui/icons-material/Computer';
export default function MainDiv() {
  var ref=useRef(null);
  var ref2=useRef(null);
  
  var select=useSelector(state=>state.val);
  
  var [off_,setoff_]=useState(false);
  function handleClick(){
    ref.current.style.transform="translateY(1000px)";
    
  }
  var list2=["UI/UX and Design","No of Question","Web Development","UI/UX and Design"];
  
      if(select==="on"){
          if(ref.current)
          {
                if(ref.current.style.transform===("translateY(1000px)")){
                  ref.current.style.transform="translateY(0px)";
                }
                else{
                  ref.current.style.transform="translateY(0px)";
                }
          }
      }
      else{
        if(ref.current)
          {
                if(ref.current.style.transform===("translateY(1000px)")){
                  ref.current.style.transform="translateY(0px)";
                }
                else{
                  console.log("off");
                  ref.current.style.transform="translateY(1000px)";
                }
          }
        
      }
    
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  console.log(screenSize.width);
  var d=screenSize.width>400;
  	function getCurrentDimension(){
    	return {
      		width: window.innerWidth,
      		height: window.innerHeight
    	}
  	}
    useEffect(() => {
      const updateDimension = () => {
          setScreenSize(getCurrentDimension())
      }
      window.addEventListener('resize', updateDimension);
      console.log(select);
      return(() => {
          window.removeEventListener('resize', updateDimension);
      })
  }, [select,d])
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
       <div ref={ref2} className='asov' style={{width:"100%",display:d?"flex":(off_?"flex":"none"),flexDirection:"column"}}>
            <AssessmentOverview  />
       </div>
       <div className='myas' style={{width:"100%"}}>
          <Myassessment eventhandler={setoff_} value={off_}  />
       </div>
       <div ref={ref} id='clickbate' style={{position:"absolute",transform:"translateY(2000px)",transition:"all .5s",border:"1px solid rgb(217, 219, 222)",borderRadius:"10px",display:"flex",flexDirection:"column",zIndex:10,boxShadow:"0 21px 32px -10px rgba(0,0,0,.5)",background:"white"}}>
          <div style={{width:"100%",height:"70px",borderBottom:"1px solid rgb(217, 219, 222)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <h2 style={{marginLeft:"20px",color:"rgb(28, 73, 128)"}}>Create New Assignment</h2>
              <ClearIcon onClick={handleClick} style={{marginRight:"20px"}} />
          </div>
          <div style={{width:"auto",minHeight:"15%",paddingLeft:"25px"}}>
            <h3 id='div_' style={{color:"rgb(28, 73, 128)"}}>Name of Assessment</h3>
            <input style={{width:"85%",minHeight:"30px",border:"1px solid rgb(217, 219, 222)",borderRadius:"10px",color:"rgb(28, 73, 128)",paddingLeft:"20px",marginTop:"-3px"}} id='div_' placeholder='Type Here' />
          </div>
          <div style={{width:"auto",minHeight:"15%",paddingLeft:"25px"}}>
          <h3 id='div_' style={{color:"rgb(28, 73, 128)"}}>Purpose of the test is</h3>
            <select  style={{width:"90%",minHeight:"30px",border:"1px solid rgb(217, 219, 222)",borderRadius:"10px",color:"rgb(28, 73, 128)",paddingLeft:"20px",marginTop:"-3px"}} id='div_'  >
            <option value=""  >Select</option>
            <option value="Job">Job</option>
            <option value="Internship">Internship</option>
            <option value="Examination">Examination</option>
            </select>
          </div>
          <div style={{width:"auto",minHeight:"15%",paddingLeft:"25px"}}>
          <h3 id='div_' style={{color:"rgb(28, 73, 128)"}}>Description</h3>
            <select  style={{width:"90%",minHeight:"30px",border:"1px solid rgb(217, 219, 222)",borderRadius:"10px",color:"rgb(28, 73, 128)",paddingLeft:"20px",marginTop:"-3px"}} id='div_'  >
            <option value=""  >Select</option>
            <option value="Job">Job</option>
            <option value="Internship">Internship</option>
            <option value="Examination">Examination</option>
            </select>
          </div>
          <div style={{width:"auto",height:"200px",paddingLeft:"25px",display:"flex",flexDirection:"column"}}>
            <h3 id='div_' style={{color:"rgb(28, 73, 128)"}}>Skills</h3>
            <div style={{width:"90%",overflow:"hidden",gap:"10px",display:"flex",flexDirection:"column",marginLeft:"0px",borderRadius:"10px",height:"130px",border:"1px solid rgb(217, 219, 222)"}}>
              <div style={{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",height:"70%",borderBottom:"1px solid rgb(217, 219, 222)"}}>
              {
                list2.map((e,i)=>{
                  return <div style={{fontSize:"12px",height:"28px",color:"rgb(28, 73, 128)",marginRight:"10px",borderRadius:"20px",border:"1px solid rgb(217, 219, 222)",display:"flex",paddingLeft:"10px",background:"rgb(222, 236, 255)",paddingRight:"10px",justifyContent:"space-evenly",alignItems:"center"}} key={i}>{e}
                    <ClearIcon id='div_' style={{marginLeft:"5px",color:"rgb(28, 73, 128)"}} />
                  </div>
                })
              }
              </div>
            <input style={{width:"99%",paddingLeft:"20px",outline:"none",minHeight:"35px",border:"none",borderBottom:"1px solid rgb(217, 219, 222)",borderRadius:"10px",color:"rgb(28, 73, 128)",marginTop:"0px"}} id='div_' placeholder='Type Here' />
            </div>
          </div>
          <div style={{width:"auto",minHeight:"15%",paddingLeft:"25px"}}>
            <h3 id='div_' style={{color:"rgb(28, 73, 128)"}}>Duration of Assessment</h3>
            <input id='div_' style={{width:"85%",minHeight:"30px",border:"1px solid rgb(217, 219, 222)",borderRadius:"10px",color:"rgb(28, 73, 128)",paddingLeft:"20px",marginTop:"-3px"}} placeholder='Type Here' />
          </div>
          <div style={{width:"auto",marginBottom:"10px",minHeight:"15%",paddingLeft:"25px",marginTop:"5%",boxShadow:"o 21px 32px 10px rgb(245, 245, 245)",display:"flex",justifyItems:'center',alignItems:'center'}}>
            <button style={{width:"90%",height:"35px",fontWeight:700,borderRadius:"10px",outline:"none",border:"none",background:"blue",color:"white"}} id='p_1'>Save</button>
          </div>
       </div>
    </div>
  )
}




