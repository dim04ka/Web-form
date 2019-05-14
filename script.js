window.onload = function() {
  obj = {
    "data": [
      "affenpinscher",
      "whippet",
      "african",
      "irish wolfhound",
      "pembroke",
      "airedale",
      "NEWFOUNDLAND",
      "OTTERHOUND",
      "PAPILLON",
      "PEKINESE",
      "SWISS MOUNTAIN",
      "weimaraner",
      "MINIATURE PINSCHER",
      "akita",
      "GERMAN POINTER",
      "vizsla",
      "POMERANIAN",
      "appenzeller",
      "MINIATURE POODLE",
      "yorkshire terrier",
      "STANDARD POODLE",
      "basenji",
      "BERNESE MOUNTAIN",
      "wheaten terrier",
      "TOY POODLE",
      "beagle",
      "MEXICANHAIRLESS",
      "westhighland terrier",
      "PUG",
      "bluetick",
      "TIBETAN MASTIFF",
      "toy terrier",
      "PYRENEES",
      "borzoi",
      "BULL MASTIFF",
      "tibetan terrier",
      "REDBONE",
      "bouvier",
      "MALTESE",
      "silky terrier",
      "CHESAPEAKE RETRIEVER",
      "boxer",
      "MALINOIS",
      "sealyham terrier",
      "CURLY RETRIEVER",
      "brabancon",
      "MALAMUTE",
      "scottish terrier",
      "FLATCOATED RETRIEVER",
      "briard",
      "LHASA",
      "patterdale terrier",
      "GOLDEN RETRIEVER",
      "boston bulldog",
      "LEONBERG",
      "norwich terrier",
      "RHODESIAN RIDGEBACK",
      "french bulldog",
      "LABRADOR",
      "norfolk terrier",
      "ROTTWEILER",
      "staffordshire bullterrier",
      "KUVASZ",
      "lakeland terrier",
      "SALUKI",
      "cairn",
      "KOMONDOR",
      "kerryblue terrier",
      "SAMOYED",
      "chihuahua",
      "KELPIE",
      "irish terrier",
      "SCHIPPERKE",
      "chow",
      "KEESHOND",
      "fox terrier",
      "GIANT SCHNAUZER",
      "clumber",
      "HUSKY",
      "dandie terrier",
      "MINIATURE SCHNAUZER",
      "border collie",
      "WALKER HOUND",
      "border terrier",
      "ENGLISH SETTER",
      "coonhound",
      "ENGLISH HOUND",
      "bedlington terrier",
      "GORDON SETTER",
      "cardigan corgi",
      "BLOOD HOUND",
      "australian terrier",
      "IRISH SETTER",
      "dachshund",
      "BASSET HOUND",
      "american terrier",
      "ENGLISH SHEEPDOG",
      "great dane",
      "AFGHAN HOUND",
      "stbernard",
      "SHETLAND SHEEPDOG",
      "scottish deerhound",
      "IBIZAN HOUND",
      "english springer",
      "SHIBA",
      "dhole",
      "GROENENDAEL",
      "welsh spaniel",
      "SHIHTZU",
      "dingo",
      "ITALIAN GREYHOUND",
      "sussex spaniel",
      "BLENHEIM SPANIEL",
      "doberman",
      "GERMANSHEPHERD",
      "japanese spaniel",
      "BRITTANY SPANIEL",
      "norwegian elkhound",
      "ESKIMO",
      "irish spaniel",
      "COCKER SPANIEL",
      "entlebucher",
      "ENTLEBUCHER",
      "cocker spaniel",
      "IRISH SPANIEL",
      "eskimo",
      "NORWEGIAN ELKHOUND",
      "brittany spaniel",
      "JAPANESE SPANIEL",
      "germanshepherd",
      "DOBERMAN",
      "blenheim spaniel",
      "SUSSEX SPANIEL",
      "italian greyhound",
      "DINGO",
      "shihtzu",
      "WELSH SPANIEL",
      "groenendael",
      "DHOLE",
      "shiba",
      "ENGLISH SPRINGER",
      "Ibizan hound",
      "SCOTTISH DEERHOUND",
      "shetland sheepdog",
      "STBERNARD",
      "afghan hound",
      "GREAT DANE",
      "english sheepdog",
      "AMERICAN TERRIER",
      "basset hound",
      "DACHSHUND",
      "irish setter",
      "AUSTRALIAN TERRIER",
      "blood hound",
      "CARDIGAN CORGI",
      "gordon setter",
      "BEDLINGTON TERRIER",
      "english hound",
      "COONHOUND",
      "english setter",
      "BORDER TERRIER",
      "walker hound",
      "BORDER COLLIE",
      "miniature schnauzer",
      "DANDIE TERRIER",
      "husky",
      "CLUMBER",
      "giant schnauzer",
      "FOX TERRIER",
      "keeshond",
      "CHOW",
      "schipperke",
      "IRISH TERRIER",
      "kelpie",
      "CHIHUAHUA",
      "samoyed",
      "KERRYBLUE TERRIER",
      "komondor",
      "CAIRN",
      "saluki",
      "LAKELAND TERRIER",
      "kuvasz",
      "STAFFORDSHIRE BULLTERRIER",
      "rottweiler",
      "NORFOLK TERRIER",
      "labrador",
      "FRENCH BULLDOG",
      "rhodesian ridgeback",
      "NORWICH TERRIER",
      "leonberg",
      "BOSTON BULLDOG",
      "golden retriever",
      "PATTERDALE TERRIER",
      "lhasa",
      "BRIARD",
      "flatcoated retriever",
      "SCOTTISH TERRIER",
      "malamute",
      "BRABANCON",
      "curly retriever",
      "SEALYHAM TERRIER",
      "malinois",
      "BOXER",
      "chesapeake retriever",
      "SILKY TERRIER",
      "maltese",
      "BOUVIER",
      "redbone",
      "TIBETAN TERRIER",
      "bull mastiff",
      "BORZOI",
      "pyrenees",
      "TOY TERRIER",
      "tibetan mastiff",
      "BLUETICK",
      "pug",
      "WESTHIGHLAND TERRIER",
      "mexicanhairless",
      "BEAGLE",
      "toy poodle",
      "WHEATEN TERRIER",
      "bernese mountain",
      "BASENJI",
      "standard poodle",
      "YORKSHIRE TERRIER",
      "miniature poodle",
      "APPENZELLER",
      "pomeranian",
      "VIZSLA",
      "german pointer",
      "AKITA",
      "miniature pinscher",
      "WEIMARANER",
      "swiss mountain",
      "AIREDALE",
      "pekinese",
      "WHIPPET",
      "papillon",
      "AFRICAN",
      "otterhound",
      "IRISH WOLFHOUND",
      "newfoundland",
      "PEMBROKE",
      "AFFENPINSCHER"
    ]
  }

  // blocked
  // var requestURL = 'http://www.mrsoft.by/data.json';
  // var request = new XMLHttpRequest();
  // request.open('GET', requestURL);
  // request.responseType = 'json';
  // request.send();
  // request.onload = function() {
  //   var obj = request.response;
  //   console.log(obj);
  // }

  var item_in = document.querySelector(".in");
  var div = document.querySelector(".out");
  var checbox = document.querySelector(".checkbox");
  var cours = document.querySelector(".cours");
  var btn1= document.querySelector(".btn-1");
  var btn2 = document.querySelector(".btn-2");

    btn1.onclick = function(e) {
      e.preventDefault();
      div.innerHTML = "";
      flag = false;
      count = 0;
      var text = +(item_in.value);
      if (text <= 0 ) {
        alert("Введите положительное число");
      } else {
        for(var i=0 in obj.data) {
          if (obj.data[i].length > text) {
            div.innerHTML += "<li>" + obj.data[i] + "</li>";
            flag = true;
            count++;
          }
        }
        cours.innerHTML = count;
        if (!flag) {
          div.innerHTML = "Не найдено элементов по данным условиям";
        }
      }
    }

    btn2.onclick = function(e) {
      e.preventDefault();
      div.innerHTML = "";
      flag = false;
      count = 0;
      var text = item_in.value;
      if (text !== "") {
        for(var i=0 in obj.data) {
          switch(checbox.checked){
            case false:
              objText = obj.data[i].toLowerCase();
              text1 = text.toLowerCase();
              if (objText.indexOf(text1) !== -1) {
                div.innerHTML += "<li>" + obj.data[i] + "</li>";
                flag = true;
                count++;
              }
              break;
            case true:
              if (obj.data[i].indexOf(text) !== -1) {
                div.innerHTML += "<li>" + obj.data[i] + "</li>";
                flag = true;
                count++;
              }
              break;
          }
        }
        cours.innerHTML = count;
        if (!flag) {
          div.innerHTML = "Не найдено элементов по данным условиям";
        }
      } else {
        alert("Пустая строка");
      }
    }

  
}
