using BLOWING.COM.DAL;
using BLOWING.COM.IBLL;
using BLOWING.COM.IDAL;
using BLOWING.COM.MODEL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLOWING.COM.BLL
{
    public class LoginService : ILoginService
    {
        ILoginDal loginDal = new LoginDal();


        /// <summary>
        /// 登陆
        /// </summary>
        /// <param name="user">账户</param>
        /// <param name="passwd">密码</param>
        /// <returns>登陆结果</returns>
        public UserInfo Login(string user, string passwd)
        {

            return  loginDal.Login(user, passwd);

        }
    }
}
