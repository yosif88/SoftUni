function phoneNumber(input){
    
    let phone = input.shift()
    let pattern = /\+359([- ])2\1\d{3}\1\d{4}\b/g
    
    let match = phone.match(pattern)
    console.log(match.join(', '));
}

phoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']
)