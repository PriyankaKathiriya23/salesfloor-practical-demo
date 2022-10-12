import React from "react";
import classes from './Sidebar.module.css';
import demoImage from './Demoimage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const { useState, useEffect } = React;
function Sidebar() {
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0)
  const [modalOpen, setModalOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  function modalHandler(){
    setModalOpen(true);
  }
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  function closePanel(){
    setModalOpen(false);
  }
  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
       window.removeEventListener("scroll", listenToScroll); 
  }, [])
  
  const listenToScroll = () => {
    let heightToHideFrom = 200;
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;
    setHeight(winScroll);
   
    if (winScroll > heightToHideFrom) {  
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }  
  };
  
  return (
<div>
  <div id="container" className={classes.container}>
    <div className={classes.sidebarbutton}  onClick={modalHandler}>
      <div id="height" className={classes.personimage}>
       <img src={demoImage} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
      </div>
     {
      isVisible 
        &&
       <div id="hide" className={classes.contentshowhide}>
          <div className={classes.innerdiv}>
          <span>Ask an Associate</span> <FontAwesomeIcon icon={faXmark} />
          </div>
       </div>
      }
 
      {
      !isVisible && isHovering  
      &&
      <div id="hide" className={classes.contentshowhide}>
        <div className={classes.innerdiv}>
        <span>Ask an Associate</span> <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
      }
      {
      modalOpen
      &&
      <div className={classes.iframeblock} >
      
        <iframe 
          src="https://widgets.stores.thebay.com/stores/online-experts/services/landing_page/components/landing?sf_ip=142.116.56.192&from=sidebar&media=desktop&customer_id=v6ncnzst1&chat=true&sf_locale=en_US&source_title=The%20Bay%3A%20Canada%E2%80%99s%20Life%20%26%20Style%20Platform&source_url=https%3A%2F%2Fwww.thebay.com%2F&nearestStores=%5B%22online-experts%22%5D&originalStoreIdentifier=online-experts&originalStoreName=Online%20Experts" 
          frameBorder="0" 
          height={600} 
          width={350} 
          scrolling="no" 
        />
      </div>
      }
     </div>
    </div>
    </div>
  );
}

export default Sidebar;