using BLOWING.COM.BLLFACTORY;
using BLOWING.COM.IBLL;
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
            var emailStr = Request["emailStr"];
            var passwdStr = Request["passwdStr"];

            var resultObj= loginService.Login(emailStr, passwdStr);
            var  jsonObj=  JsonConvert.SerializeObject(resultObj);

            return Content(jsonObj);
        }

    }
}
