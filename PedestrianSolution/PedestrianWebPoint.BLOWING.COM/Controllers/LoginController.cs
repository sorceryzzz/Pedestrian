using BLOWING.COM.BLLFACTORY;
using BLOWING.COM.IBLL;
using BLOWING.COM.MODEL.Login;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PedestrianWebPoint.BLOWING.COM.Controllers
{
    public class LoginController : Controller
    {

        ILoginService loginService = LoginServiceFactory.GetLoginServiceInstance();

        //
        // GET: /Login/

        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// 登陆
        /// </summary>
        /// <returns>登陆结果</returns>
        public ContentResult LoginPoint()
        {
            var emailStr = Request["emailStr"] == null ? string.Empty : Request["emailStr"].ToString();
            var passwdStr =Request["passwdStr"] == null ? string.Empty : Request["passwdStr"].ToString();
            var isRemember =Request["yes"] == null ? string.Empty : Request["yes"].ToString();

            var userInfo= loginService.Login(emailStr, passwdStr);
            LoginInfo loginInfo = new LoginInfo();

            if (userInfo.UserName != null)
            {
                Session["loginUser"] = userInfo;
                loginInfo.status = "ok";
                loginInfo.userName = userInfo.UserName;
                if (isRemember.ToUpper()=="YES")
                {
                    loginInfo.pwd = userInfo.Passwd;
                }

            }
            else
            {
                loginInfo.status = "failed";
            }

            var jsonObj = JsonConvert.SerializeObject(loginInfo);

            return Content(jsonObj);
        }

    }
}
