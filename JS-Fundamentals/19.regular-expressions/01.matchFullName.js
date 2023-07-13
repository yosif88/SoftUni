function matchFullName(text){
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
    let fullName = text.match(pattern);
  
    console.log(fullName.join(' '));

}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")