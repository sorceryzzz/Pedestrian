using BLOWING.COM.DAL.Admin;
using BLOWING.COM.IDAL.Admin;
using BLOWING.COM.MODEL.Excel;
using NPOI.HSSF.UserModel;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
  public  class ImportExcelHelper
    {

      /// <summary>
      /// 从excel中导入城市信息
      /// </summary>
      /// <param name="path">文件路径:</param>
      /// <returns>结果</returns>
      public string  ImportCity(string filePath)
      {
          HSSFWorkbook hssfworkbook = null;

          #region - 初始化信息 -
          try
          {
              using (FileStream file = new FileStream(filePath, FileMode.Open, FileAccess.Read))
              {
                  hssfworkbook = new HSSFWorkbook(file);
              }
          }
          catch (Exception e)
          {
              throw e;
          }
          #endregion

          NPOI.SS.UserModel.ISheet sheet = hssfworkbook.GetSheetAt(0);
          System.Collections.IEnumerator rows = sheet.GetRowEnumerator();

          IList<CityInfoBy12306> cityInfoBy12306List = new List<CityInfoBy12306>();

          while (rows.MoveNext())
          {
              HSSFRow row = (HSSFRow)rows.Current;


              CityInfoBy12306 cityInfoBy12306 = new CityInfoBy12306();

              cityInfoBy12306.CityCode =row.GetCell(0)==null?"": row.GetCell(0).ToString();
              cityInfoBy12306.CityName = row.GetCell(1) == null ? "" : row.GetCell(1).ToString();
              cityInfoBy12306.CityShortName = row.GetCell(2) == null ? "" : row.GetCell(2).ToString();
              cityInfoBy12306.SpellName = row.GetCell(3) == null ? "" : row.GetCell(3).ToString();
              cityInfoBy12306.SpellShortName = row.GetCell(4) == null ? "" : row.GetCell(4).ToString();
              //cityInfoBy12306.SpellShortName = row.GetCell(5).ToString();

              cityInfoBy12306List.Add(cityInfoBy12306);
          }
         bool resultBool= InsertCityInfoList(cityInfoBy12306List);

         return resultBool ? "sucess" : "fail";
      }

     /// <summary>
     /// 导入热门程序信息
     /// </summary>
     /// <param name="filePath">文件路径</param>
     /// <returns>执行结果</returns>
      public string ImportFavCity(string filePath)
      {

          HSSFWorkbook hssfworkbook = null;

          #region - 初始化信息 -
          try
          {
              using (FileStream file = new FileStream(filePath, FileMode.Open, FileAccess.Read))
              {
                  hssfworkbook = new HSSFWorkbook(file);
              }
          }
          catch (Exception e)
          {
              throw e;
          }
          #endregion

          NPOI.SS.UserModel.ISheet sheet = hssfworkbook.GetSheetAt(0);
          System.Collections.IEnumerator rows = sheet.GetRowEnumerator();

          IList<FavCityInfoBy12306> favCityInfoBy12306List = new List<FavCityInfoBy12306>();

          while (rows.MoveNext())
          {
              HSSFRow row = (HSSFRow)rows.Current;


              FavCityInfoBy12306 cityInfoBy12306 = new FavCityInfoBy12306();

              cityInfoBy12306.CityCode = row.GetCell(0) == null ? "" : row.GetCell(0).ToString();
              cityInfoBy12306.CityName = row.GetCell(1) == null ? "" : row.GetCell(1).ToString();
              cityInfoBy12306.CityShortName = row.GetCell(2) == null ? "" : row.GetCell(2).ToString();


              favCityInfoBy12306List.Add(cityInfoBy12306);
          }

          bool resultBool = InsertFavCityInfoList(favCityInfoBy12306List);

          return resultBool ? "sucess" : "fail";

      }

      /// <summary>
      /// 导入热门信息
      /// </summary>
      /// <param name="favCityInfoList"></param>
      /// <returns></returns>
      public bool InsertFavCityInfoList(IList<FavCityInfoBy12306> favCityInfoList)
      {

          ICityInfoBy12306Dal cityInfoDal = new CityInfoBy12306Dal();
          return cityInfoDal.InsertFavCityInfoBy12306list(favCityInfoList); 

      }

      /// <summary>
      /// 导入城市信息
      /// </summary>
      /// <param name="cityInfoList"></param>
      /// <returns></returns>
      public bool InsertCityInfoList(IList<CityInfoBy12306> cityInfoList)
      {

          ICityInfoBy12306Dal cityInfoDal = new CityInfoBy12306Dal();

          return cityInfoDal.InsertCityInfoBy12306List(cityInfoList); ;

      }

    }
}
