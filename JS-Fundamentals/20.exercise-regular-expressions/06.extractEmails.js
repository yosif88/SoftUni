function extractEmails(input){
    let pattern = /(?<=\s)([a-zA-Z0-9]+[\.\-\_]?[a-zA-Z0-9]+)@([a-zA-Z]+[\-]?[a-zA-Z]+)(\.\w+\.?\w+)/g
    let emails = input.match(pattern);

    for (const email of emails) {
        console.log(email);
    }

}

extractEmails('Please contact us at: support@github.com.')
console.log('=================');
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
console.log('==========================');
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.')
