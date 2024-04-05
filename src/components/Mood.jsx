import React from "react";
import Button from "./Button";

const Mood = () => {
  function handleFormChange(e) {
    setFormError(false);
    setPostData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // async function handlePosting(e) {
  //   e.preventDefault();
  //   const postInfo = {
  //     author: username,
  //     username: displayName,
  //     authorId: userId,
  //     authorImg: userImage,
  //     text: postData.text,
  //     time: dayjs(),
  //     mood: postData.mood
  //   };
  //   if (!postData.text) {
  //     setFormError(true);
  //   } else {
  //     setIsLoading(true);
  //     const formData = new URLSearchParams();
  //     for (const [key, value] of Object.entries(postInfo)) {
  //       formData.append(key, value);
  //     }
  //     const response = await fetch("https://mind-wave.onrender.com/post", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded"
  //       },
  //       body: formData
  //     });
  //     const postData = await response.json();
  //     setIsLoading(false);
  //     if (response.status === 200) {
  //       console.log(postData);
  //       window.location.reload();
  //     } else {
  //       setIsLoading(false);
  //     }
  //   }
  // }
  return (
    <form className="w-full p-5">
      {/* {formError && <p className="text-red-700">Please type something</p>} */}
      <textarea
        className="placeholder:text-xl text-xl text-light-200 bg-transparent py-2 w-full active:bg-transparent focus:bg-transparent outline-none h-[15svh]"
        placeholder="What's on your mind today?"
        name="text"
        // value={postData.post}
        // onChange={(e) => handleFormChange(e)}
      />

      <div className="w-full flex justify-between items-center mt-4  gap-4">
        <select
          name="mood"
          className="bg-transparent px-4 py-2 border rounded-lg"
          // onChange={(e) => handleFormChange(e)}
        >
          <option className="bg-light-200 text-dark-200" value="normal">
            Whats Your Mood today ?
          </option>
          <option className="bg-light-200 text-dark-200" value="happy">
            Happy
          </option>
          <option className="bg-light-200 text-dark-200" value="mad">
            Mad
          </option>
          <option className="bg-light-200 text-dark-200" value="depressed">
            Depressed
          </option>
          <option className="bg-light-200 text-dark-200" value="suprissed">
            Suprised
          </option>
          <option className="bg-light-200 text-dark-200" value="broken">
            Broken
          </option>
          <option className="bg-light-200 text-dark-200" value="celebration">
            Celebrating
          </option>
        </select>
        <Button title="Post" styles="bg-lightGreen font-semibold " />
      </div>
    </form>
  );
};

export default Mood;
