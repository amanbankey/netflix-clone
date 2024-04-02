import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility =() => {
        if(window.pageYOffset > 300 ){
             setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    }

    const ScrollToTop = () => {
        window.scrollTo({
            top:450,
            behavior:"smooth"
        })
    }

    useEffect( () => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])

  return (
    <div>
        {isVisible && (
            <div onClick={ScrollToTop}> 
               {/* <i className='d'></i> */}
            </div>
        )}
    </div>
  )
}

export default ScrollToTop