// process.stdin.on('data', pwdFunc = (data) => {
//     const cmd = data.toString().trim();

//     if(cmd === 'pwd'){
//         process.stdout.write(process.cwd());
//         process.stdout.write('\nprompt > ');
//     }

// });

module.exports = function () {
    process.stdout.write(process.cwd());
    process.stdout.write('\nprompt > ');
}