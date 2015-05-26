using BLOWING.COM.MODEL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLOWING.COM.IBLL
{
   public interface ILoginService
    {

       /// <summary>
       /// 登陆
       /// </summary>
       /// <param name="user">账户</param>
       /// <param name="passwd">密码</param>
       /// <returns>登陆结果</returns>
       UserInfo Login(string user, string passwd);

    }
}
