const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const tynt = require('tynt');
const moment = require('moment');
const nodemailer = require('nodemailer');
let isDbConnected = false
const fs = require('fs');
const hbs = exphbs.create({
	defaultLayout: 'main',
	extname: '.jets'
});
const EXPIRE_TIME = 1000*60*60*2 ;
const {
	PORT = 1108,
	NODE_ENV = 'development',
	SESS_NAME = 'sid',
	SESS_SECRET = '1234567890',
	SESS_LIFETIME = EXPIRE_TIME
} = process.env

const IN_PROD = NODE_ENV === 'production'

const app = express();
const systemTitle = 'rjustineduardo'

//=======================================================================
//=============================TIMESTAMPER===============================
//= Allows Timestamp for console logging
//=
//=
//=
//=======================================================================
function timeStamp(color, text){
	let x = color;
	let y;
	if (x==='Red') {
		y = ` : ${tynt.Red(text)}`;
	} else	{
		if (x==='Green') {
			y = ` : ${tynt.Green(text)}`;
		}
	};
	console.log(`${tynt.Yellow(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))}` + y);
};

//=======================================================================
//=============================Middle Wares==============================
//= Publics - declares static files
//= Middlewares - logger - logs files for jregistration
//=             - handlebars middleware - replaces .jets to 
//=               proper .handlebars
//=             - bodyparser for reading json files
//=======================================================================

//Publics
app.use(express.static(path.join(__dirname, '/public')));

// Init middleware
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jetservices.it.solutions@gmail.COM',
    pass: 'xcvxcxvxc12@!'
  },
  tls: { rejectUnauthorized: false }
});

// Handlebars Middleware
app.engine('.jets', hbs.engine);
app.set('view engine', '.jets');
// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const rJmetaTitle = "RJUSTINEDUARDO.COM"
const rJmetaDesc = "Satisfy all your website needs from frontend to backend"
const rJmetaImg = "https://rjustineduardo.com/images/metadata.jpg"
const rJmetaUrl = "https://rjustineduardo.com/"

//homepage route
app.get('/', (req, res)=>{
	res.render('index', { 
		metaTitle: rJmetaTitle,
		metaDesc: rJmetaDesc,
		metaImg: rJmetaImg,
		metaUrl:rJmetaUrl,
		title: rJmetaTitle
	});
});

app.post('/sendmail', (req, res)=>{

	console.log('sending email')
	let name = req.body.name
	let company = req.body.company
	let email = req.body.email
	let message = req.body.message
	let text = '<h1>THANK YOU FOR YOUR INQUIRY</h1><h3>We will respond you shortly...</h3><br><p>name: '+name+'</p><p>company: '+company+'</p><p>email: '+email+'</p><p>message: '+message+'</p>'
	const mailOptions = {
	  from: 'jetservices.it.solutions@gmail.com',
	  to: email,
	  bcc: 'jetservices.it.solutions@gmail.com',
	  subject: 'JET SERVICES - Thank you for your inquiry!',
	  html: text
	};

	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	    res.send('ok')
	  }
	});
});



//=======================================================================
//==============================ERROR 404================================
//=
//=======================================================================

app.use((req, res, next) => {
    res.status(404).render('404', {
		title: systemTitle,
		titleurl: '/',
		navtitle: systemTitle,
		errorpage: true,
		allowPortrait: true
	});
});

//==========================TERMINAL INTERFACE===========================
//=JET services
//=Server Running
//=list of variables:
//= -port = declared at top
//= -tynt = terminal color manager
//= -app = express
//=
//=======================================================================

function serverStart() {
	app.listen(PORT, function(){
		console.log(`${tynt.Yellow('        ____.______________________                           .__                     ')}`);
		console.log(`${tynt.Yellow('        |    |\\_   _____/\\__    ___/   ______ ______________  _|__| ____  ____   ______')}`);
		console.log(`${tynt.Yellow('        |    | |    __)_   |    |     /  ___// __ \\_  __ \\  \\/ /  |/ ___\\/ __ \\ /  ___/')}`);
		console.log(`${tynt.Yellow('    /\\__|    | |        \\  |    |     \\___ \\\\  ___/|  | \\/\\   /|  \\  \\__\\  ___/ \\___ \\ ')}`);
		console.log(`${tynt.Yellow('    \\________|/_______  /  |____|    /____  >\\___  >__|    \\_/ |__|\\___  >___  >____  >')}`);
		console.log(`${tynt.Yellow('                      \\/                  \\/     \\/                    \\/    \\/     \\/ ')}`);
		console.log(`${tynt.Yellow('  _________                                 __________                    .__                ')}`);
		console.log(`${tynt.Yellow(' /   _____/ ______________  __ ___________  \\______   \\__ __  ____   ____ |__| ____    ____  ')}`);
		console.log(`${tynt.Yellow(' \\_____  \\_/ __ \\_  __ \\  \\/ // __ \\_  __ \\  |       _/  |  \\/    \\ /    \\|  |/    \\  / ___\\ ')}`);
		console.log(`${tynt.Yellow(' /        \\  ___/|  | \\/\\   /\\  ___/|  | \\/  |    |   \\  |  /   |  \\   |  \\  |   |  \\/ /_/  >')}`);
		console.log(`${tynt.Yellow('/_______  /\\___  >__|    \\_/  \\___  >__|     |____|_  /____/|___|  /___|  /__|___|  /\\___  / ')}`);
		console.log(`${tynt.Yellow('        \\/     \\/                 \\/                \\/           \\/     \\/        \\//_____/  ')}`);
		console.log(`${tynt.Yellow(' =================================Server running on '+ PORT +' ===================================')}`);
		timeStamp('Green', 'Voting system session has begun')
		timeStamp('Green', 'The system is now accepting new ballots')
	}); 
};

setTimeout(serverStart, 1000);