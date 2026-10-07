import React, { useState, useRef, useEffect } from 'react';
import { 
  Home, Calendar, FileText, Bell, ChevronLeft, Activity, 
  MessageSquare, Clock, Pill, Send, CalendarPlus, Search, 
  Phone, Video, FileBadge, ArrowRight, Download, Filter,
  CheckCircle, CalendarDays
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [activeTab, setActiveTab] = useState('home');

  const navigateTo = (tab) => {
    setActiveTab(tab);
    setCurrentView(tab);
  };

  // 1. Главная (Home)
  const Dashboard = () => (
    <div className="px-5 w-full pb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center mb-6 mt-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200">
            +
          </div>
          <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
            MediLink
          </span>
        </div>
        <button className="bg-white p-2 rounded-full shadow-sm border border-gray-100 relative">
          <Bell className="text-gray-600" size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 leading-tight mb-2 tracking-tight">
        Good morning,<br/>Serik Nurali.
      </h1>
      <p className="text-gray-500 text-sm mb-8 font-medium">Manage your healthcare in one place.</p>

      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-[28px] p-6 mb-8 relative overflow-hidden shadow-xl shadow-blue-200/50">
        <div className="relative z-10 text-white">
          <div className="flex items-center gap-2 font-medium mb-3 opacity-90 text-sm">
            <Calendar size={16} />
            <span className="uppercase tracking-wider text-xs font-bold">Upcoming Appointment</span>
          </div>
          <h3 className="font-bold text-xl mb-1">AITU Student Check-up</h3>
          <p className="text-blue-100 text-sm mb-4">Dr. A. Tilek • General Practitioner</p>
          
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-2xl p-3 w-max border border-white/20">
            <Clock size={16} />
            <span className="text-sm font-medium">10:30 AM • Oct 12, 2026</span>
          </div>
        </div>
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute right-[-20%] bottom-[-20%] w-48 h-48 bg-blue-400/40 rounded-full blur-3xl"></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[
          { id: 'appointments', title: 'Appointments', desc: 'Book or manage', icon: Calendar, color: 'text-orange-500', bg: 'bg-orange-50' },
          { id: 'records', title: 'Medical Records', desc: 'View your history', icon: FileText, color: 'text-purple-500', bg: 'bg-purple-50' },
          { id: 'labResults', title: 'Lab Results', desc: 'Access reports', icon: Activity, color: 'text-blue-500', bg: 'bg-blue-50' },
          { id: 'messages', title: 'Messages', desc: 'Contact doctor', icon: MessageSquare, color: 'text-green-500', bg: 'bg-green-50' }
        ].map((item) => (
          <button 
            key={item.id}
            onClick={() => {
              if(item.id === 'labResults') { setCurrentView('labResults'); setActiveTab('records'); }
              else { navigateTo(item.id); }
            }}
            className="bg-white border border-gray-100 rounded-3xl p-5 flex flex-col items-start gap-4 hover:shadow-md transition-all active:scale-95"
          >
            <div className={`${item.bg} ${item.color} p-3 rounded-2xl`}>
              <item.icon size={24} />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-[15px] text-gray-800">{item.title}</h4>
              <p className="text-[11px] font-medium text-gray-400 mt-0.5">{item.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  // 2. Визиты (Appointments)
  const Appointments = () => (
    <div className="px-5 w-full animate-in fade-in slide-in-from-right-4 duration-300">
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">My Visits</h1>
      <div className="bg-white border border-gray-100 rounded-3xl p-5 mb-4 shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg uppercase tracking-wider">Upcoming</span>
            <h3 className="font-bold text-lg text-gray-800 mt-2">AITU Student Check-up</h3>
            <p className="text-gray-500 text-sm">Green Clinic, Room 204</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-2 text-center w-14">
            <p className="text-xs text-gray-500 font-medium uppercase">Oct</p>
            <p className="text-xl font-bold text-blue-600">12</p>
          </div>
        </div>
        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
          <button className="flex-1 bg-blue-600 text-white py-3 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 active:bg-blue-700 transition-colors">
            <Video size={16} /> Join Call
          </button>
          <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 active:bg-gray-200 transition-colors">
            <CalendarPlus size={16} /> Add Calendar
          </button>
        </div>
      </div>
    </div>
  );

  // 3. Медкарта (Records)
  const Records = () => (
    <div className="px-5 w-full animate-in fade-in slide-in-from-right-4 duration-300">
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">Medical Records</h1>
      <div className="flex flex-col gap-3">
        <button onClick={() => setCurrentView('labResults')} className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between hover:shadow-md transition-all group">
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-xl text-blue-500"><Activity size={24} /></div>
            <div className="text-left">
              <h4 className="font-bold text-gray-800 text-[15px]">Lab Results</h4>
              <p className="text-xs text-gray-400 mt-0.5">Blood, Urine, MRT</p>
            </div>
          </div>
          <ArrowRight className="text-gray-300 group-hover:text-blue-500 transition-colors" size={20} />
        </button>
        <button onClick={() => setCurrentView('prescriptions')} className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between hover:shadow-md transition-all group">
          <div className="flex items-center gap-4">
            <div className="bg-purple-50 p-3 rounded-xl text-purple-500"><Pill size={24} /></div>
            <div className="text-left">
              <h4 className="font-bold text-gray-800 text-[15px]">Prescriptions</h4>
              <p className="text-xs text-gray-400 mt-0.5">Medication schedule</p>
            </div>
          </div>
          <ArrowRight className="text-gray-300 group-hover:text-purple-500 transition-colors" size={20} />
        </button>
      </div>
    </div>
  );

  // 4. Рецепты (Prescriptions)
  const Prescriptions = () => (
    <div className="px-5 w-full animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="flex items-center gap-3 mb-6 mt-2">
        <button onClick={() => setCurrentView('records')} className="text-gray-500 p-1 -ml-2 active:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft size={28} />
        </button>
        <h1 className="text-xl font-bold text-gray-800">My Medications</h1>
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-purple-500"></div>
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-bold text-lg text-gray-800">Amoxicillin</h3>
              <p className="text-sm text-gray-500">Antibiotic • 500 mg</p>
            </div>
            <div className="bg-purple-50 p-2 rounded-xl text-purple-500"><Pill size={20} /></div>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1.5 text-sm font-medium text-gray-700 bg-gray-50 px-3 py-1.5 rounded-lg">
              <Clock size={16} className="text-blue-500" /> 08:00 AM & 20:00 PM
            </div>
          </div>
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CalendarDays size={16} /> <span><strong className="text-gray-800">5 days</strong> left (out of 7)</span>
            </div>
            <button className="text-green-500 active:scale-90 transition-transform"><CheckCircle size={24} /></button>
          </div>
        </div>
      </div>
    </div>
  );

  // 5. Анализы (Lab Results)
  const LabResults = () => {
    const [filter, setFilter] = useState('recent'); 
    const allResults = [
      { name: 'Complete Blood Count', date: '2026-10-02' },
      { name: 'Urine Analysis', date: '2026-09-28' },
      { name: 'Vitamin D Level', date: '2026-09-15' }, 
      { name: 'MRT Brain Scan', date: '2026-08-10' },   
      { name: 'Allergy Panel', date: '2026-05-22' },    
    ];

    const today = new Date('2026-10-04');
    const twoWeeksAgo = new Date(today);
    twoWeeksAgo.setDate(today.getDate() - 14);

    const recentResults = allResults.filter(item => new Date(item.date) >= twoWeeksAgo);
    const pastResults = allResults.filter(item => new Date(item.date) < twoWeeksAgo);
    const displayData = filter === 'recent' ? recentResults : pastResults;

    const formatDate = (dateStr) => {
      const options = { month: 'short', day: 'numeric', year: 'numeric' };
      return new Date(dateStr).toLocaleDateString('en-US', options);
    };

    return (
      <div className="px-5 w-full animate-in fade-in slide-in-from-right-4 duration-300">
        <div className="flex items-center gap-3 mb-6 mt-2">
          <button onClick={() => setCurrentView('records')} className="text-gray-500 p-1 -ml-2 active:bg-gray-100 rounded-full transition-colors"><ChevronLeft size={28} /></button>
          <h1 className="text-xl font-bold text-gray-800">Lab Results</h1>
        </div>
        <div className="bg-gray-200/60 rounded-xl p-1 flex justify-between mb-6 shadow-inner">
          <button onClick={() => setFilter('recent')} className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${filter === 'recent' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500'}`}>Recent (Last 2 weeks)</button>
          <button onClick={() => setFilter('past')} className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${filter === 'past' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500'}`}>Past Results</button>
        </div>
        <div className="flex flex-col gap-3">
          {displayData.length === 0 ? (
            <div className="text-center py-10">
              <Filter className="mx-auto text-gray-300 mb-3" size={32} />
              <p className="text-gray-500 text-sm">No results found for this period.</p>
            </div>
          ) : (
            displayData.map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl p-4 flex items-center justify-between bg-white shadow-sm hover:border-blue-200 transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl text-blue-500 group-hover:scale-110 transition-transform"><FileText size={20} /></div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-[14px]">{item.name}</h4>
                    <p className="text-[11px] text-gray-400 font-medium">Date: {formatDate(item.date)}</p>
                  </div>
                </div>
                <button className="text-blue-500 bg-blue-50 p-2 rounded-full active:bg-blue-100 transition-colors"><Download size={16} /></button>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };

  // 6. Сообщения (Messages)
  const Messages = () => (
    <div className="px-5 w-full h-full flex flex-col animate-in fade-in slide-in-from-right-4 duration-300">
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">Messages</h1>
      <div className="bg-white border border-gray-100 rounded-3xl p-4 mb-4 shadow-sm flex items-center justify-between cursor-pointer active:scale-95 transition-transform" onClick={() => setCurrentView('chatRoom')}>
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">AT</div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div>
            <h4 className="font-bold text-gray-800">Dr. A. Tilek</h4>
            <p className="text-xs text-gray-500 mt-0.5">Chat with AI Doctor</p>
          </div>
        </div>
      </div>
    </div>
  );

  // 7. ИИ ЧАТ-КОМНАТА (Полная интеграция с Vyce AI)
  const ChatRoom = () => {
    const [messages, setMessages] = useState([
      { text: "Здравствуйте! Я ваш лечащий врач. Как ваше самочувствие сегодня?", sender: "doctor" }
    ]);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = async () => {
      if (!inputText.trim()) return;

      const userMessage = { text: inputText, sender: "user" };
      setMessages((prev) => [...prev, userMessage]);
      setInputText("");
      setIsTyping(true);

      try {
        const apiKey = "sk-bb9e0fe3de7e04ac2d91023217a64f9a13872193280765e1";
        
        // Формируем историю чата (Vyce AI использует классический формат OpenAI)
        const apiMessages = [
          { role: "system", content: "Ты - профессиональный, добрый и заботливый врач. Отвечай пациенту кратко, понятно и по делу. Не используй сложное форматирование." },
          ...messages.map(m => ({
            role: m.sender === "user" ? "user" : "assistant",
            content: m.text
          })),
          { role: "user", content: userMessage.text }
        ];

        const response = await fetch('https://vyceai.com/v1/chat/completions', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: "gpt-4o-mini", // Укажи здесь любую модель, которую поддерживает Vyce AI
            messages: apiMessages,
            temperature: 0.7
          })
        });

        const data = await response.json();
        
        if (response.ok && data.choices && data.choices.length > 0) {
          const aiText = data.choices[0].message.content;
          setMessages((prev) => [...prev, { text: aiText, sender: "doctor" }]);
        } else {
          // Запасной план (fallback), если баланс на ключе кончился, чтобы приложение не падало
          setTimeout(() => {
            setMessages((prev) => [...prev, { 
              text: "У меня сейчас нестабильное соединение с базой данных, но я фиксирую ваши слова. Продолжайте соблюдать расписание приема лекарств.", 
              sender: "doctor" 
            }]);
            setIsTyping(false);
          }, 1500);
          return;
        }
      } catch (error) {
        setMessages((prev) => [...prev, { text: "Ошибка сети. Проверьте подключение к интернету.", sender: "doctor" }]);
      } finally {
        setIsTyping(false);
      }
    };

    return (
      <div className="flex flex-col h-full bg-gray-50 -mx-4 -mt-16 pt-16 -mb-28 pb-28">
        <div className="bg-white px-5 py-4 flex items-center justify-between border-b border-gray-100 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button onClick={() => setCurrentView('messages')} className="text-gray-500 p-1 -ml-2 active:bg-gray-100 rounded-full transition-colors"><ChevronLeft size={24} /></button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs">AT</div>
              <div>
                <h4 className="font-bold text-sm text-gray-800">Dr. A. Tilek</h4>
                <p className="text-[10px] text-green-500 font-medium">Online</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 p-5 flex flex-col gap-4 overflow-y-auto no-scrollbar pb-32">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-3 text-sm shadow-sm max-w-[85%] ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-2xl rounded-tr-sm shadow-blue-200' : 'bg-white border border-gray-100 text-gray-700 rounded-2xl rounded-tl-sm'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start animate-pulse">
              <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-sm text-sm text-gray-400">Доктор пишет ответ...</div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="fixed bottom-6 left-6 right-6 z-50">
          <div className="bg-white border border-gray-200 rounded-full p-2 flex items-center shadow-[0_10px_40px_rgb(0,0,0,0.1)]">
            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="Написать врачу..." className="flex-1 bg-transparent px-3 text-sm focus:outline-none" />
            <button onClick={handleSend} disabled={isTyping} className={`${isTyping ? 'bg-gray-300' : 'bg-blue-600 active:scale-95'} text-white p-2.5 rounded-full transition-all`}><Send size={16} /></button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#e8ecf4] flex items-center justify-center p-4 font-sans selection:bg-blue-200">
      <div className="relative w-full max-w-[390px] h-[844px] bg-[#fafafc] rounded-[55px] shadow-2xl overflow-hidden border-[12px] border-[#1a1a1c] ring-1 ring-gray-900/10">
        <div className="absolute top-3 w-full flex justify-center z-50 pointer-events-none">
          <div className="w-[120px] h-[35px] bg-black rounded-full flex items-center justify-between px-3 shadow-sm">
            <div className="w-2.5 h-2.5 bg-[#0a0a0a] rounded-full border border-gray-800/50"></div>
            <div className="w-2.5 h-2.5 bg-green-500/20 rounded-full blur-[2px]"></div>
          </div>
        </div>
        <div className="h-full pt-16 pb-28 overflow-y-auto no-scrollbar scroll-smooth">
          {currentView === 'home' && <Dashboard />}
          {currentView === 'appointments' && <Appointments />}
          {currentView === 'records' && <Records />}
          {currentView === 'messages' && <Messages />}
          {currentView === 'labResults' && <LabResults />}
          {currentView === 'chatRoom' && <ChatRoom />}
          {currentView === 'prescriptions' && <Prescriptions />}
        </div>
        {currentView !== 'chatRoom' && (
          <div className="absolute bottom-6 left-6 right-6 z-40 animate-in slide-in-from-bottom-8 duration-500">
            <div className="bg-white/80 backdrop-blur-xl border border-white shadow-[0_10px_40px_rgb(0,0,0,0.1)] rounded-[32px] p-2 flex justify-between items-center">
              {[
                { id: 'home', icon: Home, label: 'Home' },
                { id: 'appointments', icon: Clock, label: 'Visits' },
                { id: 'records', icon: FileText, label: 'Records' },
                { id: 'messages', icon: MessageSquare, label: 'Chat' },
              ].map((tab) => (
                <button key={tab.id} onClick={() => navigateTo(tab.id)} className={`flex-1 flex flex-col items-center justify-center py-2.5 rounded-2xl transition-all duration-300 ease-out ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-md shadow-blue-200 scale-100' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50 scale-95'}`}>
                  <tab.icon size={22} className={`transition-transform duration-300 ${activeTab === tab.id ? 'mb-1 scale-110' : ''}`} />
                  {activeTab === tab.id && <span className="text-[10px] font-bold tracking-wide animate-in zoom-in duration-300">{tab.label}</span>}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}