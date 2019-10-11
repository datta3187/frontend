import moment from 'moment';
const BigNumber = require('bignumber.js');

export const h24Change = (open, last, n=6) => {
    let p1 = new BigNumber(open)
    let p2 = new BigNumber(last)
    return (p2.minus(p1)).toFixed(n)
}

export const ticker_color_class= (l, o) => {
    let last = new BigNumber(l)
    let open = new BigNumber(o)
    if(last.eq(open)){
        return ''
    }
    else if(last.gt(open)){
        return 'pink_txt'
    }
    else {
        return 'green_txt'
    }
}

export const toFixed =(num, tofixed=6) => {
    return new BigNumber(num).toFixed(tofixed)
}

export const total =(price, vol, tofixed=6) => {
    let x = new BigNumber(price)
    let y = new BigNumber(vol)
    return x.multipliedBy(y).toFixed(tofixed)
}

export const preciseNumber = (str, upto=6) => {
    let split_str = str.split('.');
    if( split_str[1] && split_str[1].length > upto){
        split_str[1] = split_str[1].substring(0, upto)
        return split_str.join('.')
    }
    return str;
}

export const tradeTime =(timestamp) =>{
    let m = moment.unix(timestamp)
    return `${m.format("HH:mm")}${m.format(":ss")}`
}
