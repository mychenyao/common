/*
常用公共方法封装；
*/
// var cookie =require("./cookie");

function Common(){
  const a = 90;
    let j ='kkkk'
   return 'NI99fdfdO'
}
Common.prototype={
	constructor:Common,
	//获取url 地址参数 start
	UrlSearch:(function(){
		return new UrlSearch;
	})(),
	// url 转码；
	UrlEncode:function (str){
        var ret="";
        var strSpecial="!\"#$%&'()*+,/:;<=>?[]^`{|}~%";
        var tt= "";
        for(var i=0;i<str.length;i++){
          var chr = str.charAt(i);
          var c=str2asc(chr);
          tt += chr+":"+c+"n";
          if(parseInt("0x"+c) > 0x7f){
            ret+="%"+c.slice(0,2)+"%"+c.slice(-2);
          }else{
            if(chr==" ")
              ret+="+";
            else if(strSpecial.indexOf(chr)!=-1)
              ret+="%"+c.toString(16);
            else
              ret+=chr;
          }
        }
        return ret;
      },
      // 存储模块
  		getSession:function(KEY){
			var jsonString = sessionStorage.getItem(key) || false;
			return JSON.parse(jsonString);
  		},
  		setSession:function(KEY,VALUE){
  			var jsonString = sessionStorage.getItem(key);
  			 	jsonString = jsonString || "[]";
  			 	sessionStorage.setItem(KEY, JSON.stringify(VALUE));
  		},
  		getLocalStorage:function(KEY){
			var jsonString = localStorage.getItem(KEY) || false;
			return JSON.parse(jsonString);
  		},
  		setLocalStorage:function(KEY,VALUE){
  			var jsonString = localStorage.getItem(KEY);
  			 	jsonString = jsonString || "[]";
  			 	localStorage.setItem(KEY, JSON.stringify(VALUE));
  		},
 // 存储模 end
 		
}
function UrlSearch(){
    let name,value,str=location.href,num=str.indexOf("?"); //取得整个地址栏
    str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]
    var arr=str.split("&"); //各个参数放到数组里
    for(var i=0;i < arr.length;i++){
      num=arr[i].indexOf("=");
      if(num>0){
        name=arr[i].substring(0,num);
        value=arr[i].substr(num+1);
        this[name]=value;
      }
    }
  }
  function $_common (){
  	return new Common()
  }
  window.$_common=$_common;
  // export Common