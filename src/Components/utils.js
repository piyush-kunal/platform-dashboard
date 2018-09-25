export function parseMemSpace(arg1) {
    if(parseFloat(arg1) < 5){
        return parseFloat(arg1)
    } else if(parseFloat(arg1) > 4){
        return parseFloat(arg1)/1000
    }
    return parseFloat(arg1);
}

export function parseTeamName(arg1){
    const str = arg1.split('/' && '_')
    return str.filter(word => word.length <6 && word.length > 4).join()
}