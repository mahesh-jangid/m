/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import atoms from '../../util/atoms';

function GurudevSVGIcon({ page }: { page: string }) {
  const [darkMode] = useAtom(atoms.darkMode);
  const [showPopUp, setShowPopUp] = useState(false);

  let interval: any;  // Declare the interval variable outside the useEffect

  useEffect(() => {
    if (page !== 'Gurudev') {
      // Start the interval when on a different page
      interval = setInterval(() => {
        setShowPopUp(true);

        // Hide the pop-up after 2 seconds
        setTimeout(() => {
          setShowPopUp(false);
        }, 2000);
      }, 10000);
    } else {
      // Clear the interval when on the 'Gurudev' page
      clearInterval(interval);
    }

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [page]);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div style={{ position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)' }}>
        {showPopUp && (
          <div className="pop-up" style={{ padding: '2px', borderRadius: '50%', backgroundColor: darkMode ? '#262626' : 'white', color: darkMode ? '#f1f5f9' : '#262626', boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="10" viewBox="0 0 24 24" width="10">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M4 18l-1.41-1.41L9.17 12 2.59 5.41 4 4l7 7-7 7z" />
            </svg>
            <span style={{ marginLeft: '2px', fontSize: '10px' }}> Live</span>
          </div>
        )}
      </div>

      <svg width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.11413 8.35688C4.75894 8.56999 4.64377 9.03069 4.85688 9.38587C5.06999 9.74106 5.53069 9.85623 5.88587 9.64312L5.11413 8.35688ZM10.5 6L10.95 5.4C10.7061 5.21704 10.3756 5.19999 10.1141 5.35688L10.5 6ZM14.5 9L14.05 9.6C14.3236 9.80522 14.7014 9.79932 14.9685 9.58565L14.5 9ZM19.9685 5.58565C20.292 5.32689 20.3444 4.85493 20.0857 4.53148C19.8269 4.20803 19.3549 4.15559 19.0315 4.41435L19.9685 5.58565ZM17.75 19C17.75 19.4142 18.0858 19.75 18.5 19.75C18.9142 19.75 19.25 19.4142 19.25 19H17.75ZM19.25 11C19.25 10.5858 18.9142 10.25 18.5 10.25C18.0858 10.25 17.75 10.5858 17.75 11H19.25ZM9.75 19C9.75 19.4142 10.0858 19.75 10.5 19.75C10.9142 19.75 11.25 19.4142 11.25 19H9.75ZM11.25 11C11.25 10.5858 10.9142 10.25 10.5 10.25C10.0858 10.25 9.75 10.5858 9.75 11H11.25ZM13.75 19C13.75 19.4142 14.0858 19.75 14.5 19.75C14.9142 19.75 15.25 19.4142 15.25 19H13.75ZM15.25 14C15.25 13.5858 14.9142 13.25 14.5 13.25C14.0858 13.25 13.75 13.5858 13.75 14H15.25ZM5.75 19C5.75 19.4142 6.08579 19.75 6.5 19.75C6.91421 19.75 7.25 19.4142 7.25 19H5.75ZM7.25 14C7.25 13.5858 6.91421 13.25 6.5 13.25C6.08579 13.25 5.75 13.5858 5.75 14H7.25ZM5.88587 9.64312L10.8859 6.64312L10.1141 5.35688L5.11413 8.35688L5.88587 9.64312ZM10.05 6.6L14.05 9.6L14.95 8.4L10.95 5.4L10.05 6.6ZM14.9685 9.58565L19.9685 5.58565L19.0315 4.41435L14.0315 8.41435L14.9685 9.58565ZM19.25 19V11H17.75V19H19.25ZM11.25 19V11H9.75V19H11.25ZM15.25 19V14H13.75V19H15.25ZM7.25 19V14H5.75V19H7.25Z" fill="#000000"/>
</svg>
    </div>
  );
}

export default GurudevSVGIcon;
