(function(){
'use strict';
var pack={
  "code": "pt",
  "name": "Portuguese",
  "shortTitle": "PT Vocab",
  "nativeName": "Português",
  "exampleWord": "cidade",
  "exampleReading": "see-DAH-jee",
  "greeting": "Olá",
  "flag": "🇧🇷",
  "columnCode": "PT",
  "readingLabel": "Pronunciation",
  "filePrefix": "portuguese",
  "timeLabel": "Brazil",
  "storagePrefix": "pv_",
  "wordField": "portuguese",
  "translationCode": "pt",
  "speechCode": "pt-BR",
  "ttsCode": "pt-BR",
  "offsetHours": -3,
  "defaultFont": "'Noto Sans',system-ui,sans-serif",
  "backendUrl": "https://script.google.com/macros/s/AKfycbxm7GDeGyxnONns9Hlc6YRabheOo7UJw70HPMWaSmhS87nXx_88kvgL31Eha62RB3pK/exec",
  "retiredBackendUrls": [
    "https://script.google.com/macros/s/AKfycbx0F8soPyh9VsDiouXH5kUHdwG4nZ57k9bd6ajyHCK1aoWB6MhJeH3sDUfbL_mc5cOf/exec",
    "https://script.google.com/macros/s/AKfycbyElkBingyl3D1uEg6_Io4oNcQfm_8m862m8O_nGEam5-AMX6ET4eza2Wk1QDbbI0mm/exec"
  ],
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
    "shorthand": false,
    "conjugation": true
  },
  "text": {
    "text4": "portuguese-notes-",
    "text5": "No Portuguese text to speak.",
    "text6": " Portuguese words ✓",
    "text7": "Hear Portuguese",
    "text8": "Type an English or Portuguese word first.",
    "text9": "Portuguese → English",
    "text10": "English → Portuguese",
    "text11": "portuguese-vocab-backup-",
    "text12": "<div class=\"fc-hint\">Tap to reveal Portuguese</div>",
    "text13": "📊 Portuguese Vocab — Learning Report",
    "text14": " (Brazil time)",
    "text15": "portuguese-vocab-report-",
    "text16": "Portuguese",
    "text17": "<div class=\"tn-cell\"><span class=\"tn-lbl\">Portuguese</span><span class=\"tn-val kh\">",
    "text18": "\" title=\"Hear the Portuguese\">🔊</button><div class=\"sc-ro\">",
    "text19": "Missing \"English\" or \"Portuguese\" header.",
    "text20": "Pronunciation",
    "text21": "portuguese-vocab-",
    "text22": "<span style=\"font-size:.68rem;color:var(--dim);display:block;margin-bottom:6px\">Type the Portuguese:</span>",
    "text23": "Type Portuguese…",
    "text24": "ℹ No Portuguese saved for this word.",
    "text25": "<span style=\"font-size:.68rem;color:var(--dim);display:block;margin-bottom:6px\">Tap “Hear” then spell the Portuguese word:</span>",
    "text26": "<span style=\"font-size:.68rem;color:var(--dim);display:block;margin-bottom:6px\">Spell the Portuguese word you heard:</span>",
    "text27": "Portuguese Vocabulary"
  },
  "referenceHtml": "  <div id=\"page-ref\" class=\"page\">\n    <div class=\"ref-wrap\">\n      <h2>📚 Brazilian Portuguese Reference</h2>\n      <div class=\"ref-section\">\n        <h3>Pronunciation Guide</h3>\n        <div class=\"ref-phonetic-grid\" id=\"ref-phonetic-grid\"></div>\n        <div class=\"ref-note\">Tip: Tap any card below to hear it spoken in Brazilian Portuguese.</div>\n      </div>\n      <div class=\"ref-section\">\n        <h3>Diacritics Explained — Brazilian Portuguese</h3>\n        <div class=\"ref-note\">Accents never change a word’s meaning by themselves — they tell you which syllable to stress, whether a vowel is open or closed, and when a vowel is nasal. Tap a card to hear an example.</div>\n        <div class=\"diac-list\" id=\"ref-diacritics\"></div>\n      </div>\n      <div class=\"ref-section\">\n        <h3>Numbers</h3>\n        <div class=\"ref-num-grid\" id=\"ref-numbers\"></div>\n        <div class=\"ref-note\">Note: 1 and 2 change with gender (um/uma, dois/duas). From 200 up, hundreds also agree: duzentas mulheres, duzentos homens. Use \"e\" between parts: 1.234 = mil duzentos e trinta e quatro.</div>\n      </div>\n      <div class=\"ref-section\">\n        <h3>Conjugation Practice</h3>\n        <div class=\"ref-note\">Regular verb endings for the three Brazilian Portuguese verb families. Drop the -ar / -er / -ir from the infinitive and add the ending below.</div>\n        <div class=\"conj-practice\">\n          <div class=\"conj-prompt\" id=\"conj-prompt\">Loading…</div>\n          <input class=\"write-input\" id=\"conj-input\" type=\"text\" placeholder=\"Type the ending…\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" onkeydown=\"if(event.key==='Enter')checkConj()\">\n          <div class=\"write-result\" id=\"conj-result\" style=\"display:none\"></div>\n          <div class=\"study-action-row\">\n            <button class=\"study-skip-btn\" style=\"flex:1;font-size:.76rem\" onclick=\"newConjQ()\">Skip →</button>\n            <button class=\"study-check-btn\" id=\"conj-check-btn\" onclick=\"checkConj()\">✓ Check</button>\n          </div>\n        </div>\n        <div class=\"conj-table-wrap\">\n          <table class=\"vowel-table conj-table\">\n            <thead>\n              <tr>\n                <th>Ending</th>\n                <th>Tense</th>\n                <th>eu</th>\n                <th>ele/você</th>\n                <th>nós</th>\n                <th>eles/vocês</th>\n                <th>Form</th>\n              </tr>\n            </thead>\n            <tbody id=\"conj-table-body\"></tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"ref-section\">\n        <h3>Essential Phrases</h3>\n        <table class=\"vowel-table\">\n          <thead>\n            <tr>\n              <th>Portuguese</th>\n              <th>Pronunciation</th>\n              <th>English</th>\n            </tr>\n          </thead>\n          <tbody id=\"ref-phrases\"></tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n\n",
  "fontOptions": "            <option value=\"'Noto Sans',system-ui,sans-serif\">Noto Sans</option>\n            <option value=\"'Noto Serif',serif\">Noto Serif</option>\n            <option value=\"Georgia,serif\">Georgia</option>\n            <option value=\"'Times New Roman',Times,serif\">Times New Roman</option>\n            <option value=\"Verdana,Geneva,sans-serif\">Verdana</option>",
  "csvSample": "            <tr>\n              <td>water</td>\n              <td class=\"pt\">água</td>\n              <td>AH-gwah</td>\n              <td>drinking water</td>\n            </tr>\n            <tr>\n              <td>house</td>\n              <td class=\"pt\">casa</td>\n              <td>KAH-zah</td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>country</td>\n              <td class=\"pt\">país</td>\n              <td>pah-EES</td>\n              <td>also means homeland</td>\n            </tr>",
  "studyPresets": [
    {
      "id": "__diac__",
      "label": "🔤 Diacritics"
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
            var nums = [
        { pt: 'zero', word: '', n: '0' },
        { pt: 'um / uma', word: '', n: '1' },
        { pt: 'dois / duas', word: '', n: '2' },
        { pt: 'três', word: '', n: '3' },
        { pt: 'quatro', word: '', n: '4' },
        { pt: 'cinco', word: '', n: '5' },
        { pt: 'seis', word: '', n: '6' },
        { pt: 'sete', word: '', n: '7' },
        { pt: 'oito', word: '', n: '8' },
        { pt: 'nove', word: '', n: '9' },
        { pt: 'dez', word: '', n: '10' },
        { pt: 'vinte', word: '', n: '20' },
        { pt: 'trinta', word: '', n: '30' },
        { pt: 'quarenta', word: '', n: '40' },
        { pt: 'cinquenta', word: '', n: '50' },
        { pt: 'sessenta', word: '', n: '60' },
        { pt: 'setenta', word: '', n: '70' },
        { pt: 'oitenta', word: '', n: '80' },
        { pt: 'noventa', word: '', n: '90' },
        { pt: 'cem / cento', word: '', n: '100' },
        { pt: 'duzentos / duzentas', word: '', n: '200' },
        { pt: 'trezentos / trezentas', word: '', n: '300' },
        { pt: 'quatrocentos', word: '', n: '400' },
        { pt: 'quinhentos', word: '', n: '500' },
        { pt: 'seiscentos', word: '', n: '600' },
        { pt: 'setecentos', word: '', n: '700' },
        { pt: 'oitocentos', word: '', n: '800' },
        { pt: 'novecentos', word: '', n: '900' },
        { pt: 'mil', word: '', n: '1.000' },
        { pt: 'dois mil', word: '', n: '2.000' },
        { pt: 'dez mil', word: '', n: '10.000' },
        { pt: 'cem mil', word: '', n: '100.000' },
        { pt: 'um milh\u00E3o', word: '', n: '1.000.000' },
        { pt: 'dois milh\u00F5es', word: '', n: '2.000.000' },
        { pt: 'um bilh\u00E3o', word: '', n: '1.000.000.000' }
      ];
      var diacritics = [
        { mark: '\u00E1 \u00E9 \u00ED \u00F3 \u00FA', name: 'Acute (acento agudo)', what: 'Marks the stressed syllable and makes the vowel open.', ex: 'caf\u00E9, \u00E1gua, a\u00ED, av\u00F3, \u00FAltimo', speak: 'caf\u00E9' },
        { mark: '\u00E2 \u00EA \u00F4', name: 'Circumflex (acento circunflexo)', what: 'Marks the stressed syllable and makes the vowel closed (tighter, higher).', ex: 'p\u00EA-ssego, av\u00F4, c\u00E2mera', speak: 'av\u00F4' },
        { mark: '\u00E3 \u00F5', name: 'Tilde (til)', what: 'Nasalises the vowel \u2014 air goes through the nose. Very common in Brazil.', ex: 'p\u00E3o, m\u00E3e, irm\u00E3o, li\u00E7\u00F5es', speak: 'p\u00E3o' },
        { mark: '\u00E0', name: 'Grave (acento grave)', what: 'Only used for the crasis: the preposition "a" merged with the article "a".', ex: 'Vou \u00E0 praia (a + a)', speak: 'Vou \u00E0 praia' },
        { mark: '\u00E7', name: 'Cedilla (cedilha)', what: 'Makes "c" sound like a sharp "s" before a, o, u. Never used before e or i.', ex: 'a\u00E7\u00FAcar, cora\u00E7\u00E3o, come\u00E7ar', speak: 'cora\u00E7\u00E3o' },
        { mark: '\u00FC / \u00E4 (retired)', name: 'Diaeresis (trema)', what: 'Removed by the 2009 spelling reform \u2014 you will only see it in old texts and foreign names.', ex: 'lingui\u00E7a (formerly ling\u00FCi\u00E7a)', speak: 'lingui\u00E7a' },
        { mark: 'Stress rule', name: 'When no accent appears', what: 'Words ending in a, e, o, em, ens stress the second-to-last syllable; words ending in i, u, l, r, z, im, um, \u00E3o stress the last one. An accent is written whenever a word breaks that pattern.', ex: 'casa (CA-sa) vs. papel (pa-PEL) vs. l\u00E1pis (L\u00C1-pis)', speak: 'l\u00E1pis' }
      ];
      var conjRows = [
        ['-ar', 'Present', 'o', 'a', 'amos', 'am', '-'],
        ['-ar', 'Preterite', 'ei', 'ou', 'amos', 'aram', '-'],
        ['-ar', 'Imperfect', 'ava', 'ava', '\u00E1vamos', 'avam', '-'],
        ['-ar', 'Future', 'arei', 'ar\u00E1', 'aremos', 'ar\u00E3o', '-'],
        ['-ar', 'Conditional', 'aria', 'aria', 'ar\u00EDamos', 'ariam', '-'],
        ['-ar', 'Pres Subj', 'e', 'e', 'emos', 'em', '-'],
        ['-ar', 'Imp Subj', 'asse', 'asse', '\u00E1ssemos', 'assem', '-'],
        ['-ar', 'Imperative', '-', 'e', 'emos', 'em', 'voc\u00EA'],
        ['-ar', 'Gerund', '-', '-', '-', '-', 'ando'],
        ['-ar', 'Participle', '-', '-', '-', '-', 'ado'],
        ['-er', 'Present', 'o', 'e', 'emos', 'em', '-'],
        ['-er', 'Preterite', 'i', 'eu', 'emos', 'eram', '-'],
        ['-er', 'Imperfect', 'ia', 'ia', '\u00EDamos', 'iam', '-'],
        ['-er', 'Future', 'erei', 'er\u00E1', 'eremos', 'er\u00E3o', '-'],
        ['-er', 'Conditional', 'eria', 'eria', 'er\u00EDamos', 'eriam', '-'],
        ['-er', 'Pres Subj', 'a', 'a', 'amos', 'am', '-'],
        ['-er', 'Imp Subj', 'esse', 'esse', '\u00EAssemos', 'essem', '-'],
        ['-er', 'Imperative', '-', 'a', 'amos', 'am', 'voc\u00EA'],
        ['-er', 'Gerund', '-', '-', '-', '-', 'endo'],
        ['-er', 'Participle', '-', '-', '-', '-', 'ido'],
        ['-ir', 'Present', 'o', 'e', 'imos', 'em', '-'],
        ['-ir', 'Preterite', 'i', 'iu', 'imos', 'iram', '-'],
        ['-ir', 'Imperfect', 'ia', 'ia', '\u00EDamos', 'iam', '-'],
        ['-ir', 'Future', 'irei', 'ir\u00E1', 'iremos', 'ir\u00E3o', '-'],
        ['-ir', 'Conditional', 'iria', 'iria', '\u00EDamos', 'iriam', '-'],
        ['-ir', 'Pres Subj', 'a', 'a', 'amos', 'am', '-'],
        ['-ir', 'Imp Subj', 'isse', 'isse', '\u00EDssemos', 'issem', '-'],
        ['-ir', 'Imperative', '-', 'a', 'amos', 'am', 'voc\u00EA'],
        ['-ir', 'Gerund', '-', '-', '-', '-', 'indo'],
        ['-ir', 'Participle', '-', '-', '-', '-', 'ido']
      ];
            var phrases = [
        { pt: 'Olá', ro: 'oh-LAH', en: 'Hello (informal)' },
        { pt: 'Oi', ro: 'oy', en: 'Hi' },
        { pt: 'Bom dia', ro: 'bohn JEE-ah', en: 'Good morning' },
        { pt: 'Boa tarde', ro: 'BOH-ah TAR-jee', en: 'Good afternoon' },
        { pt: 'Boa noite', ro: 'BOH-ah NOY-chee', en: 'Good night' },
        { pt: 'Obrigado / Obrigada', ro: 'oh-bree-GAH-doo', en: 'Thank you (m/f)' },
        { pt: 'De nada', ro: 'jee NAH-dah', en: "You're welcome" },
        { pt: 'Com licença', ro: 'cohn lee-SEN-sah', en: 'Excuse me' },
        { pt: 'Desculpe', ro: 'jehs-KOOL-pee', en: 'Sorry' },
        { pt: 'Sim', ro: 'seen', en: 'Yes' },
        { pt: 'Não', ro: 'nownh', en: 'No' },
        { pt: 'Não entendo', ro: 'nownh en-TEN-doo', en: "I don't understand" },
        { pt: 'Quanto custa?', ro: 'KWAHN-too KOOS-tah', en: 'How much?' },
        { pt: 'Aqui', ro: 'ah-KEE', en: 'Here' },
        { pt: 'Lá', ro: 'lah', en: 'There' },
        { pt: 'Tchau', ro: 'chow', en: 'Bye (informal)' },
        { pt: 'Até logo', ro: 'ah-TEH LOH-goo', en: 'See you later' }
      ];
            var phoneticGroups = [
        {
          header: 'Vowels',
          rows: [
            { sym: 'a', sound: 'ah', ex: 'like "f*a*ther" — "casa"' },
            { sym: 'e', sound: 'eh/ay', ex: 'open: "b*e*d" / closed: "d*ay*"' },
            { sym: 'i', sound: 'ee', ex: 'like "f*ee*t" — "dia"' },
            { sym: 'o', sound: 'oh/aw', ex: 'open: "l*aw*" / closed: "b*oa*t"' },
            { sym: 'u', sound: 'oo', ex: 'like "b*oo*t" — "uva"' }
          ]
        },
        {
          header: 'Nasal Vowels',
          rows: [
            { sym: 'ã', sound: 'ahn~', ex: '"irmã" — "a" with nasal hum' },
            { sym: 'ão', sound: 'own~', ex: '"pão" — nasalized "own"' },
            { sym: 'ãe', sound: 'eye~', ex: '"mãe" — nasalized "eye"' },
            { sym: 'em / en', sound: 'en~', ex: '"bem" — nasalized "en"' },
            { sym: 'im / in', sound: 'een~', ex: '"sim" — nasalized "ee"' }
          ]
        },
        {
          header: 'Special Consonants',
          rows: [
            { sym: 'lh', sound: 'ly', ex: '"filho" — like "mil*lion*"' },
            { sym: 'nh', sound: 'ny', ex: '"banho" — like "ca*ny*on"' },
            { sym: 'rr', sound: 'h', ex: '"carro" — like "h" (BR Portuguese)' },
            { sym: 'ç', sound: 's', ex: '"ç" = always sharp "s" — "açúcar"' },
            { sym: 'x', sound: 'sh/s', ex: '"xícara" = sh / "máximo" = ss' }
          ]
        },
        {
          header: 'BR Softening (São Paulo)',
          rows: [
            { sym: 't + i/e', sound: 'ch', ex: '"tia" → "CHIA" in São Paulo' },
            { sym: 'd + i/e', sound: 'j', ex: '"dia" → "JIA" in São Paulo' },
            { sym: 'r (initial)', sound: 'h', ex: '"rio" → "HEE-oo" in BR' },
            { sym: 'r (middle)', sound: 'r', ex: '"caro" → soft flap "r"' }
          ]
        }
      ];
      window._refNums = nums;
      window._refDiac = diacritics;
      window._conjRows = conjRows;
      var dl = el('ref-diacritics');
      if (dl) {
        dl.innerHTML = '';
        diacritics.forEach(function(d) {
          var card = document.createElement('div');
          card.className = 'diac-card';
          card.innerHTML = '<div class="diac-mark pt">' + esc(d.mark) + '</div>' +
            '<div class="diac-body"><div class="diac-name">' + esc(d.name) + '</div>' +
            '<div class="diac-what">' + esc(d.what) + '</div>' +
            '<div class="diac-ex pt">' + esc(d.ex) + '</div></div>';
          (function(txt) {
            card.addEventListener('click', function() {
              if (txt) speakPortuguese(txt);
            });
          })(d.speak);
          card.title = 'Tap to hear an example';
          dl.appendChild(card);
        });
      }
      var ctb = el('conj-table-body');
      if (ctb) {
        ctb.innerHTML = '';
        conjRows.forEach(function(row) {
          var tr = document.createElement('tr');
          tr.innerHTML = '<td class="vt-ro">' + esc(row[0]) + '</td><td class="vt-ro">' + esc(row[1]) + '</td>' +
            '<td class="vt-pt pt">' + esc(row[2]) + '</td><td class="vt-pt pt">' + esc(row[3]) + '</td>' +
            '<td class="vt-pt pt">' + esc(row[4]) + '</td><td class="vt-pt pt">' + esc(row[5]) + '</td>' +
            '<td class="vt-ro">' + esc(row[6]) + '</td>';
          ctb.appendChild(tr);
        });
      }
      newConjQ();
      var pg = el('ref-phonetic-grid');
      if (pg) {
        pg.innerHTML = '';
        phoneticGroups.forEach(function(grp) {
          var card = document.createElement('div');
          card.className = 'ref-phonetic-card';
          var rowsHtml = grp.rows.map(function(r, idx) {
            return '<div class="rpc-row clickable" data-row="' + idx + '" title="Tap to hear example"><span class="rpc-sym pt">' + r.sym + '</span><span class="rpc-sound">' + r.sound + '</span><span class="rpc-ex">' + esc(r.ex) + '</span></div>';
          }).join('');
          card.innerHTML = '<div class="rpc-header">' + esc(grp.header) + '</div>' + rowsHtml;
          var rowEls = card.querySelectorAll('.rpc-row');
          rowEls.forEach(function(rel, i) {
            rel.style.cursor = 'pointer';
            rel.addEventListener('click', function() {
              var rowData = grp.rows[i];
              var matchEx = rowData.ex.match(/"([^"]+)"/);
              var wordToSpeak = matchEx ? matchEx[1] : (rowData.sym.length <= 3 ? rowData.sym : '');
              if (wordToSpeak) speakPortuguese(wordToSpeak);
            });
          });
          pg.appendChild(card);
        });
      }
      var ng = el('ref-numbers');
      if (ng) {
        ng.innerHTML = '';
        nums.forEach(function(n) {
          var card = document.createElement('div');
          card.className = 'ref-card';
          card.innerHTML = '<div class="ref-pt pt">' + n.pt + '</div>' + (n.word ? '<div class="ref-word">' + n.word + '</div>' : '') + '<div class="ref-ro">' + n.n + '</div>';
          (function(item) {
            card.addEventListener('click', function() {
              var cleanPt = (item.speak || item.pt || '').split('/')[0].trim();
              speakPortuguese(cleanPt);
            });
          })(n);
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
          tr.innerHTML = '<td class="vt-pt pt" style="min-width:120px">' + p.pt + ' 🔊</td><td class="vt-ro">' + p.ro + '</td><td class="vt-ex">' + esc(p.en) + '</td>';
          tr.addEventListener('click', function() {
            var cleanText = p.pt.split('/')[0].trim();
            speakPortuguese(cleanText);
          });
          pb.appendChild(tr);
        });
      }
    }

    var _conjQ = null;
    var CONJ_PERSONS = [
      { i: 2, label: 'eu' },
      { i: 3, label: 'ele/voc\u00EA' },
      { i: 4, label: 'n\u00F3s' },
      { i: 5, label: 'eles/voc\u00EAs' }
    ];

    function newConjQ() {
      var rows = window._conjRows || [];
      if (!rows.length) return;
      var tries = 0,
        row, person, answer;
      do {
        row = rows[Math.floor(Math.random() * rows.length)];
        var tense = row[1];
        if (tense === 'Gerund' || tense === 'Participle') {
          person = { i: 6, label: 'form' };
        } else {
          var cands = CONJ_PERSONS.filter(function(pp) {
            return row[pp.i] && row[pp.i] !== '-';
          });
          person = cands[Math.floor(Math.random() * cands.length)];
        }
        answer = person ? row[person.i] : '-';
        tries++;
      } while ((!answer || answer === '-') && tries < 40);
      if (!answer || answer === '-') return;
      _conjQ = {
        row: row,
        person: person,
        answer: answer
      };
      var pr = el('conj-prompt');
      if (pr) {
        pr.innerHTML = '<span class="conj-q-end pt">' + esc(row[0]) + '</span> \u2014 <span class="conj-q-tense">' + esc(row[1]) +
          '</span>' + (person.i === 6 ? '' : ' \u2014 <span class="conj-q-person pt">' + esc(person.label) + '</span>');
      }
      var inp = el('conj-input');
      if (inp) {
        inp.value = '';
        inp.disabled = false;
      }
      var res = el('conj-result');
      if (res) {
        res.style.display = 'none';
        res.textContent = '';
      }
      var btn = el('conj-check-btn');
      if (btn) btn.textContent = '\u2713 Check';
      _conjChecked = false;
    }

    var _conjChecked = false;

    function checkConj() {
      if (_conjChecked) {
        newConjQ();
        return;
      }
      if (!_conjQ) {
        newConjQ();
        return;
      }
      var inp = el('conj-input'),
        res = el('conj-result');
      if (!inp || !res) return;
      var m = answerMatch(inp.value, _conjQ.answer);
      res.style.display = 'block';
      if (m === 'exact') {
        res.className = 'write-result correct';
        res.textContent = '\u2713 Correct! ' + _conjQ.answer;
      } else if (m === 'accent') {
        res.className = 'write-result correct';
        res.textContent = '\u2713 Correct \u2014 mind the accents: ' + _conjQ.answer;
      } else {
        res.className = 'write-result wrong';
        res.textContent = '\u2717 Answer: ' + _conjQ.answer;
      }
      _conjChecked = true;
      var btn = el('conj-check-btn');
      if (btn) btn.textContent = 'Next \u2192';
    }

    // ── Engine 5: Local deck + built-in offline mini dictionary ──
    var OFFLINE_DICT = [
      ['hello', 'olá', 'oh-LAH', 'Interjection'], ['thank you (male)', 'obrigado', 'oh-bree-GAH-doo', 'Phrase'],
      ['thank you (female)', 'obrigada', 'oh-bree-GAH-dah', 'Phrase'], ['yes', 'sim', 'SEENG', 'Particle'],
      ['no', 'não', 'NOWNG', 'Particle'], ['water', 'água', 'AH-gwah', 'Noun'], ['rice', 'arroz', 'ah-HOHS', 'Noun'],
      ['to eat', 'comer', 'koh-MEHR', 'Verb'], ['to drink', 'beber', 'beh-BEHR', 'Verb'], ['to go', 'ir', 'EER', 'Verb'],
      ['to come', 'vir', 'VEER', 'Verb'], ['to sleep', 'dormir', 'dohr-MEER', 'Verb'], ['to love', 'amar', 'ah-MAHR', 'Verb'],
      ['good', 'bom', 'BOHNG', 'Adjective'], ['big', 'grande', 'GRAHN-jee', 'Adjective'], ['small', 'pequeno', 'peh-KEH-noo', 'Adjective'],
      ['house', 'casa', 'KAH-zah', 'Noun'], ['friend', 'amigo', 'ah-MEE-goo', 'Noun'], ['mother', 'mãe', 'MYE', 'Noun'],
      ['father', 'pai', 'PIE', 'Noun'], ['I / me', 'eu', 'EH-oo', 'Pronoun'], ['you', 'você', 'voh-SEH', 'Pronoun'],
      ['today', 'hoje', 'OH-zhee', 'Adverb'], ['tomorrow', 'amanhã', 'ah-mahn-YAHNG', 'Adverb'],
      ['how much', 'quanto', 'KWAHN-too', 'Phrase'], ['delicious', 'gostoso', 'gohs-TOH-zoo', 'Adjective'],
      ['happy', 'feliz', 'feh-LEES', 'Adjective'], ['song', 'música', 'MOO-zee-kah', 'Noun'], ['to sing', 'cantar', 'kahn-TAHR', 'Verb'],
      ['book', 'livro', 'LEE-vroo', 'Noun'], ['money', 'dinheiro', 'jeen-YAY-roo', 'Noun'],
      ['please', 'por favor', 'pohr fah-VOHR', 'Phrase'], ['sorry', 'desculpa', 'jees-KOOL-pah', 'Phrase'], ['goodbye', 'tchau', 'CHOW', 'Phrase']
    ];

    function transLocalLookup(text, sl) {
      var q = dictNorm(text), hit = null;
      (allRows || []).some(function(r) {
        var k = dictNorm(r.target), en = dictNorm(r.english);
        if ((sl === 'pt' && k === q) || (sl !== 'pt' && en === q)) { hit = r; return true; }
        return false;
      });
      if (hit) return {
        translation: sl === 'pt' ? (hit.english || '') : (hit.target || ''),
        roman: hit.romanization || '', notes: hit.notes || '', category: getWordCategories(hit)[0],
        alts: [], pos: [], defs: hit.notes ? [{ pos: 'Your note', text: hit.notes }] : [], examples: [], confidence: 'In your deck', inDeck: true
      };
      var o = OFFLINE_DICT.filter(function(x) {
        return sl === 'pt' ? dictNorm(x[1]) === q : (dictNorm(x[0]) === q || dictNorm(x[0].replace(/^to /, '')) === q);
      })[0];
      if (o) return { translation: sl === 'pt' ? o[0] : o[1], roman: o[2], pos: [o[3]], alts: [], defs: [], examples: [], confidence: 'Offline dictionary' };
      return null;
    }

    // Portuguese is written with spaces, so no per-word segment breakdown is needed.
    function transSegmentInfo(word) {
      var r = transLocalLookup(word, 'pt');
      return r ? { en: r.translation, ro: r.roman || '', inDeck: !!r.inDeck } : { en: '', ro: '', inDeck: false };
    }

    // Portuguese already uses the Latin alphabet; no rule-based romanization.
    function transRomanize(text) {
      return '';
    }

    // ── Social register heuristics ──
    function transRegister(pt, defsText) {
      var t = String(defsText || '').toLowerCase(), s = String(pt || '').toLowerCase();
      if (/\bliterary\b|\bpoetic\b/.test(t)) return 'Literary';
      if (/\bformal\b|\bpolite\b/.test(t) || /(^|\s)(o senhor|a senhora|por gentileza|vossa)(\s|$)/.test(s)) return 'Polite/Formal';
      if (/\bslang\b|\bcolloquial\b/.test(t) || /(^|\s)(cara|beleza|valeu|massa|tá|pra|né)(\s|$|[.!?])/.test(s)) return 'Colloquial';
      if (/\binformal\b/.test(t) || /(^|\s)(tu|a gente)(\s|$)/.test(s)) return 'Casual';
      return '';
    }

    // ── Numbers ──
    var PT_UNITS = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
    var PT_TENS = ['', '', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
    var PT_HUNDREDS = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];
    function portugueseNumberWords(n) {
      n = Math.floor(Math.abs(n));
      if (n < 20) return PT_UNITS[n];
      if (n < 100) return PT_TENS[Math.floor(n / 10)] + (n % 10 ? ' e ' + PT_UNITS[n % 10] : '');
      if (n === 100) return 'cem';
      if (n < 1000) return PT_HUNDREDS[Math.floor(n / 100)] + (n % 100 ? ' e ' + portugueseNumberWords(n % 100) : '');
      if (n < 1e6) {
        var th = Math.floor(n / 1000), r = n % 1000;
        return (th === 1 ? 'mil' : portugueseNumberWords(th) + ' mil') + (r ? ((r < 100 || r % 100 === 0) ? ' e ' : ' ') + portugueseNumberWords(r) : '');
      }
      var m = Math.floor(n / 1e6), rest = n % 1e6;
      return (m === 1 ? 'um milhão' : portugueseNumberWords(m) + ' milhões') + (rest ? ' ' + portugueseNumberWords(rest) : '');
    }
    function transNumberInfo(text) {
      var m = String(text).match(/[0-9][0-9.,]*/);
      if (!m) return null;
      var arabic = m[0].replace(/[.,]/g, '');
      if (!arabic || arabic.length > 12) return null;
      var n = parseInt(arabic, 10);
      if (isNaN(n)) return null;
      return { arabic: arabic, portuguese: arabic, words: portugueseNumberWords(n) };
    }

    // ── Word segmentation ── (not needed for Portuguese)
    function transSegment(text) {
      return [];
    }
 pack.connect=function(c){ctx=c;};
 pack.renderReference=buildReferencePages;
 pack.offlineLookup=transLocalLookup;
 pack.romanize=transRomanize;pack.register=transRegister;pack.segment=transSegment;
 pack.numberInfo=function(text){var n=transNumberInfo(text);if(!n)return null;n.target=n.khmer||n.portuguese||n.arabic;return n;};
 pack.detectLanguage=function(s){return /[ãõáéíóúâêôçà]/i.test(s)||OFFLINE_DICT.some(function(x){return dictNorm(x[1])===dictNorm(s);});};
 pack.referenceDeck=function(id){
 var list=id==='__cons__'?window._refCons:id==='__depvow__'?window._refDepVow:id==='__indvow__'?window._refIndVow:id==='__nums__'?window._refNums:id==='__diac__'?window._refDiac:null;
 if(!list)return null;return list.map(function(r){return {english:String(r.ro||r.n||r.s1||r.en||''),target:r.kh||r.pt||r.ch||r.char||String(r.n||''),romanization:r.ro||r.s1||'',notes:r.ex||r.word||'',category:'Reference',id:'ref_'+(r.kh||r.pt||r.n)};});};
 window.newConjQ=newConjQ;window.checkConj=checkConj;
 window.VOCAB_LANG=pack;
})();
