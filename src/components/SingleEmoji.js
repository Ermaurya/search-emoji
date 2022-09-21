import React,{ useState,useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
const SingleEmoji = ({singleEmoji}) => {
    const[isCopied,setCopy]=useState(false);
    useEffect(() => {
        if(isCopied){
            setTimeout(()=>{
                setCopy(false);
            },1500)
        }
        // return () => {
        //     cleanup
        // };
    }, [isCopied]);
    return (

    //   <div className="item">
    //     <p className="emoji">{singleEmoji.emoji}</p>
    <CopyToClipboard text={singleEmoji.emoji} onCopy={() => setCopy(true)}>
            <div className={`item ${isCopied?'copied':" "}`} >
                <p className="emoji" >{isCopied?'✔ copied':singleEmoji.emoji}</p>
    <p className="discription">{singleEmoji.description}</p>

            </div>
      
        </CopyToClipboard>
      
    )
  }
  
  export default SingleEmoji;