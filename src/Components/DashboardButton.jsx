import React from 'react'

function DashboardButton({ onClick,icon: Icon, label ,className }) {
  return (
      <div className="mt-auto p-4">
        <button
        className={className}
            onClick={onClick}
        >
            {Icon && <icon className="mr-2" />}
            {label}
        </button>
    </div> 
  )
}

export default DashboardButton
