import { useEffect, useState } from 'react'

function PageControls() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setShowButton(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function scrollToTop() {
    document.getElementById('hero')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  if (!showButton) {
    return null
  }

  return (
    <div className="page-controls">
      <button onClick={scrollToTop}>Top</button>
    </div>
  )
}

export default PageControls