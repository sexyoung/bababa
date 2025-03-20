import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputText, setInputText] = useState<string>('');
  const [fontFamily, setFontFamily] = useState<string>('Noto Sans TC, sans-serif');
  const [fontSize, setFontSize] = useState<number>(100);

  // 處理觸摸事件，防止需要雙擊
  const handleTouchStart = (e: React.TouchEvent) => {
    // 防止默認行為，確保不需要第二次點擊
    e.preventDefault();
  };

  // 定義字體選項
  const fontOptions = [
    { value: 'Noto Sans TC, sans-serif', label: '黑體 (思源黑體)' },
    { value: 'Noto Serif TC, serif', label: '明體 (思源宋體)' },
  ];

  return (
    <div className="max-w-2xl mx-auto p-8 min-h-screen">
      <div className="mb-4">
        <input 
          type="text" 
          placeholder='請輸入文字...' 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="p-4 border border-gray-300 rounded-lg w-full text-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
        />
      </div>

      <div className="flex items-center space-x-6 mb-4 bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center">
          <select 
            className="p-3 rounded-md border border-gray-300 bg-white shadow-sm cursor-pointer hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
          >
            {fontOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex items-center flex-1">
          <input 
            type="range" 
            min="60" 
            max="280" 
            value={fontSize}
            onChange={(e) => setFontSize(parseInt(e.target.value))}
            onTouchStart={handleTouchStart}
            style={{ touchAction: 'none' }}
            className="w-full max-w-xs h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
      </div>
      
      <div 
        className="rounded-lg font-medium min-h-[300px] flex items-center justify-center bg-white transition-all"
        style={{ fontFamily, fontSize: `${fontSize}px` }}
      >
        {inputText || '在上方輸入文字以預覽效果'}
      </div>
    </div>
  )
}

export default App
