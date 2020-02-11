let year = 2006;
let champion = 2006;


console.log(`${champion} was the ${year} NHL Champion`);

if (year < 2006 || year > 2017) {
    console.log("Sorry, please try a differnt year");
    
}else {
    switch (year) {
        case 2017 :
            console.log("2017 - Pittsburgh Penguins");
            break;
        case 2016 :
            console.log("2016 - Pittsburgh Penguins");
            break;
        case 2015 :
            console.log("2015 - Chicago Blackhawks");
            break;
        case 2014 :
            console.log("2014 - Los Angeles Kings");
            break;
        case 2013 :
            console.log("2013 - Chicago Blackhawks");
            break;
        case 2012 :
            console.log("2012 - Los Angeles Kings");
            break;
        case 2011 :
            console.log("2011 - Boston Bruins");
            break;
        case 2010 :
            console.log("2010 - Chicago Blackhawks");
            break;
        case 2009 :
            console.log("2009 - Pittsburgh Penguinas");
            break;
        case 2008 :
            console.log("2008 - Detroit Red Wings");
            break;
        case 2007 :
            console.log("2007 - Anaheim Ducks");
            break;
        case 2006 :
            console.log("2006 - Carolina Hurricanes");
            break;
        default:
    }
}

