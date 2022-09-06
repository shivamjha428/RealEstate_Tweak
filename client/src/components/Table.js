import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Table.css";
const Table = () => {
  const [allPost, setAllPost] = useState([]);
  const [pop, setPop] = useState(false);
  const[searchTerm,setsearchTerm]=useState("");
  const [model,setModal]=useState(false);
  const [temp,setTemp]=useState("");
  useEffect(() => {
    fetch("   http://localhost:5005/posts")
      .then((res) => {
        return res.json();
      })
      .then((postData) => {
        // console.log(postData)
        setAllPost(postData);
        // console.log(postData[0].postImage)
      });
  }, []);
  const getImg=(imgSrc)=>{
    setTemp(imgSrc);
    setModal(true);
  }
  return (
    <>
    <div className={model? "model open" : "model"}>
      <img src={temp}/>
      <button onClick={()=> setModal(false)}>small</button>
    </div>
    <div className="a2">
    <input placeholder="Property" className="PPPID" onChange={(e)=>{
      setsearchTerm(e.target.value);
    }}></input>
              <img src="Search1.png" className="i1"></img>
              <a href="/p1">
                <button className="btn3">Add property</button>
              </a>
              </div>
              <div className="body">
              <table className="Table">
                <tr className="inside table">
                  <td className="cell1">PPP ID</td>
                  <td className="cell1">Image</td>
                  <td className="cell1">Property</td>
                  <td className="cell1">contact</td>
                  <td className="cell1">Area</td>
                  <td className="cell1">views</td>
                  <td className="cell1">status</td>
                  <td className="cell1">Days left</td>
                  <td className="cell1">Action</td>
                </tr>
              </table>
            </div>
    <div>
    {allPost.filter((val)=>{
        if(searchTerm===""){
          return val;
        }else{
           return val.PropertyType.toLowerCase().includes(searchTerm.toLowerCase()) 

        }
      })
      .map((ele) => {
        return (
          <>
            <div className="body" onClick={()=>setPop(!pop)}>
              <table className="Table">
                <tr className="inside table">
                  <td className="cell">{parseInt(Math.random() * 10000)}</td>
                  <td className="cell"><img alt="img" className="i4" src={ele.postImage} onClick={()=>getImg(ele.postImage)}></img></td>
                  <td className="cell">{ele.PropertyType}</td>
                  <td className="cell">{ele.mobile}</td>
                  <td className="cell">{ele.Area}</td>
                  <td className="cell">{ele.Facing}</td>
                  <td className="cell">{ele.Ownership}</td>
                  <td className="cell">{parseInt(Math.random() * 100)}</td>
                  <td className="cell"><img src="eye.png" alt="img" className="i3"></img>
                                      <img src="pencil.jpeg" alt="img" className="i3"></img>
                                      </td>
                </tr>
              </table>
            </div>
            <div className={pop? "popup" : "popup1"}>
              <span className="pu">PropertyType:{ele.PropertyType}</span>
              <span className="pu">Negotiable:{ele.Negotiable}</span>
              <span className="pu">Price:{ele.Price}</span>
              <span className="pu">Ownership:{ele.Ownership}</span><br/>
              <span className="pu">PropertyAge:{ele.PropertyAge}</span>
              <span className="pu">PropertyApproved:{ele.PropertyApproved}</span>
              <span className="pu">PropertyDiscription:{ele.PropertyDiscription}</span>
              <span className="pu">BankLoan:{ele.BankLoan}</span><br/>
              <span className="pu">length1:{ele.length1}</span>
              <span className="pu">Breath:{ele.Breath}</span>
              <span className="pu">Area:{ele.Area}</span>
              <span className="pu">Electricity:{ele.Electricity}</span><br/>
              <span className="pu">Facing:{ele.Facing}</span>
              <span className="pu">Name of the owner:{ele.name}</span>
              <span className="pu">mobile:{ele.mobile}</span>
              <span className="pu">poster:{ele.poster}</span><br/>
              <span className="pu">sale:{ele.sale}</span>
              <span className="pu">fp:{ele.fp}</span>
              <span className="pu">Pp:{ele.Pp}</span>
              <span className="pu">Email:{ele.Email}</span><br/>
              <span className="pu">area:{ele.area}</span>
              <span className="pu">pincode:{ele.pincode}</span>
              <span className="pu">Address:{ele.Address}</span><br/>
              <span className="pu">landmark:{ele.landmark}</span>
              <span className="pu">lalitude:{ele.lalitude}</span>
              <span className="pu">longitude:{ele.longitude}</span><br/>
            </div>
            </>
        );
      })}
    </div>
    </>
  );
};

export default Table;
