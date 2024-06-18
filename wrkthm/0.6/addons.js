export function myAlert () {
  if (arguments === undefined || arguments["0"].alerts == undefined) {
    return;
  }

  console.log(arguments["0"].alerts[0]);

  if (arguments.length > 0) {
    console.log(arguments.length);
    for (let index = 0; index < arguments[0].alerts.length; index++) {
      if ((typeof arguments["0"].alerts[index]) == 'string') {
        alert(arguments["0"].alerts[index]);
      }  
      else {
        console.log(`error type: ${typeof arguments["0"].alerts[index]}`);
      }
    }
  }
}