// ProfilePage.js
"use client"
import React, { useState } from 'react';

const ProfilePage = () => {
  const initialUserData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1234567890',
    gender: 'Male',
    birthday: '1990-01-01', // Use the ISO format for date input
  };

  const [userData, setUserData] = useState(initialUserData);
  const [editMode, setEditMode] = useState(false);
  const [changePasswordMode, setChangePasswordMode] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEditProfileClick = () => {
    setEditMode(true);
    setChangePasswordMode(false);
  };

  const handleEditProfileCancel = () => {
    setEditMode(false);
  };

  const handleChangePasswordClick = () => {
    setChangePasswordMode(true);
    setEditMode(false);
  };

  const handleChangePasswordCancel = () => {
    setChangePasswordMode(false);
  };

  const handleSubmitChangePassword = (event) => {
    event.preventDefault();
    // Add logic to handle password change submission
    console.log('Submitting change password form');
  };

  const handleSubmitProfileChanges = (event) => {
    event.preventDefault();
    // Add logic to handle profile changes submission
    console.log('Submitting profile changes form');
    setEditMode(false);
  };

  return (
    <div className="flex">
      <div className="flex-grow container-fluid  p-6 ml-64"> {/* Added ml-64 to offset the content */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold">My Profile</h2>
          </div>
          <div className="p-4">
            {editMode ? (
              <form onSubmit={handleSubmitProfileChanges}>
                <div className="mb-4">
                  <label className="text-sm font-semibold text-gray-600">Name</label>
                  <input
                    type="text"
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    className="text-lg w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="text-sm font-semibold text-gray-600">Email</label>
                  <input
                    type="email"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    className="text-lg w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="text-sm font-semibold text-gray-600">Phone</label>
                  <input
                    type="text"
                    value={userData.phone}
                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                    className="text-lg w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="text-sm font-semibold text-gray-600">Gender</label>
                  <select
                    value={userData.gender}
                    onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
                    className="text-lg w-full p-2 border rounded"
                    required
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="text-sm font-semibold text-gray-600">Birthday</label>
                  <input
                    type="date"
                    value={userData.birthday}
                    onChange={(e) => setUserData({ ...userData, birthday: e.target.value })}
                    className="text-lg w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="bg-primary text-white hover:text-primary hover:bg-secondary px-4 py-2 rounded-md mr-2">Save Changes</button>
                  <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md" onClick={handleEditProfileCancel}>Cancel</button>
                </div>
              </form>
            ) : changePasswordMode ? (
              <form onSubmit={handleSubmitChangePassword}>
                <div className="mb-4">
                  <label className="text-sm font-semibold text-gray-600">Current Password</label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="text-lg w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="text-sm font-semibold text-gray-600">New Password</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="text-lg w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="text-sm font-semibold text-gray-600">Confirm Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="text-lg w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="bg-primary text-white hover:text-primary hover:bg-secondary px-4 py-2 rounded-md mr-2">Change Password</button>
                  <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md" onClick={handleChangePasswordCancel}>Cancel</button>
                </div>
              </form>
            ) : (
              <>
                <div className="mb-4">
                  <label className="text-sm font-semibold text-gray-600">Name</label>
                  <p className="text-lg">{userData.name}</p>
                </div>
                <div className="mb-4">
                  <label className="text-sm font-semibold text-gray-600">Email</label>
                  <p className="text-lg">{userData.email}</p>
                </div>
                <div className="mb-4">
                  <label className="text-sm font-semibold text-gray-600">Phone</label>
                  <p className="text-lg">{userData.phone}</p>
                </div>
                <div className="mb-4">
                  <label className="text-sm font-semibold text-gray-600">Gender</label>
                  <p className="text-lg">{userData.gender}</p>
                </div>
                <div className="mb-4">
                  <label className="text-sm font-semibold text-gray-600">Birthday</label>
                  <p className="text-lg">{userData.birthday}</p>
                </div>
                <div className="flex justify-end mt-10">
                  <button className="bg-primary text-white hover:text-primary hover:bg-secondary px-4 py-2 rounded-md mr-4" onClick={handleEditProfileClick}>Edit Profile</button>
                  <button className="bg-primary text-white hover:text-primary hover:bg-secondary px-4 py-2 rounded-md" onClick={handleChangePasswordClick}>Change Password</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
