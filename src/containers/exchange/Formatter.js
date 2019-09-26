
export const priceChange = (open, last, n=8) => {
    let p1 = parseFloat(open)
    let p2 = parseFloat(last)
    return Math.round((p2-p1), n)
}

export const ticker_color_class= (l, o) => {
    let last = parseFloat(l)
    let open = parseFloat(o)
    if(last === open){
        return 'orange_txt'
    }
    else if(last < open){
        return 'pink_txt'
    }
    else {
        return 'green_txt'
    }
}
