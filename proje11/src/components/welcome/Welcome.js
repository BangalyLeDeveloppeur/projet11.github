import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useLogin from '../apibank/useLogin';
import { apiGetProfile } from '../apiLogi/apiLogin';
import { loginFailed, loginSuccess } from '../../store/Slice/InfoLoginSlice';

const Welcome = () => {
  const { handleEditName } = useLogin();
  const dispatch = useDispatch();
  const { token, firstName, isAuthenticated } = useSelector((state) => state.infologin);

  const [newName, setNewName] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const localToken = token || window.localStorage.getItem('app-agbk-token');
      if (!localToken) {
        dispatch(loginFailed({ errorMessage: 'No token found' }));
        return;
      }

      try {
        const { firstName, error } = await apiGetProfile(localToken);
        if (firstName) {
          dispatch(loginSuccess({ token: localToken, firstName }));
        } else {
          dispatch(loginFailed({ errorMessage: error || 'Failed to fetch profile' }));
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        dispatch(loginFailed({ errorMessage: 'An error occurred while fetching profile' }));
      }
    };

    fetchProfile();
  }, [token, dispatch]);

  const onEditName = async () => {
    const result = await handleEditName(token, newName);
    if (result.success) {
      setIsEditing(false);
    } else {
      console.log("Erreur lors de la mise à jour du nom d'utilisateur");
    }
  };

  const handleEditButtonClick = () => {
    setIsEditing(true); 
  };

  return (
    <div className="welcome">
      <div className="welcome-header">
        <h1>
          Welcome back
          <br />
          {isAuthenticated && firstName ? `${firstName}` : 'Username not displayed!'}
          !
        </h1>

        {isEditing ? (
          <>
            <input
              className="new-name"
              type="text"
              placeholder="Enter new name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <button
              className="save-button"
              onClick={onEditName}
              disabled={!newName.trim()}
            >
              Enregistrer
            </button>
          </>
        ) : (
          <button className="edit-button" onClick={handleEditButtonClick}>
            Edit Name
          </button>
        )}
      </div>
    </div>
  );
};

export default Welcome;
