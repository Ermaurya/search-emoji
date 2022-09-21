import React from 'react';
import SingleEmoji from "./SingleEmoji";
const EmojiContaner=({list})=>{
    return(
        <div className="contaner">
            {list.map((singleEmoji,idx)=>{
                console.log(singleEmoji);
                return(
                    <SingleEmoji key={idx}singleEmoji={singleEmoji}/>
                )
            }
            )}
        </div>
    )
}
export default EmojiContaner;