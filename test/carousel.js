function trimString(s) {
    var l=0, r=s.length -1;
    while(l < s.length && s[l] == ' ') l++;
    while(r > l && s[r] == ' ') r-=1;
    return s.substring(l, r+1);
  }
  
  function compareObjects(o1, o2) {
    var k = '';
    for(k in o1) if(o1[k] != o2[k]) return false;
    for(k in o2) if(o1[k] != o2[k]) return false;
    return true;
  }
  
  function itemExists(haystack, needle) {
    for(var i=0; i<haystack.length; i++) if(compareObjects(haystack[i], needle)) return true;
    return false;
  }
  
//   var objects = [
//     {
//       "foo" : "bar",
//       "bar" : "sit"
//     },
//     {
//       "foo" : "lorem",
//       "bar" : "ipsum"
//     },
//     {
//       "foo" : "dolor blor",
//       "bar" : "amet blo"
//     }
//   ];
  
  function searchFor(toSearch) {
    var results = [];
    toSearch = trimString(toSearch); 
    for(var i=0; i<games.length; i++) {
      for(var key in objects[i]) {
        if(games[i][key].indexOf(toSearch)!=-1) {
          if(!itemExists(results, games[i])) results.push(games[i]);
        }
      }
    }
    return results;
  }
  
  console.log(searchFor('em'));


