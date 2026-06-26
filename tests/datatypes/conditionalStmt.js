let popupExist = true;
if (popupExist === true) 
    console.log('>>> perform click action on popup');

let data = "PASS"
if (!data) throw new Error('>>> data is not available');    

//if file exist read the file and perform some action or create the file

let fileExist = "Y";

if (fileExist === "Y") {
    console.log('>>> read the file and perform some action');
} else {
    console.log('>>> create the file');
}


//nestedIF conditions
let err = ""
if (err=== "Error"){
    console.log('>>Retry...');
}else if(err=== "Assertion Error")
{
    console.log("Fail the test");
}else if(err==="DataValidation") 
{
    console.log('Read testData file...');
}
else {
console.log('print the error message');
}

// ifElse
