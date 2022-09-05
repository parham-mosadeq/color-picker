import React, { useState } from 'react';
// *toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ColorPicker = () => {
  const [color, setColor] = useState('#000000');

  const handleCopy = (e) => {
    window.navigator.clipboard.writeText(e.target.innerText);
    toast.success('copied', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='flex justify-center items-center h-screen direction-column flex-col	'
    >
      <input
        className='m-4 cursor-pointer'
        type='color'
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type='text'
        className='text-black border-none outline-none shadow-xl rounded-xl text-center pt-2 pb-2 pl-4 pr-4 '
        placeholder='paste it here'
      />
      <button
        className='mt-4 bg-blue-500 hover:bg-blue-700 hover:cursor-pointer text-white font-lighter py-2 px-4 rounded'
        onClick={(e) => handleCopy(e)}
      >
        {color}
      </button>

      <ToastContainer />
    </div>
  );
};

export default ColorPicker;
