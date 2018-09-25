export function parseMemSpace(arg1) {
    if(parseFloat(arg1) < 10){
        return parseFloat(arg1)
    } else if(parseFloat(arg1) > 9){
        return parseFloat(arg1)/1000
    }
    return parseFloat(arg1);
}

export function parseTeamName(arg1){
    const str = arg1.split('/' && '_')
    return str.filter(word => word.length <6 && word.length > 4).join()
}

export function getROROWTeamDetails( arr1 ){
    const newObj = {};
    arr1.forEach(val => {
      if (newObj[parseTeamName(val.team)]) {
        const team = parseTeamName(val.team);
          delete val.id;
          delete val.team;
          delete val.percentage;
          delete val.area_name;
          delete val.dt;
          val.free_space = parseMemSpace(val.free_space)
          val.used_space = parseMemSpace(val.used_space)
          val.total_space = parseMemSpace(val.total_space)
          Object.keys(val).forEach(key => {
            newObj[team][key] = newObj[team][key] + val[key];
          });
      } else {
        val.free_space = parseMemSpace(val.free_space)
        val.used_space = parseMemSpace(val.used_space)
        val.total_space = parseMemSpace(val.total_space)
        newObj[parseTeamName(val.team)] = val;
      }
    });
    return Object.values(newObj)
}