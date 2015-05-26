using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLOWING.COM.MODEL
{
   public  class UserInfo
    {

       private string _userID;

       private string _userName;

       private string _passwd;

       private int _age;

       private string _email;

       private string _mobile;

       /// <summary>
       /// 用户ID
       /// </summary>
       public string UserID
       {
           set { _userID = value; }
           get { return _userID; }
       }
       /// <summary>
       /// 用户名
       /// </summary>
       public string UserName
       {
           set { _userName = value; }
           get { return _userName; }
       }
       /// <summary>
       /// 年龄
       /// </summary>
       public int Age
       {
           set{_age=value;}
           get { return _age; }
       }
       /// <summary>
       /// 密码
       /// </summary>
       public string Passwd
       {
           set { _passwd = value; }
           get { return _passwd; }
       }
      /// <summary>
      /// 邮箱
      /// </summary>
       public string Email
       {
           set { _email = value; }
           get { return _email; }
       }
      /// <summary>
      /// 手机号
      /// </summary>
       public string Mobile
       {
           set { _mobile = value; }
           get { return _mobile; }

       }
    }
}
