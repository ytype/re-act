import React, { useState, useEffect } from "react"

const useWindowWidth = () => {
  //함수형 컴포넌트 이름은 대문자로 시작해야함
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", onResize)
    onResize()
    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return width
}

export default useWindowWidth
