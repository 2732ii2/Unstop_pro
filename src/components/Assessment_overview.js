import React from 'react'
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import LanguageIcon from '@mui/icons-material/Language';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
export default function Assessment_overview() {
  var list_=[{name:"Email",number_:"11,000"},{name:"Social Share",number_:"145"},{name:"Unique Link",number_:"145",border:"none"},];
  
  return (
    <>
        <h2 style={{paddingTop:"10px",fontSize:"20px",paddingLeft:"30px",color:"#1C4980"}}>Assessment Overview</h2>
            <div style={{marginLeft:"30px",marginTop:"1%",width:"95%",height:"150px",border:"1px solid rgb(218, 220, 224)",display:"flex",borderRadius:"10px"}}>
                <div style={{width:"20%",height:"100%",borderRight:"1px solid rgb(218, 220, 224)",paddingLeft:"20px"}}>
                    <h4>Total assessments</h4>
                    <div style={{display:"flex",width:"auto",height:"50%",alignItems:"center",marginTop:"-10px"}}><div style={{minWidth:"50px",height:"50px",background:"rgb(234, 232, 252)",display:"flex",borderRadius:"10px",justifyContent:"center",alignItems:"center"}}><ViewStreamIcon style={{color:"rgb(99, 71, 237)",fontSize:"30px"}} /></div>
                    <h5 style={{marginLeft:"25px",fontSize:"32px",color:"rgb(28, 73, 128)"}}>34</h5></div>
                </div>
                <div style={{width:"27%",height:"100%",borderRight:"1px solid rgb(218, 220, 224)",paddingLeft:"20px"}}>
                  <h4>Candidates</h4>
                  <div style={{display:"flex",width:"auto",height:"50%",alignItems:"center",marginTop:"-10px"}}><div style={{minWidth:"50px",height:"50px",background:"rgb(234, 232, 252)",display:"flex",borderRadius:"10px",justifyContent:"center",alignItems:"center"}}><PeopleAltIcon style={{color:"rgb(99, 71, 237)",fontSize:"30px"}} /></div>
                    <div style={{width:"37%",borderRight:"2px solid rgb(218, 220, 224)",marginLeft:"20px",height:"50px",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:'center'}}>
                      <div style={{display:'flex',height:"50%",alignItems:"center",width:"100%"}}>
                        <h5 style={{fontSize:"20px",color:"rgb(28, 73, 128)",height:"30px",display:"flex",width:"50px",justifyContent:"start",alignItems:'center'}}>11,145</h5>
                        <p style={{width:"30px",height:"30px",display:"flex",justifyContent:'center',alignItems:"center",marginLeft:"15px",color:"rgb(4, 194, 102)",fontSize:".8vw"}}>+89</p>
                      </div>
                      <p style={{height:"20px",marginTop:"5px",fontSize:".8vw",color:"rgb(28, 73, 128)",width:"100%"}}>Total candidate</p>
                    </div>
                    <div style={{width:"37%",marginLeft:"20px",height:"50px",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:'center'}}>
                      <div style={{display:'flex',height:"50%",alignItems:"center",width:"100%"}}>
                        <h5 style={{fontSize:"20px",color:"rgb(28, 73, 128)",height:"30px",display:"flex",width:"50px",justifyContent:"start",alignItems:'center'}}>1,14</h5>
                        <p style={{width:"30px",height:"30px",display:"flex",justifyContent:'center',alignItems:"center",marginLeft:"-5px",color:"rgb(4, 194, 102)",fontSize:".8vw"}}>+89</p>
                      </div>
                      <p style={{height:"20px",marginTop:"5px",color:"rgb(28, 73, 128)",width:"100%",fontSize:".8vw"}}>Who attempted</p>
                    </div>
                    </div>
                </div>
                <div style={{width:"35%",height:"100%",borderRight:"1px solid rgb(218, 220, 224)",paddingLeft:"20px"}}>
                  <h4>Candidates Source</h4>
                  <div style={{display:"flex",width:"auto",height:"50%",alignItems:"center",marginTop:"-10px"}}><div style={{minWidth:"50px",height:"50px",background:"rgb(252, 232, 239)",display:"flex",borderRadius:"10px",justifyContent:"center",alignItems:"center"}}><LanguageIcon style={{color:"rgb(232, 63, 122)",fontSize:"30px"}} /></div>
                    {
                      list_.map((e,i)=>{
                      //   return <div key={i} style={{width:"30%",borderRight:e.border?e.border:"2px solid rgb(218, 220, 224)",marginLeft:"20px",height:"50px",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:'center'}}>
                      //   <div style={{display:'flex',height:"50%",alignItems:"center",width:"100%"}}>
                      //     <h5 style={{fontSize:"20px",color:"rgb(28, 73, 128)",height:"30px",display:"flex",minWwidth:"50px",justifyContent:"start",alignItems:'center'}}>{e.number_}</h5>
                      //     <p style={{width:"30px",height:"30px",display:"flex",justifyContent:'center',alignItems:"center",marginLeft:"15px",color:"rgb(4, 194, 102)"}}>+89</p>
                      //   </div>
                      //   <p style={{height:"20px",marginTop:"5px",color:"rgb(28, 73, 128)",width:"100%",fontSize:".8vw"}}>{e.name}</p>
                      // </div>
                      return <div style={{width:"37%",marginLeft:"20px",height:"50px",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:'center'}}>
                        <div style={{display:'flex',height:"50%",alignItems:"center",width:"100%"}}>
                          <h5 style={{fontSize:"20px",color:"rgb(28, 73, 128)",height:"30px",display:"flex",width:"auto",justifyContent:"start",alignItems:'center'}}>{e.number_}</h5>
                          <p style={{width:"30px",height:"30px",display:"flex",justifyContent:'center',alignItems:"center",marginLeft:"5px",color:"rgb(4, 194, 102)",fontSize:".8vw"}}>+89</p>
                        </div>
                        <p style={{height:"20px",marginTop:"5px",color:"rgb(28, 73, 128)",width:"100%",fontSize:".8vw"}}>{e.name}</p>
                      </div>
                      })

                    }
                    </div>
                </div>
                <div style={{width:"20%",height:"100%",borderRight:"1px solid rgb(218, 220, 224)",paddingLeft:"20px"}}>
                <h4>Total Purpose</h4>
                    <div style={{display:"flex",width:"auto",height:"50%",alignItems:"center",marginTop:"-10px"}}><div style={{minWidth:"50px",height:"50px",background:"rgb(230, 241, 252)",display:"flex",borderRadius:"10px",justifyContent:"center",alignItems:"center"}}><InsertLinkIcon style={{color:"rgb(0, 115, 230)",fontSize:"30px"}} /></div>
                    <h5 style={{marginLeft:"25px",fontSize:"32px",color:"rgb(28, 73, 128)"}}>11</h5></div>
                </div>
            </div>
    </>
  )
}
