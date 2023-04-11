import React from 'react';

const Blog = () => {
    return (
        <div className='text-center'>
            <div>
                <p className='py-24 text-center text-3xl font-bold bg-cyan-50 px-5'>Blog</p>
            </div>
            <div className='mx-48'>
                <p className='text-2xl font-bold mt-8'>When should use context api ?</p>
                <p className='font-semibold mt-3'>By writing data in any one place, context api is used to easily send that data to any component no matter how much it is inside. Any type of data can be provided from there by using createContext in any file. Context is named. Then with useContext the data in that file can be used anywhere in the file. By doing this you don't have to send data using props again and again and the data can be sent to different files very easily.</p>
                <p className='text-2xl font-bold mt-8'>What is custom hook ?</p>
                <p className='font-semibold mt-3'>Sometimes a function or different hook has to be written repeatedly in different places. We can create our own custom hook by first typing use and then giving it a name. If we write that function or hook inside that custom hook and write our custom hook where it needs to be written, the work done with that custom hook will be the same as before. By doing this, we don't have to write that function or hook again and again. At that point, you only need to call the custom hook.</p>
                <p className='text-2xl font-bold mt-8'>Work of useRef ?</p>
                <p className='font-semibold mt-3'>useRef is a react hook. React usually handles the dom. But in many tasks we have to directly modify the DOM. UseRef hook is used for that purpose. Again, if you write something without dependency with useEffect, it becomes an infinity loop and continues again and again. useRef is used to handle this problem. In this way current value is obtained instead of infinity loop.</p>
                <p className='text-2xl font-bold mt-8'>Work of useMemo ?</p>
                <p className='font-semibold mt-3'>We often use many onClick in a file. There may be a function call using useState when an onClick button is clicked. But many times it happens that if you click on other buttons apart from the onClick button, even if the function does not work, the function will be called behind. This may cause performance drop. UseMemo can be used to tell the function when the function will be called. By doing this, if you click on other buttons, that function will no longer be called behind. It will be called only where it has been used.</p>
            </div>
        </div>
    );
};

export default Blog;