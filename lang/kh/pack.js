(function(){
'use strict';
var pack={
  "code": "km",
  "name": "Khmer",
  "shortTitle": "Kh Vocab",
  "nativeName": "ភាសាខ្មែរ",
  "exampleWord": "ស្រុក",
  "exampleReading": "srok",
  "greeting": "ជំរាបសួរ",
  "flag": "🇰🇭",
  "columnCode": "KH",
  "readingLabel": "Romanized",
  "filePrefix": "khmer",
  "timeLabel": "Cambodia",
  "storagePrefix": "kv_",
  "wordField": "khmer",
  "translationCode": "km",
  "speechCode": "km-KH",
  "ttsCode": "km",
  "offsetHours": 7,
  "defaultFont": "'Noto Sans Khmer',system-ui,sans-serif",
  "backendUrl": "https://script.google.com/macros/s/AKfycbwWrZGN13NltdK2UZiKobEx6HD4CMncMdjHO-hkQm2uno5l7rJqWTwlWzgx1_2JF_pi/exec",
  "retiredBackendUrls": [
    "https://script.google.com/macros/s/AKfycbx4EDVFvsD1ebB8o4wzoIVlx0Qhh_gWz5Kv7mgxcW2s1Rf97swWxlU3zDigYnnDcz-I/exec",
    "https://script.google.com/macros/s/AKfycbwUUkdYjQjCXNW7kCGLgKJQyYXUr_FOikNU3bw2so8AmiuUkHPZSGKmO1727hdvQKQw/exec",
    "https://script.google.com/macros/s/AKfycby0rv_nTo73yH-gAERqOz4YOTnqJwPzy6BB5x4a-X_n5pQ06W3NzQx_hbTQ8YyEBtxx/exec"
  ],
  "abi": 1,
  "version": "9.1.5",
  "changelogUrl": "https://docs.google.com/document/d/1ynpcFYYxTFDjj9exho4jvJZeWI55VQJDmJutVzQgH30/edit?usp=drivesdk",
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
    "shorthand": true,
    "conjugation": false
  },
  "text": {
    "text4": "khmer-notes-",
    "text5": "No Khmer text to speak.",
    "text6": " Khmer words ✓",
    "text7": "Hear Khmer",
    "text8": "Type an English or Khmer word first.",
    "text9": "Khmer → English",
    "text10": "English → Khmer",
    "text11": "khmer-vocab-backup-",
    "text12": "<div class=\"fc-hint\">Tap to reveal Khmer</div>",
    "text13": "📊 Khmer Vocab — Learning Report",
    "text14": " (Cambodia time)",
    "text15": "khmer-vocab-report-",
    "text16": "Khmer",
    "text17": "<div class=\"tn-cell\"><span class=\"tn-lbl\">Khmer</span><span class=\"tn-val kh\">",
    "text18": "\" title=\"Hear the Khmer\">🔊</button><div class=\"sc-ro\">",
    "text19": "Missing \"English\" or \"Khmer\" header.",
    "text20": "Romanized",
    "text21": "khmer-vocab-",
    "text22": "<span style=\"font-size:.68rem;color:var(--dim);display:block;margin-bottom:6px\">Type the Khmer:</span>",
    "text23": "Type Khmer…",
    "text24": "ℹ No Khmer saved for this word.",
    "text25": "<span style=\"font-size:.68rem;color:var(--dim);display:block;margin-bottom:6px\">Tap “Hear” then spell the Khmer word:</span>",
    "text26": "<span style=\"font-size:.68rem;color:var(--dim);display:block;margin-bottom:6px\">Spell the Khmer word you heard:</span>",
    "text27": "Khmer Vocabulary"
  },
  "referenceHtml": "  <div id=\"page-ref\" class=\"page\">\n    <div class=\"ref-wrap\">\n      <h2>📚 Khmer Reference</h2>\n      <div class=\"ref-section\">\n        <h3>Sing Khmer (Shorthand)</h3>\n        <div class=\"srch-wrap\"><input type=\"text\" id=\"sk-search\" placeholder=\"🔍 Search English or shorthand… (e.g. &quot;ot mean&quot;)\" oninput=\"_srchClear('sk-search','sk-search-clr');renderSingKhmer()\" autocomplete=\"off\" /><button class=\"srch-clear\" id=\"sk-search-clr\" onclick=\"el('sk-search').value='';_srchClear('sk-search','sk-search-clr');el('sk-search').focus();renderSingKhmer()\" title=\"Clear\">×</button></div>\n        <div id=\"sk-translate-note\"></div>\n        <div class=\"ref-sk-scroll\" id=\"ref-sing-khmer\"></div>\n        <div class=\"ref-note\">Sing Khmer is a personal romanized shorthand, not standard Khmer script. (Thanks to Elder Eav for the words!)</div>\n      </div>\n      <div class=\"ref-section\">\n        <h3>All Consonants (33)</h3>\n        <div class=\"ref-grid-5\" id=\"ref-all-cons\"></div>\n        <div class=\"ref-note\">S1 = Series 1 (inherent vowel \"a\") · S2 = Series 2 (inherent vowel \"o\")</div>\n      </div>\n      <div class=\"ref-section\">\n        <h3>Dependent Vowels</h3>\n        <table class=\"vowel-table\">\n          <thead>\n            <tr>\n              <th>Symbol</th>\n              <th>S1 sound</th>\n              <th>S2 sound</th>\n              <th>Notes</th>\n            </tr>\n          </thead>\n          <tbody id=\"ref-dep-vowels\"></tbody>\n        </table>\n      </div>\n      <div class=\"ref-section\">\n        <h3>Pronunciation Guide</h3>\n        <div class=\"ref-phonetic-grid\" id=\"ref-phonetic-grid\"></div>\n      </div>\n      <div class=\"ref-section\">\n        <h3>Independent Vowels</h3>\n        <div class=\"ref-grid-5\" id=\"ref-ind-vowels\"></div>\n      </div>\n      <div class=\"ref-section\">\n        <h3>Numbers 0–100</h3>\n        <div class=\"ref-num-grid\" id=\"ref-numbers\"></div>\n      </div>\n      <div class=\"ref-section\">\n        <h3>Essential Phrases</h3>\n        <table class=\"vowel-table\">\n          <thead>\n            <tr>\n              <th>Khmer</th>\n              <th>Romanization</th>\n              <th>English</th>\n            </tr>\n          </thead>\n          <tbody id=\"ref-phrases\"></tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n\n\n",
  "fontOptions": "            <option value=\"'Noto Sans Khmer',system-ui,sans-serif\">Noto Sans Khmer</option>\n            <option value=\"'Noto Serif Khmer',serif\">Noto Serif Khmer</option>\n            <option value=\"'Battambang',serif\">Battambang</option>\n            <option value=\"'Hanuman',serif\">Hanuman</option>\n            <option value=\"'Moul',serif\">Moul</option>\n",
  "csvSample": "            <tr>\n              <td>water</td>\n              <td class=\"kh\">ទឹក</td>\n              <td>tuk</td>\n              <td>drinking water</td>\n            </tr>\n            <tr>\n              <td>house</td>\n              <td class=\"kh\"></td>\n              <td>pteah</td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>country</td>\n              <td class=\"kh\">ស្រុក</td>\n              <td></td>\n              <td>also means village</td>\n            </tr>\n",
  "studyPresets": [
    {
      "id": "__cons__",
      "label": "🔤 Consonants"
    },
    {
      "id": "__depvow__",
      "label": "🔡 Dep. Vowels"
    },
    {
      "id": "__indvow__",
      "label": "🔠 Ind. Vowels"
    },
    {
      "id": "__nums__",
      "label": "🔢 Numbers (0–100)"
    }
  ]
};

 var ctx;
 function el(id){return document.getElementById(id);}
 function esc(value){return String(value||'').replace(/[&<>"']/g,function(ch){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch];});}
 function speakKhmer(text){ctx.speak(text);}
 function speakPortuguese(text){ctx.speak(text);}
 function answerMatch(a,b){return ctx.answerMatch(a,b);}
 function dictNorm(s){return String(s||'').normalize('NFKC').trim().toLowerCase().replace(/\s+/g,' ');}
 var allRows=[];function getWordCategories(r){return Array.isArray(r.category)?r.category:String(r.category||'').split(',');}
 function dictIsKhmer(s){return pack.detectLanguage(s);}
 function normSearch(s){return dictNorm(s);}
 function fuzzySubseq(q,s){var i=0;for(var ch of s)if(ch===q[i])i++;return i===q.length;}
 function _srchClear(a,b){ctx.clearSearch(a,b);}
    function buildReferencePages() {
      var allCons = [{
          kh: 'ក',
          ro: 'k',
          s: 1
        }, {
          kh: 'ខ',
          ro: 'kh',
          s: 1
        }, {
          kh: 'គ',
          ro: 'k/g',
          s: 2
        }, {
          kh: 'ឃ',
          ro: 'kh',
          s: 2
        }, {
          kh: 'ង',
          ro: 'ng',
          s: 2
        },
        {
          kh: 'ច',
          ro: 'ch',
          s: 1
        }, {
          kh: 'ឆ',
          ro: 'chh',
          s: 1
        }, {
          kh: 'ជ',
          ro: 'ch/j',
          s: 2
        }, {
          kh: 'ឈ',
          ro: 'chh',
          s: 2
        }, {
          kh: 'ញ',
          ro: 'ny',
          s: 2
        },
        {
          kh: 'ដ',
          ro: 'd',
          s: 1
        }, {
          kh: 'ឋ',
          ro: 'th',
          s: 1
        }, {
          kh: 'ឌ',
          ro: 'd',
          s: 2
        }, {
          kh: 'ឍ',
          ro: 'th',
          s: 2
        }, {
          kh: 'ណ',
          ro: 'n',
          s: 1
        },
        {
          kh: 'ត',
          ro: 't',
          s: 1
        }, {
          kh: 'ថ',
          ro: 'th',
          s: 1
        }, {
          kh: 'ទ',
          ro: 't/d',
          s: 2
        }, {
          kh: 'ធ',
          ro: 'th',
          s: 2
        }, {
          kh: 'ន',
          ro: 'n',
          s: 2
        },
        {
          kh: 'ប',
          ro: 'b/p',
          s: 1
        }, {
          kh: 'ផ',
          ro: 'ph',
          s: 1
        }, {
          kh: 'ព',
          ro: 'p/b',
          s: 2
        }, {
          kh: 'ភ',
          ro: 'ph',
          s: 2
        }, {
          kh: 'ម',
          ro: 'm',
          s: 2
        },
        {
          kh: 'យ',
          ro: 'y',
          s: 2
        }, {
          kh: 'រ',
          ro: 'r',
          s: 2
        }, {
          kh: 'ល',
          ro: 'l',
          s: 2
        }, {
          kh: 'វ',
          ro: 'v/w',
          s: 2
        },
        {
          kh: 'ស',
          ro: 's',
          s: 1
        }, {
          kh: 'ហ',
          ro: 'h',
          s: 1
        }, {
          kh: 'ឡ',
          ro: 'l',
          s: 1
        }, {
          kh: 'អ',
          ro: "'",
          s: 1
        }
      ];
      var depVow = [{
          kh: '◌ា',
          s1: 'aa',
          s2: 'ie',
          ex: '"aa" like sp*a* / "ie" like p*ie*r'
        },
        {
          kh: '◌ិ',
          s1: 'e',
          s2: 'i',
          ex: '"e" like b*e*t / "i" like f*ee*t'
        },
        {
          kh: '◌ី',
          s1: 'ey',
          s2: 'ii',
          ex: '"ey" like h*ey* / "ii" like s*ee*'
        },
        {
          kh: '◌ឹ',
          s1: 'eu',
          s2: 'eu',
          ex: '"eu" like h*er* (no English match)'
        },
        {
          kh: '◌ឺ',
          s1: 'eu (long)',
          s2: 'eu (long)',
          ex: '"eu" like h*er*, held longer'
        },
        {
          kh: '◌ុ',
          s1: 'o',
          s2: 'u',
          ex: '"o" like b*oo*k / "u" like b*oo*t'
        },
        {
          kh: '◌ូ',
          s1: 'ou',
          s2: 'uu',
          ex: '"ou" like b*oa*t / "uu" like b*oo*t'
        },
        {
          kh: '◌ួ',
          s1: 'ua',
          s2: 'ua',
          ex: '"ua" like t*ou*r'
        },
        {
          kh: '◌ើ',
          s1: 'ae',
          s2: 'oe',
          ex: '"ae" like wh*ere* / "oe" like h*er*'
        },
        {
          kh: '◌ែ',
          s1: 'ae',
          s2: 'ae',
          ex: '"ae" like b*are*'
        },
        {
          kh: '◌ៃ',
          s1: 'ai',
          s2: 'e',
          ex: '"ai" like Th*ai* / "e" like b*ed*'
        },
        {
          kh: '◌ោ',
          s1: 'ao',
          s2: 'oo',
          ex: '"ao" like M*ao* / "oo" like b*oo*t'
        },
        {
          kh: '◌ំ',
          s1: 'om',
          s2: 'um',
          ex: '"om" like b*om*b / "um" like g*um*'
        },
        {
          kh: '◌ះ',
          s1: 'ah',
          s2: 'eh',
          ex: 'Short final — cut off quickly'
        },
        {
          kh: '◌ាំ',
          s1: 'am',
          s2: 'eam',
          ex: '"am" like h*um* / "eam" like st*eam*'
        }
      ];
      var indVow = [{
        kh: 'ឣ',
        ro: 'a'
      }, {
        kh: 'ឤ',
        ro: 'aa'
      }, {
        kh: 'ឥ',
        ro: 'i'
      }, {
        kh: 'ឦ',
        ro: 'ii'
      }, {
        kh: 'ឧ',
        ro: 'u'
      }, {
        kh: 'ឩ',
        ro: 'uu'
      }, {
        kh: 'ឪ',
        ro: 'uv'
      }, {
        kh: 'ឫ',
        ro: 'ri'
      }, {
        kh: 'ឬ',
        ro: 'rii'
      }, {
        kh: 'ឭ',
        ro: 'le'
      }, {
        kh: 'ឮ',
        ro: 'lee'
      }, {
        kh: 'ឯ',
        ro: 'ae'
      }, {
        kh: 'ឰ',
        ro: 'ai'
      }, {
        kh: 'ឱ',
        ro: 'ao'
      }, {
        kh: 'ឲ',
        ro: 'au'
      }];
      var nums = [{
        kh: '០',
        word: 'សូន្យ',
        n: '0'
      }, {
        kh: '១',
        word: 'មួយ',
        n: '1'
      }, {
        kh: '២',
        word: 'ពីរ',
        n: '2'
      }, {
        kh: '៣',
        word: 'បី',
        n: '3'
      }, {
        kh: '៤',
        word: 'បួន',
        n: '4'
      }, {
        kh: '៥',
        word: 'ប្រាំ',
        n: '5'
      }, {
        kh: '៦',
        word: 'ប្រាំមួយ',
        n: '6'
      }, {
        kh: '៧',
        word: 'ប្រាំពីរ',
        n: '7'
      }, {
        kh: '៨',
        word: 'ប្រាំបី',
        n: '8'
      }, {
        kh: '៩',
        word: 'ប្រាំបួន',
        n: '9'
      }, {
        kh: '១០',
        word: 'ដប័',
        n: '10'
      }, {
        kh: '២០',
        word: 'ម្ភែ',
        n: '20'
      }, {
        kh: '៣០',
        word: 'សាមសិប',
        n: '30'
      }, {
        kh: '៤០',
        word: 'សែសិប',
        n: '40'
      }, {
        kh: '៥០',
        word: 'ហាសិប',
        n: '50'
      }, {
        kh: '៦០',
        word: 'ហុកសិប',
        n: '60'
      }, {
        kh: '៧០',
        word: 'ចិតសិប',
        n: '70'
      }, {
        kh: '៨០',
        word: 'ប័ែតសិប',
        n: '80'
      }, {
        kh: '៩០',
        word: 'កែសិប',
        n: '90'
      }, {
        kh: '១០០',
        word: 'មួយរយ',
        n: '100'
      }];
      var phrases = [{
          kh: 'ជំរាបសួរ',
          ro: 'jum reap suor',
          en: 'Hello (formal)'
        }, {
          kh: 'សួស្ដី',
          ro: 'suos dei',
          en: 'Hello (informal)'
        },
        {
          kh: 'អរគុណ',
          ro: 'aw kun',
          en: 'Thank you'
        }, {
          kh: 'សូមទោស',
          ro: 'som tooh',
          en: 'Sorry / Excuse me'
        },
        {
          kh: 'មិនអីទេ',
          ro: 'min ei te',
          en: 'No problem'
        }, {
          kh: 'ជំរាបលា',
          ro: 'jum reap lea',
          en: 'Goodbye (formal)'
        },
        {
          kh: 'លា​ហើយ',
          ro: 'lea haey',
          en: 'Bye (informal)'
        }, {
          kh: 'ចាស',
          ro: 'jas',
          en: 'Yes (female polite)'
        },
        {
          kh: 'បាទ',
          ro: 'baat',
          en: 'Yes (male polite)'
        }, {
          kh: 'ទេ',
          ro: 'te',
          en: 'No'
        },
        {
          kh: 'ខ្ញុំ',
          ro: "kh'nyom",
          en: 'I / me'
        }, {
          kh: 'អ្នក',
          ro: 'neak',
          en: 'You'
        },
        {
          kh: 'ភាសាខ្មែរ',
          ro: 'phiesa khmer',
          en: 'Khmer language'
        }, {
          kh: 'ខ្ញុំមិនយល់ទេ',
          ro: "kh'nyom min yol te",
          en: "I don't understand"
        },
        {
          kh: 'ប៉ុន្មាន?',
          ro: 'ponmaan?',
          en: 'How much?'
        }, {
          kh: 'ទីនេះ',
          ro: 'ti nih',
          en: 'Here'
        }, {
          kh: 'ទីនោះ',
          ro: 'ti noh',
          en: 'There'
        }
      ];
      var phoneticGroups = [{
          header: 'Long Vowels',
          rows: [{
              sym: 'ូ / oo',
              sound: 'oo',
              ex: 'like "b*oo*t"'
            },
            {
              sym: 'ី / ii',
              sound: 'ee',
              ex: 'like "f*ee*t"'
            },
            {
              sym: 'ា / aa',
              sound: 'aa',
              ex: 'like "f*a*ther"'
            },
            {
              sym: 'ែ / ae',
              sound: 'air',
              ex: 'like "*air*"'
            },
            {
              sym: 'ួ / ua',
              sound: 'oo-a',
              ex: 'like "t*ou*r"'
            }
          ]
        },
        {
          header: 'Short Vowels',
          rows: [{
              sym: 'ុ / o',
              sound: 'oo',
              ex: 'like "b*oo*k"'
            },
            {
              sym: 'ិ / e',
              sound: 'eh',
              ex: 'like "b*e*t"'
            },
            {
              sym: 'ឹ / eu',
              sound: 'er',
              ex: 'like "h*er*" (no lip rounding)'
            },
            {
              sym: 'ំ / om',
              sound: 'um',
              ex: 'like "g*um*" (nasal)'
            }
          ]
        },
        {
          header: 'Consonants — Stops',
          rows: [{
              sym: 'ក / k',
              sound: 'k',
              ex: 'hard "k" like "k*e*y"'
            },
            {
              sym: 'ប / p',
              sound: 'p/b',
              ex: '"p" at start, unreleased at end'
            },
            {
              sym: 'ត / t',
              sound: 't',
              ex: 'like "*t*op"'
            },
            {
              sym: 'ដ / d',
              sound: 'd',
              ex: 'like "*d*oor"'
            },
            {
              sym: 'ច / ch',
              sound: 'ch',
              ex: 'like "*ch*air"'
            }
          ]
        },
        {
          header: 'Consonants — Nasals & Approx.',
          rows: [{
              sym: 'ម / m',
              sound: 'm',
              ex: 'like "*m*oon"'
            },
            {
              sym: 'ន / n',
              sound: 'n',
              ex: 'like "*n*ow"'
            },
            {
              sym: 'ង / ng',
              sound: 'ng',
              ex: 'like "ri*ng*" — CAN start syllables!'
            },
            {
              sym: 'ញ / ny',
              sound: 'ny',
              ex: 'like "ca*ny*on"'
            },
            {
              sym: 'យ / y',
              sound: 'y',
              ex: 'like "*y*es"'
            },
            {
              sym: 'រ / r',
              sound: 'r',
              ex: 'soft "r" — sometimes silent at end'
            }
          ]
        },
        {
          header: 'Consonants — Fricatives',
          rows: [{
              sym: 'ស / s',
              sound: 's',
              ex: 'always sharp "s" like "*s*un" — never "z"'
            },
            {
              sym: 'ហ / h',
              sound: 'h',
              ex: 'like "*h*ello"'
            },
            {
              sym: 'វ / w',
              sound: 'w/v',
              ex: 'between English "w" and "v"'
            }
          ]
        },
        {
          header: 'Aspirated Consonants',
          rows: [{
              sym: 'ខ / kh',
              sound: 'kh',
              ex: '"k" + puff of air like "*kh*aki"'
            },
            {
              sym: 'ថ / th',
              sound: 'th',
              ex: 'NOT English "the" — say "t" + air, like "*T*hai"'
            },
            {
              sym: 'ភ / ph',
              sound: 'ph',
              ex: 'NOT "f" — say "p" + air, like "*P*hilip"'
            },
            {
              sym: 'ឆ / chh',
              sound: 'chh',
              ex: '"ch" + puff of air'
            }
          ]
        }
      ];

      function buildGrid5(id, items) {
        var g = el(id);
        if (!g) return;
        g.innerHTML = '';
        items.forEach(function(c) {
          var card = document.createElement('div');
          card.className = 'ref-card';
          var s1 = c.s === 1 ? '<div class="ref-ro" style="color:rgba(165,180,252,.5);font-size:.56rem">S1</div>' : c.s === 2 ? '<div class="ref-ro" style="color:rgba(192,132,252,.5);font-size:.56rem">S2</div>' : '';
          card.innerHTML = '<div class="ref-pair" lang="km"><span class="ref-kh">' + c.kh + '</span><span class="ref-kh-cur" title="Cursive (Moul)">' + c.kh + '</span></div><div class="ref-ro">' + c.ro + '</div>' + s1;
          (function(kh) {
            card.addEventListener('click', function() {
              speakKhmer(kh);
            });
          })(c.kh);
          card.title = 'Tap to hear';
          g.appendChild(card);
        });
      }
      window._refCons = allCons;
      window._refDepVow = depVow;
      window._refIndVow = indVow;
      window._refNums = nums;
      buildGrid5('ref-all-cons', allCons);
      var dvb = el('ref-dep-vowels');
      if (dvb) {
        dvb.innerHTML = '';
        depVow.forEach(function(v) {
          var tr = document.createElement('tr');
          // 9.0.7: tap to hear. A dependent vowel is voiced on a carrier consonant:
          // S1 = Series-1 ក (k-a), S2 = Series-2 គ (k-o). The symbol cell plays S1.
          var vS1 = v.kh.replace(/◌/g, 'ក'), vS2 = v.kh.replace(/◌/g, 'គ');
          tr.innerHTML = '<td class="vt-kh vt-play" lang="km"><span class="ref-kh">' + v.kh + '</span><span class="ref-kh-example">' + v.kh.replace(/◌/g, 'ក') + '</span></td>' +
            '<td class="vt-ro vt-play vt-s1" title="Tap to hear S1 (' + vS1 + ')">' + v.s1 + ' <span class="vt-spk">🔊</span></td>' +
            '<td class="vt-ro' + (v.s2 ? ' vt-play vt-s2' : '') + '"' + (v.s2 ? ' title="Tap to hear S2 (' + vS2 + ')"' : '') + '>' + (v.s2 || '—') + (v.s2 ? ' <span class="vt-spk">🔊</span>' : '') + '</td>' +
            '<td class="vt-ex" style="white-space:normal;line-height:1.5">' + esc(v.ex) + '</td>';
          (function(a, b) {
            tr.children[0].addEventListener('click', function() { speakKhmer(a); });
            tr.children[1].addEventListener('click', function() { speakKhmer(a); });
            if (v.s2) tr.children[2].addEventListener('click', function() { speakKhmer(b); });
          })(vS1, vS2);
          dvb.appendChild(tr);
        });
      }
      var pg = el('ref-phonetic-grid');
      if (pg) {
        pg.innerHTML = '';
        phoneticGroups.forEach(function(grp) {
          var card = document.createElement('div');
          card.className = 'ref-phonetic-card';
          var rowsHtml = grp.rows.map(function(r, idx) {
            return '<div class="rpc-row clickable" data-row="' + idx + '" title="Tap to hear"><span class="rpc-sym kh">' + r.sym.split(' / ')[0] + '</span><span class="rpc-sound">' + r.sound + '</span><span class="rpc-ex">' + esc(r.ex) + '</span></div>';
          }).join('');
          card.innerHTML = '<div class="rpc-header">' + esc(grp.header) + '</div>' + rowsHtml;
          card.querySelectorAll('.rpc-row').forEach(function(rel, i) {
            rel.style.cursor = 'pointer';
            rel.addEventListener('click', function() {
              var sym = (grp.rows[i].sym || '').split(' / ')[0].trim();
              if (/[\u1780-\u17FF]/.test(sym)) speakKhmer(sym);
            });
          });
          pg.appendChild(card);
        });
      }
      var ivg = el('ref-ind-vowels');
      if (ivg) {
        ivg.innerHTML = '';
        indVow.forEach(function(v) {
          var card = document.createElement('div');
          card.className = 'ref-card';
          card.innerHTML = '<div class="ref-pair" lang="km"><span class="ref-kh">' + v.kh + '</span><span class="ref-kh-cur" title="Cursive (Moul)">' + v.kh + '</span></div><div class="ref-ro">' + v.ro + '</div>';
          (function(kh) {
            card.addEventListener('click', function() {
              speakKhmer(kh);
            });
          })(v.kh);
          card.title = 'Tap to hear';
          ivg.appendChild(card);
        });
      }
      var ng = el('ref-numbers');
      if (ng) {
        ng.innerHTML = '';
        nums.forEach(function(n) {
          var card = document.createElement('div');
          card.className = 'ref-card';
          card.innerHTML = '<div class="ref-kh kh">' + n.kh + '</div>' + (n.word ? '<div class="ref-word kh">' + n.word + '</div>' : '') + '<div class="ref-ro">' + n.n + '</div>';
          (function(kh) {
            card.addEventListener('click', function() {
              speakKhmer(kh);
            });
          })(n.kh);
          card.title = 'Tap to hear';
          ng.appendChild(card);
        });
      }
      var pb = el('ref-phrases');
      if (pb) {
        pb.innerHTML = '';
        phrases.forEach(function(p) {
          var tr = document.createElement('tr');
          tr.style.cursor = 'pointer';
          tr.title = 'Tap to hear phrase';
          tr.innerHTML = '<td class="vt-kh kh" style="min-width:120px">' + p.kh + ' 🔊</td><td class="vt-ro">' + p.ro + '</td><td class="vt-ex">' + esc(p.en) + '</td>';
          tr.addEventListener('click', function() {
            speakKhmer(p.kh.split('/')[0].trim());
          });
          pb.appendChild(tr);
        });
      }
      renderSingKhmer();
    }


    var SING_KHMER_WORDS = [{
        en: 'to go',
        sk: 'tv'
      },
      {
        en: 'at',
        sk: 'nv'
      },
      {
        en: 'we',
        sk: 'yg'
      },
      {
        en: 'she/her him/he',
        sk: 'kort'
      },
      {
        en: 'difficult',
        sk: 'pibak'
      },
      {
        en: 'strong',
        sk: 'klang'
      },
      {
        en: 'although',
        sk: 'tous3'
      },
      {
        en: 'in order to',
        sk: 'derm3'
      },
      {
        en: 'excellent',
        sk: 'pukea'
      },
      {
        en: 'playing / hangout',
        sk: 'lg'
      },
      {
        en: 'sleep',
        sk: 'keng/kg'
      },
      {
        en: 'night / morning',
        sk: 'yub / prik'
      },
      {
        en: 'day time',
        sk: 'pel tngai'
      },
      {
        en: 'day',
        sk: 'tngai / ngai'
      },
      {
        en: 'since',
        sk: 'tang pi'
      },
      {
        en: 'from',
        sk: 'pi'
      },
      {
        en: 'truth / true',
        sk: 'pit'
      },
      {
        en: 'no',
        sk: 'ot'
      },
      {
        en: 'to know',
        sk: 'dg'
      },
      {
        en: 'ask',
        sk: 'sur'
      },
      {
        en: 'question',
        sk: 'somnur'
      },
      {
        en: 'sick',
        sk: 'chue'
      },
      {
        en: 'believe',
        sk: 'jue'
      },
      {
        en: 'hear',
        sk: 'lue'
      },
      {
        en: 'listen',
        sk: 'sdab'
      },
      {
        en: 'forget',
        sk: 'plex'
      },
      {
        en: 'stop',
        sk: 'chob'
      },
      {
        en: 'finish',
        sk: 'job'
      },
      {
        en: 'different',
        sk: 'pseng'
      },
      {
        en: 'word',
        sk: 'peak'
      },
      {
        en: 'place / put',
        sk: 'dak'
      },
      {
        en: 'leave',
        sk: 'jenh'
      },
      {
        en: 'eat',
        sk: 'nham'
      },
      {
        en: 'what',
        sk: 'ey'
      },
      {
        en: 'buy',
        sk: 'tinh / ting'
      },
      {
        en: 'learn',
        sk: 'rean / rien'
      },
      {
        en: 'amplifier',
        sk: 'mg'
      },
      {
        en: 'wait',
        sk: 'Jam'
      },
      {
        en: 'fun / happy',
        sk: 'sby jit / sby'
      },
      {
        en: 'sad',
        sk: 'sday'
      },
      {
        en: 'can / yes /',
        sk: 'Ban'
      },
      {
        en: 'what',
        sk: 'mix'
      },
      {
        en: 'no',
        sk: 'te'
      },
      {
        en: 'person',
        sk: 'nek'
      },
      {
        en: 'currently',
        sk: 'phg / pg'
      },
      {
        en: 'miss',
        sk: 'nirk / nik'
      },
      {
        en: 'find / search',
        sk: 'rk'
      },
      {
        en: 'give',
        sk: 'oy'
      },
      {
        en: 'will',
        sk: 'ng'
      },
      {
        en: 'where',
        sk: 'na'
      },
      {
        en: 'want',
        sk: 'jg'
      },
      {
        en: 'anything',
        sk: 'kor ban'
      },
      {
        en: 'all',
        sk: 'sos'
      },
      {
        en: 'me / i',
        sk: 'nh'
      },
      {
        en: 'already / and',
        sk: 'hz'
      },
      {
        en: 'only',
        sk: 'kron dae'
      },
      {
        en: 'but',
        sk: 'tea'
      },
      {
        en: 'also',
        sk: 'dae'
      },
      {
        en: 'also',
        sk: 'pg'
      },
      {
        en: '',
        sk: 'jos'
      },
      {
        en: 'broken',
        sk: 'khouch / khoch'
      },
      {
        en: 'like / alike',
        sk: 'doch'
      },
      {
        en: 'very',
        sk: 'nas'
      },
      {
        en: 'pretty',
        sk: 'sart'
      },
      {
        en: 'really',
        sk: 'Men'
      },
      {
        en: 'cool',
        sk: 'loy'
      },
      {
        en: 'that / which',
        sk: 'del'
      },
      {
        en: 'back (come)',
        sk: 'vinh'
      },
      {
        en: 'close',
        sk: 'jit'
      },
      {
        en: '',
        sk: 'kur oy'
      },
      {
        en: 'call',
        sk: 'hav'
      },
      {
        en: 'tired',
        sk: 'hort'
      },
      {
        en: 'love',
        sk: 'slanh / sl'
      },
      {
        en: 'eachother',
        sk: 'knea'
      },
      {
        en: 'go back',
        sk: 'tv vinh'
      },
      {
        en: 'come back',
        sk: 'tv mk'
      },
      {
        en: 'come',
        sk: 'mor'
      },
      {
        en: 'hit',
        sk: 'vei'
      },
      {
        en: 'who?',
        sk: 'na ke'
      },
      {
        en: 'have',
        sk: 'mean'
      },
      {
        en: 'mad',
        sk: 'khg'
      },
      {
        en: 'scared',
        sk: 'klach'
      },
      {
        en: 'first',
        sk: 'sin'
      },
      {
        en: 'because',
        sk: 'prous'
      },
      {
        en: 'now',
        sk: 'lv / alv'
      },
      {
        en: 'doubt',
        sk: 'songsei'
      },
      {
        en: 'bf / gf',
        sk: 'ss / sngsa'
      },
      {
        en: 'them / they',
        sk: 'puk kort'
      },
      {
        en: 'they / them',
        sk: 'puk ke'
      },
      {
        en: 'yourself / themselves',
        sk: 'eng'
      },
      {
        en: 'to know',
        sk: 'skol'
      },
      {
        en: 'siblings / relatives',
        sk: "p'o"
      },
      {
        en: 'what',
        sk: 'mix jg'
      },
      {
        en: 'what',
        sk: 'ei ke'
      },
      {
        en: 'when',
        sk: 'pel'
      },
      {
        en: 'next time',
        sk: 'lek kroy'
      },
      {
        en: 'shy',
        sk: 'ean'
      },
      {
        en: 'whatever',
        sk: 'pdoy'
      },
      {
        en: 'mom',
        sk: 'mak'
      },
      {
        en: 'dad',
        sk: 'pa'
      },
      {
        en: 'little bit / little more',
        sk: 'tic tt'
      },
      {
        en: 'little bit / little more',
        sk: 'tix tt'
      },
      {
        en: 'more',
        sk: 'tt'
      },
      {
        en: 'face',
        sk: 'mok'
      },
      {
        en: 'possible',
        sk: 'tver ban'
      },
      {
        en: 'good',
        sk: 'laor'
      },
      {
        en: 'not good',
        sk: 'ot laor'
      },
      {
        en: 'endure',
        sk: 'susu'
      },
      {
        en: 'please / request',
        sk: 'som'
      },
      {
        en: 'one more',
        sk: 'muy tt'
      },
      {
        en: 'Elder Eav',
        sk: 'steav'
      },
      {
        en: 'cringe',
        sk: 'jor'
      },
      {
        en: 'what happened?',
        sk: 'kert ei'
      },
      {
        en: 'close to arriving',
        sk: 'jit dol'
      },
      {
        en: 'arrive',
        sk: 'mk dol'
      },
      {
        en: 'already / and',
        sk: 'hz'
      },
      {
        en: 'sleep',
        sk: 'dek'
      },
      {
        en: 'follow',
        sk: 'tam'
      },
      {
        en: 'to do',
        sk: 'tver'
      },
      {
        en: 'take',
        sk: 'yk'
      },
      {
        en: 'walk',
        sk: 'Der'
      },
      {
        en: 'one person',
        sk: 'mnek'
      },
      {
        en: 'this',
        sk: 'nis'
      },
      {
        en: 'that',
        sk: 'nos'
      },
      {
        en: 'long',
        sk: 'yu'
      },
      {
        en: 'amplifier',
        sk: 'mes'
      },
      {
        en: 'hour',
        sk: 'mong / mrg'
      },
      {
        en: 'to wear',
        sk: 'pek'
      },
      {
        en: 'word',
        sk: 'peak'
      },
      {
        en: 'shirt',
        sk: 'av'
      },
      {
        en: 'pant',
        sk: 'kav'
      },
      {
        en: 'color',
        sk: 'por'
      },
      {
        en: 'all',
        sk: 'sos'
      },
      {
        en: 'skin / meat',
        sk: 'sach'
      },
      {
        en: 'that',
        sk: 'tha / ta'
      },
      {
        en: 'a lot',
        sk: 'jrern'
      },
      {
        en: 'busy',
        sk: 'rvol'
      },
      {
        en: 'wet',
        sk: 'serm'
      },
      {
        en: 'laugh',
        sk: 'serch'
      },
      {
        en: 'used to',
        sk: 'thlerp'
      },
      {
        en: 'dont',
        sk: 'Kom'
      },
      {
        en: 'understand',
        sk: 'yol'
      },
      {
        en: 'with',
        sk: 'jmuy'
      },
      {
        en: 'correct',
        sk: 'trov / trv'
      },
      {
        en: 'see / look',
        sk: 'khernh'
      },
      {
        en: 'watch',
        sk: 'merl'
      },
      {
        en: 'feeling',
        sk: 'ahrom'
      },
      {
        en: 'of',
        sk: 'rbos / bos'
      },
      {
        en: 'people',
        sk: 'mnus'
      },
      {
        en: 'in',
        sk: 'kng'
      },
      {
        en: 'fast',
        sk: 'luen'
      },
      {
        en: 'go up / build up',
        sk: 'lerg'
      },
      {
        en: 'is like',
        sk: 'doch jea'
      },
      {
        en: 'care',
        sk: 'kvol'
      },
      {
        en: 'work',
        sk: 'trov ka'
      },
      {
        en: 'need',
        sk: 'tver ka'
      },
      {
        en: 'happen / cause to happen',
        sk: 'kert ot'
      },
      {
        en: 'market',
        sk: 'psa'
      },
      {
        en: 'not necessary',
        sk: 'min bach'
      },
      {
        en: 'to',
        sk: 'dol'
      },
      {
        en: 'easy',
        sk: 'srol'
      },
      {
        en: 'before',
        sk: 'mun'
      },
      {
        en: 'if',
        sk: 'ber'
      },
      {
        en: 'meet',
        sk: 'joub'
      },
      {
        en: 'place',
        sk: 'k\'leng'
      },
      {
        en: 'where?',
        sk: 'mean na'
      },
      {
        en: 'tell',
        sk: 'brb'
      },
      {
        en: 'new',
        sk: 'thmey/ t\'mey'
      },
      {
        en: 'old',
        sk: 'jas'
      },
      {
        en: 'lazy',
        sk: 'kill'
      },
      {
        en: 'always / forever',
        sk: 'rhot'
      },
      {
        en: 'haven\'t for a while',
        sk: 'kha'
      },
      {
        en: 'it',
        sk: 'via / vea'
      },
      {
        en: 'amplifier',
        sk: 'tas'
      },
      {
        en: 'amplifier',
        sk: 'ter'
      },
      {
        en: 'hungry',
        sk: 'klean'
      },
      {
        en: 'dead',
        sk: 'ngoub'
      },
      {
        en: 'dead',
        sk: 'slab'
      },
      {
        en: 'lie',
        sk: 'kohok'
      },
      {
        en: 'normal',
        sk: 'tmd'
      },
      {
        en: 'thank you',
        sk: 'arkun'
      },
      {
        en: 'alright / already',
        sk: 'ng hx'
      },
      {
        en: 'swallow',
        sk: 'leb'
      },
      {
        en: 'medicine',
        sk: 'thnam / tnam'
      },
      {
        en: 'not yet',
        sk: 'ot torn'
      },
      {
        en: 'just barely',
        sk: 'minh'
      },
      {
        en: 'help',
        sk: 'jouy'
      },
      {
        en: '(last)( night',
        sk: 'yub (menh)'
      },
      {
        en: 'because',
        sk: 'doy sa / douy sa'
      },
      {
        en: 'money',
        sk: 'luy'
      },
      {
        en: 'think',
        sk: 'kit'
      },
      {
        en: 'thinking',
        sk: 'ka kit'
      },
      {
        en: 'save',
        sk: 'tok'
      },
      {
        en: 'delicious',
        sk: 'chnganh'
      },
      {
        en: 'wonder',
        sk: 'chngol'
      },
      {
        en: 'far',
        sk: 'chngay'
      },
      {
        en: 'sorry',
        sk: 'somtus'
      },
      {
        en: 'just did',
        sk: 'terb'
      }
    ];


    // Case-, diacritic-, apostrophe- and spacing-insensitive form used by all fuzzy searches.
    // Extra shorthand entries (added only when not already in the base list).
    (function() {
      var more = [
      { en: 'eat (rice)', sk: 'nham bai' },
      { en: 'hot', sk: 'kdav' },
      { en: 'cold', sk: 'trojeak' },
      { en: 'beautiful', sk: 'saat' },
      { en: 'hello', sk: 'jumreap sur / jrs' },
      { en: 'how are you / well', sk: 'sok sabay / ss' },
      { en: 'goodbye', sk: 'lea sen hz' },
      { en: "it's nothing / you're welcome", sk: 'ot ey te' },
      { en: 'cannot', sk: 'ot ban' },
      { en: 'expensive', sk: 'tlai' },
      { en: 'cheap', sk: 'thok' },
      { en: 'house', sk: 'pteah' },
      { en: 'today', sk: 'tngai nis' },
      { en: 'yesterday', sk: 'msel minh' },
      { en: 'tomorrow', sk: 'saek' },
      { en: 'now', sk: 'ylov / lv nis' },
      { en: 'sick', sk: 'chheu' },
      { en: 'teacher', sk: 'nek kru' },
      { en: 'school', sk: 'sala' },
      { en: 'water', sk: 'tuk' },
      { en: 'rice', sk: 'bai' },
      { en: 'mother', sk: 'mae / mdai' },
      { en: 'father', sk: 'pa / ovpuk' },
      { en: 'older sibling', sk: 'bong' },
      { en: 'younger sibling', sk: 'oun' },
      { en: 'friend', sk: 'mit' },
      { en: 'where are you going?', sk: 'tv na' },
      { en: 'where from?', sk: 'mk pi na' },
      { en: "don't have", sk: 'kmean' },
      { en: 'fast', sk: 'luen' },
      { en: 'slow', sk: 'yerd' },
      { en: 'big', sk: 'thom' },
      { en: 'small', sk: 'touch' },
      { en: 'a little', sk: 'bontech' },
      { en: 'good', sk: 'laor / l' },
      { en: 'bad', sk: 'akrak' },
      { en: 'happy', sk: 'sabay' },
      { en: 'sad', sk: 'pruy' },
      { en: 'who', sk: 'nek na' },
      { en: 'how much', sk: 'ponman' },
      { en: 'when', sk: 'pel na' },
      { en: 'why', sk: 'het ey' },
      { en: 'how', sk: 'yang mech / ym' },
      { en: 'okay', sk: 'ok / ban' }
      ];
      var have = {};
      SING_KHMER_WORDS.forEach(function(w) { have[String(w.sk).toLowerCase().trim()] = 1; });
      more.forEach(function(w) { if (!have[w.sk.toLowerCase()]) SING_KHMER_WORDS.push(w); });
    })();

    (function() { var more = [{"en": "have you eaten yet?", "sk": "nham bai nv"}, {"en": "what are you doing?", "sk": "tver ey ng"}, {"en": "where are you now?", "sk": "nv na ng"}, {"en": "are you home yet?", "sk": "dol pteah nv"}, {"en": "I am on my way", "sk": "kompong tv"}, {"en": "wait a little", "sk": "jam tich"}, {"en": "wait for me", "sk": "jam nhom pg"}, {"en": "see you tomorrow", "sk": "jub knea saek"}, {"en": "see you later", "sk": "jub knea pel kroy"}, {"en": "call me", "sk": "call mk nhom"}, {"en": "send me a message", "sk": "chat mk nhom"}, {"en": "send your location", "sk": "pnher ti tang"}, {"en": "reply to me", "sk": "reply mk pg"}, {"en": "I miss you", "sk": "nik nas"}, {"en": "miss you too", "sk": "nik dae"}, {"en": "love you", "sk": "srolanh oun"}, {"en": "good night", "sk": "reatrey sousdey"}, {"en": "sweet dreams", "sk": "soben laor"}, {"en": "take care", "sk": "thae khluon pg"}, {"en": "get well soon", "sk": "chab chea na"}, {"en": "drive carefully", "sk": "ber lan prong prayat"}, {"en": "no worries", "sk": "min ey te"}, {"en": "just kidding", "sk": "leng te"}, {"en": "really?", "sk": "men ey"}, {"en": "for real", "sk": "men ten"}, {"en": "why like that?", "sk": "het ey jg"}, {"en": "what happened?", "sk": "mean ey kert lerng"}, {"en": "I do not understand", "sk": "ot yol te"}, {"en": "say it again", "sk": "niyeay mdong tiet"}, {"en": "a little busy", "sk": "rovul tich"}, {"en": "busy now", "sk": "rovul yl"}, {"en": "free now", "sk": "tumneng yl"}, {"en": "I am tired", "sk": "hot nas"}, {"en": "sleepy", "sk": "ngoy keng"}, {"en": "hungry", "sk": "khlean bai"}, {"en": "thirsty", "sk": "srek tuk"}, {"en": "eat first", "sk": "nham sen"}, {"en": "sleep first", "sk": "keng sen"}, {"en": "going home", "sk": "tv pteah"}, {"en": "come here", "sk": "mk nis"}, {"en": "go together", "sk": "tv jom knea"}, {"en": "come with me", "sk": "mk jom nhom"}, {"en": "have arrived", "sk": "dol hz"}, {"en": "not yet arrived", "sk": "ot ton dol"}, {"en": "a little late", "sk": "yut tich"}, {"en": "sorry I am late", "sk": "som tos yut"}, {"en": "what time?", "sk": "mong man"}, {"en": "where shall we meet?", "sk": "jub nv na"}, {"en": "can you help?", "sk": "juoy ban ot"}, {"en": "help me please", "sk": "juoy nhom pg"}, {"en": "thank you so much", "sk": "orkun chraen"}, {"en": "it is okay", "sk": "ot ey te"}, {"en": "how much is it?", "sk": "tlai man"}, {"en": "too expensive", "sk": "tlai pek"}, {"en": "discount please", "sk": "jos tlai tich"}, {"en": "already paid", "sk": "bong loy hz"}, {"en": "send money", "sk": "pnher loy"}, {"en": "no money", "sk": "ot mean loy"}, {"en": "out of battery", "sk": "os thmor"}, {"en": "bad internet", "sk": "net ot laor"}, {"en": "no signal", "sk": "ot mean sewa"}, {"en": "I will reply later", "sk": "jam reply pel kroy"}, {"en": "I am working", "sk": "kompong tver ka"}, {"en": "I am studying", "sk": "kompong rean"}, {"en": "I am in class", "sk": "nv knong thnak"}, {"en": "day off", "sk": "thngai somrak"}, {"en": "let us eat", "sk": "tos nham bai"}, {"en": "let us go", "sk": "tos tv"}, {"en": "what do you want to eat?", "sk": "jong nham ey"}, {"en": "delicious", "sk": "chnganh nas"}, {"en": "not spicy", "sk": "ot hel"}, {"en": "a little spicy", "sk": "hel tich"}, {"en": "raining", "sk": "phleang"}, {"en": "very hot", "sk": "kdav nas"}, {"en": "I am okay", "sk": "nhom sok sabay"}, {"en": "how about you?", "sk": "jos nea"}, {"en": "same here", "sk": "doch knea"}, {"en": "me too", "sk": "nhom dae"}, {"en": "not me", "sk": "ot men nhom"}, {"en": "who is that?", "sk": "nea na ng"}, {"en": "do not forget", "sk": "kom phlech na"}, {"en": "remember me", "sk": "kom phlech nhom"}, {"en": "promise?", "sk": "sanya ot"}, {"en": "sure", "sk": "chbas hz"}, {"en": "maybe", "sk": "brahael"}, {"en": "next time", "sk": "lerk kroy"}, {"en": "no problem", "sk": "ot mean banha"}, {"en": "I am sorry", "sk": "som tos na"}, {"en": "happy birthday", "sk": "rikreay thngai komnaet"}, {"en": "good luck", "sk": "som oy mean samnang"}, {"en": "okay then", "sk": "jg ban"}, {"en": "why not?", "sk": "het ey ot ban"}, {"en": "do not be angry", "sk": "kom kheng na"}, {"en": "are you angry?", "sk": "kheng men"}, {"en": "funny", "sk": "kamblaeng"}, {"en": "so cute", "sk": "cute nas"}, {"en": "beautiful", "sk": "sart nas"}, {"en": "handsome", "sk": "sangha"}, {"en": "very good", "sk": "laor nas"}, {"en": "not bad", "sk": "ot akrak te"}, {"en": "send a photo", "sk": "pnher rup"}, {"en": "congratulations", "sk": "orb orsator"}]; var have = {}; SING_KHMER_WORDS.forEach(function(w) { have[w.sk.toLowerCase()] = true; }); more.forEach(function(w) { if (!have[w.sk.toLowerCase()]) { have[w.sk.toLowerCase()] = true; SING_KHMER_WORDS.push(w); } }); })();

    // 9.0.5: song terms, musical vocabulary and poetic lyric phrases
    (function() {
      var more = [
        { en: 'song', sk: 'chompeng' },
        { en: 'to sing', sk: 'chrieng' },
        { en: 'singer', sk: 'nek chrieng' },
        { en: 'music', sk: 'tontrey' },
        { en: 'musician', sk: 'tontrey kor' },
        { en: 'melody / tune', sk: 'bot pleng' },
        { en: 'lyrics / song words', sk: 'piek chrieng' },
        { en: 'rhythm / beat', sk: 'chongvak' },
        { en: 'voice', sk: 'samleng' },
        { en: 'to dance', sk: 'rom' },
        { en: 'traditional circle dance', sk: 'romvong' },
        { en: 'drum', sk: 'skor' },
        { en: 'guitar', sk: 'ki-ta' },
        { en: 'chorus / refrain', sk: 'bot ban' },
        { en: 'verse / stanza', sk: 'khlong' },
        { en: 'poem / poetry', sk: 'kamnap' },
        { en: 'hymn / sacred song', sk: 'tumnuk tumkeng' },
        { en: 'loud', sk: 'klang' },
        { en: 'soft / gentle', sk: 'tun' },
        { en: 'beautiful', sk: 'pirus' },
        { en: 'to listen', sk: 'sdap' },
        { en: 'to play (music)', sk: 'leng' },
        { en: 'heart', sk: 'besdong' },
        { en: 'my beloved', sk: 'oun samlanh' },
        { en: 'love song', sk: 'chompeng sneha' },
        { en: 'I miss you', sk: 'nirk oun' },
        { en: 'forever', sk: 'rohot' },
        { en: 'moonlight', sk: 'pon-leu khae' },
        { en: 'tears', sk: 'tuk pnek' },
        { en: 'dream', sk: 'sobin' },
        { en: 'sing together', sk: 'chrieng chea muoy knea' },
        { en: 'to praise / worship', sk: 'sorsor' },
        // 9.0.7 additions
        { en: 'water', sk: 'tuk' },
        { en: 'rice / food', sk: 'bai' },
        { en: 'to eat', sk: 'nham' },
        { en: 'to drink', sk: 'phek' },
        { en: 'to sleep', sk: 'keng / kg' },
        { en: 'to wake up', sk: 'pnheak' },
        { en: 'tired', sk: 'hot' },
        { en: 'hungry', sk: 'klean' },
        { en: 'thirsty', sk: 'srek tuk' },
        { en: 'hot (weather)', sk: 'kdav' },
        { en: 'cold', sk: 'trojeak' },
        { en: 'rain', sk: 'plieng' },
        { en: 'sun', sk: 'preah atit' },
        { en: 'moon', sk: 'khae' },
        { en: 'star', sk: 'pkay' },
        { en: 'sky', sk: 'mekh' },
        { en: 'flower', sk: 'pka' },
        { en: 'tree', sk: 'deum chheu' },
        { en: 'river', sk: 'tonle' },
        { en: 'sea', sk: 'samot' },
        { en: 'house / home', sk: 'pteah' },
        { en: 'road / way', sk: 'plov' },
        { en: 'car', sk: 'lan' },
        { en: 'motorbike', sk: 'moto' },
        { en: 'friend', sk: 'mit' },
        { en: 'family', sk: 'kruosar' },
        { en: 'child', sk: 'kon' },
        { en: 'older sibling', sk: 'bong' },
        { en: 'younger sibling', sk: 'oun' },
        { en: 'morning', sk: 'pel prik' },
        { en: 'evening', sk: 'pel lngeach' },
        { en: 'tomorrow', sk: 'saek' },
        { en: 'yesterday', sk: 'msel minh' },
        { en: 'now', sk: 'ylov / lv' },
        { en: 'later', sk: 'pel kroy' },
        { en: 'always', sk: 'rohot' },
        { en: 'never', sk: 'min dael' },
        { en: 'maybe', sk: 'brohel' },
        { en: 'really / truly', sk: 'pit jea' },
        { en: 'very', sk: 'nas / klang nas' },
        { en: 'thank you', sk: 'arkun' },
        { en: 'sorry', sk: 'som tos / somtus' },
        { en: 'please', sk: 'som' },
        { en: 'see you later', sk: 'jub knea pel kroy' },
        { en: 'good night', sk: 'reatrey sour sdey' },
        { en: 'take care', sk: 'thae khluon' },
        { en: 'to understand', sk: 'yol' },
        { en: 'to know', sk: 'deng / dg' },
        { en: 'to think', sk: 'kit' },
        { en: 'to wait', sk: 'jam' },
        { en: 'to help', sk: 'juoy' },
        { en: 'to work', sk: 'tver ka' },
        { en: 'to study / learn', sk: 'rien' },
        { en: 'to teach', sk: 'bongrien' },
        { en: 'to buy', sk: 'tinh' },
        { en: 'to sell', sk: 'luek' },
        { en: 'expensive', sk: 'tlai' },
        { en: 'cheap', sk: 'thok' },
        { en: 'delicious', sk: 'chnganh' },
        { en: 'beautiful', sk: 'saat' },
        { en: 'handsome', sk: 'sang' },
        { en: 'funny', sk: 'kom plaeng' },
        { en: 'to laugh', sk: 'sarch' },
        { en: 'to cry', sk: 'yom' },
        { en: 'to be afraid', sk: 'klach' },
        { en: 'to be angry', sk: 'kheng' },
        { en: 'to love', sk: 'srolanh' },
        { en: 'heart / mind', sk: 'jit' },
        { en: 'happy (at heart)', sk: 'sabay jit' },
        { en: 'to remember', sk: 'cham' },
        { en: 'to forget', sk: 'plech' }
      ];
      var have = {};
      SING_KHMER_WORDS.forEach(function(w) { have[String(w.sk).toLowerCase().trim()] = 1; });
      more.forEach(function(w) { if (!have[w.sk.toLowerCase()]) { have[w.sk.toLowerCase()] = 1; SING_KHMER_WORDS.push(w); } });
    })();


    function editDist(a, b, max) {
      if (Math.abs(a.length - b.length) > max) return max + 1;
      var prev = [], cur, i, j;
      for (j = 0; j <= b.length; j++) prev[j] = j;
      for (i = 1; i <= a.length; i++) {
        cur = [i];
        var rowMin = i;
        for (j = 1; j <= b.length; j++) {
          cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
          if (cur[j] < rowMin) rowMin = cur[j];
        }
        if (rowMin > max) return max + 1;
        prev = cur;
      }
      return prev[b.length];
    }
    // Pre-normalised index, built once.
    var _skIndex = null;
    function skIndex() {
      if (_skIndex) return _skIndex;
      _skIndex = SING_KHMER_WORDS.map(function(w) {
        var variants = String(w.sk || '').split('/').map(normSearch).filter(Boolean);
        var enParts = normSearch(w.en).split(/[\s/]+/).filter(Boolean);
        return { w: w, sk: variants, skJoined: variants.join(' '), en: normSearch(w.en), enParts: enParts };
      });
      return _skIndex;
    }
    // Score one entry for a query: higher is better, 0 = no match.
    function skScore(e, q) {
      var best = 0, qc = q.replace(/\s/g, '');
      e.sk.forEach(function(v) {
        var vc = v.replace(/\s/g, '');
        if (v === q || vc === qc) best = Math.max(best, 100);
        else if (vc.indexOf(qc) === 0) best = Math.max(best, 80);
        else if (vc.indexOf(qc) !== -1) best = Math.max(best, 60);
        else if (qc.length >= 3 && editDist(qc, vc, 1) <= 1) best = Math.max(best, 45);
        else if (qc.length >= 2 && fuzzySubseq(qc, vc)) best = Math.max(best, 25);
      });
      if (e.en === q) best = Math.max(best, 95);
      else if (e.enParts.indexOf(q) !== -1) best = Math.max(best, 85);
      else if (e.enParts.some(function(p) { return p.indexOf(q) === 0; })) best = Math.max(best, 70);
      else if (e.en.indexOf(q) !== -1) best = Math.max(best, 55);
      else if (q.length >= 4 && e.enParts.some(function(p) { return editDist(q, p, 1) <= 1; })) best = Math.max(best, 40);
      return best;
    }
    function skFind(tok) {
      var bestE = null, bestS = 0;
      skIndex().forEach(function(e) {
        var sc = 0;
        e.sk.forEach(function(v) { if (v === tok || v.replace(/\s/g, '') === tok) sc = 100; });
        if (!sc && tok.length >= 3) e.sk.forEach(function(v) { if (editDist(tok, v.replace(/\s/g, ''), 1) <= 1) sc = Math.max(sc, 50); });
        if (sc > bestS) { bestS = sc; bestE = e; }
      });
      return bestE ? bestE.w : null;
    }

    var _skTimer = null;
    function renderSingKhmer() {
      clearTimeout(_skTimer);
      _skTimer = setTimeout(_renderSingKhmerNow, 60); // debounce typing
    }
    // 9.0.7: display text without part-of-speech annotations such as "(n.)" / "(v.)"
    function skDisplayEn(en) {
      return String(en || '').replace(/\s*\((?:n|v|adj|adv|prep|pron|conj|n\.\/v)\.?\)/gi, '').replace(/\s+—\s+.*$/, '').trim();
    }
    // Segment a multi-word query into the longest known shorthand phrases, left to right.
    // "doy sa hx" -> ["doy sa" = because, "hx" ≈ "hz"]. Returns [{tok, w, exact}] (w null if unknown).
    function skSegment(tokens) {
      var idx = skIndex(), out = [], i = 0;
      var exactMap = {};
      idx.forEach(function(e) { e.sk.forEach(function(v) { var c = v.replace(/\s/g, ''); if (!exactMap[c]) exactMap[c] = e.w; }); });
      while (i < tokens.length) {
        var hit = null, len = 0;
        for (var n = Math.min(4, tokens.length - i); n >= 1 && !hit; n--) {
          var c = tokens.slice(i, i + n).join('');
          if (exactMap[c]) { hit = exactMap[c]; len = n; }
        }
        if (hit) { out.push({ tok: tokens.slice(i, i + len).join(' '), w: hit, exact: true }); i += len; continue; }
        var t = tokens[i], best = null, bestD = 9;
        idx.forEach(function(e) {
          e.sk.forEach(function(v) {
            var c = v.replace(/\s/g, ''), max = t.length >= 3 ? 1 : (t.length === 2 ? 1 : 0);
            if (!max || Math.abs(c.length - t.length) > max) return;
            if (t.length === 2 && c[0] !== t[0]) return; // short tokens: keep the first letter
            var d = editDist(t, c, max);
            if (d <= max && d < bestD) { bestD = d; best = e.w; }
          });
        });
        out.push({ tok: t, w: best, exact: false });
        i++;
      }
      return out;
    }
    // Closest single entry for a query with no results ("Did you mean?")
    function skDidYouMean(q) {
      var qc = q.replace(/\s/g, ''), best = null, bestR = 1;
      skIndex().forEach(function(e) {
        e.sk.concat(e.en ? [e.en] : []).forEach(function(v) {
          var c = v.replace(/\s/g, ''), max = Math.max(1, Math.floor(Math.max(qc.length, c.length) * 0.45));
          var d = editDist(qc, c, max);
          if (d > max) return;
          var r = d / Math.max(qc.length, c.length);
          if (r < bestR) { bestR = r; best = { w: e.w, term: e.sk.indexOf(v) !== -1 ? v : e.en }; }
        });
      });
      return bestR <= 0.5 ? best : null;
    }
    function skUseSuggestion(term) {
      var inp = el('sk-search');
      if (!inp) return;
      inp.value = term;
      _srchClear('sk-search', 'sk-search-clr');
      _renderSingKhmerNow();
    }
    function _renderSingKhmerNow() {
      var box = el('ref-sing-khmer'),
        noteBox = el('sk-translate-note');
      if (!box) return;
      var raw = (el('sk-search') || {}).value || '';
      var q = normSearch(raw);
      var list = SING_KHMER_WORDS;
      if (noteBox) noteBox.innerHTML = '';
      if (q) {
        var scored = skIndex().map(function(e) { return { w: e.w, s: skScore(e, q) }; })
          .filter(function(x) { return x.s > 0; })
          .sort(function(a, b) { return b.s - a.s; });
        list = scored.map(function(x) { return x.w; });
        var tokens = q.split(' ').filter(Boolean);
        if (tokens.length > 1) {
          // Chained decode by longest phrase: "doy sa hx" -> because + already
          var seg = skSegment(tokens), found = seg.filter(function(x) { return x.w; });
          if (seg.length > 1 && found.length) {
            if (noteBox) noteBox.innerHTML = '<div class="sk-translate">Chained match for "' + esc(raw.trim()) + '": <b>' +
              seg.map(function(h) { return h.w ? esc(skDisplayEn(h.w.en) || h.w.sk) + (h.exact ? '' : '<span class="sk-approx" title="closest match for “' + esc(h.tok) + '”">~</span>') : '<span class="sk-unk">' + esc(h.tok) + '?</span>'; }).join(' ') + '</b></div>';
            var seen = {};
            list = found.map(function(h) { return h.w; }).concat(list).filter(function(w) { if (seen[w.sk + '|' + w.en]) return false; seen[w.sk + '|' + w.en] = 1; return true; });
          }
        }
      }
      box.innerHTML = '';
      if (!list.length) {
        var dym = q ? skDidYouMean(q) : null;
        box.innerHTML = '<div class="ref-sk-empty">No matches.' + (dym ? ' Did you mean <button type="button" class="sk-dym" onclick="skUseSuggestion(this.dataset.t)" data-t="' + esc(dym.term) + '">' + esc(dym.term) + '</button>' + (dym.term !== normSearch(dym.w.en) ? ' <span class="sk-dym-en">(' + esc(skDisplayEn(dym.w.en)) + ' · ' + esc(dym.w.sk) + ')</span>' : ' <span class="sk-dym-en">(' + esc(dym.w.sk) + ')</span>') + '?' : '') + '</div>';
        return;
      }
      var frag = document.createDocumentFragment();
      list.forEach(function(w) {
        var row = document.createElement('div');
        row.className = 'ref-sk-row';
        row.innerHTML = '<span class="sk-en">' + esc(skDisplayEn(w.en) || '—') + '</span><span class="sk-ro">' + esc(w.sk) + '</span>';
        frag.appendChild(row);
      });
      box.appendChild(frag);
    }


    // ── Engine 5: Local deck + built-in offline mini dictionary ──
    var OFFLINE_DICT = [
      ['hello', 'សួស្ដី', 'suosdei', 'Interjection'], ['thank you', 'អរគុណ', 'arkun', 'Phrase'],
      ['yes (male)', 'បាទ', 'baat', 'Particle'], ['yes (female)', 'ចាស', 'chaa', 'Particle'],
      ['no', 'ទេ', 'te', 'Particle'], ['water', 'ទឹក', 'tuk', 'Noun'], ['rice', 'បាយ', 'bay', 'Noun'],
      ['to eat', 'ញ៉ាំ', 'nyam', 'Verb'], ['to drink', 'ផឹក', 'phuk', 'Verb'], ['to go', 'ទៅ', 'tov', 'Verb'],
      ['to come', 'មក', 'mok', 'Verb'], ['to sleep', 'គេង', 'keng', 'Verb'], ['to love', 'ស្រលាញ់', 'srolanh', 'Verb'],
      ['good', 'ល្អ', 'l\'or', 'Adjective'], ['big', 'ធំ', 'thom', 'Adjective'], ['small', 'តូច', 'touch', 'Adjective'],
      ['house', 'ផ្ទះ', 'ptah', 'Noun'], ['friend', 'មិត្ត', 'mit', 'Noun'], ['mother', 'ម្ដាយ', 'mday', 'Noun'],
      ['father', 'ឪពុក', 'aupuk', 'Noun'], ['I / me', 'ខ្ញុំ', 'knhom', 'Pronoun'], ['you', 'អ្នក', 'neak', 'Pronoun'],
      ['today', 'ថ្ងៃនេះ', 'thngai nih', 'Noun'], ['tomorrow', 'ថ្ងៃស្អែក', 'thngai saek', 'Noun'],
      ['how much', 'ប៉ុន្មាន', 'ponman', 'Phrase'], ['delicious', 'ឆ្ងាញ់', 'chngagn', 'Adjective'],
      ['happy', 'សប្បាយ', 'sabay', 'Adjective'], ['song', 'ចម្រៀង', 'chamrieng', 'Noun'], ['to sing', 'ច្រៀង', 'chrieng', 'Verb'],
      ['music', 'តន្ត្រី', 'tontrey', 'Noun'], ['book', 'សៀវភៅ', 'siavphov', 'Noun'], ['money', 'លុយ', 'luy', 'Noun'],
      ['please', 'សូម', 'som', 'Particle'], ['sorry', 'សុំទោស', 'som tos', 'Phrase'], ['goodbye', 'លាហើយ', 'lea haey', 'Phrase']
    ];

    function transLocalLookup(text, sl) {
      var q = dictNorm(text), hit = null;
      (allRows || []).some(function(r) {
        var k = dictNorm(r.target), en = dictNorm(r.english);
        if ((sl === 'km' && k === q) || (sl !== 'km' && en === q)) { hit = r; return true; }
        return false;
      });
      if (hit) return {
        translation: sl === 'km' ? (hit.english || '') : (hit.target || ''),
        roman: hit.romanization || '', notes: hit.notes || '', category: getWordCategories(hit)[0],
        alts: [], pos: [], defs: hit.notes ? [{ pos: 'Your note', text: hit.notes }] : [], examples: [], confidence: 'In your deck', inDeck: true
      };
      var o = OFFLINE_DICT.filter(function(x) {
        return sl === 'km' ? dictNorm(x[1]) === q : (dictNorm(x[0]) === q || dictNorm(x[0].replace(/^to /, '')) === q);
      })[0];
      if (o) return { translation: sl === 'km' ? o[0] : o[1], roman: o[2], pos: [o[3]], alts: [], defs: [], examples: [], confidence: 'Offline dictionary' };
      return null;
    }

    // standalone meaning for a single Khmer segment (deck first, then offline list)
    function transSegmentInfo(word) {
      var r = transLocalLookup(word, 'km');
      return r ? { en: r.translation, ro: r.roman || transRomanize(word), inDeck: !!r.inDeck } : { en: '', ro: transRomanize(word), inDeck: false };
    }

    // ── Rule-based romanization fallback (approximate) ──
    var KM_CONS = { 'ក':'k','ខ':'kh','គ':'k','ឃ':'kh','ង':'ng','ច':'ch','ឆ':'chh','ជ':'ch','ឈ':'chh','ញ':'nh','ដ':'d','ឋ':'th','ឌ':'d','ឍ':'th','ណ':'n','ត':'t','ថ':'th','ទ':'t','ធ':'th','ន':'n','ប':'b','ផ':'ph','ព':'p','ភ':'ph','ម':'m','យ':'y','រ':'r','ល':'l','វ':'v','ស':'s','ហ':'h','ឡ':'l','អ':'' };
    var KM_VOW = { 'ា':'a','ិ':'e','ី':'ei','ឹ':'oe','ឺ':'eu','ុ':'o','ូ':'ou','ួ':'uo','ើ':'aeu','ឿ':'oea','ៀ':'ie','េ':'e','ែ':'ae','ៃ':'ai','ោ':'ao','ៅ':'au','ំ':'m','ះ':'h','ៈ':'a' };
    var KM_INDEP = { 'ឥ':'e','ឦ':'ei','ឧ':'o','ឩ':'ou','ឪ':'au','ឫ':'rue','ឬ':'rue','ឭ':'lue','ឮ':'lue','ឯ':'ae','ឰ':'ai','ឱ':'ao','ឳ':'au' };
    function transRomanize(text) {
      var out = '', prevCons = false;
      Array.from(String(text || '')).forEach(function(ch, i, arr) {
        if (ch === '្') { prevCons = false; return; }
        if (KM_CONS.hasOwnProperty(ch)) {
          var nxt = arr[i + 1];
          if (prevCons && nxt !== '្') out += 'a';
          out += KM_CONS[ch]; prevCons = !(nxt && KM_VOW[nxt]);
          return;
        }
        if (KM_VOW[ch]) { out += KM_VOW[ch]; prevCons = false; return; }
        if (KM_INDEP[ch]) { out += KM_INDEP[ch]; prevCons = false; return; }
        if (/[\u17B4-\u17DD]/.test(ch)) return; // other signs
        if (/\s/.test(ch)) out += ' ';
        else if (!/[\u1780-\u17FF]/.test(ch)) out += ch;
        prevCons = false;
      });
      return out.replace(/\s+/g, ' ').trim();
    }

    // ── Social register heuristics ──
    function transRegister(kh, defsText) {
      var t = String(defsText || '').toLowerCase();
      if (/\bliterary\b|\bpoetic\b/.test(t) || /ដ៏|ក្រៃលែង|ឱ\s/.test(kh)) return 'Literary';
      if (/\bformal\b|\bpolite\b|\broyal\b/.test(t) || /សូម|លោក|អ្នកស្រី|ព្រះ|បាទ|ចាស/.test(kh)) return 'Polite/Formal';
      if (/\bslang\b|\bcolloquial\b/.test(t) || /ហ្នឹង|អេះ|ណា៎|អត់/.test(kh)) return 'Colloquial';
      if (/\binformal\b/.test(t) || /ញ៉ាំ|អាញ|ឯង/.test(kh)) return 'Casual';
      return '';
    }

    // ── Numbers ──
    var KM_DIGITS = '០១២៣៤៥៦៧៨៩';
    var KM_NUM_WORDS = ['សូន្យ', 'មួយ', 'ពីរ', 'បី', 'បួន', 'ប្រាំ', 'ប្រាំមួយ', 'ប្រាំពីរ', 'ប្រាំបី', 'ប្រាំបួន'];
    var KM_TENS = ['', 'ដប់', 'ម្ភៃ', 'សាមសិប', 'សែសិប', 'ហាសិប', 'ហុកសិប', 'ចិតសិប', 'ប៉ែតសិប', 'កៅសិប'];
    function toKhmerDigits(s) { return String(s).replace(/[0-9]/g, function(d) { return KM_DIGITS[+d]; }); }
    function toArabicDigits(s) { return String(s).replace(/[០-៩]/g, function(d) { return String(KM_DIGITS.indexOf(d)); }); }
    function khmerNumberWords(n) {
      n = Math.floor(Math.abs(n));
      if (n === 0) return KM_NUM_WORDS[0];
      if (n >= 1e6) {
        var m = Math.floor(n / 1e6), r = n % 1e6;
        return khmerNumberWords(m) + 'លាន' + (r ? khmerNumberWords(r) : '');
      }
      var parts = '', units = [[100000, 'សែន'], [10000, 'ម៉ឺន'], [1000, 'ពាន់'], [100, 'រយ']];
      units.forEach(function(u) {
        var d = Math.floor(n / u[0]) % 10;
        if (d) parts += KM_NUM_WORDS[d] + u[1];
      });
      var rest = n % 100;
      if (rest >= 10) parts += KM_TENS[Math.floor(rest / 10)] + (rest % 10 ? KM_NUM_WORDS[rest % 10] : '');
      else if (rest) parts += KM_NUM_WORDS[rest];
      return parts;
    }
    function transNumberInfo(text) {
      var m = String(text).match(/[0-9០-៩][0-9០-៩,]*/);
      if (!m) return null;
      var arabic = toArabicDigits(m[0]).replace(/,/g, '');
      if (!arabic || arabic.length > 15) return null;
      var n = parseInt(arabic, 10);
      if (isNaN(n)) return null;
      return { arabic: arabic, khmer: toKhmerDigits(arabic), words: khmerNumberWords(n) };
    }

    // ── Word segmentation ──
    function transSegment(text) {
      if (!dictIsKhmer(text) || !(window.Intl && Intl.Segmenter)) return [];
      try {
        var seg = new Intl.Segmenter('km', { granularity: 'word' });
        return Array.from(seg.segment(text)).filter(function(s) { return s.isWordLike !== false && dictIsKhmer(s.segment); }).map(function(s) { return s.segment; });
      } catch (e) { return []; }
    }

 pack.connect=function(c){ctx=c;};
 pack.renderReference=buildReferencePages;
 pack.offlineLookup=transLocalLookup;
 pack.romanize=transRomanize;pack.register=transRegister;pack.segment=transSegment;
 pack.numberInfo=function(text){var n=transNumberInfo(text);if(!n)return null;n.target=n.khmer||n.portuguese||n.arabic;return n;};
 pack.detectLanguage=function(s){return /[\u1780-\u17FF]/.test(s);};
 pack.referenceDeck=function(id){
 var list=id==='__cons__'?window._refCons:id==='__depvow__'?window._refDepVow:id==='__indvow__'?window._refIndVow:id==='__nums__'?window._refNums:id==='__diac__'?window._refDiac:null;
 if(!list)return null;return list.map(function(r){return {english:String(r.ro||r.n||r.s1||r.en||''),target:r.kh||r.pt||r.ch||r.char||String(r.n||''),romanization:r.ro||r.s1||'',notes:r.ex||r.word||'',category:'Reference',id:'ref_'+(r.kh||r.pt||r.n)};});};
 window.renderSingKhmer=renderSingKhmer;window.skUseSuggestion=skUseSuggestion;
 window.VOCAB_LANG=pack;
})();
