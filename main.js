/**
 * MERAKI LANDING PAGE INTERACTION & I18N SCRIPT
 */

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initNavbarScroll();
  initGrowCarousel();
  initTestimonialSlider();
  initFaqAccordion();
  initScrollAnimations();
  initContactModal();
});

/* --------------------------------------------------------------------------
   0. Internationalization (i18n) Engine - Default Primary: Vietnamese (vi)
   -------------------------------------------------------------------------- */
const i18nData = {
  vi: {
    // Navigation
    nav_subtitle: "Xây dựng bằng Trái tim.",
    talent_nav_back: "Quay lại Trang Chủ",
    
    // Index Hero
    hero_title: "Nguồn Lực Marketing Linh Hoạt Cho Sự Phát Triển Bền Vững",
    hero_desc: "Chủ doanh nghiệp SME và lãnh đạo tập đoàn đòi hỏi ở các nhà tiếp thị nhiều hơn bao giờ hết. Họ kỳ vọng các nhà tiếp thị vượt qua giới hạn và đồng hành cùng chiến lược toàn diện từ trên xuống dưới.",
    hero_cta: "Hợp Tác Cùng Chúng Tôi",
    marquee_label: "ĐƯỢC TIN TƯỞNG BỞI",

    // Index Section 2: What to Expect
    expect_title: "Giá Trị Kỳ Vọng",
    expect_desc: "Chúng tôi thúc đẩy quy trình tạo nên chiến lược đôi bên cùng có lợi, kết hợp các chức năng marketing chuẩn quốc tế với lợi ích của khách hàng nhằm mang lại giải pháp tăng trưởng tối ưu cho doanh nghiệp.",
    card1_title: "Mạng lưới chuyên sâu",
    card1_text: "Nhận kiến thức chuyên môn bạn cần để đưa ra quyết định marketing thông minh hơn cho sự tăng trưởng doanh nghiệp.",
    card2_badge: "Khám phá Meraki Talent →",
    card2_title: "Nhân sự linh hoạt",
    card2_text: "Tăng tốc với việc thực thi hiệu quả nhằm đạt được KPI marketing & kết quả chiến lược.",
    card3_title: "Sẵn sàng sử dụng",
    card3_text: "Tiết kiệm 80% thời gian & ngân sách với các giải pháp marketing công nghệ hàng đầu.",

    // Index Section 3: Grow Your Business
    grow_title: "Phát Triển Doanh Nghiệp Của Bạn",
    grow_desc: "Với sứ mệnh tạo tác động tích cực cho đất nước, chúng tôi truyền cảm hứng, kết nối và phát huy hai nguồn lực mạnh mẽ nhất - chuyển đổi doanh nghiệp và tài năng marketing toàn cầu.",

    // Index Carousel Slides
    grow_slide_0: "Nguồn nhân sự luôn sẵn sàng chuyển đổi & lực lượng tự quản lý tương lai để phát triển",
    grow_slide_1: "Tiết kiệm tới 80% ngân sách so với các phương thức marketing thông thường",
    grow_slide_2: "Phương pháp đã được chứng minh giúp tăng trưởng bứt phá & tối ưu hóa ROI",

    // Index Section 4: Testimonials
    testi_title: "Cảm Nhận Từ Khách Hàng",
    quote1: "\"Một trong những đơn vị cung cấp dịch vụ marketing chuyên nghiệp nhất với tư duy khởi nghiệp xuất sắc...\"",
    quote2: "\"Meraki đã mang lại những kết quả tuyệt vời trong thời gian rất ngắn. Tôi rất biết ơn vì điều đó.\"",
    quote3: "\"Tận tụy với khách hàng bằng thái độ tích cực và chuyên nghiệp...\"",

    // Index Section 5: FAQ & Founder
    founder_bio: "\"Là một giảng viên và Giám đốc Marketing với tư duy làm chủ và dịch vụ tận tâm, tôi đã cống hiến toàn bộ sự nghiệp để xây dựng thương hiệu và phát triển con người...\"",
    faq_title: "Câu hỏi thường gặp",
    faq1_q: "Meraki là công ty tư vấn hay một agency marketing?",
    faq1_a: "Meraki hoạt động như một đối tác nguồn lực marketing linh hoạt. Chúng tôi kết nối giữa tư vấn chiến lược và thực thi nhân sự chất lượng cao để tạo ra sự tăng trưởng bền vững cho doanh nghiệp bạn.",
    faq2_q: "Tôi có thể tuyển dụng nhân sự Meraki làm việc toàn thời gian không?",
    faq2_a: "Có. Chúng tôi cung cấp các hình thức nhân sự linh hoạt từ triển khai dự án đến cung ứng nhân sự toàn thời gian tùy theo từng giai đoạn phát triển của doanh nghiệp.",
    faq3_q: "Tôi có thể trao đổi trực tiếp với ai trên nền tảng này?",
    faq3_a: "Hoàn toàn có thể. Bạn có thể kết nối trực tiếp với đội ngũ lãnh đạo của chúng tôi bằng cách nhấp vào \"Hợp tác cùng chúng tôi\" hoặc đặt lịch trao đổi.",

    // Footer
    footer_btn1: "Hợp tác cùng chúng tôi",
    footer_btn2: "Tất cả thông tin khác",
    footer_portfolio: "Yêu cầu Hồ sơ năng lực",
    footer_rights: "© 2023 Meraki. Bảo lưu mọi quyền",

    // Meraki Talent Page
    talent_hero_pill: "MERAKI TALENT",
    talent_hero_title_html: "Nhân sự thế hệ mới<br><span class=\"highlight-text\">cho sự tăng trưởng bứt phá</span>",
    talent_hero_desc: "Doanh nghiệp kỳ vọng ở nhân sự trẻ nhiều hơn là kiến thức chuyên môn đơn thuần. Họ cần những nhà lãnh đạo tương lai có khả năng hiểu bối cảnh, tư duy độc lập, chủ động nhận trách nhiệm và tự tin đóng góp.",
    talent_hero_subbox_html: "<strong>Meraki Talent</strong> phát triển nhân sự trẻ thông qua các dự án thực tế, sự hướng dẫn từ các nhà sáng lập & chuyên gia cùng minh chứng năng lực rõ ràng.",
    talent_hero_cta: "Hợp tác cùng Meraki Talent",
    talent_expect_title: "Giá Trị Kỳ Vọng",
    talent_expect_desc: "Meraki Talent tạo nên lộ trình bài bản giúp nhân sự trẻ phát triển qua công việc thực tế. Doanh nghiệp tiếp cận nguồn nhân sự có độ sẵn sàng cao, năng lực rõ ràng và tư duy đồng hành cùng tổ chức.",
    talent_card1_title: "Dự Án Thực Tế",
    talent_card1_desc: "Phát triển năng lực qua các bài toán kinh doanh thực tế, trách nhiệm rõ ràng và kết quả đo lường được.",
    talent_card2_title: "Hướng Dẫn Từ Chuyên Gia",
    talent_card2_desc: "Rèn luyện tư duy chuyên nghiệp cùng các nhà sáng lập và chuyên gia giàu kinh nghiệm thực chiến.",
    talent_card3_title: "Minh Chứng Năng Lực",
    talent_card3_desc: "Theo dõi cách từng nhân sự tư duy, đóng góp và cải thiện qua kết quả dự án và đánh giá chuyên sâu.",
    methodology_tag: "PHƯƠNG PHÁP LUẬN",
    methodology_title: "Từ tiềm năng đến năng lực chuyên nghiệp",
    methodology_desc: "Meraki Talent phát triển nhân sự trẻ qua quy trình chuẩn hóa và nghiêm ngặt:",
    step1_name: "Đánh giá",
    step2_name: "Phát triển",
    step3_name: "Ứng dụng",
    step4_name: "Xem xét",
    step5_name: "Xác thực",
    process_note: "Mỗi nhân sự học cách hiểu bối cảnh, đưa ra quyết định đúng đắn, mang lại kết quả hữu ích và liên tục hoàn thiện qua phản hồi.",
    values_tag: "GIÁ TRỊ CỐT LÕI",
    values_title: "Tiêu Chuẩn Meraki",
    pillar1_title: "Tư duy rõ ràng",
    pillar1_desc: "Hiểu rõ bối cảnh, đặt câu hỏi đúng và xác định chính xác bài toán cần giải quyết.",
    pillar2_title: "Thực thi chủ động",
    pillar2_desc: "Biến định hướng thành kết quả thực tế với tinh thần trách nhiệm cao về tiến độ và chất lượng.",
    pillar3_title: "Trưởng thành qua thử thách",
    pillar3_desc: "Lắng nghe phản hồi, thích ứng nhanh chóng và liên tục nâng cao tiêu chuẩn công việc.",
    proof_tag: "NHÂN SỰ DỰA TRÊN MINH CHỨNG",
    proof_title: "Minh chứng vượt trên CV",
    proof_lead_html: "Mỗi Meraki Talent đều xây dựng một <strong>Hồ Sơ Minh Chứng Năng Lực</strong> dựa trên công việc thực tế.",
    proof_feat1_title: "Đóng Góp Dự Án",
    proof_feat1_desc: "Những gì nhân sự đã thực hiện, sáng tạo và chịu trách nhiệm trực tiếp.",
    proof_feat2_title: "Đánh Giá Năng Lực",
    proof_feat2_desc: "Cách nhân sự thể hiện qua tư duy, thực thi, giao tiếp và khả năng thích ứng.",
    proof_feat3_title: "Nhận Xét Từ Chuyên Gia",
    proof_feat3_desc: "Những quan sát và đánh giá trực tiếp từ các chuyên gia trong suốt lộ trình.",
    proof_quote_html: "CV chỉ thể hiện tiềm năng.<br><span class=\"quote-highlight\">Công việc thực tế mới chứng minh năng lực.</span>",
    proof_quote_btn: "Xem Hồ Sơ Nhân Sự",
    models_tag: "MÔ HÌNH HỢP TÁC",
    models_title: "Các Hình Thức Hợp Tác",
    way1_tag: "TUYỂN DỤNG TRỰC TIẾP",
    way1_title: "Tiếp Cận Nhân Sự Trẻ",
    way1_desc: "Kết nối với các nhân sự xuất sắc cho các vị trí thực tập, dự án và nhân viên chính thức.",
    way2_tag: "THỰC THI LINH HOẠT",
    way2_title: "Xây Dựng Đội Ngũ Agile",
    way2_desc: "Tập hợp đội ngũ nhân sự phù hợp xung quanh bài toán kinh doanh cụ thể dưới sự đồng hành của Meraki.",
    way3_tag: "NÂNG CẤP NĂNG LỰC",
    way3_title: "Phát Triển Đội Ngũ Nhân Sự Trẻ",
    way3_desc: "Củng cố năng lực, sự tự tin và tinh thần chủ động cho đội ngũ nhân sự hiện có của doanh nghiệp.",
    talk_to_us: "Trao Đổi Với Chúng Tôi",
    founders_title: "Được xây dựng bởi những chuyên gia giàu kinh nghiệm",
    founders_text1: "Meraki Talent được dẫn dắt bởi các nhà sáng lập và chuyên gia hàng đầu - những người đã trực tiếp xây dựng doanh nghiệp, điều hành đội ngũ và tạo ra kết quả thực tế.",
    founders_text2_html: "Là đơn vị <strong>Tốt nghiệp từ Founder Institute</strong>, Meraki mang tư duy khởi nghiệp, tiêu chuẩn chuyên nghiệp và bối cảnh kinh doanh thực tế vào mọi hành trình phát triển nhân sự.",
    value_title: "Phát triển doanh nghiệp song hành cùng nuôi dưỡng lãnh đạo tương lai",
    value_desc: "Doanh nghiệp tiếp cận nguồn nhân sự trẻ với minh chứng năng lực rõ ràng và mức độ sẵn sàng cao. Nhân sự trẻ được trao trách nhiệm thực sự, nhận sự hướng dẫn chuyên môn và tích lũy kinh nghiệm để trở thành các nhà lãnh đạo tương lai.",
    value_highlight: "Đó là cách Meraki Talent tạo ra giá trị bền vững cho cả hai bên.",
    cta_banner_title: "Sẵn sàng kết nối với thế hệ nhân sự tiếp theo?",
    cta_banner_desc: "Tiếp cận nguồn nhân sự trẻ được rèn luyện qua các dự án thực tế, sự hướng dẫn của chuyên gia và minh chứng năng lực rõ ràng.",
    cta_btn1: "Tiếp Cận Meraki Talent",
    cta_btn2: "Phát Triển Đội Ngũ Nhân Sự Trẻ",
    cta_btn3: "Đưa Ra Bài Toán Kinh Doanh",

    // Contact Modal
    modal_title: "Kết nối với Meraki Talent",
    modal_desc: "Hãy để lại thông tin hoặc yêu cầu của bạn, đội ngũ của chúng tôi sẽ phản hồi trong vòng 24 giờ.",
    label_name: "Họ và Tên",
    placeholder_name: "Nguyễn Văn A",
    label_email: "Email Công Việc",
    placeholder_email: "name@company.com",
    label_interest: "Meraki có thể hỗ trợ gì cho bạn?",
    opt_access: "Tiếp Cận Nhân Sự Trẻ",
    opt_agile: "Xây Dựng Đội Ngũ Agile",
    opt_develop: "Phát Triển Đội Ngũ Nhân Sự Trẻ",
    opt_challenge: "Đưa Ra Bài Toán Kinh Doanh",
    label_message: "Lời nhắn / Chi tiết",
    placeholder_message: "Mô tả mục tiêu đội ngũ hoặc dự án của bạn...",
    modal_submit: "Gửi Yêu Cầu",
    modal_submitted: "Cảm ơn bạn! Yêu cầu đã được ghi nhận ✓"
  },
  en: {
    // Navigation
    nav_subtitle: "Created by Heart.",
    talent_nav_back: "Back to Home",
    
    // Index Hero
    hero_title: "Agile Marketing Resources For Sustainable Growth",
    hero_desc: "SME owners and big corporate executives expect more of marketers than ever before. They expect marketers to go beyond and align with their top to bottom approach.",
    hero_cta: "Work With Us",
    marquee_label: "TRUSTED BY",

    // Index Section 2: What to Expect
    expect_title: "What to Expect",
    expect_desc: "We facilitate the process to create win-win strategies, aligning world-class marketing functions with consumer’s interests in mind and bringing forth the best possible growth solutions for businesses.",
    card1_title: "Insight network",
    card1_text: "Gain the expertise you need to make smarter marketing decisions for business growth",
    card2_badge: "Explore Meraki Talent →",
    card2_title: "Agile talent",
    card2_text: "Go ahead with efficient execution to achieve marketing KPIs & strategic results",
    card3_title: "Ready - to - use",
    card3_text: "Save 80% of your time & money with the most tech savvy marketing solutions",

    // Index Section 3: Grow Your Business
    grow_title: "Grow Your Business",
    grow_desc: "Dedicated to creating a positive impact to the country, we inspire, connect and leverage two of the most powerful forces - transforming businesses and global marketing talents.",

    // Index Carousel Slides
    grow_slide_0: "An always-on talent pool to transform & future self-managed manpower to grow",
    grow_slide_1: "Saving up to 80% budget in compared to normal marketing practices",
    grow_slide_2: "A proven method for significant growth & ROI optimization",

    // Index Section 4: Testimonials
    testi_title: "Love Notes",
    quote1: "\"One of the best professional marketing service providers with an entrepreneurial mindset approach...\"",
    quote2: "\"Meraki has delivered such amazing work in a very short time. I am very grateful for that.\"",
    quote3: "\"Dedicated to the clientele with a positive attitude...\"",

    // Index Section 5: FAQ & Founder
    founder_bio: "\"As a trainer and a CMO with a hospitality and ownership mindset, I’ve dedicated my whole career towards building brands and people...\"",
    faq_title: "Ask us anything",
    faq1_q: "Are you a consulting or marketing agency?",
    faq1_a: "Meraki operates as an agile marketing resource partner. We bridge strategic consulting with high-impact talent execution to build sustainable growth for your business.",
    faq2_q: "Can I hire a talent from Meraki for a full-time position?",
    faq2_a: "Yes. We offer flexible manpower arrangements ranging from agile project deployments to dedicated full-time talent placements depending on your company's growth phase.",
    faq3_q: "Is there anyone whom I can talk to on this “platform”?",
    faq3_a: "Absolutely. You can directly connect with our leadership team by clicking \"Work with us\" or scheduling an intro call via our contact options.",

    // Footer
    footer_btn1: "Work with us",
    footer_btn2: "Everything else",
    footer_portfolio: "Request Portfolio",
    footer_rights: "© 2023 Meraki. All Rights Reserved",

    // Meraki Talent Page
    talent_hero_pill: "MERAKI TALENT",
    talent_hero_title_html: "Emerging professionals<br><span class=\"highlight-text\">for meaningful growth</span>",
    talent_hero_desc: "Businesses expect more from young professionals than technical knowledge alone. They need future leaders who can understand context, think independently, take ownership and contribute with confidence.",
    talent_hero_subbox_html: "<strong>Meraki Talent</strong> develops emerging professionals through real projects, founder-expert guidance and visible evidence of capability.",
    talent_hero_cta: "Work with Meraki Talent",
    talent_expect_title: "What to Expect",
    talent_expect_desc: "Meraki Talent creates a structured journey where young professionals grow through meaningful business work. Businesses gain access to talent with stronger readiness, clearer capability and the mindset to grow with the organisation.",
    talent_card1_title: "Real Projects",
    talent_card1_desc: "Develop capability through real business challenges, clear responsibilities and practical outcomes.",
    talent_card2_title: "Founder-Expert Guidance",
    talent_card2_desc: "Build professional judgment with founders and practitioners who understand business, leadership and performance.",
    talent_card3_title: "Professional Evidence",
    talent_card3_desc: "See how each talent thinks, contributes and improves through project outcomes, expert feedback and capability assessment.",
    methodology_tag: "METHODOLOGY",
    methodology_title: "From potential to professional capability",
    methodology_desc: "Meraki Talent develops young professionals through a clear, rigorous process:",
    step1_name: "Assess",
    step2_name: "Develop",
    step3_name: "Apply",
    step4_name: "Review",
    step5_name: "Validate",
    process_note: "Each talent learns to understand the context, make informed decisions, deliver useful outcomes and improve through feedback.",
    values_tag: "OUR CORE VALUES",
    values_title: "The Meraki Standard",
    pillar1_title: "Think with clarity",
    pillar1_desc: "Understand the context, ask better questions and define the right problem.",
    pillar2_title: "Build with ownership",
    pillar2_desc: "Turn direction into useful outcomes with responsibility for progress and quality.",
    pillar3_title: "Grow through challenge",
    pillar3_desc: "Respond to feedback, adapt quickly and raise the standard of the work.",
    proof_tag: "EVIDENCE-BASED TALENT",
    proof_title: "Proof beyond the CV",
    proof_lead_html: "Every Meraki Talent develops a <strong>Professional Evidence Profile</strong> based on real work.",
    proof_feat1_title: "Project Contribution",
    proof_feat1_desc: "What the talent worked on, created and took responsibility for.",
    proof_feat2_title: "Capability Assessment",
    proof_feat2_desc: "How the talent performed across thinking, execution, communication and adaptability.",
    proof_feat3_title: "Founder-Expert Feedback",
    proof_feat3_desc: "What experienced professionals observed throughout the journey.",
    proof_quote_html: "A CV presents potential.<br><span class=\"quote-highlight\">Real work reveals capability.</span>",
    proof_quote_btn: "View a Talent Profile",
    models_tag: "COLLABORATION MODELS",
    models_title: "Ways to Work With Us",
    way1_tag: "DIRECT HIRING",
    way1_title: "Access Emerging Talent",
    way1_desc: "Meet selected young professionals for internships, projects and junior opportunities.",
    way2_tag: "AGILE EXECUTION",
    way2_title: "Build an Agile Team",
    way2_desc: "Bring together suitable talent around a defined business challenge, supported by Meraki.",
    way3_tag: "CAPABILITY UPGRADE",
    way3_title: "Develop Your Junior Team",
    way3_desc: "Strengthen the capability, confidence and ownership of young professionals already inside your organisation.",
    talk_to_us: "Talk to Us",
    founders_title: "Built by experienced hands",
    founders_text1: "Meraki Talent is guided by founders and domain experts who have built businesses, led teams and delivered real outcomes.",
    founders_text2_html: "As a <strong>Founder Institute Graduate</strong>, Meraki brings entrepreneurial thinking, professional standards and real business context into every talent journey.",
    value_title: "Grow your business while shaping future leaders",
    value_desc: "Businesses gain access to emerging professionals with clearer evidence of capability and stronger readiness to contribute. Young professionals gain meaningful responsibility, professional guidance and the experience needed to grow into future leaders.",
    value_highlight: "This is how Meraki Talent creates lasting value on both sides.",
    cta_banner_title: "Ready to meet your next generation of talent?",
    cta_banner_desc: "Access emerging professionals developed through real projects, founder-expert guidance and professional evidence.",
    cta_btn1: "Access Meraki Talent",
    cta_btn2: "Develop Your Junior Team",
    cta_btn3: "Bring a Business Challenge",

    // Contact Modal
    modal_title: "Connect with Meraki Talent",
    modal_desc: "Leave your details or business requirements and our team will respond within 24 hours.",
    label_name: "Full Name",
    placeholder_name: "Your Name",
    label_email: "Work Email",
    placeholder_email: "name@company.com",
    label_interest: "How can Meraki help?",
    opt_access: "Access Emerging Talent",
    opt_agile: "Build an Agile Team",
    opt_develop: "Develop Your Junior Team",
    opt_challenge: "Bring a Business Challenge",
    label_message: "Message / Details",
    placeholder_message: "Tell us about your team or project goals...",
    modal_submit: "Submit Request",
    modal_submitted: "Thank You! Request Received ✓"
  }
};

let currentLang = localStorage.getItem('meraki_lang') || 'en';

function initI18n() {
  applyLanguage(currentLang);

  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      if (selectedLang && selectedLang !== currentLang) {
        currentLang = selectedLang;
        localStorage.setItem('meraki_lang', currentLang);
        applyLanguage(currentLang);
      }
    });
  });
}

function applyLanguage(lang) {
  const dict = i18nData[lang] || i18nData['en'];
  document.documentElement.lang = lang;

  // 1. Update text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // 2. Update HTML inner elements
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // 3. Update Input placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // 4. Update Language switcher active buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // 5. Update dynamic components like Grow Carousel slide if active
  if (typeof updateGrowCarouselLanguage === 'function') {
    updateGrowCarouselLanguage();
  }
}

/* --------------------------------------------------------------------------
   1. Navbar Scroll Blur Effect
   -------------------------------------------------------------------------- */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* --------------------------------------------------------------------------
   2. Grow Your Business Carousel Slider
   -------------------------------------------------------------------------- */
let updateGrowCarouselLanguage = null;

function initGrowCarousel() {
  const growSlideImage = document.getElementById('growSlideImage');
  const growSlideText = document.getElementById('growSlideText');
  const growPrevBtn = document.getElementById('growPrevBtn');
  const growNextBtn = document.getElementById('growNextBtn');

  if (!growSlideImage || !growSlideText || !growPrevBtn || !growNextBtn) return;

  const slideImages = [
    'https://framerusercontent.com/modules/pYJPj1OylrdK6kAJICfv/MEOWDeKdhcXpIsL8IqmS/assets/dVPEMbmV4dzw3510RSnnigEdUIw.png',
    'https://framerusercontent.com/modules/pYJPj1OylrdK6kAJICfv/MEOWDeKdhcXpIsL8IqmS/assets/8VJtLycE853DLMnolrEztFi9cqM.png',
    'https://framerusercontent.com/modules/pYJPj1OylrdK6kAJICfv/MEOWDeKdhcXpIsL8IqmS/assets/1024/VoHy6DamcSsqUvXk2z7fBKPlZ8.png'
  ];

  let currentIndex = 0;

  function getSlideTextKey(index) {
    return `grow_slide_${index}`;
  }

  function updateSlide(index) {
    growSlideImage.style.opacity = '0';
    growSlideText.style.opacity = '0';

    setTimeout(() => {
      currentIndex = (index + slideImages.length) % slideImages.length;
      growSlideImage.src = slideImages[currentIndex];
      
      const dict = i18nData[currentLang] || i18nData['en'];
      const textKey = getSlideTextKey(currentIndex);
      growSlideText.textContent = dict[textKey] || '';

      growSlideImage.style.opacity = '1';
      growSlideText.style.opacity = '1';
    }, 250);
  }

  updateGrowCarouselLanguage = () => {
    const dict = i18nData[currentLang] || i18nData['en'];
    const textKey = getSlideTextKey(currentIndex);
    growSlideText.textContent = dict[textKey] || '';
  };

  growPrevBtn.addEventListener('click', () => {
    updateSlide(currentIndex - 1);
  });

  growNextBtn.addEventListener('click', () => {
    updateSlide(currentIndex + 1);
  });
}

/* --------------------------------------------------------------------------
   3. Testimonials Carousel Slider
   -------------------------------------------------------------------------- */
function initTestimonialSlider() {
  const testiTrack = document.getElementById('testiTrack');
  const testiPrev = document.getElementById('testiPrev');
  const testiNext = document.getElementById('testiNext');

  if (!testiTrack || !testiPrev || !testiNext) return;

  const cardWidth = 480; // Card width + gap
  let currentScroll = 0;

  testiNext.addEventListener('click', () => {
    const maxScroll = testiTrack.scrollWidth - testiTrack.clientWidth;
    currentScroll = Math.min(currentScroll + cardWidth, maxScroll);
    testiTrack.style.transform = `translateX(-${currentScroll}px)`;
  });

  testiPrev.addEventListener('click', () => {
    currentScroll = Math.max(currentScroll - cardWidth, 0);
    testiTrack.style.transform = `translateX(-${currentScroll}px)`;
  });
}

/* --------------------------------------------------------------------------
   4. FAQ Accordion Toggle
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all active items
      accordionItems.forEach(i => i.classList.remove('active'));

      // If it wasn't active before, open it
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. Scroll Entrance Animations
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.expect-card, .founder-card, .faq-accordion-box, .grow-left, .grow-right, .animate-on-scroll');

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  animatedElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   6. Contact Modal Handler for Meraki Talent Sub-Page
   -------------------------------------------------------------------------- */
function initContactModal() {
  const contactModal = document.getElementById('contactModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const triggerBtns = document.querySelectorAll('.trigger-contact');
  const contactForm = document.getElementById('talentContactForm');

  if (!contactModal) return;

  function openModal() {
    contactModal.classList.add('active');
    contactModal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    contactModal.classList.remove('active');
    contactModal.setAttribute('aria-hidden', 'true');
  }

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  const overlay = contactModal.querySelector('.modal-overlay');
  if (overlay) {
    overlay.addEventListener('click', closeModal);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const dict = i18nData[currentLang] || i18nData['en'];

      if (submitBtn) {
        submitBtn.innerHTML = dict['modal_submitted'];
        submitBtn.style.background = '#4c8f71';
        submitBtn.style.color = '#fff';
      }
      setTimeout(() => {
        closeModal();
        if (submitBtn) {
          submitBtn.innerHTML = `${dict['modal_submit']} <span class="orange-indicator"></span>`;
          submitBtn.style.background = 'var(--color-orange)';
          submitBtn.style.color = '#000';
          contactForm.reset();
        }
      }, 1800);
    });
  }
}
