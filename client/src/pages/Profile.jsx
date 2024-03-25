import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { FaEdit, FaSignOutAlt, FaTrash, FaEye, FaUpload, FaTrashAlt } from "react-icons/fa";
import { app } from "../firebase";
import {
   updateUserStart,
   updateUserSuccess,
   updateUserFailure,
   deleteUserFailure,
   deleteUserStart,
   deleteUserSuccess,
   signOutUserStart,
   signOutUserSuccess,
   signOutUserFailure,
} from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Profile() {
   const fileRef = useRef(null);
   const { currentUser, loading, error } = useSelector((state) => state.user);
   const [file, setFile] = useState(undefined);
   const [filePerc, setFilePerc] = useState(0);
   const [fileUploadError, setFileUploadError] = useState(false);
   const [formData, setFormData] = useState({});
   const [updateSuccess, setUpdateSuccess] = useState(false);
   const [showListingsError, setShowListingsError] = useState(false);
   const [userListings, setUserListings] = useState([]);
   const [showNoListings, setShowNoListings] = useState(false);
   const dispatch = useDispatch();

   // firebase storage
   // allow read;
   // allow write: if
   // request.resource.size < 2 * 1024 * 1024 &&
   // request.resource.contentType.matches('image/.*')

   useEffect(() => {
      if (file) {
         handleFileUpload(file);
      }
   }, [file]);

   const handleFileUpload = (file) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
         "state_changed",
         (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setFilePerc(Math.round(progress));
         },
         (error) => {
            setFileUploadError(true);
         },
         () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
               setFormData({ ...formData, avatar: downloadURL }),
            );
         },
      );
   };

   const handleRemoveProfilePhoto = () => {
      setFormData({
         ...formData,
         avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      });
   };

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         dispatch(updateUserStart());
         const res = await fetch(`/api/user/update/${currentUser._id}`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
         });
         const data = await res.json();
         if (data.success === false) {
            dispatch(updateUserFailure(data.message));
            return;
         }

         dispatch(updateUserSuccess(data));
         setUpdateSuccess(true);
      } catch (error) {
         dispatch(updateUserFailure(error.message));
      }
   };

   const handleDeleteUser = async () => {
      try {
         setShowDeleteConfirmation(false);
         dispatch(deleteUserStart());
         const res = await fetch(`/api/user/delete/${currentUser._id}`, {
            method: "DELETE",
         });
         const data = await res.json();
         if (data.success === false) {
            dispatch(deleteUserFailure(data.message));
            return;
         }
         dispatch(deleteUserSuccess(data));
      } catch (error) {
         dispatch(deleteUserFailure(error.message));
      }
   };

   const handleSignOut = async () => {
      try {
         setShowSignoutConfirmation(false);
         dispatch(signOutUserStart());
         const res = await fetch("/api/auth/signout");
         const data = await res.json();
         if (data.success === false) {
            dispatch(deleteUserFailure(data.message));
            return;
         }
         dispatch(signOutUserSuccess(data));
      } catch (error) {
         dispatch(signOutUserFailure(data.message));
      }
   };

   const handleShowListings = async () => {
      try {
         setShowListingsError(false);
         const res = await fetch(`/api/user/listings/${currentUser._id}`);
         const data = await res.json();
         if (data.success === false) {
            setShowListingsError(true);
            return;
         }
         if (data.length === 0) {
            setShowNoListings(true);
            console.log("No listings found");
            return;
         }

         setUserListings(data);
      } catch (error) {
         setShowListingsError(true);
      }
   };

   const handleListingDelete = async (listingId) => {
      try {
         setShowDeleteListingConfirmation(false);
         const res = await fetch(`/api/listing/delete/${listingId}`, {
            method: "DELETE",
         });
         const data = await res.json();
         if (data.success === false) {
            console.log(data.message);
            return;
         }

         setUserListings((prev) => prev.filter((listing) => listing._id !== listingId));
      } catch (error) {
         console.log(error.message);
      }
   };

   //confirmation message when sign out,delete listing and delete account
   const [showSignoutConfirmation, setShowSignoutConfirmation] = useState(false);
   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
   const [showDeleteListingConfirmation, setShowDeleteListingConfirmation] = useState(false);

   const handleDeleteUserConfirmation = () => {
      setShowDeleteConfirmation(true);
   };

   const handleSignoutConfirmation = () => {
      setShowSignoutConfirmation(true);
   };

   const handleDeleteListingConfirmation = () => {
      setShowDeleteListingConfirmation(true);
   };

   const [isDisabled, setIsDisabled] = useState(true);

   const handleDisable = () => {
      setIsDisabled(!isDisabled);
   };

   return (
      <div className="mt-24 max-w-lg mx-auto">
         <div className="bg-slate-100 px-5 py-3 rounded-xl">
            <h1 className="text-3xl font-semibold my-7 text-center">Profile</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
               <input onChange={(e) => setFile(e.target.files[0])} type="file" ref={fileRef} hidden accept="image/*" />
               <div className="flex justify-between">
                  <div className="flex flex-col">
                     <img
                        src={formData.avatar || currentUser.avatar}
                        alt="profile"
                        className="rounded-full h-24 w-24 object-cover self-center mt-2"
                     />
                     <div hidden={isDisabled} className="self-center ">
                        <button
                           type="button"
                           onClick={() => fileRef.current.click()}
                           className="bg-blue-700 text-white p-3 m-2 rounded-lg uppercase text-center hover:opacity-95"
                        >
                           <FaUpload />
                        </button>
                        <button
                           type="button"
                           onClick={handleRemoveProfilePhoto}
                           className="bg-gray-500 text-white p-3 m-2 rounded-lg uppercase text-center hover:opacity-95"
                        >
                           <FaTrashAlt />
                        </button>
                     </div>
                  </div>
                  <div className="flex flex-col gap-2 self-center ">
                     <div
                        onClick={handleDisable}
                        className="w-40 flex items-center gap-2 self-start hover:cursor-pointer bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded"
                     >
                        <p>Edit Profile</p>
                        <FaEdit />
                     </div>
                     <div
                        onClick={handleShowListings}
                        className="w-40 flex items-center gap-2 self-start hover:cursor-pointer bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded"
                     >
                        <p>Show Listings</p>
                        <FaEye />
                     </div>
                     <Link
                        className="p-3 uppercase text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded"
                        to={"/create-listing"}
                     >
                        CREATE LISTING
                     </Link>
                  </div>
               </div>

               <p className="text-sm self-center">
                  {fileUploadError ? (
                     <span className="text-red-700">Error Image upload (image must be less than 2 mb)</span>
                  ) : filePerc > 0 && filePerc < 100 ? (
                     <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
                  ) : filePerc === 100 ? (
                     <span className="text-green-700">Image successfully uploaded!</span>
                  ) : (
                     ""
                  )}
               </p>
               <p className="pt-4 font-semibold text-gray-700">USER NAME</p>
               <input
                  disabled={isDisabled}
                  type="text"
                  placeholder="username"
                  defaultValue={currentUser.username}
                  id="username"
                  className="border p-3 rounded-lg"
                  onChange={handleChange}
               />
               <p className="pt-4 font-semibold text-gray-700">EMAIL</p>
               <input
                  disabled={isDisabled}
                  type="email"
                  placeholder="email"
                  id="email"
                  defaultValue={currentUser.email}
                  className="border p-3 rounded-lg"
                  onChange={handleChange}
               />
               <p hidden={isDisabled} className="pt-4 font-semibold text-gray-700">
                  PASSWORD
               </p>
               <input
                  hidden={isDisabled}
                  type="password"
                  placeholder="password"
                  onChange={handleChange}
                  id="password"
                  className="border p-3 rounded-lg"
               />
               <button
                  hidden={isDisabled}
                  disabled={loading}
                  className="bg-blue-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95"
               >
                  {loading ? "Loading..." : "UPDATE"}
               </button>

               <div className="flex  justify-between gap-2 mt-10">
                  <div
                     onClick={handleSignoutConfirmation}
                     className="flex items-center gap-2  self-end hover:cursor-pointer bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white px-4 border border-orange-500 hover:border-transparent rounded"
                  >
                     <p>Sign out</p>
                     <FaSignOutAlt />
                  </div>
                  <div
                     onClick={handleDeleteUserConfirmation}
                     className="flex items-center gap-2  self-end hover:cursor-pointer bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white px-4 border border-red-500 hover:border-transparent rounded"
                  >
                     <p>Delete account</p>
                     <FaTrash />
                  </div>
               </div>
            </form>
         </div>

         <p className="text-red-700 mt-5">{error ? error : ""}</p>
         <p className="text-green-700 mt-5">{updateSuccess ? "User is updated successfully!" : ""}</p>
         <p className="text-red-700 mt-5">{showListingsError ? "Error showing listings" : ""}</p>
         {showNoListings ? (
            <div className="flex items-center">
               <p>No listings found,</p>
               <Link
                  className="p-3 text-center underline font-semibold text-blue-700"
                  to={"/create-listing"}
               >
                  Create Listing?
               </Link>
            </div>
         ) : (
            ""
         )}

         {userListings && userListings.length > 0 && (
            <div className="flex flex-col gap-4">
               <h1 className="text-center mt-7 text-2xl font-semibold">Your Listings</h1>
               {userListings.map((listing) => (
                  <div key={listing._id} className="border rounded-lg p-3 flex justify-between items-center gap-4">
                     <Link to={`/listing/${listing._id}`}>
                        <img src={listing.imageUrls[0]} alt="listing cover" className="h-16 w-16 object-contain" />
                     </Link>
                     <Link
                        className="text-slate-700 font-semibold  hover:underline truncate flex-1"
                        to={`/listing/${listing._id}`}
                     >
                        <p>{listing.name}</p>
                     </Link>

                     <div className="flex flex-col item-center">
                        <button onClick={handleDeleteListingConfirmation} className="text-red-700 uppercase">
                           Delete
                        </button>
                        <Link to={`/update-listing/${listing._id}`}>
                           <button className="text-green-700 uppercase">Edit</button>
                        </Link>
                     </div>
                     {/* confirmation box for delete listing */}
                     {showDeleteListingConfirmation && (
                        <div className="fixed w-full h-full flex items-center justify-center left-0 top-0 bg-black bg-opacity-50">
                           <div className="bg-white p-4 rounded-md">
                              <p>Are you sure you want to delete this listing?</p>
                              <div className="flex justify-end mt-3">
                                 <button
                                    onClick={() => handleListingDelete(listing._id)}
                                    className="bg-red-700 text-white p-2 rounded-lg mr-2"
                                 >
                                    Delete Listing
                                 </button>
                                 <button
                                    onClick={() => setShowDeleteListingConfirmation(false)}
                                    className="bg-gray-300 text-gray-700 p-2 rounded-lg"
                                 >
                                    No
                                 </button>
                              </div>
                           </div>
                        </div>
                     )}
                  </div>
               ))}
            </div>
         )}
         {/*confirmation boxes for signout and delete account */}

         {showDeleteConfirmation && (
            <div className="fixed w-full h-full flex items-center justify-center left-0 top-0 bg-red-700 bg-opacity-50">
               <div className="bg-white p-4 rounded-md">
                  <p>Are you sure you want to delete your account?</p>
                  <p>All your data will be deleted!!</p>
                  <div className="flex justify-end mt-3">
                     <button onClick={handleDeleteUser} className="bg-red-700 text-white p-2 rounded-lg mr-2">
                        Delete Account
                     </button>
                     <button
                        onClick={() => setShowDeleteConfirmation(false)}
                        className="bg-gray-300 text-gray-700 p-2 rounded-lg"
                     >
                        No
                     </button>
                  </div>
               </div>
            </div>
         )}

         {showSignoutConfirmation && (
            <div className="fixed w-full h-full flex items-center justify-center left-0 top-0 bg-black bg-opacity-50">
               <div className="bg-white p-4 rounded-md">
                  <p>Are you sure you want to sign out?</p>
                  <div className="flex justify-end mt-3">
                     <button onClick={handleSignOut} className="bg-red-700 text-white p-2 rounded-lg mr-2">
                        Yes
                     </button>
                     <button
                        onClick={() => setShowSignoutConfirmation(false)}
                        className="bg-gray-300 text-gray-700 p-2 rounded-lg"
                     >
                        No
                     </button>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}
