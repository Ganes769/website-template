export const aosTextAnimation = (delay = 0) => {
  return ({
    "data-aos": "fade-right",
    "data-aos-delay": `${delay + 100}`,
    "data-aos-duration": "800"
  })
}

export const aosDivAnimation = (delay = 0) => {
  return ({
    "data-aos": "fade-up",
    "data-aos-delay": `${delay + 100}`,
    "data-aos-duration": "800"
  })
}
