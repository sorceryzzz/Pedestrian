using BLOWING.COM.COMMON;
using BLOWING.COM.IDAL;
using BLOWING.COM.MODEL;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLOWING.COM.DAL
{
    public class LoginDal : ILoginDal
    {
      

        /// <summary>
        /// 登陆
        /// </summary>
        /// <param name="userName">账户</param>
        /// <param name="passwd">密码</param>
        /// <returns>登陆结果</returns>
        public UserInfo Login(string userName, string passwd)
        {

           
          #region  - sql 语句-
       string sqlStr = @"SELECT [UserID]
      ,[UserName]
      ,[Passwd]
      ,[Age]
      ,[Email]
      ,[Mobile]
      ,[Column_7]
      ,[Column_8]
      ,[Column_9]
  FROM [USER].[dbo].[User] as ur
  where (ur.Email=@Email and ur.Passwd=@Passwd) or (ur.Mobile='@Mobile' and ur.Passwd='@Passwd')";
	       #endregion

          #region - param-
       SqlParameter[] paras ={ 
         new SqlParameter("@Email",userName),
         new SqlParameter("@Mobile",userName),
         new SqlParameter("@Passwd",passwd)
       };

       #endregion

          #region - 返回结果 -
       SqlDataReader obj = null;
       UserInfo userInfo = new UserInfo();
       try
       {
           obj = SqlHelper.ExecuteDataReader(sqlStr, paras);

           if (obj.Read())
           {
               userInfo.UserID = (string)obj.GetValue(0);
               userInfo.UserName = (string)obj.GetValue(1);
               userInfo.Passwd = (string)obj.GetValue(2);
               userInfo.Age = int.Parse(obj.GetValue(3).ToString());
               userInfo.Email = (string)obj.GetValue(4);
               userInfo.Mobile = (string)obj.GetValue(5);
           
               
           }
         


       }
       catch (Exception ex)
       {


           throw;
       } 
       #endregion

       return userInfo;
        }
    }
}
