export const bouncEffect = (YPosition) => {
  
    return {
      hidden: { 
        y: -200,
      },
      show: { 
        y: YPosition,
        transition: {
          type: "spring",
          bounce: 1,  // Controls bounciness (0 = no bounce, 1 = very bouncy)
          stiffness: 230, // Lower stiffness makes it softer
          delay: 0.1
        }
      }
    }
  }


