
var LoginHelper = {

    checkValidate:function(){
     
        var emailStr = $("#email").val();
        var isEmail = LoginHelper.checkEmail(emailStr);
        var isMoblie = LoginHelper.checkMobile(emailStr);
        var passdStr = $("#password").val();
        var isPassd = LoginHelper.checkPassword(passdStr);

        if (!isEmail && !isMoblie) {
            //提示账户名有问题
            return false;
        } else if (!isPassd) {

            //提示密码有问题
            return false;
        }
        else {
            return true;
        }
    },

    registerEvent: function () {

        //绑定账户失去焦点事件
        $("#email").blur(function () {
            var emailStr = $("#email").val();
            var isEmail = LoginHelper.checkEmail(emailStr);
            var isMoblie = LoginHelper.checkMobile(emailStr);

            //验证邮箱或手机
            if (!isEmail && !isMoblie) {

                //文本框抖动
                inputShake("email");

                console.log("请输入邮箱或手机!");

            } else if (isMoblie) {

                $(this).removeClass("required");
                //inputShake("email");
                console.log("输入为手机号！");

            } else {
                // alert("输入为邮箱！");
                $(this).removeClass("required");
            }


        });

        //绑定密码失去焦点事件
        $("#password").blur(function () {

            var passdStr = $("#password").val();
            var isPassd = LoginHelper.checkPassword(passdStr);
            if (!isPassd) {

                inputShake("password");
                // alert("密码中必须包含字母、数字、特称字符，至少8个字符，最多30个字符。");
            } else {
                $(this).removeClass("required");
            }
        });


        //登陆
        $("#loginSubmit").click(function () {

            var emailStr = $("#email").val();
            var passdStr = $("#password").val();

             var isValidate= LoginHelper.checkValidate();
            
             if (isValidate) {
                 //登陆验证
                 $.post("/login/LoginPoint", { emailStr: emailStr, passwdStr: passdStr }, function (data) {

                     var jsonObj = JSON.parse(data);

                     if (jsonObj.status == "ok") {

                         //  CommonHelper.setCookie(
                        //alert("登陆成功");

                         //跳转主页
                         window.location.href = "/home/index";

                     } else {
                         alert("登陆失败,用户名或密码不正确.");

                         //登陆失败
                     }
                 });


             }
             return false;
        });
    },

    //验证帐号是否合法
   // 验证规则：字母、数字、下划线组成，字母开头，4-16位。
    checkUser: function(str){
        var re = /^[a-zA-z]\w{3,15}$/;
        if (re.test(str)) {
            //alert("正确");
            return true;
        } else {
            return false;
        }
    },

    //验证手机号码
    //验证规则：11位数字，以1开头。
    checkMobile: function (str) {

        var re = /^1\d{10}$/
        if (re.test(str)) {
            return true;
        } else {
            return false;
        }
    },

// 验证邮箱
//验证规则：姑且把邮箱地址分成“第一部分@第二部分”这样
//第一部分：由字母、数字、下划线、短线“-”、点号“.”组成，
//第二部分：为一个域名，域名由字母、数字、短线“-”、域名后缀组成，
    //而域名后缀一般为.xxx或.xxx.xx，一区的域名后缀一般为2-4位，如cn,com,net，现在域名有的也会大于4位

    checkEmail: function (str) {
        var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
        if (re.test(str)) {
            return true;
        } else {
            return false;
        }
    },

    //验证密码
    checkPassword: function (str) {
        var re = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}/;
        if (re.test(str)) {
            return true;
        } else {
            return false;
        }
    }
}