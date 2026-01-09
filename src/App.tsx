import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { PortfolioGrid } from './components/Portfolio'; // From previous response

function App() {
  const [activeTab, setActiveTab] = useState('About');

  return (
    <div className="min-h-screen bg-[#121212] text-gray-300 p-4 lg:p-12 flex flex-col lg:flex-row gap-8 justify-center items-start">
      <Sidebar />
      <main className="flex-1 max-w-4xl bg-[#1e1e1f] border border-[#383838] rounded-3xl p-8 lg:p-12 relative">
        <nav className="lg:absolute top-0 right-0 bg-[#2b2b2c] border-b border-l border-[#383838] rounded-bl-3xl rounded-tr-3xl px-10 py-5 flex gap-8 z-10 overflow-x-auto">
          {['About', 'Resume', 'Portfolio', 'Blog', 'Contact'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-bold transition-colors ${activeTab === tab ? 'text-[#ffdb70]' : 'text-gray-400 hover:text-gray-200'}`}
            >
              {tab}
            </button>
          ))}
        </nav>

        <header className="mt-8 mb-8 lg:mt-0">
          <h2 className="mb-4 text-3xl font-bold text-white">{activeTab}</h2>
          <div className="w-10 h-1.5 bg-[#ffdb70] rounded-full"></div>
        </header>

        {activeTab === 'About' && <About />}
        {activeTab === 'Resume' && <Resume />}
        {activeTab === 'Portfolio' && <PortfolioGrid />}
        {activeTab === 'Contact' && <Contact />}
      </main>
    </div>
  );
}

export default App;