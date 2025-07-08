import React, { memo } from "react"

const Text = ({ title, placeholder, className }) => {
  return (
    <p
      className={`${title ? 'title--2' : ''} ${className || ''}`}
      contentEditable
      suppressContentEditableWarning
      spellCheck='false'
      data-placeholder={placeholder}
    ></p>
  )
}

export default memo(Text)
