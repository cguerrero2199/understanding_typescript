var input; //a more restrictive type of any
var uname;
input = 5;
input = 'max';
//this makes sure extra checks happen before free assiging like with the type any
if (typeof input === 'string') {
    uname = input;
}
//never forced no return type where void could be optional in some cases
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('an error occurred!', 500);
