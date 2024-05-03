import React from 'react'
import FadeLoader from 'react-spinners/FadeLoader'
const Spinner = ({loader}) => {
    const override = {
        display : 'block',
        margin : '100px auto'
    }
  return (
    <FadeLoader
        color= "#1b7aca"
        loading={loader}
        cssOverride={override}
        size={150}
        />
  )
}

export default Spinner
