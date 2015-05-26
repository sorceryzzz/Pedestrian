using System;
using System.Text;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using BLOWING.COM.IBLL;
using BLOWING.COM.BLL;

namespace BLOWING.COM.BLLUNIT
{
    /// <summary>
    /// LoginServiceTest1 的摘要说明
    /// </summary>
    [TestClass]
    public class LoginServiceTest1
    {
        public LoginServiceTest1()
        {
            //
            //TODO: 在此处添加构造函数逻辑
            //
        }



        ILoginService loginService = new LoginService();

        [TestMethod]
        public void Login()
        {
            //测试数据
            var userName = "peter";
            var email = "peter@163.com";
            var passwd = "123456ww";


            var resultStr = loginService.Login(email, passwd);

            Assert.IsNotNull(resultStr);
        }
    }
}
