var debounceFunc = function debounce(func, delay){
  //設定計時器
  var timer = null;
  return function(){
    var context = this;
    var args = arguments;

    //小於delay時，重置計時器
    clearTimeout(timer)

    timer = setTimeout(function(){
      func.apply(context, args)
    }, delay)
  }
}
