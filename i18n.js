// Shared strings (ES5 – must run in the old Kindle browser)
var I18N = {
  zh: {
    family: '家庭', fridge: '冰箱', wear: '今天穿', wearTomorrow: '明天穿',
    dropoff: '早上送', pickup: '下午接', rides: '接送', ridesTomorrow: '明天接送',
    today: '今天', tomorrow: '明天', expired: '过期 {n} 天', days: '{n} 天', est: '估计',
    urgent: '今明两天吃掉', soon: '三天内 · 优先吃', later: '不急',
    count: '共 {n} 样 · {m} 样要先吃', fridgeEmpty: '冰箱是空的', more: '还有 {n} 样',
    noSchool: '没课', homeBtn: '我到家了', homeAt: '{t} 到家', notHome: '还没到家', homeToday: '今天到家', after: '课外', low: '最低', tomorrowLabel: '明天',
    wd: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    date: function (d) { return (d.getMonth() + 1) + '月' + d.getDate() + '日 · ' + this.wd[(d.getDay() + 6) % 7]; },
    wx: { clear: '晴', cloudy: '多云', fog: '雾', drizzle: '毛毛雨', rain: '雨', snow: '雪', showers: '阵雨', thunder: '雷雨' },
    cl: { heavy: '厚羽绒服 · 保暖裤', down: '羽绒服', jacket: '夹克 / 薄羽绒', light: '薄外套 / 卫衣', tee: '短袖',
          hat: '帽子手套', rain: '雨衣雨靴', snow: '雪地靴' },
    cat: { veg: '蔬菜', fruit: '水果', meat: '肉', fish: '海鲜', dairy: '奶制品', cooked: '剩菜熟食', other: '其他' }
  },
  en: {
    family: 'Family', fridge: 'Fridge', wear: 'Wear today', wearTomorrow: 'Wear tomorrow',
    dropoff: 'Drop-off', pickup: 'Pick-up', rides: 'School run', ridesTomorrow: 'Tomorrow',
    today: 'Today', tomorrow: 'Tomorrow', expired: '{n}d past', days: '{n} days', est: 'est.',
    urgent: 'Eat today or tomorrow', soon: 'Within 3 days', later: 'No rush',
    count: '{n} items · {m} to eat first', fridgeEmpty: 'Fridge is empty', more: '+{n} more',
    noSchool: 'No school', homeBtn: 'I\'m home', homeAt: 'Home {t}', notHome: 'Not home yet', homeToday: 'Home today', after: 'After school', low: 'Low', tomorrowLabel: 'Tomorrow',
    wd: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
    mo: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    date: function (d) { return this.wd[(d.getDay() + 6) % 7] + ' · ' + d.getDate() + ' ' + this.mo[d.getMonth()]; },
    wx: { clear: 'Clear', cloudy: 'Cloudy', fog: 'Fog', drizzle: 'Drizzle', rain: 'Rain', snow: 'Snow', showers: 'Showers', thunder: 'Thunder' },
    cl: { heavy: 'Heavy down coat · thermals', down: 'Down jacket', jacket: 'Jacket', light: 'Light jacket / hoodie', tee: 'T-shirt',
          hat: 'Hat & gloves', rain: 'Rain gear & boots', snow: 'Snow boots' },
    cat: { veg: 'Vegetables', fruit: 'Fruit', meat: 'Meat', fish: 'Seafood', dairy: 'Dairy', cooked: 'Leftovers', other: 'Other' }
  },
  sv: {
    family: 'Familj', fridge: 'Kylskåp', wear: 'Ta på idag', wearTomorrow: 'Ta på imorgon',
    dropoff: 'Lämnar', pickup: 'Hämtar', rides: 'Lämning & hämtning', ridesTomorrow: 'Imorgon',
    today: 'Idag', tomorrow: 'Imorgon', expired: '{n} d sedan', days: '{n} dagar', est: 'uppsk.',
    urgent: 'Ät idag eller imorgon', soon: 'Inom 3 dagar', later: 'Ingen brådska',
    count: '{n} varor · {m} att äta först', fridgeEmpty: 'Kylskåpet är tomt', more: '+{n} till',
    noSchool: 'Ingen skola', homeBtn: 'Jag är hemma', homeAt: 'Hemma {t}', notHome: 'Inte hemma än', homeToday: 'Hemma idag', after: 'Efter skolan', low: 'Lägst', tomorrowLabel: 'Imorgon',
    wd: ['MÅN', 'TIS', 'ONS', 'TOR', 'FRE', 'LÖR', 'SÖN'],
    mo: ['JAN', 'FEB', 'MAR', 'APR', 'MAJ', 'JUN', 'JUL', 'AUG', 'SEP', 'OKT', 'NOV', 'DEC'],
    date: function (d) { return this.wd[(d.getDay() + 6) % 7] + ' · ' + d.getDate() + ' ' + this.mo[d.getMonth()]; },
    wx: { clear: 'Klart', cloudy: 'Molnigt', fog: 'Dimma', drizzle: 'Duggregn', rain: 'Regn', snow: 'Snö', showers: 'Skurar', thunder: 'Åska' },
    cl: { heavy: 'Vinteroverall · långkalsonger', down: 'Dunjacka', jacket: 'Jacka', light: 'Tunn jacka / huvtröja', tee: 'T-shirt',
          hat: 'Mössa & vantar', rain: 'Regnkläder & stövlar', snow: 'Vinterkängor' },
    cat: { veg: 'Grönsaker', fruit: 'Frukt', meat: 'Kött', fish: 'Fisk', dairy: 'Mejeri', cooked: 'Rester', other: 'Övrigt' }
  }
};

function t(lang, key, vars) {
  var s = (I18N[lang] || I18N.zh)[key];
  if (typeof s !== 'string') return s;
  if (vars) for (var k in vars) s = s.split('{' + k + '}').join(vars[k]);
  return s;
}

// Open-Meteo weather code -> group
function wxGroup(code) {
  if (code === 0) return 'clear';
  if (code <= 3) return 'cloudy';
  if (code === 45 || code === 48) return 'fog';
  if (code >= 51 && code <= 57) return 'drizzle';
  if (code >= 61 && code <= 67) return 'rain';
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return 'snow';
  if (code >= 80 && code <= 82) return 'showers';
  return 'thunder';
}

// Clothing advice from the day's lowest temperature and precipitation
function clothes(lang, low, group, rainProb) {
  var c = (I18N[lang] || I18N.zh).cl, out = [];
  if (low <= -5) out.push(c.heavy, c.hat);
  else if (low <= 5) out.push(c.down, c.hat);
  else if (low <= 12) out.push(c.jacket);
  else if (low <= 18) out.push(c.light);
  else out.push(c.tee);
  if (group === 'snow') out.push(c.snow);
  else if (group === 'rain' || group === 'showers' || group === 'drizzle' || group === 'thunder' || rainProb >= 50) out.push(c.rain);
  return out;
}

// Date helpers working on 'YYYY-MM-DD' strings in local (Stockholm) time
function ymd(d) {
  var m = d.getMonth() + 1, day = d.getDate();
  return d.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (day < 10 ? '0' : '') + day;
}
function parseYmd(s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
function daysBetween(a, b) { return Math.round((parseYmd(b) - parseYmd(a)) / 86400000); }

// Default shelf life (days) per category, used when a package has no printed date
var SHELF_DAYS = { veg: 4, fruit: 5, meat: 2, fish: 1, dairy: 7, cooked: 3, other: 7 };

// School subjects: stored once (in any language), shown in the screen's language.
// Each row: [中文, English, Svenska, ...other spellings that mean the same subject]
var SUBJECTS = [
  ['瑞典语', 'Swedish', 'Svenska', 'SV'],
  ['数学', 'Maths', 'Matematik', 'MA', 'Math'],
  ['英语', 'English', 'Engelska', 'ENG', 'EN'],
  ['社会', 'Social studies', 'SO'],
  ['自然科技', 'Science & tech', 'NV/TK', 'NO/TK'],
  ['自然', 'Science', 'NV', 'NO'],
  ['音乐', 'Music', 'Musik', 'MU'],
  ['体育', 'PE', 'Idrott', 'ID', 'Idrott och hälsa'],
  ['美术', 'Art', 'Bild'],
  ['手工', 'Crafts', 'Slöjd'],
  ['班会', 'Class time', 'Klasstid', 'Mentorstid'],
  ['学习工坊', 'Workshop', 'Skolverkstad'],
  ['午饭', 'Lunch', 'Lunch'],
  ['课后托管', 'After-school care', 'Fritids']
];
function trSubject(lang, word) {
  var col = lang === 'en' ? 1 : lang === 'sv' ? 2 : 0, w = word.replace(/^\s+|\s+$/g, ''), lw = w.toLowerCase();
  for (var i = 0; i < SUBJECTS.length; i++)
    for (var j = 0; j < SUBJECTS[i].length; j++)
      if (SUBJECTS[i][j].toLowerCase() === lw) return SUBJECTS[i][col];
  return w; // unknown words are shown as typed
}
// "瑞典语 · 数学\n英语" -> "Svenska · Matematik\nEngelska"
function trSubjects(lang, text) {
  var lines = String(text || '').split('\n');
  for (var i = 0; i < lines.length; i++) {
    var parts = lines[i].split(/\s*[·,，、]\s*/);
    for (var j = 0; j < parts.length; j++) parts[j] = trSubject(lang, parts[j]);
    lines[i] = parts.join(' · ');
  }
  return lines.join('\n');
}

// Common foods: typed once in any language, shown in the screen's language.
// Each row: [中文, English, Svenska, ...other spellings]
var FOODS = [
  ['菠菜', 'Spinach', 'Spenat'], ['香菜', 'Coriander', 'Koriander', '芫荽', 'Cilantro'], ['黄瓜', 'Cucumber', 'Gurka'],
  ['小葱', 'Spring onion', 'Salladslök', '葱', '香葱', 'Scallion'], ['西红柿', 'Tomato', 'Tomat', '番茄'], ['芹菜', 'Celery', 'Selleri', 'Blekselleri'],
  ['玉米', 'Corn', 'Majs'], ['玉米（真空包装）', 'Corn (vacuum-packed)', 'Majs (vakuumförpackad)'], ['大蒜', 'Garlic', 'Vitlök', '蒜'],
  ['洋葱', 'Onion', 'Lök', 'Gul lök'], ['红洋葱', 'Red onion', 'Rödlök'], ['土豆', 'Potato', 'Potatis', '马铃薯'], ['胡萝卜', 'Carrot', 'Morot', 'Morötter'],
  ['生菜', 'Lettuce', 'Sallad'], ['白菜', 'Chinese cabbage', 'Salladskål', '大白菜'], ['卷心菜', 'Cabbage', 'Vitkål', '包菜'],
  ['西兰花', 'Broccoli', 'Broccoli'], ['花菜', 'Cauliflower', 'Blomkål'], ['彩椒', 'Bell pepper', 'Paprika', '甜椒'], ['蘑菇', 'Mushrooms', 'Champinjoner', 'Svamp'],
  ['茄子', 'Aubergine', 'Aubergine', 'Eggplant'], ['西葫芦', 'Courgette', 'Zucchini'], ['姜', 'Ginger', 'Ingefära', '生姜'], ['豆角', 'Green beans', 'Haricots verts', '四季豆'],
  ['豆腐', 'Tofu', 'Tofu'], ['鸡蛋', 'Eggs', 'Ägg', '蛋'], ['牛奶', 'Milk', 'Mjölk', '鲜奶'], ['酸奶', 'Yoghurt', 'Yoghurt', 'Fil', 'Filmjölk'],
  ['黄油', 'Butter', 'Smör'], ['奶酪', 'Cheese', 'Ost', '芝士'], ['奶油', 'Cream', 'Grädde'],
  ['鸡肉', 'Chicken', 'Kyckling'], ['鸡胸肉', 'Chicken breast', 'Kycklingfilé'], ['猪肉', 'Pork', 'Fläskkött'], ['牛肉', 'Beef', 'Nötkött'],
  ['肉末', 'Mince', 'Färs', '绞肉', 'Köttfärs'], ['香肠', 'Sausage', 'Korv'], ['火腿', 'Ham', 'Skinka'], ['培根', 'Bacon', 'Bacon'],
  ['三文鱼', 'Salmon', 'Lax'], ['鳕鱼', 'Cod', 'Torsk'], ['虾', 'Prawns', 'Räkor'],
  ['苹果', 'Apple', 'Äpple', 'Äpplen'], ['香蕉', 'Banana', 'Banan'], ['橙子', 'Orange', 'Apelsin'], ['草莓', 'Strawberries', 'Jordgubbar'],
  ['蓝莓', 'Blueberries', 'Blåbär'], ['葡萄', 'Grapes', 'Vindruvor'], ['梨', 'Pear', 'Päron'], ['柠檬', 'Lemon', 'Citron'], ['牛油果', 'Avocado', 'Avokado'],
  ['剩菜', 'Leftovers', 'Rester'], ['米饭', 'Rice', 'Ris'], ['面条', 'Noodles', 'Nudlar'], ['面包', 'Bread', 'Bröd'], ['饺子', 'Dumplings', 'Dumplings']
];
function trFood(lang, item) {
  if (lang === 'en' && item.name_en) return item.name_en;
  if (lang === 'sv' && item.name_sv) return item.name_sv;
  var col = lang === 'en' ? 1 : lang === 'sv' ? 2 : 0, lw = String(item.name || '').replace(/^\s+|\s+$/g, '').toLowerCase();
  for (var i = 0; i < FOODS.length; i++)
    for (var j = 0; j < FOODS[i].length; j++)
      if (FOODS[i][j].toLowerCase() === lw) return FOODS[i][col];
  return item.name; // unknown foods are shown as typed
}
