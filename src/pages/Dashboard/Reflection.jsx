import React, { useEffect, useState } from "react";
import Post from "../../assets/post.png";
import Button from "../../components/Button";
import { createPost } from "../../../fetch";

const Reflection = () => {
  var [username,setName]=useState("");
  var [post ,setPost]=useState("")
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    setName(`@${user.name.split(" ").join("_")}`);
    console.log(username);
  },[])

  return (
    <div className="flex items-center h-screen divide-x-2 divide-black">
      <div className="flex-1 flex flex-col w-full h-screen border-r-2 divide-y-2">
        <p className="text-center py-10 text-lg">Create a post</p>
        <div className="flex-1 relative">
          <textarea
            value={post}
            onChange={e=>{setPost(e.target.value)
              console.log(post);
            }}
            className="w-full h-full focus:outline-none p-5 text-lg"
            name=""
            id=""
            placeholder="Share your thought"
          />

          <Button
            title="Share"
            styles="absolute right-5 bottom-5 bg-lightGreen"
            onClick={()=>{
              createPost({userName:username,post:post})
            }}
          />
        </div>
      </div>
      <img src={Post} alt="" className="h-[90vh] px-4" />
    </div>
  );
};

export default Reflection;
