import React from "react";

const ConfirmationModal = ({ isOpen, onConfirm, onCancel, message, confirmButton, bgcolor }) => {
   return (
      isOpen && (
         <div className={`fixed w-full h-full flex items-center justify-center left-0 top-0 ${bgcolor}`}>
            <div className="bg-white p-4 rounded-md">
               <p>{message}</p>
               <div className="flex justify-end mt-3">
                  <button onClick={onConfirm} className="bg-red-700 text-white p-2 rounded-lg mr-2">
                     {confirmButton}
                  </button>
                  <button onClick={onCancel} className="bg-gray-300 text-gray-700 p-2 rounded-lg">
                     Cancel
                  </button>
               </div>
            </div>
         </div>
      )
   );
};

export default ConfirmationModal;
