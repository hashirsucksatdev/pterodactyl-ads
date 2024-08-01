import react, {useEffect, useRef} form 'react';

const Banner160x600 : React.FC = () => {
    const adConationerRef = useRef<HTMLDivElememt>(null);
    useEffect(() => {
        const scriptContent = `
        atoptions = {
           'key': '',
           'format': 'iframe',
           'height' : 600,
           'width': 160,
            params : {}
      };`

      const scriptElement = document.createElement('script')
      scriptElement.type = "text/javascript"
      scriptElement.innerHTML = scriptContent
      document.body.appendChild(scriptElement);

      const scriptSrc = document.createElement('script')
      scriptSrc.type = "text/javascript"
      scriptSrc.src = '//www.topcreativeformat.com/your_key/invoke.js'
      document.body.appendChild(scriptSrc)


      return () => {
          document.body.removeChild(scriptElement)
          document.body.removeChild(scriptSrc)
      }
  }, [])

  return (
      <>
        <h1>Ad Component</h1>
        <div
             id='!ad-container'
             ref={adConationerRef}
            
    >
        
        </div>
      </>
  )
  
}

export default Banner160x600;
