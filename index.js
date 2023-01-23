const httpServer = require('http');
const url = require('url');
const fs = require('fs');

const replaceTemplate = require('./modules/replaceTemplate');

//read data from file
///Template
const tempLoan = fs.readFileSync(
    `${__dirname}/data/data.json`,
    'utf-8'
);

const templateLoanDomain = fs.readFileSync(
    `${__dirname}/template/templateLoanDomain.html`,
    'utf-8'
);


const dataObj = JSON.parse(tempLoan); //string to javascript object


//////////////
//// Create Server
const server = httpServer.createServer( (req, res) =>{// call back function


    const {query,pathname} = url.parse(req.url, true); // object destructors
    if(query.id){// if there is query parameter named id read as string
        // Courses page
        if (pathname === '/' || pathname.toLowerCase() === '/loans') {
            res.writeHead(200, {// Every thing ran successfully
                'Content-type': 'text/html'
            });
            const loan = dataObj[Number(query.id)];// convert string to numeric value
            const strLoanName = JSON.stringify(loan);
            const loanHTML = replaceTemplate(templateLoanDomain, loan);
            res.end(loanHTML);
        }
    }
    else{
            res.writeHead(404, {// Server did not find what you were looking for
                'Content-type': 'text/html'
            });
            res.end(`resource not found`)
        }
    });

/////////////////////////
/// Start listening to requests
server.listen(8000, 'localhost', () => {
    console.log('Listening to requests on port 8000')
});