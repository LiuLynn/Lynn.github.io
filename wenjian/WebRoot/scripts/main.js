/**
 * 
 */
//Image switcher code
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');//获取这张图片的src属性的值
    if(mySrc === 'images/3.jpg') {//判断src的值是否等于原始图像的路径
      myImage.setAttribute('src', 'images/firefox2.jpg');//如果是，我们将src的值改为第二章图片的路径，强制在<img>内读取另一张图片
    } else {//如果不是，我们把src的值重新设置为原始图片的路径，即原来的状态
      myImage.setAttribute('src', 'images/3.jpg');
    }
}
//personalized welcome message code
var myButton = document.querySelector('button');//抓取按钮和标题的引用，并将其存放在变量里
var myHeading = document.querySelector('h1');
function setUserName() {
	  var myName = prompt('Please enter your name.');//prompt()弹出一个对话框，需要用户输入数据，确定后将数据存储在变量里
	  localStorage.setItem('name', myName);//调用一个叫 localStorage 的 API ，它允许我们将数据存储在浏览器里以供后续获取
	  myHeading.textContent = 'Mozilla is cool, ' + myName;
	}
if(!localStorage.getItem('name')) {//首先用一个非运算符（逻辑非，用 ! 表示）来检查 name 数据是否存在
	 /*如果不存在， setUserName() 函数就会被运行来创建它。
	  * 如果存在（用户之前创建过），我们通过 getItem() 调用存储过的姓名
	  * 然后将 textContent 设置为加上用户姓名的字符串，就像在 setUserName() 里做过的一样。
	  * */                               
	  setUserName();
	} else {
	  var storedName = localStorage.getItem('name');
	  myHeading.textContent = 'Mozilla is cool, ' + storedName;
	}
myButton.onclick = function() {
	/*将下面的 onclick 事件处理器绑定到按钮上，这样当我们点击按钮时， 
	 * setUserName() 函数就会被运行。
	 * 这样用户就可以随时通过点击按钮来设置新的姓名。*/
	  setUserName();
	}