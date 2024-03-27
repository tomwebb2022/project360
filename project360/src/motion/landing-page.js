export const titleVariant = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: -20,
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.5,
    },
  },
}

export const cameraLensVariant = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.5,
      },
    },
  }


  export const sliderVariant = {
    initial: {
      x: 0
    },
  animate: {
        y: [0, 20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "loop",
    },
  }}