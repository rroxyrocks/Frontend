import React from 'react'


const Accountdashboard = () => {
  return (
    <div className="min-h-screen bg[#f3f5f3]">
      {/* Navigation */}
      <nav className="bg-[#819381] shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-xl font-semibold text-white">Dashboard</div>
            <div className="flex items-center space-x-4">
             
              <div className="w-8 h-8 bg-[#49a696] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">UN</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      </div>
  )
}

export default Accountdashboard