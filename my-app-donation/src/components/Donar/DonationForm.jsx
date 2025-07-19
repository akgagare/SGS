import React from 'react';

const DonationForm = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row lg:flex-row gap-4 items-center justify-center bg-gradient-to-br from-indigo-800 via-purple-700 to-black p-4">
      <div className='h-[20rem] bg-black w-[20rem]'>

      </div>
      <form className="bg-purple-800 bg-opacity-30 backdrop-blur-md shadow-xl rounded-xl p-8 w-full max-w-2xl text-white">
        <div className="flex justify-center mb-4">
          <div className="bg-pink-500  rounded-full">
            <span className="text-white text-2xl"><img src='/logo.jpeg' className='h-30 w-30 object-cover rounded-full'/></span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center">Donation Form</h2>
        <p className="text-sm text-center text-purple-200 mb-6">Your generosity makes a difference. Fill in your details below.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Title *</label>
            <select className="w-full p-2 rounded-md bg-purple-700 text-white border border-purple-600">
              <option>Select</option>
              <option>Mr.</option>
              <option>Ms.</option>
              <option>Dr.</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Full Name *</label>
            <input type="text" className="w-full p-2 rounded-md bg-purple-700 text-white border border-purple-600" placeholder="Enter your full name" />
          </div>

          <div>
            <label className="block text-sm mb-1">Mobile Number *</label>
            <input type="text" className="w-full p-2 rounded-md bg-purple-700 text-white border border-purple-600" placeholder="+91 9876543210" />
          </div>

          <div>
            <label className="block text-sm mb-1">PAN Number</label>
            <input type="text" className="w-full p-2 rounded-md bg-purple-700 text-white border border-purple-600" placeholder="ABCDE1234F" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm mb-1">Address</label>
            <textarea className="w-full p-2 rounded-md bg-purple-700 text-white border border-purple-600" placeholder="Enter your complete address" rows="2" />
          </div>

          <div>
            <label className="block text-sm mb-1">Donation Amount (₹) *</label>
            <input type="number" className="w-full p-2 rounded-md bg-purple-700 text-white border border-purple-600" placeholder="1000" />
          </div>

          <div>
            <label className="block text-sm mb-1">Payment Method</label>
            <select className="w-full p-2 rounded-md bg-purple-700 text-white border border-purple-600">
              <option>Select payment method</option>
              <option>UPI</option>
              <option>Net Banking</option>
              <option>Cheque</option>
              <option>Cash</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Transaction ID</label>
            <input type="text" className="w-full p-2 rounded-md bg-purple-700 text-white border border-purple-600" placeholder="TXN123456789" />
          </div>

          <div>
            <label className="block text-sm mb-1">Instrument Date</label>
            <input type="date" className="w-full p-2 rounded-md bg-purple-700 text-white border border-purple-600" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm mb-1">Sum of Rupees (in words)</label>
            <input type="text" className="w-full p-2 rounded-md bg-purple-700 text-white border border-purple-600" placeholder="One Thousand Only" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm mb-1">Transaction Screenshot</label>
            <input type="file" className="w-full p-2 rounded-md bg-purple-700 text-white border border-purple-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-pink-600 file:text-white" />
          </div>
        </div>

        <button type="submit" className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300">
          Submit Donation
        </button>
      </form>
    </div>
  );
};

export default DonationForm;  
