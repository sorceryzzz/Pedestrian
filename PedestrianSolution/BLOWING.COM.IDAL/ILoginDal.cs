using BLOWING.COM.MODEL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLOWING.COM.IDAL
{
    public interface ILoginDal
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="user"></param>
        /// <param name="passwd"></param>
        /// <returns></returns>
        UserInfo Login(string user, string passwd);

    }
}
