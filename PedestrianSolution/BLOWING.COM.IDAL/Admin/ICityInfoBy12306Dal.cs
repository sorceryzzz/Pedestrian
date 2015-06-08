using BLOWING.COM.MODEL.Excel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLOWING.COM.IDAL.Admin
{
  public   interface ICityInfoBy12306Dal
    {

      /// <summary>
      /// 插入城市信息列表
      /// </summary>
      /// <param name="cityInfoList"></param>
      /// <returns></returns>
      bool InsertCityInfoBy12306List(IList<CityInfoBy12306> cityInfoList);


    }
}
