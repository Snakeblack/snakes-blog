import { useState, useRef } from 'react'

const Pre = (props) => {
  const textInput = useRef(null)
  const [copied, setCopied] = useState(false)

  const onCopy = () => {
    setCopied(true)
    if (textInput.current) {
      const codeElement = textInput.current.querySelector('code')
      const textToCopy = codeElement ? codeElement.innerText : textInput.current.innerText
      navigator.clipboard.writeText(textToCopy)
    }
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className="group relative">
      <button
        aria-label="Copy code"
        type="button"
        className={`absolute right-3 top-3 z-10 h-9 w-9 rounded-xl border border-white/20 bg-white/10 p-2 backdrop-blur-md transition-all duration-300 hover:bg-white/20 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
          copied
            ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300'
            : 'opacity-0 group-hover:opacity-100 text-gray-100 hover:text-white'
        }`}
        onClick={onCopy}
      >
        <div className="relative h-full w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`absolute inset-0 h-full w-full transition-all duration-300 ${
              copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
            }`}
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`absolute inset-0 h-full w-full transition-all duration-300 ${
              copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      </button>

      <div ref={textInput} className="my-8">
        <pre className="!m-0 !p-6 overflow-auto rounded-2xl border border-white/10 bg-[#050505] shadow-2xl backdrop-blur-sm">
          {props.children}
        </pre>
      </div>
    </div>
  )
}

export default Pre


