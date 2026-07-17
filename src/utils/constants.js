export const aosTextAnimation = (delay) => {
  return ({
    "data-aos": "fade-right",
    // "data-aos-anchor-placement": "top-center",
    "data-aos-delay": `${delay + 200}`,
    "data-aos-duration": "800"
  })
}

export const aosDivAnimation = (delay) => {
  return ({
    "data-aos": "fade-up",
    // "data-aos-anchor-placement": "top-center",
    "data-aos-delay": `${delay + 200}`,
    "data-aos-duration": "800"
  })
}