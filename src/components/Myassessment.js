import React, { useRef } from 'react'
import AddIcon from '@mui/icons-material/Add';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LinkIcon from '@mui/icons-material/Link';
import {useSelector,useDispatch} from "react-redux";
import { add_off, add_on } from '../Redux/actions';
export default function Myassessment() {
    var ref=useRef(null);
    var select=useSelector(state=>state.val);
    var dispatch=useDispatch();
    function eventCall(){
        if(select.includes("on")){
            dispatch(add_off);
        }
        else{
            dispatch(add_on);
        }
    }
    var list1=[0,[{number:1}],[{number:0,color:"rgb(151, 71, 255)"},{number:3,color:"rgb(47, 121, 224)"},{number:3,color:"rgb(217, 61, 113)"}]];
  return (
    <>
        <h2 style={{paddingTop:"10px",fontSize:"20px",paddingLeft:"30px",color:"#1C4980"}}>My Assessment</h2>
        <div className='myasinside' style={{width:"95%",display:"flex",transition:"all .5s",marginLeft:"25px",height:"90%"}}>
            {
                list1.map((e,i)=>{
                    if (i==0){
                        return <div  className='samedivs' id='sp_sam'  key={i} style={{border:"1px dashed rgb(217, 219, 222)",display:"flex",flexDirection:"column",alignItems:"center",background:"rgb(245, 247, 250)",borderRadius:"20px"}}>
                            <div ref={ref} onClick={eventCall} style={{width:"100px",height:"100px",background:'white',display:"flex",justifyContent:"center",alignItems:'center',borderRadius:"50%"}}>
                                <AddIcon onClick={eventCall}  style={{color:"rgb(0, 116, 232)",fontSize:"42px"}}/>
                            </div>
                            <h2 id="h_2" style={{width:"80%",textAlign:'center',marginTop:"10px",color:"rgb(28, 73, 128)"}}>New Assessment</h2>
                            <p id="p_" style={{width:"80%",textAlign:'center',marginTop:"-10px",color:"rgb(28, 73, 128)"}}>From here you can add mutliple types like MCQs,subjective (text of paragraph)!</p>
                        </div>
                    }
                    else{
                        return  <div className='samedivs' key={i} style={{border:"1px dashed rgb(217, 219, 222)",borderRadius:"20px",display:"flex",flexDirection:"column",alignItems:"center",}}>
                                    <div style={{width:"90%",height:"22%",display:"flex",paddingLeft:"10px",paddingRight:"10px",justifyContent:"space-between",alignItems:"start"}}>
                                        <div style={{minWidth:"3.7vw",height:"3.7vw",background:"rgb(234, 232, 252)",display:"flex",borderRadius:"17px",justifyContent:"center",alignItems:"center"}}><BusinessCenterIcon style={{color:"rgb(99, 71, 237)",fontSize:"30px"}} /></div>

                                        <div id='math_' style={{width:"90%",justifyContent:'start',alignItems:'center'}}>
                                            <div  style={{width:"auto",height:"80%",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"center"}}>
                                                <h2 id='h_2' style={{marginLeft:"5px",color:"rgb(28, 73, 128)",marginTop:"15px"}}>Math Assessment</h2>
                                                <div style={{width:"auto",display:"flex",marginTop:"-12px",marginBottom:"20px"}}>
                                                    <div id='div_' style={{width:"45px",height:"20px",marginLeft:"5px",marginRight:"10px",borderRight:"1px solid rgb(217, 219, 222)",color:"rgb(28, 73, 128)"}}>Job</div>
                                                    <div id='div_' style={{display:"flex",width:"auto",alignItems:"center",height:"20px",color:"rgb(140, 163, 191)"}}>
                                                    <CalendarMonthIcon id="div_" style={{marginRight:"10px",color:"rgb(28, 73, 128)"}} />
                                                    20 Apr 2023
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <MoreVertIcon  style={{color:"rgb(28, 73, 128)",fontSize:"30px"}}/>
                                    </div>
                                    <div id='math' style={{width:"90%",height:"32%",borderBottom:"1px dashed rgb(217, 219, 222)",justifyContent:'start',alignItems:'center'}}>
                                        <div  style={{width:"auto",height:"80%",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"center"}}>
                                            <h2 id='h_2' style={{marginLeft:"5px",color:"rgb(28, 73, 128)",marginTop:"15px"}}>Math Assessment</h2>
                                            <div style={{width:"auto",display:"flex",marginTop:"-12px",marginBottom:"20px"}}>
                                                <div id='div_' style={{width:"45px",height:"20px",marginLeft:"5px",marginRight:"10px",borderRight:"1px solid rgb(217, 219, 222)",color:"rgb(28, 73, 128)"}}>Job</div>
                                                <div id='div_' style={{display:"flex",width:"auto",alignItems:"center",height:"20px",color:"rgb(140, 163, 191)"}}>
                                                <CalendarMonthIcon id="div_" style={{marginRight:"10px",color:"rgb(28, 73, 128)"}} />
                                                20 Apr 2023
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{width:"90%",height:"25%",display:"flex"}}>
                                        <div style={{width:"50%",display:"flex",alignItems:"center"}}>
                                            <div style={{display:"flex",height:"60%",justifyContent:"space-between",flexDirection:"column"}}>
                                                <div style={{color:"rgb(28, 73, 128)",fontWeight:400}} id='p_'>00</div>
                                                <div style={{color:"rgb(28, 73, 128)",fontWeight:700}} id='p_1'>Duration</div>
                                            </div>
                                            <div style={{display:"flex",height:"60%",justifyContent:"space-between",marginLeft:"10px",flexDirection:"column"}}>
                                                <div style={{color:"rgb(28, 73, 128)",fontWeight:400}} id='p_'>00</div>
                                                <div style={{color:"rgb(28, 73, 128)",fontWeight:700}} id='p_1'>Questions</div>
                                            </div>

                                        </div>
                                        <div style={{width:"50%",display:"flex",justifyContent:"space-evenly",alignItems:'center'}}>
                                            <div id="share_"   style={{height:"30px",borderRadius:"25px",paddingLeft:"5px",color:"rgb(28, 73, 128)",fontWeight:500,paddingTop:"2px",paddingRight:"4px",display:"flex",border:"1px solid rgb(28, 73, 128)",alignItems:"center"}}>
                                                <div style={{transform:"rotate(-40deg)",height:"80%",marginRight:"5px",color:"rgb(28, 73, 128)"}}>
                                                    <LinkIcon />
                                                </div>
                                                Share
                                            </div>
                                            <div style={{width:"40%",height:"40px",display:"flex",justifyContent:"end"}}>
                                            {
                                                e.map((el,i)=>{
                                                    return <div id="icons_" key={i} style={{border:"2px solid white",marginLeft:`-${el.number}0%`,zIndex:el.number,borderRadius:"50%",background:el.color?el.color:"rgb(99, 71, 237)",color:"white",display:"flex",justifyContent:'center',alignItems:"center",fontWeight:500}}>
                                                    LP
                                                </div>
                                                })
                                            }
                                            </div>
                                        </div>

                                    </div>

                        </div>
                        
                    }
                })
            }
        </div>
    </>
  )
}
