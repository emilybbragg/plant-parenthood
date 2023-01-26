// // import { useState } from 'react'
import { Listbox } from '@headlessui/react'

// // // icons
// // // import CaretDown from "./Icons/CaretDown"

// const CategoryDropdown = ({
// //   className = "",
// //   dropdownOptions,
// //   selectedOption,
// //   setSelectedOption,
// //   secondaryFieldKey,
// //   // label,
// //   // labelSideBySide = false,
// //   // disabled = false,
// //   dropdownStyle = null
// }) => {
// //   const isStringList = () => {
// //     return dropdownOptions?.length > 0 && typeof dropdownOptions[0] == "string"
// //   }

// //   const returnSelectedResult = (value) => {
// //     let fullOption = dropdownOptions.find((fullOption) => fullOption.id == value)
// //     if (fullOption) {
// //       setSelectedOption(fullOption)
// //       return
// //     }
// //     setSelectedOption(value)
// //   }

//   return (
// //     <Listbox
// //       as="div"
// //       className={`
// //                 ${className} 
// //             `}
// //       value={selectedOption}
// //       onChange={returnSelectedResult}
// //     >

// //       {({ open }) => (
// //         <>

// //           <Listbox.Button
// //             as="div"
// //             className={`
// //                                 relative w-full bg-transparent
// //                                 text-[13px] 
// //                                 ${!selectedOption ? "!text-gray-text" : ""} placeholder:text-gray-text
// //                                 rounded-full leading-5
// //                                 border border-transparent focus:outline-none active:outline-none outline-none
// //                                 focus:bg-accent-red ui-focus:bg-accent-red ui-active:bg-accent-red
// //                                 p-px
// //                                 transition-all
// //                                 hover:cursor-pointer
// //                             `}
// //           >
// //             {
// //               selectedOption ?
// //                 isStringList() ? selectedOption : selectedOption.name :
// //                 "Choose option"
// //             }
// //           </Listbox.Button>
// //           {/* <Listbox.Options
// //             style={{ top: "calc(100% + 4px)" }}
// //             className={`
// //                                 absolute z-10 
// //                                 ${dropdownStyle !== "pagination" ? "p-4" : "p-2"}
// //                                 w-full max-h-40 overflow-y-auto 
// //                                 bg-white 
// //                                 rounded shadow-dropdown
// //                                 outline-none
// //                             `}
// //           >
// //             {
// //               dropdownOptions?.map((option) => (
// //                 <Listbox.Option
// //                   key={isStringList() ? option : option.id}
// //                   value={isStringList() ? option : option.id}
// //                 // disabled={disabled}
// //                 >
// //                   {({ active, selected }) => (
// //                     <div className={`
// //                                                 py-2 
// //                                                 ${dropdownStyle !== "pagination" ? "px-4" : "px-2"}
// //                                                 text-[11px] text-dark-purple
// //                                                 rounded-md
// //                                                 hover:cursor-pointer
// //                                                 ${active ? "bg-light-purple-lighten-80" : ""}
// //                                                 ${selected ? "bg-light-purple-hover !text-white font-medium" : ""}
// //                                             `}>
// //                       <div className="flex items-center gap-2">
// //                         <div className="flex flex-col">
// //                           <span>{isStringList() ? option : option.name}</span>
// //                           {
// //                             secondaryFieldKey ?
// //                               <span className="text-[10px]">{option[secondaryFieldKey] ? option[secondaryFieldKey] : `No  ${secondaryFieldKey}`}</span> :
// //                               null
// //                           }
// //                         </div>
// //                       </div>
// //                       {/* optional icon can go here when needed */}
// //           {/* </div>
// //       )}
// //     </Listbox.Option>
// //   ))
// // }
// //           </Listbox.Options >  */}
// //           < Listbox.Button className={"absolute top-1/2 transform -translate-y-1/2 transition fill-gray right-1 outline-none"} >
// //             {/* <CaretDown /> */}
// //           </Listbox.Button >



// //         </>
// //       )}
// //     </Listbox >
//   )
// }
// export default CategoryDropdown;


const CategoryDropdown = ({ }) => {
  return (
    <>
      dropdown
      {/* <Listbox ></Listbox> */}
    </>
  )
}

export default CategoryDropdown;
