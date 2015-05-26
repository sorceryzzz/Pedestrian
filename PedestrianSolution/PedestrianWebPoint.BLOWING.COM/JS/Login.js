var LoginHelper = {



    registerEvent: function () {

        //账户
        $("#email").blur(function () {
            var emailStr = $("#email").val();
            var isEmail=  LoginHelper.checkEmail(emailStr);
            var isMoblie = LoginHelper.checkMobile(emailStr);

            //验证邮箱或手机
            if (!isEmail && !isMoblie) {

                alert("请输入邮箱或手机!");


            } else if (isMoblie) {
                alert("输入为手机号！");

            } else {
                alert("输入为邮箱！");
            }
        });

        //密码
        $("#password").blur(function () {

            var passdStr = $("#password").val();
            var isPassd = LoginHelper.checkPassword(passdStr);
            if (!isPassd) {
                alert("密码中必须包含字母、数字、特称字符，至少8个字符，最多30个字符。");
            }
        });

        //登陆
        $("#loginSubmit").click(function () {

            var emailStr = $("#email").val();
            var passdStr = $("#password").val();

            $.post("/login/LoginPoint", { emailStr: emailStr, passwdStr: passdStr }, function (data) {

                alert(data);
            });

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