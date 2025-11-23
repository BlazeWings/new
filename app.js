// 配置
const CONFIG = {
    API_KEY: 'sk-QyGX8xsz9qqSTcVQeCQNIWEmha3rnf2cldKS1rteEMLDoYwI',
    API_URL: 'https://api.moonshot.cn/v1/chat/completions',
    MODEL: 'moonshot-v1-8k',
    GROUP_SIZE: 10
};

// 增强单词库（含难度、分类、标签）
const WORD_DATABASE = [
    // 日常用语 (Easy)
    { word: 'welcome', pronunciation: '/ˈwelkəm/', meaning: '欢迎', example: 'Welcome to our AI English Learning Center!', difficulty: 'easy', category: 'daily', tags: ['greeting'] },
    { word: 'hello', pronunciation: '/həˈləʊ/', meaning: '你好', example: 'Hello, how are you today?', difficulty: 'easy', category: 'daily', tags: ['greeting'] },
    { word: 'friend', pronunciation: '/frend/', meaning: '朋友', example: 'My friend is very kind.', difficulty: 'easy', category: 'daily', tags: ['people'] },
    { word: 'family', pronunciation: '/ˈfæməli/', meaning: '家庭', example: 'I love my family very much.', difficulty: 'easy', category: 'daily', tags: ['people'] },
    { word: 'food', pronunciation: '/fuːd/', meaning: '食物', example: 'This food is delicious!', difficulty: 'easy', category: 'daily', tags: ['life'] },
    
    // 日常用语 (Medium)
    { word: 'challenge', pronunciation: '/ˈtʃælɪndʒ/', meaning: '挑战', example: 'Learning English is a challenge, but you can do it!', difficulty: 'medium', category: 'daily', tags: ['concept'] },
    { word: 'opportunity', pronunciation: '/ˌɒpəˈtjuːnəti/', meaning: '机会', example: 'Every conversation is an opportunity to learn.', difficulty: 'medium', category: 'daily', tags: ['concept'] },
    { word: 'improve', pronunciation: '/ɪmˈpruːv/', meaning: '提高；改善', example: 'Your English will improve quickly with AI help.', difficulty: 'medium', category: 'daily', tags: ['verb'] },
    { word: 'practice', pronunciation: '/ˈpræktɪs/', meaning: '练习；实践', example: 'Practice makes perfect.', difficulty: 'medium', category: 'daily', tags: ['verb'] },
    { word: 'conversation', pronunciation: '/ˌkɒnvəˈseɪʃn/', meaning: '对话；交谈', example: 'Let\'s have a conversation in English.', difficulty: 'medium', category: 'daily', tags: ['communication'] },
    
    // 商务英语
    { word: 'meeting', pronunciation: '/ˈmiːtɪŋ/', meaning: '会议', example: 'We have a meeting at 2 PM.', difficulty: 'easy', category: 'business', tags: ['work'] },
    { word: 'deadline', pronunciation: '/ˈdedlaɪn/', meaning: '截止日期', example: 'The deadline for this project is Friday.', difficulty: 'medium', category: 'business', tags: ['work'] },
    { word: 'negotiate', pronunciation: '/nɪˈɡəʊʃieɪt/', meaning: '谈判；协商', example: 'We need to negotiate the contract terms.', difficulty: 'hard', category: 'business', tags: ['work'] },
    { word: 'presentation', pronunciation: '/ˌpreznˈteɪʃn/', meaning: '演示；报告', example: 'She gave an excellent presentation.', difficulty: 'medium', category: 'business', tags: ['work'] },
    
    // 旅游英语
    { word: 'reservation', pronunciation: '/ˌrezəˈveɪʃn/', meaning: '预订', example: 'I have a reservation for tonight.', difficulty: 'medium', category: 'travel', tags: ['travel'] },
    { word: 'passport', pronunciation: '/ˈpɑːspɔːt/', meaning: '护照', example: 'Please show your passport.', difficulty: 'easy', category: 'travel', tags: ['travel'] },
    { word: 'itinerary', pronunciation: '/aɪˈtɪnərəri/', meaning: '行程表', example: 'Our itinerary includes three cities.', difficulty: 'hard', category: 'travel', tags: ['travel'] },
    { word: 'sightseeing', pronunciation: '/ˈsaɪtsiːɪŋ/', meaning: '观光', example: 'We went sightseeing in Paris.', difficulty: 'medium', category: 'travel', tags: ['travel'] },
    
    // 学术英语
    { word: 'research', pronunciation: '/rɪˈsɜːtʃ/', meaning: '研究', example: 'She is conducting important research.', difficulty: 'medium', category: 'academic', tags: ['study'] },
    { word: 'hypothesis', pronunciation: '/haɪˈpɒθəsɪs/', meaning: '假设', example: 'Our hypothesis needs to be tested.', difficulty: 'hard', category: 'academic', tags: ['study'] },
    { word: 'analyze', pronunciation: '/ˈænəlaɪz/', meaning: '分析', example: 'We need to analyze the data carefully.', difficulty: 'medium', category: 'academic', tags: ['study'] },
    { word: 'conference', pronunciation: '/ˈkɒnfərəns/', meaning: '学术会议', example: 'He presented at an international conference.', difficulty: 'medium', category: 'academic', tags: ['study'] },
    
    // 科技英语
    { word: 'algorithm', pronunciation: '/ˈælɡərɪðəm/', meaning: '算法', example: 'This algorithm is very efficient.', difficulty: 'hard', category: 'technology', tags: ['tech'] },
    { word: 'innovation', pronunciation: '/ˌɪnəˈveɪʃn/', meaning: '创新', example: 'Innovation drives progress.', difficulty: 'medium', category: 'technology', tags: ['tech'] },
    { word: 'digital', pronunciation: '/ˈdɪdʒɪtl/', meaning: '数字的', example: 'We live in a digital age.', difficulty: 'easy', category: 'technology', tags: ['tech'] },
    { word: 'artificial', pronunciation: '/ˌɑːtɪˈfɪʃl/', meaning: '人工的', example: 'Artificial intelligence is developing rapidly.', difficulty: 'medium', category: 'technology', tags: ['tech'] },
    
    // 高级词汇
    { word: 'achieve', pronunciation: '/əˈtʃiːv/', meaning: '实现；达到', example: 'You can achieve your goals with practice.', difficulty: 'medium', category: 'daily', tags: ['verb'] },
    { word: 'understand', pronunciation: '/ˌʌndəˈstænd/', meaning: '理解', example: 'I can understand you better now.', difficulty: 'easy', category: 'daily', tags: ['verb'] },
    { word: 'remember', pronunciation: '/rɪˈmembə(r)/', meaning: '记住', example: 'Remember to review your words daily.', difficulty: 'easy', category: 'daily', tags: ['verb'] },
    { word: 'progress', pronunciation: '/ˈprəʊɡres/', meaning: '进步；进展', example: 'You are making great progress!', difficulty: 'medium', category: 'daily', tags: ['concept'] },
    { word: 'confident', pronunciation: '/ˈkɒnfɪdənt/', meaning: '自信的', example: 'Be confident when you speak English.', difficulty: 'medium', category: 'daily', tags: ['adjective'] },
    { word: 'vocabulary', pronunciation: '/vəˈkæbjələri/', meaning: '词汇；词汇量', example: 'Building vocabulary is essential.', difficulty: 'hard', category: 'daily', tags: ['concept'] },
    { word: 'pronunciation', pronunciation: '/prəˌnʌnsiˈeɪʃn/', meaning: '发音', example: 'Good pronunciation helps communication.', difficulty: 'hard', category: 'daily', tags: ['concept'] },
    { word: 'grammar', pronunciation: '/ˈɡræmə(r)/', meaning: '语法', example: 'Grammar rules help structure sentences.', difficulty: 'medium', category: 'daily', tags: ['concept'] },
    { word: 'fluent', pronunciation: '/ˈfluːənt/', meaning: '流利的', example: 'She speaks fluent English.', difficulty: 'hard', category: 'daily', tags: ['adjective'] }
];

// 主应用类
class EnglishLearningApp {
    constructor() {
        this.currentGroup = [];
        this.currentGroupIndex = 0;
        this.currentGroupWords = [];
        this.filteredWords = [...WORD_DATABASE];
        this.currentReviewQueue = [];
        this.currentReviewWord = null;
        this.reviewStats = { correct: 0, incorrect: 0 };
        this.settings = this.loadSettings();
        this.chart = null;
        
        // 初始化语音
        this.initSpeech();
        this.initIndexedDB();
        this.init();
    }

    // 初始化设置
    loadSettings() {
        const saved = localStorage.getItem('appSettings');
        return saved ? JSON.parse(saved) : {
            dailyTarget: 20,
            reminderTime: '20:00',
            autoAdjustSRS: true,
            autoSpeak: true,
            speechRate: 0.85,
            speechAccent: 'US'
        };
    }

    saveSettings() {
        localStorage.setItem('appSettings', JSON.stringify(this.settings));
    }

    // 初始化语音API
    initSpeech() {
        if ('speechSynthesis' in window) {
            const loadVoices = () => {
                this.voices = window.speechSynthesis.getVoices();
                console.log('✅ 语音库已加载:', this.voices.length, '个语音');
            };
            window.speechSynthesis.onvoiceschanged = loadVoices;
            loadVoices();
        } else {
            console.warn('❌ 不支持Web Speech API');
        }
    }

    // 初始化IndexedDB
    initIndexedDB() {
        const request = indexedDB.open('EnglishLearningDB', 1);
        request.onerror = () => console.error('❌ IndexedDB打开失败');
        request.onsuccess = () => {
            this.db = request.result;
            console.log('✅ IndexedDB已连接');
        };
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('words')) {
                const store = db.createObjectStore('words', { keyPath: 'word' });
                store.createIndex('category', 'category', { unique: false });
                store.createIndex('difficulty', 'difficulty', { unique: false });
                store.createIndex('nextReview', 'nextReview', { unique: false });
                store.createIndex('reviewCount', 'reviewCount', { unique: false });
                console.log('✅ IndexedDB对象存储已创建');
            }
        };
    }

    // 初始化应用
    async init() {
        await this.loadAllWords();
        this.updateDailyProgress();
        this.generateGroupProgress();
        this.bindEvents();
        this.initChart();
        console.log('🎯 AI英语学习应用已启动');
    }

    // 绑定事件
    bindEvents() {
        // 分类选择器
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.generateNewGroup(e.target.dataset.category);
            });
        });

        // 口音选择
        document.querySelectorAll('.accent-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.accent-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.settings.speechAccent = e.target.dataset.accent;
                this.saveSettings();
            });
        });

        // 语速控制
        const speedSlider = document.getElementById('speech-rate');
        const speedDisplay = document.getElementById('speed-display');
        speedSlider.addEventListener('input', (e) => {
            this.settings.speechRate = parseFloat(e.target.value);
            speedDisplay.textContent = `${e.target.value}x`;
            this.saveSettings();
        });

        // 单词库搜索
        const searchBox = document.getElementById('library-search');
        if (searchBox) {
            searchBox.addEventListener('input', () => this.filterLibrary());
        }

        // 键盘事件
        const chatInput = document.getElementById('chat-input');
        if (chatInput) {
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.sendMessage();
            });
        }

        // 字典查询输入框
        const dictSearch = document.getElementById('dictionary-search');
        if (dictSearch) {
            dictSearch.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.queryDictionary();
            });
        }
    }

    // IndexedDB操作
    async saveWordToDB(wordData) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['words'], 'readwrite');
            const store = transaction.objectStore('words');
            const request = store.put(wordData);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }

    async getWordFromDB(word) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['words'], 'readonly');
            const store = transaction.objectStore('words');
            const request = store.get(word);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    async getAllWordsFromDB() {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['words'], 'readonly');
            const store = transaction.objectStore('words');
            const request = store.getAll();
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    async loadAllWords() {
        try {
            this.allWords = await this.getAllWordsFromDB();
            if (this.allWords.length === 0) {
                // 首次使用，初始化数据库
                for (const word of WORD_DATABASE) {
                    await this.saveWordToDB({
                        ...word,
                        status: 'new',
                        learnedAt: null,
                        reviewCount: 0,
                        nextReview: null,
                        easeFactor: 2.5,
                        difficultyFactor: 1.5,
                        groupIndex: null,
                        reviewHistory: []
                    });
                }
                this.allWords = await this.getAllWordsFromDB();
            }
        } catch (error) {
            console.error('❌ 加载单词失败:', error);
        }
    }

    // 生成新一组单词
    async generateNewGroup(category = 'daily') {
        const loadingEl = document.getElementById('group-loading');
        const errorEl = document.getElementById('group-error');
        
        loadingEl.style.display = 'block';
        errorEl.style.display = 'none';

        try {
            // 获取用户学习数据
            const learnedWords = this.allWords.filter(w => w.status !== 'new');
            const categoryProgress = this.calculateCategoryProgress();
            
            // 调用AI推荐
            const prompt = `作为AI英语学习助手，请为用户推荐一组10个${category}分类的英语单词。要求：
1. 避开已学单词：${learnedWords.map(w => w.word).join(', ')}
2. 根据分类进度：${JSON.stringify(categoryProgress)}，推荐薄弱分类
3. 混合难度：40%初级，40%中级，20%高级
4. 适合当前学习阶段

返回JSON格式：
{
  "words": [
    {
      "word": "单词",
      "reason": "推荐理由"
    }
  ],
  "focusCategory": "重点分类"
}`;

            let recommendedWords;
            try {
                const response = await this.callKimiAPI([
                    { role: 'system', content: '你是一个专业的AI英语学习助手，只返回JSON格式数据。' },
                    { role: 'user', content: prompt }
                ]);
                
                const jsonMatch = response.match(/\{[\s\S]*\}/);
                if (jsonMatch) {
                    recommendedWords = JSON.parse(jsonMatch[0]);
                } else {
                    throw new Error('无法解析AI响应');
                }
            } catch (e) {
                console.warn('AI推荐失败，使用备用算法:', e);
                recommendedWords = this.fallbackGroupRecommendation(category);
            }

            // 创建新组
            this.currentGroup = [];
            this.currentGroupIndex = 1;
            
            for (const item of recommendedWords.words) {
                let wordData = this.allWords.find(w => w.word === item.word);
                if (!wordData) {
                    const baseWord = WORD_DATABASE.find(w => w.word === item.word);
                    if (baseWord) {
                        wordData = {
                            ...baseWord,
                            status: 'new',
                            learnedAt: null,
                            reviewCount: 0,
                            nextReview: null,
                            easeFactor: 2.5,
                            difficultyFactor: 1.5,
                            groupIndex: 1,
                            reviewHistory: []
                        };
                        await this.saveWordToDB(wordData);
                    }
                }
                
                if (wordData) {
                    this.currentGroup.push({
                        ...wordData,
                        reason: item.reason,
                        groupIndex: this.currentGroupIndex
                    });
                }
            }

            this.currentGroupWords = [...this.currentGroup];
            this.displayCurrentWord();
            this.generateGroupProgress();
            this.updateDailyProgress();
            
            this.showNotification(`✅ 已生成第${this.currentGroupIndex}组单词`, 'success');
            
        } catch (error) {
            errorEl.textContent = `生成单词组失败：${error.message}`;
            errorEl.style.display = 'block';
        } finally {
            loadingEl.style.display = 'none';
        }
    }

    // 备用组推荐算法
    fallbackGroupRecommendation(category) {
        const availableWords = this.allWords.filter(w => 
            w.category === category && w.status === 'new'
        );
        
        const selectedWords = [];
        const difficulties = ['easy', 'medium', 'hard'];
        const ratios = [0.4, 0.4, 0.2];
        
        for (let i = 0; i < difficulties.length; i++) {
            const difficultyWords = availableWords.filter(w => w.difficulty === difficulties[i]);
            const count = Math.ceil(CONFIG.GROUP_SIZE * ratios[i]);
            selectedWords.push(...difficultyWords.slice(0, count));
        }
        
        return {
            words: selectedWords.slice(0, CONFIG.GROUP_SIZE).map(w => ({
                word: w.word,
                reason: `${category}分类，${w.difficulty}难度`
            })),
            focusCategory: category
        };
    }

    // 显示当前单词
    displayCurrentWord() {
        const word = this.currentGroupWords[0];
        if (!word) return;

        // 更新UI
        document.getElementById('current-word-text').textContent = word.word;
        document.getElementById('current-word-pronunciation').textContent = word.pronunciation;
        document.getElementById('current-word-meaning').textContent = word.meaning;
        document.getElementById('example-text').textContent = word.example;
        document.getElementById('difficulty-badge').textContent = this.getDifficultyText(word.difficulty);
        document.getElementById('difficulty-badge').className = `difficulty-badge difficulty-${word.difficulty}`;
        document.getElementById('category-badge').textContent = this.getCategoryText(word.category);
        document.getElementById('group-badge').textContent = `第${word.groupIndex || 1}组`;
        
        // 发音
        setTimeout(() => this.speakCurrentWord(), 300);
    }

    // 生成组进度指示器
    generateGroupProgress() {
        const container = document.getElementById('group-progress-indicator');
        container.innerHTML = '';
        
        for (let i = 0; i < CONFIG.GROUP_SIZE; i++) {
            const circle = document.createElement('div');
            circle.className = 'progress-circle';
            circle.textContent = i + 1;
            
            const word = this.currentGroup[i];
            if (word) {
                if (word.status === 'mastered') {
                    circle.classList.add('completed');
                } else if (i === this.currentGroupWords.findIndex(w => w.word === this.currentGroupWords[0].word)) {
                    circle.classList.add('current');
                }
            }
            
            circle.addEventListener('click', () => this.jumpToWord(i));
            container.appendChild(circle);
        }
    }

    // 跳转到指定单词
    jumpToWord(index) {
        if (this.currentGroup[index]) {
            this.currentGroupWords = this.currentGroup.slice(index);
            this.displayCurrentWord();
            this.generateGroupProgress();
        }
    }

    // 标记单词状态
    async markWordStatus(status) {
        const word = this.currentGroupWords[0];
        if (!word) return;

        word.status = status === 'known' ? 'learning' : 'new';
        word.learnedAt = new Date().toISOString();
        
        await this.saveWordToDB(word);
        
        if (status === 'known') {
            this.showNotification(`✅ 已学会 "${word.word}"`, 'success');
            // 添加到复习计划
            this.addToReviewQueue(word);
        } else {
            this.showNotification(`"${word.word}" 已标记为加强练习`, 'warning');
            // 添加到困难箱（Leitner系统）
            this.addToDifficultyBox(word);
        }

        this.nextWordInGroup();
    }

    // 下一单词
    nextWordInGroup() {
        this.currentGroupWords.shift();
        if (this.currentGroupWords.length === 0) {
            this.showNotification('🎉 本组学习完成！', 'success');
            this.completeCurrentGroup();
        } else {
            this.displayCurrentWord();
            this.generateGroupProgress();
        }
    }

    // 完成当前组
    async completeCurrentGroup() {
        this.currentGroup.forEach(word => {
            if (word.status === 'known' || word.status === 'learning') {
                word.groupCompleted = true;
            }
        });
        
        // 更新数据库
        for (const word of this.currentGroup) {
            await this.saveWordToDB(word);
        }
        
        // 更新进度
        this.updateDailyProgress();
        
        // 自动生成下一组
        setTimeout(() => {
            if (confirm('是否立即生成下一组单词？')) {
                this.generateNewGroup();
            }
        }, 1000);
    }

    // 发音功能
    speakCurrentWord() {
        const word = this.currentGroupWords[0];
        if (!word) return;
        this.speakWord(word.word);
    }

    speakExample() {
        const example = document.getElementById('example-text').textContent;
        this.speakWord(example);
    }

    speakWord(text) {
        if (!('speechSynthesis' in window)) return;
        
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = this.settings.speechAccent === 'US' ? 'en-US' : 'en-GB';
        utterance.rate = this.settings.speechRate;
        utterance.pitch = 1.0;
        
        // 选择语音
        const voice = this.voices.find(v => 
            v.lang && v.lang.toLowerCase().includes(this.settings.speechAccent.toLowerCase())
        );
        if (voice) utterance.voice = voice;
        
        window.speechSynthesis.speak(utterance);
    }

    // AI对话
    async sendMessage() {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();
        if (!message) return;

        this.addChatMessage(message, 'user');
        input.value = '';

        const loadingEl = document.getElementById('ai-loading');
        loadingEl.style.display = 'block';

        try {
            // 获取已学单词列表
            const learnedWords = this.allWords.filter(w => 
                w.status !== 'new' && w.reviewCount > 0
            ).slice(-20).map(w => w.word);

            const response = await this.callKimiAPI([
                {
                    role: 'system',
                    content: `你是一个友好的AI英语对话伙伴。用户正在学习英语，请遵循：
                    1. 使用用户已学单词：${learnedWords.join(', ')}
                    2. 保持对话简单易懂
                    3. 温和纠正语法错误
                    4. 鼓励用户练习
                    5. 回复简短（不超过2句）`
                },
                { role: 'user', content: message }
            ]);

            this.addChatMessage(response, 'ai');
            
            if (this.settings.autoSpeak) {
                setTimeout(() => this.speakWord(response), 500);
            }
        } catch (error) {
            this.showNotification(`对话失败：${error.message}`, 'error');
        } finally {
            loadingEl.style.display = 'none';
        }
    }

    addChatMessage(content, sender) {
        const container = document.getElementById('chat-container');
        const messageEl = document.createElement('div');
        messageEl.className = `message ${sender}`;
        messageEl.textContent = content;
        container.appendChild(messageEl);
        container.scrollTop = container.scrollHeight;
    }

    // AI小说生成
    async generateStory() {
        const learnedWords = this.allWords.filter(w => w.status !== 'new').slice(-10);
        await this.generateStoryFromWords(learnedWords, '今日所学');
    }

    async generateStoryFromCurrentGroup() {
        await this.generateStoryFromWords(this.currentGroup, '本组');
    }

    async generateStoryFromWords(words, source) {
        const loadingEl = document.getElementById('ai-loading');
        const contentEl = document.getElementById('story-content');
        
        loadingEl.style.display = 'block';

        try {
            const wordList = words.map(w => `${w.word}(${w.meaning})`).join(', ');
            
            const prompt = `你是一名英语教育专家。请根据以下${source}单词创作一段200字左右的短文：
要求：
1. 必须包含所有提供的单词（已标注中文）
2. 情节连贯有故事性
3. 人物对话自然
4. 难度适中（B1-B2水平）

单词：${wordList}

请生成HTML格式，重点单词用<span class="story-word">包裹，方便点击发音。`;

            const response = await this.callKimiAPI([
                { role: 'system', content: '返回HTML格式，重点词用<span class="story-word">包裹' },
                { role: 'user', content: prompt }
            ]);

            contentEl.innerHTML = response;
            
            // 绑定点击事件
            contentEl.querySelectorAll('.story-word').forEach(el => {
                el.addEventListener('click', () => this.speakWord(el.textContent));
            });

        } catch (error) {
            contentEl.innerHTML = `<p style="color: #ef476f;">生成失败：${error.message}</p>`;
        } finally {
            loadingEl.style.display = 'none';
        }
    }

    // AI词典查询
    async queryDictionary() {
        const input = document.getElementById('dictionary-search');
        const word = input.value.trim() || this.currentGroupWords[0]?.word;
        
        if (!word) {
            this.showNotification('请输入要查询的单词', 'warning');
            return;
        }

        const loadingEl = document.getElementById('ai-loading');
        const resultEl = document.getElementById('dictionary-result');
        
        loadingEl.style.display = 'block';

        try {
            const prompt = `详细解释英语单词"${word}"：
1. 词性和详细释义
2. 使用场景和语境
3. 3-5个实用例句
4. 常见搭配和短语
5. 同义词和反义词
6. 记忆技巧

用中文解释，格式清晰。`;

            const response = await this.callKimiAPI([
                { role: 'system', content: '你是英语教育专家，提供详细准确的单词解析' },
                { role: 'user', content: prompt }
            ]);

            resultEl.innerHTML = `
                <h4>📚 ${word}</h4>
                <div style="white-space: pre-line; line-height: 1.8;">${response}</div>
                <button class="btn-speech" style="margin-top: 15px;" onclick="app.speakWord('${word}')">🔊 发音</button>
            `;
            
            // 保存查询记录
            const wordData = this.allWords.find(w => w.word === word);
            if (wordData) {
                wordData.lastQueried = new Date().toISOString();
                await this.saveWordToDB(wordData);
            }

        } catch (error) {
            resultEl.innerHTML = `<p style="color: #ef476f;">查询失败：${error.message}</p>`;
        } finally {
            loadingEl.style.display = 'none';
        }
    }

    // 智能复习系统
    async startReviewSession() {
        const now = new Date();
        const dueWords = this.allWords.filter(w => 
            w.nextReview && new Date(w.nextReview) <= now
        );

        if (dueWords.length === 0) {
            this.showNotification('暂无待复习单词！', 'info');
            return;
        }

        this.currentReviewQueue = this.shuffleArray([...dueWords]);
        this.reviewStats = { correct: 0, incorrect: 0 };
        
        document.getElementById('review-queue-count').textContent = this.currentReviewQueue.length;
        this.showSection('smart-review');
        this.nextReviewWord();
    }

    nextReviewWord() {
        const cardEl = document.getElementById('review-card');
        const emptyEl = document.getElementById('review-empty');
        
        if (this.currentReviewQueue.length === 0) {
            cardEl.style.display = 'none';
            emptyEl.style.display = 'block';
            this.showReviewStats();
            return;
        }

        cardEl.style.display = 'block';
        emptyEl.style.display = 'none';
        this.currentReviewWord = this.currentReviewQueue.shift();

        this.generateReviewQuestion();
    }

    async generateReviewQuestion() {
        const word = this.currentReviewWord;
        const optionsEl = document.getElementById('review-options');
        const feedbackEl = document.getElementById('review-feedback');
        
        feedbackEl.style.display = 'none';
        optionsEl.innerHTML = '';

        try {
            // 生成干扰项
            const prompt = `为单词"${word.word}"生成选择题选项：
正确答案：${word.meaning}
请生成3个中文干扰项，要求与正确答案在词义、词性或拼写上相似，具有迷惑性。
返回JSON：{"correct":"正确释义","distractors":["干扰1","干扰2","干扰3"]}`;

            const response = await this.callKimiAPI([
                { role: 'system', content: '只返回JSON格式' },
                { role: 'user', content: prompt }
            ]);

            let questionData;
            try {
                const jsonMatch = response.match(/\{[\s\S]*\}/);
                questionData = JSON.parse(jsonMatch[0]);
            } catch {
                questionData = this.fallbackQuestion(word);
            }

            // 打乱选项
            const allOptions = [questionData.correct, ...questionData.distractors];
            this.shuffledOptions = this.shuffleArray(allOptions);
            this.correctAnswer = questionData.correct;

            // 显示题目
            document.getElementById('review-question-text').textContent = `选择 "${word.word}" 的正确释义`;
            document.getElementById('review-count').textContent = word.reviewCount || 0;
            document.getElementById('ease-factor').textContent = word.easeFactor || 2.5;
            
            if (word.nextReview) {
                const nextDate = new Date(word.nextReview).toLocaleDateString();
                document.getElementById('next-review-date').textContent = nextDate;
            }

            // 显示选项
            this.shuffledOptions.forEach((option, index) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.textContent = option;
                btn.onclick = () => this.selectOption(index);
                optionsEl.appendChild(btn);
            });

        } catch (error) {
            console.error('生成题目失败:', error);
            this.fallbackReviewQuestion(word);
        }
    }

    fallbackQuestion(word) {
        const distractors = this.allWords
            .filter(w => w.word !== word.word && w.category === word.category)
            .slice(0, 3)
            .map(w => w.meaning);
        
        return {
            correct: word.meaning,
            distractors: distractors.length >= 3 ? distractors : ['相似词义', '相近拼写', '易混淆词']
        };
    }

    selectOption(selectedIndex) {
        const word = this.currentReviewWord;
        const isCorrect = this.shuffledOptions[selectedIndex] === this.correctAnswer;
        
        // 高亮选项
        const options = document.querySelectorAll('.option-btn');
        options.forEach((btn, index) => {
            btn.classList.add('disabled');
            if (this.shuffledOptions[index] === this.correctAnswer) {
                btn.classList.add('correct');
            } else if (index === selectedIndex && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });

        // 显示反馈
        this.showReviewFeedback(isCorrect);
        
        // 更新统计数据
        if (isCorrect) {
            this.reviewStats.correct++;
        } else {
            this.reviewStats.incorrect++;
        }

        // 更新SRS
        this.updateSRS(word, isCorrect);
        
        // 显示加强复习提示（如果错误）
        if (!isCorrect) {
            this.showIntensiveReviewHint(word);
        }
    }

    showReviewFeedback(isCorrect) {
        const feedbackEl = document.getElementById('review-feedback');
        const contentEl = document.getElementById('feedback-content');
        
        feedbackEl.style.display = 'block';
        feedbackEl.className = `review-feedback ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`;
        
        contentEl.innerHTML = isCorrect ? 
            '✅ 正确！记忆效果不错' : 
            `❌ 错误。正确答案是：${this.correctAnswer}`;
    }

    showIntensiveReviewHint(word) {
        const hintEl = document.getElementById('intensive-hint');
        const contentEl = document.getElementById('intensive-hint-content');
        
        hintEl.style.display = 'block';
        contentEl.innerHTML = `
            <strong>联想记忆：</strong>"${word.word}" 的 "${word.pronunciation}" 发音类似...<br>
            <strong>例句强化：</strong>${word.example}<br>
            <strong>24小时后强制复习</strong>
        `;
    }

    async updateSRS(word, isCorrect) {
        // Leitner加强复习系统
        if (!isCorrect) {
            word.difficultyBox = 'hard'; // 移入困难箱
            word.nextReview = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(); // 24小时后
        } else {
            // SM-2算法
            word.reviewCount = (word.reviewCount || 0) + 1;
            
            // 计算间隔（天）
            let interval;
            if (word.reviewCount === 1) interval = 1;
            else if (word.reviewCount === 2) interval = 3;
            else {
                interval = Math.round(word.easeFactor * (word.reviewCount - 1) * word.difficultyFactor);
            }
            
            // 计算下次复习时间
            const nextReview = new Date();
            nextReview.setDate(nextReview.getDate() + interval);
            word.nextReview = nextReview.toISOString();
            
            // 更新难度系数
            if (this.settings.autoAdjustSRS) {
                if (isCorrect) {
                    word.easeFactor = Math.min(word.easeFactor + 0.1, 3.0);
                } else {
                    word.easeFactor = Math.max(word.easeFactor - 0.2, 1.3);
                }
            }
            
            // 检查是否掌握
            if (word.reviewCount >= 5 && word.easeFactor >= 2.5) {
                word.status = 'mastered';
                this.showNotification(`🎉 "${word.word}" 已掌握！`, 'success');
            }
        }
        
        // 保存到数据库
        await this.saveWordToDB(word);
    }

    rateReview(rating) {
        if (!this.currentReviewWord) return;
        
        if (rating === 'easy') {
            this.currentReviewWord.easeFactor = Math.min(this.currentReviewWord.easeFactor + 0.15, 3.0);
        } else if (rating === 'hard') {
            this.currentReviewWord.easeFactor = Math.max(this.currentReviewWord.easeFactor - 0.2, 1.3);
        }
        
        this.saveWordToDB(this.currentReviewWord);
        this.nextReviewWord();
    }

    showReviewStats() {
        const total = this.reviewStats.correct + this.reviewStats.incorrect;
        const accuracy = total > 0 ? Math.round((this.reviewStats.correct / total) * 100) : 0;
        
        this.showNotification(
            `🎯 复习完成！正确率：${accuracy}% (${this.reviewStats.correct}/${total})`, 
            'success', 
            5000
        );
        
        this.updateDailyProgress();
    }

    // 工具方法
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    getDifficultyText(difficulty) {
        const map = { easy: '初级', medium: '中级', hard: '高级' };
        return map[difficulty] || '未知';
    }

    getCategoryText(category) {
        const map = { daily: '日常', business: '商务', travel: '旅游', academic: '学术', technology: '科技' };
        return map[category] || '其他';
    }

    calculateCategoryProgress() {
        const progress = {};
        const categories = ['daily', 'business', 'travel', 'academic', 'technology'];
        
        categories.forEach(cat => {
            const total = WORD_DATABASE.filter(w => w.category === cat).length;
            const learned = this.allWords.filter(w => w.category === cat && w.status !== 'new').length;
            progress[cat] = total > 0 ? Math.round((learned / total) * 100) : 0;
        });
        
        return progress;
    }

    updateDailyProgress() {
        const today = new Date().toDateString();
        const todayLearned = this.allWords.filter(w => 
            w.learnedAt && new Date(w.learnedAt).toDateString() === today
        ).length;
        
        const progress = Math.min((todayLearned / this.settings.dailyTarget) * 100, 100);
        
        document.getElementById('daily-progress-bar').style.width = `${progress}%`;
        document.getElementById('daily-progress-text').textContent = `${todayLearned}/${this.settings.dailyTarget}`;
    }

    // AI API调用
    async callKimiAPI(messages) {
        const response = await fetch(CONFIG.API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${CONFIG.API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: CONFIG.MODEL,
                messages: messages,
                temperature: 0.7,
                max_tokens: 2000
            })
        });

        if (!response.ok) {
            throw new Error(`API错误：${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    }

    // 图表初始化
    async initChart() {
        const ctx = document.getElementById('progress-chart');
        if (!ctx) return;

        const canvas = ctx.getContext('2d');
        
        // 准备数据
        const last7Days = [];
        const learnedData = [];
        const reviewedData = [];
        
        for (let i = 6; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const dateStr = date.toDateString();
            
            last7Days.push(date.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' }));
            
            const learned = this.allWords.filter(w => 
                w.learnedAt && new Date(w.learnedAt).toDateString() === dateStr
            ).length;
            learnedData.push(learned);
            
            const reviewed = this.allWords.filter(w => 
                w.reviewHistory && w.reviewHistory.some(r => 
                    new Date(r).toDateString() === dateStr
                )
            ).length;
            reviewedData.push(reviewed);
        }

        this.chart = new Chart(canvas, {
            type: 'line',
            data: {
                labels: last7Days,
                datasets: [{
                    label: '新学单词',
                    data: learnedData,
                    borderColor: '#4361ee',
                    backgroundColor: 'rgba(67, 97, 238, 0.1)',
                    tension: 0.4
                }, {
                    label: '复习单词',
                    data: reviewedData,
                    borderColor: '#06d6a0',
                    backgroundColor: 'rgba(6, 214, 160, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: '近7天学习趋势'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // 显示通知
    showNotification(message, type = 'info', duration = 3000) {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.style.background = type === 'success' ? '#06d6a0' : 
                                       type === 'error' ? '#ef476f' : '#4361ee';
        notification.style.display = 'block';
        
        setTimeout(() => notification.style.display = 'none', duration);
    }

    // 页面切换
    showSection(sectionName, event) {
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        
        document.getElementById(sectionName).classList.add('active');
        if (event) event.target.classList.add('active');
    }

    // AI辅助Tab切换
    switchAITab(tabName) {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.ai-tab-content').forEach(c => c.style.display = 'none');
        
        event.target.classList.add('active');
        document.getElementById(`ai-${tabName}-tab`).style.display = 'block';
    }

    // 导出CSV
    exportToCSV() {
        const headers = ['单词', '音标', '释义', '例句', '分类', '难度', '状态', '复习次数', '掌握度'];
        const rows = this.allWords.map(w => [
            w.word,
            w.pronunciation,
            w.meaning,
            w.example,
            w.category,
            w.difficulty,
            w.status || 'new',
            w.reviewCount || 0,
            w.easeFactor || 2.5
        ]);

        const csv = [headers, ...rows].map(row => row.join(',')).join('\n');
        const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `english-words-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        
        this.showNotification('📥 CSV导出成功！', 'success');
    }

    // 导入CSV
    async importFromCSV(event) {
        const file = event.target.files[0];
        if (!file) return;

        const loadingEl = document.getElementById('library-loading');
        loadingEl.style.display = 'block';

        try {
            const text = await file.text();
            const lines = text.split('\n').filter(line => line.trim());
            
            for (let i = 1; i < lines.length; i++) {
                const [word, pronunciation, meaning, example, category, difficulty] = lines[i].split(',');
                
                if (word && meaning) {
                    const wordData = {
                        word: word.trim(),
                        pronunciation: pronunciation?.trim() || '/ˈ/',
                        meaning: meaning.trim(),
                        example: example?.trim() || `Example for ${word}`,
                        category: category?.trim() || 'daily',
                        difficulty: difficulty?.trim() || 'medium',
                        status: 'new',
                        learnedAt: null,
                        reviewCount: 0,
                        nextReview: null,
                        easeFactor: 2.5,
                        difficultyFactor: 1.5
                    };
                    
                    await this.saveWordToDB(wordData);
                }
            }
            
            await this.loadAllWords();
            this.filterLibrary();
            this.showNotification('📤 CSV导入成功！', 'success');
            
        } catch (error) {
            this.showNotification(`导入失败：${error.message}`, 'error');
        } finally {
            loadingEl.style.display = 'none';
        }
    }

    // 单词库筛选
    async filterLibrary() {
        const category = document.getElementById('library-category-filter')?.value || 'all';
        const difficulty = document.getElementById('library-difficulty-filter')?.value || 'all';
        const mastery = document.getElementById('library-mastery-filter')?.value || 'all';
        const search = document.getElementById('library-search')?.value.toLowerCase() || '';

        let filtered = this.allWords.filter(w => {
            const matchCategory = category === 'all' || w.category === category;
            const matchDifficulty = difficulty === 'all' || w.difficulty === difficulty;
            const matchSearch = !search || w.word.toLowerCase().includes(search) || w.meaning.includes(search);
            
            let matchMastery = true;
            if (mastery === 'new') matchMastery = w.status === 'new';
            else if (mastery === 'learning') matchMastery = w.status === 'learning';
            else if (mastery === 'mastered') matchMastery = w.status === 'mastered';
            
            return matchCategory && matchDifficulty && matchSearch && matchMastery;
        });

        this.displayLibraryGrid(filtered);
    }

    displayLibraryGrid(words) {
        const gridEl = document.getElementById('library-grid');
        gridEl.innerHTML = words.map(word => `
            <div class="word-grid-item" style="position: relative;">
                <div class="mastery-indicator mastery-${this.getMasteryLevel(word)}" 
                     style="position: absolute; top: 10px; right: 10px;"></div>
                <h4>${word.word}</h4>
                <p style="color: #666; font-size: 14px;">${word.meaning}</p>
                <p style="color: #4361ee; font-size: 12px; margin-top: 8px;">
                    ${this.getCategoryText(word.category)} · ${this.getDifficultyText(word.difficulty)}
                </p>
                <p style="color: #999; font-size: 12px;">
                    ${word.status === 'mastered' ? '🎯 已掌握' : 
                      word.reviewCount > 0 ? `已复习${word.reviewCount}次` : '未学习'}
                </p>
                <button class="btn-speech" style="margin-top: 10px;" onclick="app.speakWord('${word.word}')">🔊</button>
            </div>
        `).join('');
    }

    getMasteryLevel(word) {
        if (word.status === 'mastered') return 2;
        if (word.reviewCount > 0) return 1;
        return 0;
    }

    // 杂项方法
    shuffleReviewQueue() {
        this.currentReviewQueue = this.shuffleArray(this.currentReviewQueue);
        this.showNotification('🔀 复习顺序已打乱', 'info');
    }

    addToReviewQueue(word) {
        // 已在IndexedDB中处理
    }

    addToDifficultyBox(word) {
        word.difficultyBox = 'hard';
        word.nextReview = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
    }

    searchLibrary() {
        this.filterLibrary();
    }

    updateSettings() {
        const dailyTarget = document.getElementById('daily-target')?.value;
        const reminderTime = document.getElementById('reminder-time')?.value;
        const autoAdjustSRS = document.getElementById('auto-adjust-srs')?.checked;
        const autoSpeak = document.getElementById('auto-speak')?.checked;

        if (dailyTarget) this.settings.dailyTarget = parseInt(dailyTarget);
        if (reminderTime) this.settings.reminderTime = reminderTime;
        if (autoAdjustSRS !== undefined) this.settings.autoAdjustSRS = autoAdjustSRS;
        if (autoSpeak !== undefined) this.settings.autoSpeak = autoSpeak;

        this.saveSettings();
        this.showNotification('⚙️ 设置已更新', 'success');
    }

    clearAllData() {
        if (confirm('⚠️ 确定清空所有数据？此操作不可恢复！')) {
            const transaction = this.db.transaction(['words'], 'readwrite');
            const store = transaction.objectStore('words');
            store.clear();
            
            localStorage.removeItem('appSettings');
            localStorage.removeItem('chatHistory');
            
            location.reload();
        }
    }
}

// 初始化应用
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new EnglishLearningApp();
});

// 全局函数
function showSection(section, event) {
    app.showSection(section, event);
}

function switchAITab(tab) {
    app.switchAITab(tab);
}

function markWordStatus(status) {
    app.markWordStatus(status);
}

function nextWordInGroup() {
    app.nextWordInGroup();
}

function generateNewGroup() {
    const activeCategory = document.querySelector('.category-btn.active')?.dataset.category || 'daily';
    app.generateNewGroup(activeCategory);
}

function reviewCurrentGroup() {
    app.startReviewSession();
}

function speakCurrentWord() {
    app.speakCurrentWord();
}

function speakExample() {
    app.speakExample();
}

function sendMessage() {
    app.sendMessage();
}

function generateStory() {
    app.generateStory();
}

function generateStoryFromCurrentGroup() {
    app.generateStoryFromCurrentGroup();
}

function queryDictionary() {
    app.queryDictionary();
}

function startReviewSession() {
    app.startReviewSession();
}

function shuffleReviewQueue() {
    app.shuffleReviewQueue();
}

function nextReviewWord() {
    app.nextReviewWord();
}

function selectOption(index) {
    app.selectOption(index);
}

function rateReview(rating) {
    app.rateReview(rating);
}

function exportToCSV() {
    app.exportToCSV();
}

function importFromCSV(event) {
    app.importFromCSV(event);
}

function filterLibrary() {
    app.filterLibrary();
}

function searchLibrary() {
    app.searchLibrary();
}

function updateSettings() {
    app.updateSettings();
}

function clearAllData() {
    app.clearAllData();
}
