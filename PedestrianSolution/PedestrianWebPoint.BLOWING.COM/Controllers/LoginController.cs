using BLOWING.COM.BLLFACTORY;
using BLOWING.COM.IBLL;
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
        /// <returns></returns>
        public ContentResult LoginPoint()
        {

            var emailStr = Request["emailStr"];
            var passwdStr = Request["passwdStr"];

            var resultStr= loginService.Login(emailStr, passwdStr);


            return Content("");
        }

    }
}
