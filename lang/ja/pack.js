(function(){
var pack={
  "code": "ja",
  "name": "Japanese",
  "shortTitle": "JP Vocab",
  "nativeName": "日本語",
  "exampleWord": "町",
  "exampleReading": "まち / machi",
  "greeting": "こんにちは",
  "flag": "🇯🇵",
  "columnCode": "JP",
  "readingLabel": "Reading",
  "filePrefix": "japanese",
  "timeLabel": "Japan",
  "storagePrefix": "jv_",
  "wordField": "japanese",
  "translationCode": "ja",
  "speechCode": "ja-JP",
  "ttsCode": "ja",
  "offsetHours": 9,
  "defaultFont": "'Noto Sans JP',system-ui,sans-serif",
  "backendUrl": "https://script.google.com/macros/s/AKfycbwBhg32FT23vA1dN4rj7ikel4CLpkgcbdUW2Oop9zqzhD2tR0FZ3rdtBUVqU9hdyge3UQ/exec",
  "retiredBackendUrls": [],
  "abi": 1,
  "version": "9.1.5",
  "changelogUrl": "",
  "sources": [
    "google",
    "mymemory",
    "lingva",
    "wiktionary"
  ],
  "lingvaHosts": [
    "https://lingva.lunar.icu",
    "https://translate.plausibility.cloud"
  ],
  "features": {
    "conjugation": true,
    "shorthand": false
  },
  "text": {
    "text4": "japanese-notes-",
    "text5": "No Japanese text to speak.",
    "text6": " Japanese words ✓",
    "text7": "Hear Japanese",
    "text8": "Type an English or Japanese word first.",
    "text9": "Japanese → English",
    "text10": "English → Japanese",
    "text11": "japanese-vocab-backup-",
    "text12": "<div class=\"fc-hint\">Tap to reveal Japanese</div>",
    "text13": "📊 Japanese Vocab — Learning Report",
    "text14": " (Japan time)",
    "text15": "japanese-vocab-report-",
    "text16": "Japanese",
    "text17": "<div class=\"tn-cell\"><span class=\"tn-lbl\">Japanese</span><span class=\"tn-val kh\">",
    "text18": "\" title=\"Hear the Japanese\">🔊</button><div class=\"sc-ro\">",
    "text19": "Missing \"English\" or \"Japanese\" header.",
    "text20": "Reading",
    "text21": "japanese-vocab-",
    "text22": "<span style=\"font-size:.68rem;color:var(--dim);display:block;margin-bottom:6px\">Type the Japanese:</span>",
    "text23": "Type Japanese…",
    "text24": "ℹ No Japanese saved for this word.",
    "text25": "<span style=\"font-size:.68rem;color:var(--dim);display:block;margin-bottom:6px\">Tap “Hear” then spell the Japanese word:</span>",
    "text26": "<span style=\"font-size:.68rem;color:var(--dim);display:block;margin-bottom:6px\">Spell the Japanese word you heard:</span>",
    "text27": "Japanese Vocabulary"
  },
  "referenceHtml": "<div id=\"page-ref\" class=\"page\"><div class=\"ref-wrap\"><h2>📚 Japanese Reference</h2><div id=\"ja-reference\"></div></div></div>",
  "fontOptions": "<option value=\"'Noto Sans JP',system-ui,sans-serif\">Noto Sans JP</option><option value=\"'Noto Serif JP',serif\">Noto Serif JP</option>",
  "csvSample": "<tr><td>町</td><td>town</td><td>まち / machi</td><td>Places</td><td></td></tr>",
  "studyPresets": [
    {
      "id": "__hira__",
      "label": "Hiragana"
    },
    {
      "id": "__kata__",
      "label": "Katakana"
    },
    {
      "id": "__nums__",
      "label": "Numbers"
    }
  ],
  "backendSetupPending": true
};
// Japanese study reference. JLPT labels are common study groupings, not official published syllabuses.
var KANA = [
 ['あいうえお',['a','i','u','e','o']],['かきくけこ',['ka','ki','ku','ke','ko']],['さしすせそ',['sa','shi','su','se','so']],
 ['たちつてと',['ta','chi','tsu','te','to']],['なにぬねの',['na','ni','nu','ne','no']],['はひふへほ',['ha','hi','fu','he','ho']],
 ['まみむめも',['ma','mi','mu','me','mo']],['やゆよ',['ya','yu','yo']],['らりるれろ',['ra','ri','ru','re','ro']],['わをん',['wa','wo','n']],
 ['がぎぐげご',['ga','gi','gu','ge','go']],['ざじずぜぞ',['za','ji','zu','ze','zo']],['だぢづでど',['da','ji','zu','de','do']],
 ['ばびぶべぼ',['ba','bi','bu','be','bo']],['ぱぴぷぺぽ',['pa','pi','pu','pe','po']]
];
var COMBOS=[['きゃきゅきょ',['kya','kyu','kyo']],['しゃしゅしょ',['sha','shu','sho']],['ちゃちゅちょ',['cha','chu','cho']],['にゃにゅにょ',['nya','nyu','nyo']],['ひゃひゅひょ',['hya','hyu','hyo']],['みゃみゅみょ',['mya','myu','myo']],['りゃりゅりょ',['rya','ryu','ryo']],['ぎゃぎゅぎょ',['gya','gyu','gyo']],['じゃじゅじょ',['ja','ju','jo']],['びゃびゅびょ',['bya','byu','byo']],['ぴゃぴゅぴょ',['pya','pyu','pyo']]];
var KANJI=[
 ['N5','日','にち・ひ','day / sun'],['N5','月','げつ・つき','month / moon'],['N5','火','か・ひ','fire'],['N5','水','すい・みず','water'],['N5','木','もく・き','tree'],['N5','金','きん・かね','gold / money'],['N5','土','ど・つち','earth'],['N5','人','じん・ひと','person'],['N5','山','さん・やま','mountain'],['N5','川','せん・かわ','river'],['N5','田','でん・た','rice field'],['N5','口','こう・くち','mouth'],['N5','目','もく・め','eye'],['N5','耳','じ・みみ','ear'],['N5','手','しゅ・て','hand'],['N5','足','そく・あし','foot'],['N5','大','だい・おおきい','big'],['N5','小','しょう・ちいさい','small'],['N5','中','ちゅう・なか','inside'],['N5','上','じょう・うえ','above'],['N5','下','か・した','below'],['N5','学','がく・まなぶ','study'],['N5','生','せい・いきる','life'],['N5','先','せん・さき','previous'],['N5','本','ほん・もと','book / origin'],['N5','語','ご・かたる','language'],['N5','時','じ・とき','time'],['N5','分','ふん・わける','minute / divide'],['N5','年','ねん・とし','year'],['N5','行','こう・いく','go'],['N5','来','らい・くる','come'],['N5','食','しょく・たべる','eat'],['N5','飲','いん・のむ','drink'],['N5','見','けん・みる','see'],['N5','聞','ぶん・きく','hear'],['N5','読','どく・よむ','read'],['N5','書','しょ・かく','write'],
 ['N4','会','かい・あう','meet'],['N4','社','しゃ・やしろ','company'],['N4','駅','えき','station'],['N4','電','でん','electricity'],['N4','車','しゃ・くるま','vehicle'],['N4','道','どう・みち','road'],['N4','店','てん・みせ','shop'],['N4','病','びょう・やむ','illness'],['N4','院','いん','institution'],['N4','医','い','medicine'],['N4','者','しゃ・もの','person'],['N4','勉','べん','effort'],['N4','強','きょう・つよい','strong'],['N4','教','きょう・おしえる','teach'],['N4','室','しつ・むろ','room'],['N4','家','か・いえ','home'],['N4','族','ぞく','family'],['N4','親','しん・おや','parent'],['N4','友','ゆう・とも','friend'],['N4','思','し・おもう','think'],['N4','知','ち・しる','know'],['N4','作','さく・つくる','make'],['N4','使','し・つかう','use'],['N4','住','じゅう・すむ','live'],['N4','働','どう・はたらく','work'],['N4','帰','き・かえる','return'],['N4','待','たい・まつ','wait'],['N4','持','じ・もつ','hold'],['N4','買','ばい・かう','buy'],['N4','売','ばい・うる','sell'],['N4','安','あん・やすい','cheap / safe'],['N4','高','こう・たかい','high / expensive'],['N4','新','しん・あたらしい','new'],['N4','古','こ・ふるい','old'],['N4','長','ちょう・ながい','long'],['N4','短','たん・みじかい','short']
];
var PARTICLES=[['は','topic (pronounced wa)','私は学生です。'],['が','subject / new information','雨が降っています。'],['を','direct object (pronounced o)','水を飲みます。'],['に','destination / time / recipient','七時に学校に行きます。'],['で','location of action / means','図書館で勉強します。'],['へ','direction (pronounced e)','日本へ行きます。'],['と','and / with / quotation','友達と話します。'],['も','also','私も行きます。'],['の','possession / noun connection','私の本です。'],['から','from / because','九時から働きます。'],['まで','until / as far as','五時までです。'],['より','than / from','昨日より暑いです。']];
var VERBS=[
 ['書く','かく','godan','write',['書きます','書いて','書いた','書かない','書ける','書こう']],['読む','よむ','godan','read',['読みます','読んで','読んだ','読まない','読める','読もう']],['話す','はなす','godan','speak',['話します','話して','話した','話さない','話せる','話そう']],['買う','かう','godan','buy',['買います','買って','買った','買わない','買える','買おう']],['待つ','まつ','godan','wait',['待ちます','待って','待った','待たない','待てる','待とう']],['帰る','かえる','godan','return',['帰ります','帰って','帰った','帰らない','帰れる','帰ろう']],['行く','いく','godan (exception)','go',['行きます','行って','行った','行かない','行ける','行こう']],['泳ぐ','およぐ','godan','swim',['泳ぎます','泳いで','泳いだ','泳がない','泳げる','泳ごう']],['遊ぶ','あそぶ','godan','play',['遊びます','遊んで','遊んだ','遊ばない','遊べる','遊ぼう']],['死ぬ','しぬ','godan','die',['死にます','死んで','死んだ','死なない','死ねる','死のう']],['食べる','たべる','ichidan','eat',['食べます','食べて','食べた','食べない','食べられる','食べよう']],['見る','みる','ichidan','see',['見ます','見て','見た','見ない','見られる','見よう']],['する','する','irregular','do',['します','して','した','しない','できる','しよう']],['来る','くる','irregular','come',['来ます','来て','来た','来ない','来られる','来よう']]
];
var DICTIONARY=[['hello','こんにちは','konnichiwa','Phrase'],['thank you','ありがとう','arigatou','Phrase'],['goodbye','さようなら','sayounara','Phrase'],['please','お願いします','onegaishimasu','Phrase'],['sorry','すみません','sumimasen','Phrase'],['yes','はい','hai','Particle'],['no','いいえ','iie','Particle'],['water','水','mizu','Noun'],['rice','ご飯','gohan','Noun'],['tea','お茶','ocha','Noun'],['book','本','hon','Noun'],['school','学校','gakkou','Noun'],['station','駅','eki','Noun'],['house','家','ie','Noun'],['town','町','machi','Noun'],['friend','友達','tomodachi','Noun'],['family','家族','kazoku','Noun'],['mother','母','haha','Noun'],['father','父','chichi','Noun'],['cat','猫','neko','Noun'],['dog','犬','inu','Noun'],['today','今日','kyou','Noun'],['tomorrow','明日','ashita','Noun'],['yesterday','昨日','kinou','Noun'],['big','大きい','ookii','Adjective'],['small','小さい','chiisai','Adjective'],['new','新しい','atarashii','Adjective'],['old','古い','furui','Adjective'],['good','いい','ii','Adjective'],['delicious','おいしい','oishii','Adjective'],['quiet','静か','shizuka','Adjective'],['to eat','食べる','taberu','Verb'],['to drink','飲む','nomu','Verb'],['to go','行く','iku','Verb'],['to come','来る','kuru','Verb'],['to see','見る','miru','Verb'],['to read','読む','yomu','Verb'],['to write','書く','kaku','Verb'],['to sleep','寝る','neru','Verb'],['to study','勉強する','benkyou suru','Verb'],['I','私','watashi','Pronoun'],['you','あなた','anata','Pronoun'],['Japan','日本','nihon','Noun'],['Japanese language','日本語','nihongo','Noun'],['money','お金','okane','Noun'],['work','仕事','shigoto','Noun'],['time','時間','jikan','Noun'],['name','名前','namae','Noun'],['where','どこ','doko','Question'],['what','何','nani','Question']];
function toKatakana(s){return Array.from(s).map(function(c){var n=c.charCodeAt(0);return n>=0x3041&&n<=0x3096?String.fromCharCode(n+96):c;}).join('');}
var kanaMap={};
KANA.forEach(function(r){Array.from(r[0]).forEach(function(c,i){kanaMap[c]=r[1][i];});});
COMBOS.forEach(function(r){for(var i=0;i<3;i++)kanaMap[r[0].slice(i*2,i*2+2)]=r[1][i];});
Object.assign(kanaMap,{'ぁ':'a','ぃ':'i','ぅ':'u','ぇ':'e','ぉ':'o','ゃ':'ya','ゅ':'yu','ょ':'yo','ゔ':'vu','ふぁ':'fa','ふぃ':'fi','ふぇ':'fe','ふぉ':'fo','てぃ':'ti','でぃ':'di','うぃ':'wi','うぇ':'we','うぉ':'wo','しぇ':'she','じぇ':'je','ちぇ':'che'});
function romanizeKana(text){
 var s=String(text||'').normalize('NFKC').replace(/[\u30a1-\u30f6]/g,function(c){return String.fromCharCode(c.charCodeAt(0)-96);}),out='';
 for(var i=0;i<s.length;i++){
  var ch=s[i],pair=s.slice(i,i+2),r=kanaMap[pair];
  if(ch==='っ'){var next=kanaMap[s.slice(i+1,i+3)]||kanaMap[s[i+1]]||'';if(/^[bcdfghjklmpqrstvwxyz]/.test(next))out+=next.startsWith('ch')?'t':next[0];continue;}
  if(ch==='ー'){var v=out.match(/[aeiou](?=[^aeiou]*$)/);if(v)out+=v[0];continue;}
  if(r){out+=r;i++;}else {r=kanaMap[ch];out+=r||ch;}
  if(ch==='ん'&&/^[aiueoy]/.test(kanaMap[s[i+1]]||''))out+="'";
 }
 return out;
}
function japaneseNumber(n){
 if(!Number.isSafeInteger(n)||n<0)return '';
 if(n===0)return '零';var digits=['','一','二','三','四','五','六','七','八','九'];
 function group(v){var out='';[1000,100,10,1].forEach(function(unit,i){var d=Math.floor(v/unit);v%=unit;if(d)out+=(d===1&&unit>1?'':digits[d])+['千','百','十',''][i];});return out;}
 var out='',units=['','万','億','兆'];for(var i=0;n;i++,n=Math.floor(n/10000)){var g=n%10000;if(g)out=group(g)+(units[i]||'')+out;}return out;
}
function jaOffline(text,sl){var q=String(text||'').normalize('NFKC').trim().toLowerCase(),row=DICTIONARY.find(function(r){return sl==='ja'?r[1]===q:(r[0].toLowerCase()===q||r[0].replace(/^to /,'')===q);});if(!row)return null;return {translation:sl==='ja'?row[0]:row[1],roman:row[2],pos:[row[3]],alts:[],defs:[],examples:[],confidence:'Offline dictionary'};}
var jaContext, quiz;
function jaSpeak(text){if(jaContext)jaContext.speak(text);}
function jaEsc(s){return String(s||'').replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function jaTable(headers,rows){return '<div class="ja-table-wrap"><table class="vow-table"><thead><tr>'+headers.map(function(s){return '<th>'+jaEsc(s)+'</th>';}).join('')+'</tr></thead><tbody>'+rows.map(function(r){return '<tr>'+r.map(function(s){return '<td>'+jaEsc(s)+'</td>';}).join('')+'</tr>';}).join('')+'</tbody></table></div>';}
function jaSection(title,html){return '<section class="ja-section"><h3>'+jaEsc(title)+'</h3>'+html+'</section>';}
function kanaChart(katakana){return '<div class="ja-kana-grid">'+KANA.flatMap(function(r){return Array.from(r[0]).map(function(c,i){var shown=katakana?toKatakana(c):c;return '<button type="button" class="ref-card" data-ja-speak="'+shown+'"><span class="kh">'+shown+'</span><span>'+r[1][i]+'</span></button>';});}).join('')+'</div>' + '<h4>Combination sounds</h4><div class="ja-kana-grid">'+COMBOS.flatMap(function(r){return r[1].map(function(ro,i){var c=r[0].slice(i*2,i*2+2),shown=katakana?toKatakana(c):c;return '<button type="button" class="ref-card" data-ja-speak="'+shown+'"><span class="kh">'+shown+'</span><span>'+ro+'</span></button>';});}).join('')+'</div>';}
function renderJapaneseReference(){
 var host=document.getElementById('ja-reference');if(!host)return;
 var html=jaSection('Hiragana · including dakuten and handakuten',kanaChart(false))+jaSection('Katakana · including dakuten and handakuten',kanaChart(true));
 html+=jaSection('Small っ and long vowels',jaTable(['Pattern','Example','Reading'],[['っ doubles the next consonant','学校 / がっこう','gakkou'],['おう often a long o','東京 / とうきょう','toukyou'],['おお also a long o','大きい / おおきい','ookii'],['えい often a long e','先生 / せんせい','sensei'],['ー repeats the preceding vowel','コーヒー','koohii'],['small ゃ ゅ ょ combine with i-row kana','きゃ / きゅ / きょ','kya / kyu / kyo']]));
 ['N5','N4'].forEach(function(level){html+=jaSection('Common kanji · '+level+' study grouping',jaTable(['Kanji','Selected readings','Meaning'],KANJI.filter(function(r){return r[0]===level;}).map(function(r){return r.slice(1);})));});
 html+=jaSection('Particles',jaTable(['Particle','Use','Example'],PARTICLES));
 html+=jaSection('Verb groups and forms','<p>Godan: the final sound changes by form. Ichidan: remove る, then attach the ending. する and 来る are irregular. Not every る verb is ichidan; 帰る is godan. 行く has exceptional て/た forms.</p>'+jaTable(['Dictionary','Reading','Group','Meaning','ます','て','た','ない','Potential','Volitional'],VERBS.map(function(v){return v.slice(0,4).concat(v[4]);}))+'<div class="ja-quiz"><select id="ja-form" aria-label="Conjugation form"><option value="0">ます</option><option value="1">て</option><option value="2">た</option><option value="3">ない</option><option value="4">Potential</option><option value="5">Volitional</option></select><p id="ja-question"></p><input id="ja-answer" aria-label="Conjugated answer" autocomplete="off"><button type="button" class="bbtn" id="ja-check">✓ Check</button><button type="button" class="bbtn" id="ja-next">→</button><p id="ja-result" role="status"></p></div>');
 html+=jaSection('Adjectives',jaTable(['Type','Present','Negative','Past','Past negative','て'],[['い','高い','高くない','高かった','高くなかった','高くて'],['な','静かだ / 静かです','静かではない / 静かじゃない','静かだった','静かではなかった','静かで'],['いい (irregular)','いい','よくない','よかった','よくなかった','よくて']])+'<p>な links a な-adjective to a noun: 静かな町. い stays before a noun: 高い山.</p>');
 html+=jaSection('Counters',jaTable(['Counter','Use','Examples / irregular readings'],[['つ','general objects','一つ ひとつ · 二つ ふたつ · 三つ みっつ · 十 とお'],['人','people','一人 ひとり · 二人 ふたり · 三人 さんにん'],['本','long cylindrical objects','一本 いっぽん · 三本 さんぼん · 六本 ろっぽん'],['枚','flat objects','一枚 いちまい · 二枚 にまい'],['匹','small animals','一匹 いっぴき · 三匹 さんびき · 六匹 ろっぴき'],['個','small objects','一個 いっこ · 二個 にこ'],['回','times','一回 いっかい · 三回 さんかい'],['時','hours','四時 よじ · 七時 しちじ · 九時 くじ'],['分','minutes','一分 いっぷん · 三分 さんぷん · 四分 よんぷん · 六分 ろっぷん · 八分 はっぷん · 十分 じゅっぷん']]));
 html+=jaSection('Numbers, dates and time',jaTable(['Number','Kanji','Reading'],[[0,'零','れい / ゼロ'],[1,'一','いち'],[2,'二','に'],[3,'三','さん'],[4,'四','よん / し'],[5,'五','ご'],[6,'六','ろく'],[7,'七','なな / しち'],[8,'八','はち'],[9,'九','きゅう / く'],[10,'十','じゅう'],[100,'百','ひゃく'],[300,'三百','さんびゃく'],[600,'六百','ろっぴゃく'],[800,'八百','はっぴゃく'],[1000,'千','せん'],[3000,'三千','さんぜん'],[8000,'八千','はっせん'],[10000,'一万','いちまん'],[100000000,'一億','いちおく']])+jaTable(['Date','Reading'],[['1st','ついたち'],['2nd','ふつか'],['3rd','みっか'],['4th','よっか'],['5th','いつか'],['6th','むいか'],['7th','なのか'],['8th','ようか'],['9th','ここのか'],['10th','とおか'],['14th','じゅうよっか'],['20th','はつか'],['24th','にじゅうよっか']])+'<p>Other days use number + にち (17th: じゅうしちにち; 19th: じゅうくにち). Months use number + がつ: April しがつ, July しちがつ, September くがつ. Dates: 年 → 月 → 日. 七時半 = しちじはん (7:30). 午前 = AM; 午後 = PM.</p>');
 html+=jaSection('Politeness and keigo basics',jaTable(['Level','Example','Meaning'],[['Casual','明日行く。','I go tomorrow.'],['です・ます','明日行きます。','Polite equivalent.'],['Honorific (others)','いらっしゃる / 召し上がる','go/come/be / eat (respected person)'],['Humble (self)','参る / いただく','go/come / receive/eat (humble self)'],['Polite nouns','お名前 / ご家族','name / family']])+'<p>Keigo is context-sensitive. Do not use honorific verbs to elevate your own actions.</p>');
 html+=jaSection('Common phrases',jaTable(['Japanese','Reading','Meaning'],[['おはようございます','ohayou gozaimasu','Good morning'],['こんにちは','konnichiwa','Hello'],['こんばんは','konbanwa','Good evening'],['ありがとうございます','arigatou gozaimasu','Thank you'],['すみません','sumimasen','Excuse me / sorry'],['お願いします','onegaishimasu','Please'],['はじめまして','hajimemashite','Nice to meet you'],['よろしくお願いします','yoroshiku onegaishimasu','Please treat me well / pleased to meet you'],['いくらですか','ikura desu ka','How much is it?'],['駅はどこですか','eki wa doko desu ka','Where is the station?'],['もう一度お願いします','mou ichido onegaishimasu','Once more, please'],['ゆっくり話してください','yukkuri hanashite kudasai','Please speak slowly']]));
 host.innerHTML=html;
 host.querySelectorAll('[data-ja-speak]').forEach(function(button){button.addEventListener('click',function(){jaSpeak(button.dataset.jaSpeak);});});
 document.getElementById('ja-next').onclick=newJapaneseQuiz;document.getElementById('ja-check').onclick=checkJapaneseQuiz;document.getElementById('ja-form').onchange=newJapaneseQuiz;newJapaneseQuiz();
}
function newJapaneseQuiz(){quiz=VERBS[Math.floor(Math.random()*VERBS.length)];document.getElementById('ja-question').textContent=quiz[0]+' ('+quiz[1]+') · '+quiz[3];document.getElementById('ja-answer').value='';document.getElementById('ja-result').textContent='';}
function checkJapaneseQuiz(){if(!quiz)return;var index=Number(document.getElementById('ja-form').value),answer=document.getElementById('ja-answer').value.normalize('NFKC').trim(),expected=quiz[4][index];document.getElementById('ja-result').textContent=answer===expected?'✓ Correct':'Answer: '+expected;}

pack.connect=function(context){jaContext=context;};pack.renderReference=renderJapaneseReference;
pack.detectLanguage=function(text){return /[\u3040-\u30ff\u3400-\u9fff\uff66-\uff9f]/.test(text);};
pack.offlineLookup=jaOffline;pack.romanize=function(text){var r=jaOffline(text,'ja');return r?r.roman:romanizeKana(text);};
pack.numberInfo=function(text){var value=String(text).normalize('NFKC').replace(/,/g,''),match=value.match(/\d+/);if(!match)return null;var n=Number(match[0]);if(!Number.isSafeInteger(n)||n<0||n>=10000000000000000)return null;return {arabic:match[0],target:japaneseNumber(n),words:japaneseNumber(n)};};
pack.register=function(text,defs){return /ございます|いただ|お願い|です|ます/.test(text)?'Polite/Formal':/slang|colloquial/i.test(defs||'')?'Colloquial':'';};
pack.segment=function(){return [];};
pack.referenceDeck=function(id){if(id!=='__hira__'&&id!=='__kata__'&&id!=='__nums__')return null;if(id==='__nums__')return Array.from({length:101},function(_,n){return {english:String(n),target:japaneseNumber(n),romanization:'',category:'Numbers',id:'ref_'+n};});return KANA.flatMap(function(row){return Array.from(row[0]).map(function(ch,i){return {english:row[1][i],target:id==='__kata__'?toKatakana(ch):ch,romanization:row[1][i],category:'Kana',id:'ref_'+ch};});});};
pack.romanizeKana=romanizeKana;pack.japaneseNumber=japaneseNumber;pack.kanji=KANJI;pack.verbs=VERBS;
window.VOCAB_LANG=pack;
})();
