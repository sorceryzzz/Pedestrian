using BLOWING.COM.BLL;
using BLOWING.COM.IBLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLOWING.COM.BLLFACTORY
{
   public static class LoginServiceFactory
    {

       public static ILoginService GetLoginServiceInstance()
       {
           return new LoginService();

       }

    }
}
