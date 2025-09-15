import React from 'react'

const Discover = () => {
   return (
    <div className="bg-cover bg-center py-5">
      {/* Discover Events section */}
      <div className="w-11/12 mx-auto container Discoverimg rounded-3xl shadow-lg p-10">
        <div className="my-10 text-center space-y-8 max-w-3xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white leading-tight">
              Discover Events That Match Your World
            </h1>
            <p className="text-lg text-white max-w-2xl mx-auto leading-relaxed">
              Step into a space where every moment counts. From live concerts
              and comedy nights to art showcases explore events tailored
              to your interests.
            </p>
          </div>
          <div>
            <button className="bg-[#006F6A] hover:bg-[#005a55] text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-md">
              Discover Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover