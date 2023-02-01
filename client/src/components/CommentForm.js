// import React, { useState, useEffect, useContext } from "react"
// import Comment from "./Comment"
// import FormField from "../styles/FormField"
// import Button from "../styles/Button"
// import { UserContext } from "../UserContext"


// function CommentForm({

//   post,
//   comments,
//   setComments,
//   isAddingComment,
//   setIsAddingComment,
//   setIsShowingAllComments,
//   postId

// }) {
//   const { user, setUser } = useContext(UserContext)

//   const [commentDescription, setCommentDescription] = useState("")
//   const [errors, setErrors] = useState([])

//   function handleCommentSubmit(e) {
//     e.preventDefault()
//     const commentData = {
//       description: commentDescription,
//       user_id: user.id,
//       post_id: post.id,
//     }
//     fetch(`/comments`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(commentData),
//     })
//       .then((r) => {
//         if (r.ok) {
//           r.json().then((newComment) => {
//             const allCommentsWithNew = [...comments, newComment]
//             setComments(allCommentsWithNew)
//             setCommentDescription("")
//             setIsAddingComment(false)
//             // setIsShowingAllComments(true)
//           })
//         } else {
//           r.json().then((err) => {
//             setErrors([err?.error])
//           })
//         }
//       })
//   }

//   return (
//     <>
//       <form className="flex items-center gap-2" onSubmit={handleCommentSubmit} type="submit">
//         <br></br>
//         <FormField>
//           <textarea
//             placeholder="Leave a comment..."
//             type="text"
//             className="rounded p-1 overflow-auto w-[400px] border-2 border-green-800"
//             rows="2"
//             value={commentDescription}
//             onChange={(e) => setCommentDescription(e.target.value)} />
//         </FormField>

//         <FormField>
//           <Button
//             type="button"
//             onClick={handleCommentSubmit}
//           >
//             Submit</Button>
//         </FormField>

//         <FormField>
//           <div className="flex flex-col items-center justify-center text-red-700">
//             {errors?.map((err) => (
//               <ul key={err}>Error: {err}</ul>
//             ))}
//           </div>
//         </FormField>
//       </form>
//     </>
//   )
// }

// export default CommentForm;