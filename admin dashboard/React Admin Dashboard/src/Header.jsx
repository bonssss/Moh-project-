

// import React, { useState } from 'react';
// import { BsFillBellFill, BsFillEnvelopeFill, BsJustify, BsSearch } from 'react-icons/bs';
// import { Settings } from '@mui/icons-material';
// import { Password } from '@mui/icons-material';
// import { Person } from '@mui/icons-material';
// import { Logout } from '@mui/icons-material';

// function Header({ OpenSidebar }) {
//   const [isInputVisible, setInputVisible] = useState(false);
//   const [isDropdownVisible, setDropdownVisible] = useState(false);


//   const handleSearchIconClick = () => {
//     setInputVisible(!isInputVisible);
//   };

//   const toggleDropdown = () => {
//     setDropdownVisible(!isDropdownVisible);
//   };

//   return (
//     <header className='header'>
//       <div className='menu-icon'>
//         <BsJustify className='icon' onClick={OpenSidebar} />
//       </div>
//       <div className='header-left'>
//         <div className='search-container'>
//           {isInputVisible && <input type="text" className='searchinput' id='search' placeholder='search' />}
//           <BsSearch className='icon' onClick={handleSearchIconClick} />
//         </div>
//       </div>
//       <div className='header-right'>
//         <div className='settings-icon-container'>
//           <Settings className='icon' onClick={toggleDropdown} />
//           {isDropdownVisible && (
//             <div className='dropdown-menu'>
//               <div onClick={() => handleMenuItemClick(' My Profile')}><Person className='setting-dropdown'/> My-Profile</div>
//               <div onClick={() => handleMenuItemClick('Change Password')}><Password className='setting-dropdown'/>Change Password</div>
//               <div onClick={() => handleMenuItemClick('Logout')}> <Logout className='setting-dropdown'/> Logout</div>
//             </div>
//           )}
//         </div>
//       </div>
      
//     </header>
//   );
// }

// export default Header;

import React, { useState, useEffect, useRef } from 'react';
import { BsJustify, BsSearch } from 'react-icons/bs';
import { Settings } from '@mui/icons-material';
import { Person, Password, Logout } from '@mui/icons-material';

function Header({ OpenSidebar }) {
  const [isInputVisible, setInputVisible] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleSearchIconClick = () => {
    setInputVisible(!isInputVisible);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setInputVisible(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuItemClick = (action) => {
    // Handle menu item click based on the action (My Profile, Change Password, Logout)
    console.log(`Clicked: ${action}`);
    // Add your logic here, such as redirecting to different pages or performing logout actions.
  };

  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <div className='search-container' ref={inputRef}>
          {isInputVisible && <input type="text" className='searchinput' id='search' placeholder='search' />}
          <BsSearch className='icon' onClick={handleSearchIconClick} />
        </div>
      </div>
      <div className='header-right'>
        <div className='settings-icon-container' ref={dropdownRef}>
          <Settings className='icon' onClick={toggleDropdown} />
          {isDropdownVisible && (
            <div className='dropdown-menu'>
              <div onClick={() => handleMenuItemClick('My Profile')} className='setting-dropdown'>
                <Person className='setting-profile' /> My-Profile
              </div>
              <div onClick={() => handleMenuItemClick('Change Password')} className='setting-dropdown'>
                <Password  /> Change Password
              </div>
              <div onClick={() => handleMenuItemClick('Logout')} className='setting-dropdown'>
                <Logout  /> Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
