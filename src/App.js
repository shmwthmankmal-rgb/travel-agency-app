import React, { useState } from 'react';
import { 
  Plane, 
  Ship, 
  Building2, // بديل لأيقونة الفندق
  FileCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Star, 
  CheckCircle, 
  Instagram,
  MessageCircle
} from 'lucide-react';

const SDTravelAgency = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('flight');

  // بيانات التواصل
  const phoneNumber = "+201154803108";
  const whatsappNumber = "201210298702";
  const email = "sdtravelagency63@gmail.com";
  
  // البيانات
  const destinations = [
    "السعودية", "مصر", "تركيا", "عمان", "السودان", "الإمارات", 
    "الكويت", "قطر", "تشاد", "ليبيا", "ماليزيا", "رواندا", 
    "يوغندا", "تنزانيا", "كينيا", "إثيوبيا", "جنوب السودان"
  ];

  const visaPrices = [
    { country: "كينيا", price: "50$", type: "تأشيرة دخول" },
    { country: "جنوب السودان", price: "70$", type: "تأشيرة دخول" },
    { country: "تنزانيا", price: "70$", type: "تأشيرة دخول" },
    { country: "رواندا", price: "70$", type: "تأشيرة دخول" },
    { country: "يوغندا", price: "70$", type: "تأشيرة دخول" },
    { country: "إثيوبيا", price: "80$", type: "تأشيرة دخول" },
    { country: "الكاميرون", price: "350$", type: "تأشيرة دخول" },
    { country: "نيجيريا", price: "400$", type: "تأشيرة دخول" },
    { country: "تايلاند", price: "155$", type: "تأشيرة دخول" },
    { country: "الهند (علاجية)", price: "410$", type: "تأشيرة دخول" },
    { country: "الهند (دراسية)", price: "510$", type: "تأشيرة دخول" },
  ];

  const uaeVisas = [
    { duration: "شهر واحد", price: "882 درهم", guarantee: "1080 درهم ضمان مالي" },
    { duration: "شهرين", price: "1285 درهم", guarantee: "1080 درهم ضمان مالي" },
  ];

  const egyptSecurity = [
    { type: "الموافقة البطيئة", price: "860$" },
    { type: "الموافقة السريعة", price: "960$" },
  ];

  const testimonials = [
    { name: "محمد أحمد", text: "يا سلام على التعامل الراقي، ناس SD TRAVEL ما قصروا معاي تب، حجزت التذكرة والفندق وأنا مرتاح." },
    { name: "سارة عثمان", text: "خدمة سريعة وممتازة شديد، خاصة في موضوع التأشيرات، خلصوا لي الإجراءات في زمن قياسي." },
    { name: "عمر خالد", text: "والله سافرت معاهم القاهرة، ترتيب ونظام وأسعارهم مناسبة جداً مقارنة بالسوق." },
  ];

  // دوال التعامل مع الأحداث
  const handleWhatsAppClick = (message) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleFlightSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const msg = `مرحباً SD Travel، أرغب بحجز طيران:\nمن: ${formData.get('from')}\nإلى: ${formData.get('to')}\nالتاريخ: ${formData.get('date')}\nالدرجة: ${formData.get('class')}`;
    handleWhatsAppClick(msg);
  };

  const handleHotelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const msg = `مرحباً SD Travel، أرغب بحجز فندق:\nالدولة: ${formData.get('country')}\nالمدينة: ${formData.get('city')}\nعدد النجوم: ${formData.get('stars')} نجوم`;
    handleWhatsAppClick(msg);
  };

  const handleSeaSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const msg = `مرحباً SD Travel، أرغب بحجز رحلة بحرية:\nالمسار: ${formData.get('route')}\nالتاريخ: ${formData.get('date')}`;
    handleWhatsAppClick(msg);
  };

  const handleVisaInquiry = (visaName) => {
    const msg = `مرحباً SD Travel، أرغب بالاستفسار والتقديم على: ${visaName}`;
    handleWhatsAppClick(msg);
  };

  return (
    <div className="font-sans min-h-screen text-[#2B1A12]" dir="rtl">
      
      {/* --- Top Bar --- */}
      <div className="bg-[#2B1A12] text-[#E6C87A] py-2 px-4 text-sm hidden md:flex justify-between items-center">
        <div className="flex gap-6">
          <span className="flex items-center gap-2"><Mail size={14} /> {email}</span>
          <span className="flex items-center gap-2"><Phone size={14} /> {phoneNumber}</span>
        </div>
        <div className="flex gap-4">
          <span>دعم متواصل 24/7</span>
          <span className="flex items-center gap-1">SD Travel Agency</span>
        </div>
      </div>

      {/* --- Navbar --- */}
      <nav className="bg-[#4A2C1D] text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-wider text-[#C9A24D] leading-none">SD TRAVEL</span>
              <span className="text-xs text-[#E6C87A] tracking-widest leading-none mt-1">AGENCY</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 font-medium text-lg">
            <a href="#home" className="hover:text-[#C9A24D] transition">الرئيسية</a>
            <a href="#services" className="hover:text-[#C9A24D] transition">خدماتنا</a>
            <a href="#visas" className="hover:text-[#C9A24D] transition">التأشيرات</a>
            <a href="#destinations" className="hover:text-[#C9A24D] transition">وجهاتنا</a>
            <a href="#about" className="hover:text-[#C9A24D] transition">من نحن</a>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => handleWhatsAppClick("مرحباً، أريد الاستفسار عن خدماتكم")}
            className="hidden md:flex items-center gap-2 bg-[#C9A24D] text-[#4A2C1D] px-6 py-2 rounded-full font-bold hover:bg-[#E6C87A] transition transform hover:scale-105"
          >
            <MessageCircle size={18} /> تواصل معنا
          </button>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-[#C9A24D]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#4A2C1D] border-t border-[#5d3a29] p-4 flex flex-col gap-4">
            <a href="#home" className="block text-white hover:text-[#C9A24D]" onClick={() => setIsMenuOpen(false)}>الرئيسية</a>
            <a href="#services" className="block text-white hover:text-[#C9A24D]" onClick={() => setIsMenuOpen(false)}>خدماتنا</a>
            <a href="#visas" className="block text-white hover:text-[#C9A24D]" onClick={() => setIsMenuOpen(false)}>التأشيرات</a>
            <a href="#destinations" className="block text-white hover:text-[#C9A24D]" onClick={() => setIsMenuOpen(false)}>وجهاتنا</a>
            <button 
              onClick={() => handleWhatsAppClick("مرحباً، أريد الاستفسار عن خدماتكم")}
              className="w-full flex justify-center items-center gap-2 bg-[#C9A24D] text-[#4A2C1D] px-4 py-3 rounded font-bold"
            >
              <MessageCircle size={18} /> تواصل عبر واتساب
            </button>
          </div>
        )}
      </nav>

      {/* --- Hero Section & Booking Widget --- */}
      <header id="home" className="relative bg-[#2B1A12] py-20 lg:py-32 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Travel Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1A12] to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Hero Text */}
          <div className="lg:w-1/2 text-center lg:text-right text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              سافر وانت <span className="text-[#C9A24D]">مطمئن</span>.. <br />
              السفر تجربة وحكاية
            </h1>
            <p className="text-[#E6C87A] text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              نحن في SD Travel نؤمن أن السفر ليس مجرد تذكرة، بل ذكريات تبدأ من لحظة الاختيار. نوفر لك حلول سفر كاملة تناسب ميزانيتك.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#visas" className="px-8 py-3 bg-[#C9A24D] text-[#4A2C1D] font-bold rounded hover:bg-[#E6C87A] transition shadow-lg">
                عروض التأشيرات
              </a>
              <a href="#destinations" className="px-8 py-3 border-2 border-[#E6C87A] text-[#E6C87A] font-bold rounded hover:bg-[#E6C87A] hover:text-[#4A2C1D] transition">
                استكشف الوجهات
              </a>
            </div>
          </div>

          {/* Booking Widget */}
          <div className="lg:w-1/2 w-full bg-[#F7F2EA] rounded-xl shadow-2xl p-6 lg:p-8 border border-[#E6C87A]">
            {/* Tabs - FORCED SINGLE LINE (Flex Nowrap) */}
            <div className="flex flex-nowrap items-center gap-1 md:gap-2 mb-6 border-b-2 border-[#E6C87A] pb-2 overflow-x-auto no-scrollbar">
              <button 
                onClick={() => setActiveTab('flight')} 
                className={`flex-1 min-w-fit flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4 py-2 rounded-t-lg font-bold text-sm md:text-base whitespace-nowrap transition ${activeTab === 'flight' ? 'bg-[#4A2C1D] text-[#C9A24D]' : 'text-[#4A2C1D] hover:bg-[#E6C87A] hover:bg-opacity-30'}`}
              >
                <Plane size={16} className="md:w-5 md:h-5" /> طيران
              </button>
              
              <button 
                onClick={() => setActiveTab('hotel')} 
                className={`flex-1 min-w-fit flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4 py-2 rounded-t-lg font-bold text-sm md:text-base whitespace-nowrap transition ${activeTab === 'hotel' ? 'bg-[#4A2C1D] text-[#C9A24D]' : 'text-[#4A2C1D] hover:bg-[#E6C87A] hover:bg-opacity-30'}`}
              >
                <Building2 size={16} className="md:w-5 md:h-5" /> فنادق
              </button>
              
              <button 
                onClick={() => setActiveTab('visa')} 
                className={`flex-1 min-w-fit flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4 py-2 rounded-t-lg font-bold text-sm md:text-base whitespace-nowrap transition ${activeTab === 'visa' ? 'bg-[#4A2C1D] text-[#C9A24D]' : 'text-[#4A2C1D] hover:bg-[#E6C87A] hover:bg-opacity-30'}`}
              >
                <FileCheck size={16} className="md:w-5 md:h-5" /> تأشيرات
              </button>
              
              <button 
                onClick={() => setActiveTab('sea')} 
                className={`flex-1 min-w-fit flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4 py-2 rounded-t-lg font-bold text-sm md:text-base whitespace-nowrap transition ${activeTab === 'sea' ? 'bg-[#4A2C1D] text-[#C9A24D]' : 'text-[#4A2C1D] hover:bg-[#E6C87A] hover:bg-opacity-30'}`}
              >
                <Ship size={16} className="md:w-5 md:h-5" /> رحلات بحرية
              </button>
            </div>

            {/* Forms */}
            <div className="min-h-[250px]">
              {activeTab === 'flight' && (
                <form onSubmit={handleFlightSubmit} className="space-y-4 animate-fadeIn">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-[#4A2C1D] mb-1">من</label>
                      <input type="text" name="from" placeholder="مدينة المغادرة" className="w-full p-3 border border-[#E6C87A] rounded bg-white focus:outline-none focus:border-[#4A2C1D] shadow-sm" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#4A2C1D] mb-1">إلى</label>
                      <input type="text" name="to" placeholder="وجهة الوصول" className="w-full p-3 border border-[#E6C87A] rounded bg-white focus:outline-none focus:border-[#4A2C1D] shadow-sm" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-[#4A2C1D] mb-1">تاريخ السفر</label>
                      <input type="date" name="date" className="w-full p-3 border border-[#E6C87A] rounded bg-white focus:outline-none focus:border-[#4A2C1D] shadow-sm" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#4A2C1D] mb-1">الدرجة</label>
                      <select name="class" className="w-full p-3 border border-[#E6C87A] rounded bg-white focus:outline-none focus:border-[#4A2C1D] shadow-sm">
                        <option value="سياحية">سياحية (Economy)</option>
                        <option value="رجال أعمال">رجال أعمال (Business)</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-[#C9A24D] text-[#4A2C1D] font-bold py-3 rounded hover:bg-[#E6C87A] transition mt-4 shadow">
                    بحث وحجز عبر واتساب
                  </button>
                </form>
              )}

              {activeTab === 'hotel' && (
                <form onSubmit={handleHotelSubmit} className="space-y-4 animate-fadeIn">
                  <div>
                    <label className="block text-sm font-bold text-[#4A2C1D] mb-1">الدولة</label>
                    <input type="text" name="country" placeholder="مثال: تركيا" className="w-full p-3 border border-[#E6C87A] rounded bg-white focus:outline-none focus:border-[#4A2C1D] shadow-sm" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#4A2C1D] mb-1">المدينة</label>
                    <input type="text" name="city" placeholder="مثال: اسطنبول" className="w-full p-3 border border-[#E6C87A] rounded bg-white focus:outline-none focus:border-[#4A2C1D] shadow-sm" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#4A2C1D] mb-1">تصنيف الفندق (نجوم)</label>
                    <select name="stars" className="w-full p-3 border border-[#E6C87A] rounded bg-white focus:outline-none focus:border-[#4A2C1D] shadow-sm">
                      <option value="3">⭐⭐⭐ (3 نجوم)</option>
                      <option value="4">⭐⭐⭐⭐ (4 نجوم)</option>
                      <option value="5">⭐⭐⭐⭐⭐ (5 نجوم)</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-[#C9A24D] text-[#4A2C1D] font-bold py-3 rounded hover:bg-[#E6C87A] transition mt-4 shadow">
                    إرسال الطلب عبر واتساب
                  </button>
                </form>
              )}

              {activeTab === 'visa' && (
                <div className="text-center animate-fadeIn space-y-4">
                  <p className="text-[#4A2C1D] font-medium text-lg">نوفر تأشيرات لأكثر من 15 دولة حول العالم بإجراءات ميسرة.</p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-right bg-white p-4 rounded border border-[#E6C87A] shadow-inner">
                    <div className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C9A24D]" /> الإمارات</div>
                    <div className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C9A24D]" /> السعودية</div>
                    <div className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C9A24D]" /> مصر</div>
                    <div className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C9A24D]" /> شرق أفريقيا</div>
                  </div>
                  <a href="#visas" className="block w-full bg-[#C9A24D] text-[#4A2C1D] font-bold py-3 rounded hover:bg-[#E6C87A] transition shadow">
                    عرض قائمة الأسعار
                  </a>
                </div>
              )}

              {activeTab === 'sea' && (
                <form onSubmit={handleSeaSubmit} className="space-y-4 animate-fadeIn">
                  <div className="bg-[#E6C87A] bg-opacity-20 p-4 rounded border border-[#C9A24D]">
                    <h4 className="font-bold text-[#4A2C1D] mb-2 flex items-center gap-2"><Ship size={18}/> خط الرحلات المتاح</h4>
                    <p className="text-sm font-medium">الرحلات البحرية متوفرة حصرياً بين ميناء سواكن (السودان) وميناء جدة الإسلامي (السعودية).</p>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#4A2C1D] mb-1">اختر المسار</label>
                    <select name="route" className="w-full p-3 border border-[#E6C87A] rounded bg-white focus:outline-none focus:border-[#4A2C1D] shadow-sm">
                      <option value="سواكن الى جدة">من سواكن 🇸🇩 إلى جدة 🇸🇦</option>
                      <option value="جدة الى سواكن">من جدة 🇸🇦 إلى سواكن 🇸🇩</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#4A2C1D] mb-1">تاريخ الرحلة المفضل</label>
                    <input type="date" name="date" className="w-full p-3 border border-[#E6C87A] rounded bg-white focus:outline-none focus:border-[#4A2C1D] shadow-sm" required />
                  </div>
                  <button type="submit" className="w-full bg-[#C9A24D] text-[#4A2C1D] font-bold py-3 rounded hover:bg-[#E6C87A] transition mt-4 shadow">
                    حجز تذكرة باخرة
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* --- Why Choose Us (About) --- */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-[#4A2C1D] mb-4">لماذا SD Travel؟</h2>
          <div className="w-20 h-1 bg-[#C9A24D] mx-auto mb-10 rounded-full"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#F7F2EA] rounded-xl hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#4A2C1D] rounded-full flex items-center justify-center mx-auto mb-4 text-[#C9A24D] shadow-lg">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#2B1A12]">خبرة وتميز</h3>
              <p className="text-gray-700 leading-relaxed">وكالتنا متخصصة في حجوزات الطيران والفنادق والتأشيرات والرحلات البحرية بخبرة طويلة.</p>
            </div>
            <div className="p-8 bg-[#F7F2EA] rounded-xl hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#4A2C1D] rounded-full flex items-center justify-center mx-auto mb-4 text-[#C9A24D] shadow-lg">
                <Phone size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#2B1A12]">دعم 24/7</h3>
              <p className="text-gray-700 leading-relaxed">هدفنا إنك تسافر وانت مطمئن وعارف إنو في فريق شغال لخدمتك ودعمك طوال اليوم.</p>
            </div>
            <div className="p-8 bg-[#F7F2EA] rounded-xl hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#4A2C1D] rounded-full flex items-center justify-center mx-auto mb-4 text-[#C9A24D] shadow-lg">
                <FileCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#2B1A12]">حلول ميزانية مرنة</h3>
              <p className="text-gray-700 leading-relaxed">بنوفر ليك حلول سفر كاملة تناسب ميزانيتك وتلبي احتياجاتك سواء كنت مسافر سياحة أو عمل.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Destinations Slider (Static Grid) --- */}
      <section id="destinations" className="py-20 bg-[#4A2C1D] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#C9A24D] mb-4">وجهاتنا المميزة</h2>
            <p className="text-[#E6C87A] text-lg">نأخذك إلى حيث تريد.. اكتشف العالم معنا</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {destinations.map((dest, idx) => (
              <span key={idx} className="bg-[#2B1A12] border border-[#C9A24D] px-8 py-3 rounded-full text-lg hover:bg-[#C9A24D] hover:text-[#4A2C1D] transition cursor-default shadow-md">
                {dest}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- Visa Pricing Section --- */}
      <section id="visas" className="py-20 bg-[#F7F2EA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#4A2C1D] mb-4">قائمة أسعار التأشيرات</h2>
            <div className="w-20 h-1 bg-[#C9A24D] mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-700 text-lg">أسعار تنافسية وإجراءات سريعة (العملة: دولار أمريكي / جنيه سوداني)</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* General Visas Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-[#4A2C1D]">
              <div className="bg-[#4A2C1D] p-4 text-[#C9A24D] font-bold text-center text-xl">
                تأشيرات الدول الأفريقية والآسيوية
              </div>
              <div className="divide-y divide-gray-100">
                {visaPrices.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 hover:bg-[#F7F2EA] transition">
                    <span className="font-bold text-[#2B1A12] text-lg">{item.country}</span>
                    <span className="bg-[#E6C87A] text-[#4A2C1D] px-4 py-1 rounded-full font-bold text-sm shadow-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Visas (UAE & Egypt) */}
            <div className="flex flex-col gap-8">
              {/* UAE Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-[#C9A24D]">
                <div className="bg-[#C9A24D] p-4 text-[#4A2C1D] font-bold text-center text-xl">
                  تأشيرات الإمارات 🇦🇪
                </div>
                <div className="p-6 space-y-4">
                  {uaeVisas.map((visa, idx) => (
                    <div key={idx} className="bg-[#F7F2EA] p-5 rounded-lg border border-[#E6C87A]">
                      <h4 className="font-bold text-[#4A2C1D] text-xl mb-2">{visa.duration}</h4>
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center text-sm gap-2">
                        <span className="text-gray-800 font-semibold text-lg">السعر: {visa.price}</span>
                        <span className="text-red-600 font-bold bg-red-50 px-2 py-1 rounded border border-red-100">{visa.guarantee}</span>
                      </div>
                      <button onClick={() => handleVisaInquiry(`تأشيرة الإمارات ${visa.duration}`)} className="w-full mt-4 bg-[#4A2C1D] text-white py-2 rounded font-bold hover:bg-opacity-90 transition shadow-sm">تقديم طلب</button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Egypt Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-[#2B1A12]">
                <div className="bg-[#2B1A12] p-4 text-[#E6C87A] font-bold text-center text-xl">
                  الموافقة الأمنية لمصر 🇪🇬
                </div>
                <div className="p-6 space-y-4">
                  {egyptSecurity.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-4 bg-[#F7F2EA] rounded shadow-sm border border-gray-100">
                      <span className="font-bold text-[#4A2C1D] text-lg">{item.type}</span>
                      <span className="font-bold text-[#C9A24D] text-xl">{item.price}</span>
                    </div>
                  ))}
                  <button onClick={() => handleVisaInquiry("الموافقة الأمنية لمصر")} className="w-full mt-2 bg-[#C9A24D] text-[#4A2C1D] font-bold py-3 rounded hover:bg-[#E6C87A] transition shadow">
                    استفسر الآن
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Testimonials (Sudanese Dialect) --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#4A2C1D] mb-4">آراء عملائنا</h2>
            <p className="text-gray-600 text-lg">كلام ناس سافروا معانا وجربوا الخدمة</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-[#F7F2EA] p-8 rounded-xl border border-[#E6C87A] relative hover:shadow-lg transition">
                <div className="text-[#C9A24D] absolute top-4 left-4 text-5xl opacity-50">"</div>
                <p className="text-[#2B1A12] italic mb-6 pt-4 leading-loose font-medium text-lg">
                  {t.text}
                </p>
                <div className="flex items-center gap-4 mt-4 border-t border-[#E6C87A] pt-4">
                  <div className="w-12 h-12 bg-[#4A2C1D] rounded-full flex items-center justify-center text-[#E6C87A] font-bold text-xl shadow">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#4A2C1D] text-base">{t.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-[#4A2C1D] text-[#F7F2EA] pt-16 pb-8 border-t-8 border-[#C9A24D]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                 {/* Circle removed from footer logo as well for consistency, just text */}
                 <div className="flex flex-col">
                    <h3 className="text-2xl font-bold text-[#C9A24D]">SD TRAVEL</h3>
                 </div>
              </div>
              <p className="text-base leading-relaxed opacity-90 mb-6 font-medium">
                نسعى دائماً لتقديم أفضل تجارب السفر والسياحة. تواصل معنا لتخطيط رحلتك القادمة بكل سهولة وأمان.
              </p>
              <div className="flex gap-4">
                <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="bg-[#2B1A12] p-3 rounded-full hover:bg-[#C9A24D] hover:text-[#4A2C1D] transition shadow">
                    <span className="font-bold text-xs">TikTok</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-[#2B1A12] p-3 rounded-full hover:bg-[#C9A24D] hover:text-[#4A2C1D] transition shadow">
                    <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-[#C9A24D] mb-6 border-b border-[#C9A24D] inline-block pb-1">روابط سريعة</h4>
              <ul className="space-y-3 text-base opacity-90">
                <li><a href="#home" className="hover:text-[#C9A24D] transition block">الرئيسية</a></li>
                <li><a href="#about" className="hover:text-[#C9A24D] transition block">من نحن</a></li>
                <li><a href="#visas" className="hover:text-[#C9A24D] transition block">التأشيرات</a></li>
                <li><a href="#services" className="hover:text-[#C9A24D] transition block">سياسة الخصوصية</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold text-[#C9A24D] mb-6 border-b border-[#C9A24D] inline-block pb-1">خدماتنا</h4>
              <ul className="space-y-3 text-base opacity-90">
                <li>حجز تذاكر طيران</li>
                <li>حجوزات فنادق عالمية</li>
                <li>تأشيرات سياحية وعلاجية</li>
                <li>رحلات بحرية (سواكن - جدة)</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-bold text-[#C9A24D] mb-6 border-b border-[#C9A24D] inline-block pb-1">تواصل معنا</h4>
              <ul className="space-y-4 text-base">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-[#C9A24D] mt-1 shrink-0" />
                  <span>متواجدون لخدمتكم عبر الإنترنت</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-[#C9A24D] shrink-0" />
                  <a href={`tel:${phoneNumber}`} dir="ltr" className="hover:text-[#C9A24D] transition">{phoneNumber}</a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle size={20} className="text-[#C9A24D] shrink-0" />
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" dir="ltr" className="hover:text-[#C9A24D] transition">+{whatsappNumber}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-[#C9A24D] shrink-0" />
                  <span>{email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#5d3a29] pt-8 text-center text-sm opacity-70">
            <p>&copy; 2024 SD TRAVEL AGENCY. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a 
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition z-50 flex items-center justify-center animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

export default SDTravelAgency;