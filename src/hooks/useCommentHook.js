import { useEffect, useState } from "react";

const loadComments = async (userId) => {
  return await fetch(
    `https://jsonplaceholder.typicode.com/posts/${userId}/comments`
  ).then((response) => response.json());
};

const useCommentHook = (userId) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    if (userId){
      loadComments(userId).then((comments) => {
        if (comments !== null) {
          setComments(comments);
        }
      });
    }
    
  }, [userId]);
  return { comments };
};

export default useCommentHook;
