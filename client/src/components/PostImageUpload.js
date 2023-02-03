// import React, { useState, useRef } from "react"
// // 
// function PostImageUpload({

// }) {
//   const [selectedImage, setSelectedImage] = useState(null)
//   const imageUpload = useRef()
//   console.log(imageUpload.current)

//   function handleImageSubmit(e) {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('selected_image', selectedImage)
//     fetch("/images", {
//       method: "POST",
//       body: formData
//     })
//   }

//   return (
//     <>
//       <form onSubmit={handleImageSubmit}>

//         <input type="file"
//           onChange={e => setSelectedImage(e.target.files[0])}
//           ref={imageUpload}
//           accept="image/png, image/jpeg"
//         />

//         <input type="submit"
//           value='Submit'
//         />

//       </form>
//     </>
//   )
// }

// export default PostImageUpload;
