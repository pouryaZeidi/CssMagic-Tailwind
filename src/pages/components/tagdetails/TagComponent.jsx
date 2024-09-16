import React from 'react'
import TagDetailItems from './TagDetailItems'


const TagComponent = () => {
  return (
    <div className="w-[100%] h-[100vh] flex flex-col justify-between ">
    <TagDetailItems
      title="Click to View Details"
      imageUrl="https://via.placeholder.com/150" // Replace with your image URL
    />
    <TagDetailItems
      title="Click to View Details"
      imageUrl="https://via.placeholder.com/150" // Replace with your image URL
    />
    <TagDetailItems
      title="Click to View Details"
      imageUrl="https://via.placeholder.com/150" // Replace with your image URL
    />
    <TagDetailItems
      title="Click to View Details"
      imageUrl="https://via.placeholder.com/150" // Replace with your image URL
    />
  </div>
  )
}

export default TagComponent