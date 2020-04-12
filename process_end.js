
function exitCallback(code) {
    console.log('About to exist with code ==>' + code);

}

function beforeExitCallback(code) {
    console.log('event beforeExit of process,  with code ==>' + code);

}

process.on("exit" , exitCallback);
process.on("beforeExit",beforeExitCallback);
console.log('starting');