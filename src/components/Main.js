import emojiList from "../emojiList";
import React,{ useState,useEffect } from "react";
import EmojiContaner from './EmojiContaner'

const Main = ()=>{
    console.log(emojiList);
    const[list,setList]= useState(emojiList);
    const[keyword,setKeyword]=useState("");
    const typed=(e)=>{
        const value =e.target.value.toLowerCase();
        setKeyword(value);
    }
    useEffect(() => {
        console.log(`key change${keyword}`)
        // return () => {
        //     cleanup
        // };

   const filterList= emojiList.filter(singleEmoji=>{
if(singleEmoji.description.startsWith(keyword)){

    return true;
}if(singleEmoji.aliases.some(e=>e.startsWith(keyword))){
return true;
}if(singleEmoji.emoji===keyword){
    return true;
}
return false;

        })
        setList(filterList);
    }, [keyword]);
    return(
        <main>
            <div className="search" >

            <input  type="text" placeholder ="Search...." onKeyUp={typed}/>
            <p className="related" >{keyword}</p>
            </div>
            {/* <button>click</button> */}
            <hr/>
            {list.length ===0 ?(
           <div className="noFound"><img alt="" src="https://cdn.dribbble.com/users/683081/screenshots/2728654/exfuse_app_main_nocontent.png"/></div>
            ):(
                // list.map((singleEmoji,idx)=>{
                //     return(
                //         <p key={idx}>{singleEmoji.emoji}-{singleEmoji.description}</p>
                //     )
                // })
                <EmojiContaner list={list}/>
            )}
            {/* {list.map((singleEmoji,idx)=>{
                return(
                    <p key={idx}>{singleEmoji.emoji}-{singleEmoji.description}</p>
                )
            })} */}
        </main>
    )
}
export default Main;