function _run_bash(command, args, stdin, successCallback, failCallback){
  $.ajax({
      type: "POST",
      url: "http://0.0.0.0:3000/",
      dataType: "json",
      contentType:"application/json; charset=utf-8",
      data: JSON.stringify({ command: command, args: args }),
      error: failCallback,
      success: successCallback
  });
}


function success(data, status, jqxhr){
  console.log("we got good things");
  console.log(status, data);
}

function error(jxqxr, status, thrown){
  console.log("we got bad things");
  console.log("ERROR:", thrown, status)

}

function toggle_pause(){
  _run_bash("./toggle_pause", [], "", success, error);
}


vmxApi('pausehand').onEnter(function(){ toggle_pause }, null, {minTime:1000});

