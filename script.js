// دالة لإظهار المناطق الخاصة بكل محافظة
function showAreas(province) {
    const areas = {
        "العاصمة": [ "kuwait city,adailiya,block 1","kuwait city,adailiya,block 2","kuwait city,adailiya,block 3","kuwait city,adailiya,block 4", 
            "bneid al-gar,block 1","bneid al-gar,block 2","bneid al-gar,block 3",
            "daiya,block 1","daiya,block 2","daiya,block 3","daiya,block 4","daiya,block 5",
            "dasma,block 1","dasma,block 2","dasma,block 3","dasma,block 4","dasma,block 5","dasma,block 6",
            "dasman,block 1","dasman,block 2","dasman,block 3" , 
            "doha,block 1","doha,block 2","doha,block 3","doha,block 4","doha,block 5","doha,block 6",
            "faiha,block 1","faiha,block 2","faiha,block 3","faiha,block 4","faiha,block 5","faiha,block 6","faiha,block 7","faiha,block 8","faiha,block 9",
            "غرناطة قطعة 1","غرناطة قطعة 2","غرناطة قطعة 3",
            "jaber al ahmad,block 1","jaber al ahmad,block 2","jaber al ahmad,block 5","jaber al ahmad,block 6","jaber al ahmad,block 7",
            "jibla,block 1","jibla,block 2","jibla,block 3","jibla,block 4","jibla,block 5","jibla,block 6","jibla,block 7","jibla,block 8","jibla,block 9","jibla,block 10","jibla,block 11","jibla,block 12","jibla,block 13","jibla,block 14","jibla,block 15",
            "kaifan,block 1","kaifan,block 2","kaifan,block 3","kaifan,block 4","kaifan,block 5","kaifan,block 6","kaifan,block 7",
            "khaldiya,block 1","khaldiya,block 2","khaldiya,block 3","khaldiya,block 4",
            "kuwait city",
            "mansouriya,block 1","mansouriya,block 2",
            "mirqab,block 1","mirqab,block 2","mirqab,block 3",
            "al mubarakiya",
            "mubarekiya camps",
            "north west solibkhat,block 1","north west solibkhat,block 2","north west solibkhat,block 3",
            "nuzha,block 1","nuzha,block 2","nuzha,block 3",
            "qadsiya,block 1","qadsiya,block 2","qadsiya,block 3","qadsiya,block 4","qadsiya,block 5","qadsiya,block 6","qadsiya,block 7","qadsiya,block 8","qadsiya,block 9",
            "qortuba,block 1","qortuba,block 2","qortuba,block 3","qortuba,block 4","qortuba,block 5",
            "rawda,block 1","rawda,block 2","rawda ,block 3","rawda,block 4","rawda,block 5",
            "salhiyah (jibla  block 13)",
            "seif palace (ديوان ولي العهد) - (الديوان الأميري)",
            "shamiya,block 1","shamiya,block 2","shamiya,block 3","shamiya,block 4","shamiya,block 5","shamiya,block 6","shamiya,block 7","shamiya,block 8","shamiya,block 9","shamiya,block 10",
            "sharq,block 1","sharq,block 2","sharq,block 3","sharq,block 4","sharq,block 5","sharq,block 6","sharq,block 7","sharq,block 8",
            "shuwaikh residential",
            "shuwaikh administrative",
            "shuwaikh educational",
            "shuwaikh medical",
            "shuwaikh port",
            "shuwaikh industrial 1","shuwaikh industrial 2","shuwaikh industrial 3",
            "sulaibikhat,block 1","sulaibikhat,block 2","sulaibikhat,block 3","sulaibikhat,block 4","sulaibikhat,block 5",
            "surra,block 1","surra,block 2","surra,block 3","surra,block 4","surra,block 5","surra,block 6",
            "yarmouk ,block 1","yarmouk ,block 2","yarmouk ,block 3","yarmouk ,block 4",],
        "حولي": ["السالمية", "الجابرية", "مشرف", "بيان"],
        "الفروانية": ["خيطان", "العارضية", "الفردوس", "عبد الله المبارك"],
        "الأحمدي": ["الفحيحيل", "المنقف", "الصباحية", "الرقة"],
        "مبارك الكبير": ["القرين", "العدان", "المسايل", "صبحان"],
        "الجهراء": ["النعيم", "الصليبية", "العبدلي", "كبد"]
    };

    const areasContainer = document.getElementById("areas");
    areasContainer.innerHTML = ''; // نعيد تعيين المحتوى

    const selectedAreas = areas[province];
    selectedAreas.forEach(area => {
        const areaDiv = document.createElement("div");
        areaDiv.className = "area";
        areaDiv.textContent = area;
        areasContainer.appendChild(areaDiv);
    });
}

let kaywords = [
    // "kuwait city",

    "adailiya,block 1","adailiya,block 2","adailiya,block 3","adailiya,block 4", 
    "bneid al-gar,block 1","bneid al-gar,block 2","bneid al-gar,block 3",
    "daiya,block 1","daiya,block 2","daiya,block 3","daiya,block 4","daiya,block 5",
    "dasma,block 1","dasma,block 2","dasma,block 3","dasma,block 4","dasma,block 5","dasma,block 6",
    "dasman,block 1","dasman,block 2","dasman,block 3" , 
    "doha,block 1","doha,block 2","doha,block 3","doha,block 4","doha,block 5","doha,block 6",
    "faiha,block 1","faiha,block 2","faiha,block 3","faiha,block 4","faiha,block 5","faiha,block 6","faiha,block 7","faiha,block 8","faiha,block 9",
    "غرناطة قطعة 1","غرناطة قطعة 2","غرناطة قطعة 3",
    "jaber al ahmad,block 1","jaber al ahmad,block 2","jaber al ahmad,block 5","jaber al ahmad,block 6","jaber al ahmad,block 7",
    "jibla,block 1","jibla,block 2","jibla,block 3","jibla,block 4","jibla,block 5","jibla,block 6","jibla,block 7","jibla,block 8","jibla,block 9","jibla,block 10","jibla,block 11","jibla,block 12","jibla,block 13","jibla,block 14","jibla,block 15",
    "kaifan,block 1","kaifan,block 2","kaifan,block 3","kaifan,block 4","kaifan,block 5","kaifan,block 6","kaifan,block 7",
    "khaldiya,block 1","khaldiya,block 2","khaldiya,block 3","khaldiya,block 4",
    "kuwait city",
    "mansouriya,block 1","mansouriya,block 2",
    "mirqab,block 1","mirqab,block 2","mirqab,block 3",
    "al mubarakiya",
    "mubarekiya camps",
    "north west solibkhat,block 1","north west solibkhat,block 2","north west solibkhat,block 3",
    "nuzha,block 1","nuzha,block 2","nuzha,block 3",
    "qadsiya,block 1","qadsiya,block 2","qadsiya,block 3","qadsiya,block 4","qadsiya,block 5","qadsiya,block 6","qadsiya,block 7","qadsiya,block 8","qadsiya,block 9",
    "qortuba,block 1","qortuba,block 2","qortuba,block 3","qortuba,block 4","qortuba,block 5",
    "rawda,block 1","rawda,block 2","rawda ,block 3","rawda,block 4","rawda,block 5",
    "salhiyah (jibla  block 13)",
    "seif palace (ديوان ولي العهد) - (الديوان الأميري)",
    "shamiya,block 1","shamiya,block 2","shamiya,block 3","shamiya,block 4","shamiya,block 5","shamiya,block 6","shamiya,block 7","shamiya,block 8","shamiya,block 9","shamiya,block 10",
    "sharq,block 1","sharq,block 2","sharq,block 3","sharq,block 4","sharq,block 5","sharq,block 6","sharq,block 7","sharq,block 8",
    "shuwaikh residential",
    "shuwaikh administrative",
    "shuwaikh educational",
    "shuwaikh medical",
    "shuwaikh port",
    "shuwaikh industrial 1","shuwaikh industrial 2","shuwaikh industrial 3",
    "sulaibikhat,block 1","sulaibikhat,block 2","sulaibikhat,block 3","sulaibikhat,block 4","sulaibikhat,block 5",
    "surra,block 1","surra,block 2","surra,block 3","surra,block 4","surra,block 5","surra,block 6",
    "yarmouk ,block 1","yarmouk ,block 2","yarmouk ,block 3","yarmouk ,block 4",

    // farwniya 

    "sabah al nasser,block 1","sabah al nasser,block 2","sabah al nasser,block 3","sabah al nasser,block 4","sabah al nasser,block 5","sabah al nasser,block 6","sabah al nasser,block 7",
    "andalous,block 1","andalous,block 2","andalous,block 3","andalous,block 4","andalous,block 5","andalous,block 6","andalous,block 7","andalous,block 8","andalous,block 9","andalous,block 10","andalous,block 11","andalous,block 12","andalous,block 13",
    "ardiya,block 1","ardiya,block 2","ardiya,block 3","ardiya,block 4","ardiya,block 5","ardiya,block 6","ardiya,block 7","ardiya,block 8","ardiya,block 9","ardiya,block 10","ardiya,block 11",
    "ardiya small industrial",
    "ardiya storage zone",
    "ishbiliya,block 1","ishbiliya,block 2","ishbiliya,block 3","ishbiliya,block 4",
    "al-dajeej",
    "farwaniya,block 1","farwaniya,block 2","farwaniya,block 3","farwaniya,block 4","farwaniya,block 5","farwaniya,block 6",
    "abdullah al mubarak,block 1","abdullah al mubarak,block 2","abdullah al mubarak,block 3","abdullah al mubarak,block 4","abdullah al mubarak,block 5","abdullah al mubarak,block 6","abdullah al mubarak,block 7","abdullah al mubarak,block 8","abdullah al mubarak,block 9",
    "ferdous,block 1","ferdous,block 2","ferdous,block 3","ferdous,block 4","ferdous,block 5","ferdous,block 6","ferdous,block 7","ferdous,block 8","ferdous,block 9",
    "west abdullah al mubarak,block 1","west abdullah al mubarak,block 2","west abdullah al mubarak,block 3","west abdullah al mubarak,block 4","west abdullah al mubarak,block 5","west abdullah al mubarak,block 6","west abdullah al mubarak,block 7",
    "jeleeb al-shuyoukh,block 1","jeleeb al-shuyoukh,block 2","jeleeb al-shuyoukh,block 3","jeleeb al-shuyoukh,block 4","jeleeb al-shuyoukh,block 5",
    "khaitan,block 1","khaitan,block 2","khaitan,block 3","khaitan,block 4","khaitan,block 5","khaitan,block 6","khaitan,block 7","khaitan,block 8","khaitan,block 9","khaitan,block 10",
    "nahda,block 1","nahda,block 2","nahda,block 3",
    "omariya,block 1","omariya,block 2","omariya,block 3","omariya,block 4","omariya,block 5",
    "rabia,block 1","rabia,block 2","rabia,block 3","rabia,block 4","rabia,block 5",
    "rai,block 1","rai,block 2","rai,block 3","rai,block 4","rai,block 5","rai,block 6",
    "الرقعي,block 1","الرقعي,block 2",
    "rehab,block 1","rehab,block 2","rehab,block 3",

    // Ahmadi 

];
const resultebox = document.querySelector(".resulte-box");
const inputbox = document.getElementById("input-box");



inputbox.onkeyup = function(){
    let result = [];
    let input = inputbox.value;
    if (input.length){
        result = kaywords.filter((kayword)=>{
            return kayword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
    if(!result.length){
        resultebox.innerHTML= '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    })
    resultebox.innerHTML = "<ul>" +content.join('')+ "</ul>";
}

function selectInput(list){
    inputbox.value = list.innerHTML
    resultebox.innerHTML = '';
}



// -----------------تجربه السايد بار------------------------

const governorates = {
    "kuwait city": ["adailiya","bneid al-gar","daiya","dasma","dasman","غرناطة","jaber al ahmad","jibla","kaifan","khaldiya","kuwait city","mansouriya","mirqab","al mubarakiya","mubarekiya camps","north w-solibkhat","nuzha","qadsiya","qortuba","rawda","salhiyah (jibla  block 13)","seif palace","shamiya","sharq","shuwaikh residential","shuwaikh administrative","shuwaikh educational","shuwaikh medical","shuwaikh port","shuwaikh industrial","sulaibikhat","surra","yarmouk"],
    "Farwaniya": ["sabah al nasser","andalous","ardiya","ardiya small industrial","ardiya storage zone","ishbiliya","al-dajeej","farwaniya","abdullah al mubarak","ferdous","west abdullah al mubarak","jeleeb al-shuyoukh","khaitan","nahda","omariya","rabia","rai (الري)","الرقعي"],
    "Hawally ": ["1","2","3","4","5","6","7","8","9","10"],
    "Ahmadi ": ["1","2","3","4","5","6","7","8","9","10"],
    "Jahra ": ["1","2","3","4","5","6","7","8","9","10"],
    "Mubarak Al-kabir": ["1","2","3","4","5","6","7","8","9","10"]
};

window.onload = function() {
    const governoratesList = document.getElementById('governoratesList');
    
    Object.keys(governorates).forEach(governorate => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.innerHTML = `<i class="fas fa-city"></i> ${governorate}`;
        link.href = "#";
        link.onclick = function() {
            toggleAreas(governorate, li);
        };
        li.appendChild(link);

        const subMenu = document.createElement('ul');
        subMenu.className = "sub-menu";
        governorates[governorate].forEach(area => {
            const areaItem = document.createElement('li');
            areaItem.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${area}`;
            subMenu.appendChild(areaItem);
        });
        li.appendChild(subMenu);
        governoratesList.appendChild(li);

        // استعادة الحالة من Local Storage
        const isExpanded = localStorage.getItem(governorate) === 'true';
        if (isExpanded) {
            subMenu.classList.add('show');
        }
    });
};

// وظيفة البحث
document.getElementById('searchBar').addEventListener('keyup', function() {
    const query = this.value.toLowerCase();
    const allLinks = document.querySelectorAll('li a');
    
    allLinks.forEach(link => {
        if (link.textContent.toLowerCase().includes(query)) {
            link.parentElement.style.display = '';
        } else {
            link.parentElement.style.display = 'none';
        }
    });
});

// دالة التبديل لعرض وإخفاء المناطق
function toggleAreas(governorate, liElement) {
    const subMenu = liElement.querySelector('.sub-menu');
    subMenu.classList.toggle('show');
    
    // حفظ حالة القائمة في Local Storage
    const isExpanded = subMenu.classList.contains('show');
    localStorage.setItem(governorate, isExpanded);
}

// دالة التبديل لإظهار وإخفاء السايد بار على الجوال
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
}
// -----------------تجربه السايد بار------------------------