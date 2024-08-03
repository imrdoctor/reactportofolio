import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Notfound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-6xl font-bold mb-4">
        <i className="fas fa-exclamation-triangle text-red-600"></i> 404
      </div>
      <div className="text-2xl mb-4">Page Not Found</div>
      <div className="text-gray-600">
        The page you are looking for does not exist or an other error occurred.
      </div>
    </div>
  )
}
